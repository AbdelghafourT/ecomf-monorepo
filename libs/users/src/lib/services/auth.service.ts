import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../models/authResponse';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  
  private readonly authUrl = "http://localhost:4000/api/v1/users"
  login(email:string, passeword:string):Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.authUrl}/login`,{email,passeword})
  }
  

}
