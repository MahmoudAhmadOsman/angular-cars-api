import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //Confirm record deletion popup
  popoverTitle = 'DELETING THIS RECORD?';
  popoverMessage = 'Are you sure you want to delete this record?';
  confirmClicked = false;
  cancelClicked = false;

  public title: string = "Vehicle Inventory";

  //Search filter
  search: any;

  products: Product[];

  //Display loading spinner
  public loading = true;

  constructor(private productService: ProductService, private router: Router, private toastr: ToastrService) {

    productService.getAll().subscribe((data) => {
      console.log("Products list", data);

      this.products = data;
      this.loading = false;

    }, (error) => {
      console.log("An error occurred: ", error)
      // this.toastr.error("An error occurred while fetching data", error.message);
      this.toastr.error("An error occurred while fetching data");
      this.loading = true;
    })

  }

  ngOnInit(): void {

  }


  // Update Record
  UpdateProduct(id: number) {
    this.router.navigate(['/update', id]);
  }

  //Delete method
  deleteProduct(id: number) {
    // confirm("Are you sure, you want to delete this record?");

    this.productService.deleteProduct(id).subscribe((data) => {

      this.toastr.error('Record has been deleted!');
      setTimeout(() => {
        window.location.href = "/";
        // this.router.navigate(['/'])
      }, 2000);


    }, (err) => {
      console.log("error occurred when deleting product", err.status);
      this.toastr.error("Sorry, you're not authorized to delete this record!");
    })

  }








}
