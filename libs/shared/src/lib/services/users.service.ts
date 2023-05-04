import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResUsers } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl:string = 'http://localhost:4000/api/v1/users'
  constructor(private http:HttpClient) { }

  getAllUsers():Observable<ResUsers>{
    return this.http.get<ResUsers>(this.apiUrl)
  }
}
