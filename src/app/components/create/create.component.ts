import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators   } from '@angular/forms';
 


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {


  //Show Success alert on deleted record
  showSuccessdAlert: boolean = false;

  
  //Add this in the create.component.html file
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService) {

    let formControls = {
      name: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      avatar: new FormControl("", [
        Validators.required,
       
      ]),
      description: new FormControl("", [
        Validators.required,

      ]),
      price: new FormControl("", [
        Validators.required,

      ]),
      quantity: new FormControl("", [
        Validators.required,

      ]),
    }

    this.productForm = this.fb.group(formControls);

  }
  
  get name() {
    return this.productForm.get("name");
  }
  get description() {
    return this.productForm.get("description");
  }

  get price() {
    return this.productForm.get("price");
  }
  get quantity() {
    return this.productForm.get("quantity");
  }

  ngOnInit(): void {
    // this.productForm = this.fb.group({
    //   name: new FormControl("", [
    //     Validators.required,
    //     Validators.pattern("[A-Za-z .'-]+"),
    //     Validators.minLength(20)
    //   ]),
    //   avatar: new FormControl(""),
    //   description: new FormControl(""),
    //   price: new FormControl(""),
    //   quantity: new FormControl(""),



    // })
     
    // console.log("Form ITEMS: ", this.productForm.value);
  }

 
  //On form submit
  submitForm() {

    this.productService.create(this.productForm.value).subscribe((data) => {
      console.log('Success!');
      this.showSuccessdAlert = true;
      this.hideSuccessAlert();
      
    })

  }

//Show Success when a new record is created
  hideSuccessAlert() {
    setTimeout(() => {
      this.showSuccessdAlert = false;
      this.router.navigate(['/']);
    }, 2000);
  }






}
