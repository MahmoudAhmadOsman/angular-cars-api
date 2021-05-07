import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


   products: Product[];


  constructor(private productService: ProductService, private router: Router) {

    productService.getAll().subscribe((data) => {
      console.log("List of all products", data);

      this.products = data;

    }, (error) => {
      console.log("An error occurred while fetching data: ", error)
    })

  }




//Delete method
  deleteProduct(id: number) {
    confirm("Are you sure, you want to delete this record?");
    this.productService.deleteProduct(id).subscribe((data) => {
      console.log("Product with ID number is deleted", id);
      this.products = data;
      this.router.navigate(['/']);

    }, (err) => {
      console.log("error occurred when deleting product", err);
    })

  }



  ngOnInit(): void { }

 

}
