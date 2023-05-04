import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product, ResOneProduct, ResProduct } from '../models/product';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl:string = 'http://localhost:4000/api/v1/products'
  constructor(private http:HttpClient) { }

  getAllProducts():Observable<ResProduct>{
    return this.http.get<ResProduct>(this.apiUrl)
  }
  addProduct(data:any):Observable<Product> {
    return this.http.post<Product>(this.apiUrl,data)
  }
  getProduct(id:string):Observable<ResOneProduct> {
    return this.http.get<ResOneProduct>(`${this.apiUrl}/${id}`)
  }
  deleteProduct(id:string):Observable<ResProduct>{
    return this.http.delete<ResProduct>(`${this.apiUrl}/${id}`)
  }
    editProduct(id:string|undefined,data:any):Observable<ResOneProduct>{
      return this.http.put<ResOneProduct>(`${this.apiUrl}/${id}`,data)
    }
}
