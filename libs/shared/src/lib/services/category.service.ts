import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, ResCategory, ResOneCategory } from './../models/category'

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl:string = 'http://localhost:4000/api/v1/category'
  constructor(private http:HttpClient) { }

  getAllCategorys():Observable<ResCategory> {
    return this.http.get<ResCategory>(this.apiUrl)
  }
  getCategory(id:string):Observable<ResOneCategory> {
    return this.http.get<ResOneCategory>(`${this.apiUrl}/${id}`)
  }
  addCategorys(data:Category):Observable<Category> {
    return this.http.post<Category>(this.apiUrl,data)
  }
  deleteCategory(id:string):Observable<ResCategory>{
    return this.http.delete<ResCategory>(`${this.apiUrl}/${id}`)
  }
  editCtagory(id:string|undefined,data:Category):Observable<ResOneCategory>{
    return this.http.put<ResOneCategory>(`${this.apiUrl}/${id}`,data)
  }
}
