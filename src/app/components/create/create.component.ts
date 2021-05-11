import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  public createTitle: string = "Add New Vehicle";

  //Add this in the create.component.html file
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private productService: ProductService, private toastr: ToastrService) {

    let formControls = {
      name: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
      ]),
      avatar: new FormControl("", [
        Validators.required,

      ]),
      model: new FormControl("", [
        Validators.required,

      ]), make: new FormControl("", [
        Validators.required,

      ]), year: new FormControl("", [
        Validators.required,

      ]), mileage: new FormControl("", [
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

    // console.log("Create form Items: ", this.productForm.value);
    this.productForm = this.fb.group(formControls);

  }

  get name() {
    return this.productForm.get("name");
  }
  get avatar() {
    return this.productForm.get("avatar");
  }
  get model() {
    return this.productForm.get("model");
  }
  get make() {
    return this.productForm.get("make");
  }
  get year() {
    return this.productForm.get("year");
  }
  get mileage() {
    return this.productForm.get("mileage");
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

  }


  //On form submit
  submitForm() {

    this.productService.createNewProduct(this.productForm.value).subscribe((data) => {
      console.log(data);

      this.toastr.success('New Record has been created!');

      setTimeout(() => {
        window.location.href = "/";
        // this.router.navigate(['/'])
      }, 2000);


    }, (error) => {
      console.log('status code -> ' + error.status);

      this.toastr.error('Unable to create new record!');
    })

  }



}
