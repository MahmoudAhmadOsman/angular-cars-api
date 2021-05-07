import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
 


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {


  //Show Success alert on deleted record
  showSuccessdAlert: boolean = false;

  
  productForm: FormGroup;

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: [''],
      avatar: [''],
      description: [''],
      price: [''],
      quantity: [''],
    })
    //console.log(this.productForm)
    console.log("Form ITEMS: ", this.productForm.value);
  }

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService) { }

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
