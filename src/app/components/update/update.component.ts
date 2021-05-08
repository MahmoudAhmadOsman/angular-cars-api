import { ProductService } from './../../services/product.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
 
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public title: string = "Update Record";
  public productDetails: any;
  //Add this in the update.component.html file
  updateProductForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService, private route: ActivatedRoute,) {

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

    this.updateProductForm = this.fb.group(formControls);

  }

  get name() {
    return this.updateProductForm.get("name");
  }
  get avatar() {
    return this.updateProductForm.get("avatar");
  }
  get description() {
    return this.updateProductForm.get("description");
  }

  get price() {
    return this.updateProductForm.get("price");
  }
  get quantity() {
    return this.updateProductForm.get("quantity");
  }




//Edit - Display values in edit form
  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    console.log(this.route.snapshot.params.id)

    this.productService.getProductById(id).subscribe((data) => {
      let product = data;
      console.log(product);
      this.updateProductForm.patchValue({
        name: product.name,
        // avatar: product.avatar,
        description: product.description,
        price: product.price,
        quantity: product.quantity

  
      })
  
    }, (err) => {
      console.log("Unable to display product", err)
})

 
  
  }

 






 


}
