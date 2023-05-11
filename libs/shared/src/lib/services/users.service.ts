import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { ResOneUsers, ResUsers, Users } from '../models/users';
import { MD5 } from 'crypto-js';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl:string = 'http://localhost:4000/api/v1/users'
  apiUrlRegister = 'http://localhost:4000/api/v1/users/register'
  apuUrlLogin = 'http://localhost:4000/api/v1/users/login'
  robohashUrl = 'https://robohash.org';    

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
   
  getAvatar(email: string): Observable<any> {
    const gravatarHash = MD5(email.trim().toLowerCase()).toString();
    const avatarUrl = `${this.robohashUrl}/${gravatarHash}.png`;

    return from(axios.get(avatarUrl, { responseType: 'blob' }));
  }
  assignAvatarsToUsers(users: Users[]): void {
    for (const user of users) {
      const email = user.email ? user.email : 'No email provided';
      const gravatarHash = MD5(email.trim().toLowerCase()).toString();
      const avatarUrl = `${this.robohashUrl}/${gravatarHash}.png`;
      user.avatar = avatarUrl;
    }
  }

  makeUserAdmin(id:string|undefined,data:any):Observable<ResOneUsers>{
    return this.http.patch<ResOneUsers>(`${this.apiUrl}/${id}`,data)
  }

}
