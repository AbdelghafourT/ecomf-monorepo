import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResOneUsers, ResUsers, Users } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl:string = 'http://localhost:4000/api/v1/users'
  apiUrlRegister = 'http://localhost:4000/api/v1/users/register'
  apuUrlLogin = 'http://localhost:4000/api/v1/users/login'
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<ResUsers>{
    return this.http.get<ResUsers>(this.apiUrl)
  }
  postUser(data:Users):Observable<Users>{ 
    return this.http.post<Users>(this.apiUrlRegister,data);
  }
  deleteUser(id:string):Observable<ResUsers>{
    return this.http.delete<ResUsers>(`${this.apiUrl}/${id}`)
  }
  loginUser(data: Users): Observable<Users>{
    return this.http.post<Users>(this.apuUrlLogin,data)
  }
  // updateUser(user: Users): Observable<Users> {
  //   const url = `${this.apiUrl}/${user.id}`;
  //   return this.http.put<Users>(url, user);
  // }
  // updateUser(id:string|undefined,data:any):Observable<ResOneUsers>{
  //   return this.http.put<ResOneUsers>(`${this.apiUrl}/${id}`,data)
  // }
}
