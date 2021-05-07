import { Product } from './../models/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:5000";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }



  //Get all Products from
  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + '/products/')
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //Create new product
  create(product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl + '/products/', JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )

  }


  //Get product by id

  getById(id): Observable<Product> {
    return this.httpClient.get<Product>(this.baseUrl + '/products/' + id)
      .pipe(
        catchError(this.errorHandler)
      )
  }


  //Update Product
  update(id, product): Observable<Product> {
    return this.httpClient.put<Product>(this.baseUrl + '/products/' + id, JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      )
  }

  //Delete Product
  deleteProduct(id: number): Observable<any> {
    return this.httpClient.delete<Product>(this.baseUrl + '/products/' + id, this.httpOptions)
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
