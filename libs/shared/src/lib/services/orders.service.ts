import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders, ResOneOrders, ResOrders } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  apiUrl:string = 'http://localhost:4000/api/v1/orders'
  constructor(private http:HttpClient) { }

  getOrders():Observable<ResOrders>{
    return this.http.get<ResOrders>(this.apiUrl)
  }
  
  patchOrdersStatus(id: string | undefined, data: Orders):Observable<ResOneOrders> {  // <-- include data object as argument
    return this.http.put<ResOneOrders>(`${this.apiUrl}/${id}`,data);  // <-- pass data object to patch method
  }
}
