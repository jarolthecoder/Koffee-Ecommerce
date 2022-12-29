import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/Products';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl: string = 'https://63adf9413e4651691668807c.mockapi.io/products/';
  productId: string = '';  // Product ID holder for Header Style change

  constructor(private http: HttpClient) {}

  // Get All Products
  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  // View Single product details
  viewProduct(productId: any): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}${productId}`);
  }
}
