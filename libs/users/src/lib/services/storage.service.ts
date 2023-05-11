import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthResponse } from '../models/authResponse';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  //JSON.stringify(data)
  private readonly APP_TOKEN = 'app_token';  
  private readonly Email = "email";
  // Observable user object (replace any with your user class/interface)
   private _userObject = new BehaviorSubject<any>({Email: this.Email});

  // Expose an observable that can be used by components
   userObject$ = this._userObject.asObservable();
   //emailSubject : BehaviorSubject<string> = new BehaviorSubject<string>('')
  

 

 setToken(data: string){
  localStorage.setItem(this.APP_TOKEN, data);
 }
 getToken(){
  return localStorage.getItem(this.APP_TOKEN);
 }
 removeToken(){
  localStorage.removeItem(this.APP_TOKEN);
 }
 expiredToken(expiration:number):boolean{
  return Math.floor(new Date().getTime() / 1000) >= expiration;
 }
//  ---
setEmail(data: string){
  localStorage.setItem(this.Email, data);
  this._userObject.next(data)
 }
 getEmail(){
  return localStorage.getItem(this.Email);
 }
 removeEmail(){
  localStorage.removeItem(this.Email);
  this._userObject.next('')
 }
 
}
