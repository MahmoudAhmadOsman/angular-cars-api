import { ProductService } from './../../services/product.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
  //id: number;
  // products: Product = new Product();

   constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }


  updateUserForm = new FormGroup({
    name: new FormControl(''),
    avatar: new FormControl(''),
    description: new FormControl(''),
    price: new FormControl(''),
    quantity: new FormControl(''),

  })


 
 
  ngOnInit(): void {
    this.updateProductFunc();
}

  updateProductFunc() {
   let id = this.route.snapshot.params['id'];
    this.productService.getCurrentData(id).subscribe(data => {
     console.log("Update product id: ", this.route.snapshot.params.id);
      
      this.updateUserForm = new FormGroup({
        name: new FormControl(data['name']),
        avatar: new FormControl(data['avatar']),
        description: new FormControl(data['description']),
        price: new FormControl(data['price']),
        quantity: new FormControl(data['quantity']),

      })
    }, (err) => {
      console.log("Cannot update record",err);
    })
}


  // ngOnInit(): void {

  //   this.id = this.route.snapshot.params['id'];
  //   this.productService.getProductById(this.id).subscribe(data => {
  //     this.products = data;

  //   }, errror => console.log("Unable to get product by id ", errror))

  // }


  

  // onSubmit() {
  //   this.productService.updateProduct(this.id, this.products).subscribe(data => {
      
  //     this.router.navigate(["/"]);

  //   }, error => console.log("Error while updating! ", error));

  //  }

























}
