import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public productDetails: any;
  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.showUserDetails();
  }

  showUserDetails() {
    console.log("Product Details: ", this.route.snapshot.params['id']);
    const id = this.route.snapshot.params['id'];
    this.productService.getProductById(id).subscribe((data) => {
      this.productDetails = data;
    }, (err) => {
      console.log("Product Details error: ", err);
    })
    
  }



}
