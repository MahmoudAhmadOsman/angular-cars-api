import { Router } from '@angular/router';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
 


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

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
      console.log('New Product has been created!');
      this.router.navigate(['/']);
    })




  }

}
