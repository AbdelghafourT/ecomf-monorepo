import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders, ResOneOrders, ResOrders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiUrl:string = 'http://localhost:4000/api/v1/orders'
  apiUrl2:string = 'http://localhost:4000/api/v1/orders/cancel-order'
  constructor(private http:HttpClient) { }

  getOrders():Observable<ResOrders>{
    return this.http.get<ResOrders>(this.apiUrl);
  }
  
  patchOrders(id: string | undefined, data: Orders):Observable<ResOneOrders> {  // <-- include data object as argument
    return this.http.put<ResOneOrders>(`${this.apiUrl}/${id}`,data);  // <-- pass data object to patch method
  }
  cancelOrders(id: string | undefined, data: Orders):Observable<ResOneOrders> {  
    return this.http.put<ResOneOrders>(`${this.apiUrl2}/${id}`,data);  
  }
  addOrder(data:Orders):Observable<Orders>{
    return this.http.post<Orders>(this.apiUrl,data);
  }
  deleteOrder(id:string):Observable<ResOrders>{
    return this.http.delete<ResOrders>(`${this.apiUrl}/${id}`)
  }
}
