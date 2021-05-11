import { ProductService } from 'src/app/services/product.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { error } from '@angular/compiler/src/util';


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

  constructor(private fb: FormBuilder, private router: Router,
    private productService: ProductService,
    private route: ActivatedRoute,
    private toastr: ToastrService) {

    let formControls = {
      name: new FormControl("", [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2)
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
  get model() {
    return this.updateProductForm.get("model");
  }
  get make() {
    return this.updateProductForm.get("make");
  }
  get year() {
    return this.updateProductForm.get("year");
  }
  get mileage() {
    return this.updateProductForm.get("mileage");
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




  //Edit Product- Display values in edit form
  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    // console.log(this.route.snapshot.params.id)

    this.productService.getProductById(id).subscribe((data) => {
      let product = data;
      console.log(product);
      this.updateProductForm.patchValue({
        name: product.name,
        // avatar: product.avatar,
        model: product.model,
        make: product.make,
        year: product.year,
        mileage: product.mileage,
        description: product.description,
        price: product.price,
        quantity: product.quantity


      })

    }, (err) => {
      console.log("Unable to display product", err)
    })

  }

  updateProduct() {
    let data = this.updateProductForm.value;
    let id = this.route.snapshot.params.id;
    //let product = new Product(data.name, data.avatar, data.description, data.price, data.quantity, id);
    let product = new Product();

    this.productService.updateProduct(id).subscribe(
      res => {
        this.toastr.success("Updated record successfully!");
        this.router.navigate(['/']);
      },
      err => {
        console.log(err);
        this.toastr.error("Sorry, Unable to update this product");
      }
    )

  }









}
