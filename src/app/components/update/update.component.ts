import { ProductService } from './../../services/product.service';
 
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
 

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  public title: string = "Update Record";

  id: number;
   products: Product = new Product();

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id).subscribe(data => {
      this.products = data;

    }, errror => console.log("Unable to get product by id ", errror))

  }


  

  onSubmit() {
    this.productService.updateProduct(this.id, this.products).subscribe(data => {
      
      this.router.navigate(["/"]);

    }, error => console.log("Error while updating! ", error));

  }

























}
