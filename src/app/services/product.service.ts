import { Product } from './../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // updateUser(user: Product) {
  //   throw new Error('Method not implemented.');
  // }

  // private baseUrl = "http://localhost:5000";
  // https://custom-states-api.herokuapp.com
  private baseUrl = "https://custom-states-api.herokuapp.com";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }


  //Get all Products from
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + '/cars/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //Create new product
  createNewProduct(product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl + '/cars/', JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )

  }

  //Last -best
  getProductById(id: number): Observable<Product> {
    return this.httpClient.get<Product>(this.baseUrl + '/cars/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  //Update Product
  updateProduct(id, product): Observable<Product> {
    return this.httpClient.put<Product>(this.baseUrl + '/cars/' + id, JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  //Delete Product
  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete<Product>(this.baseUrl + '/cars/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //Error Handler
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
