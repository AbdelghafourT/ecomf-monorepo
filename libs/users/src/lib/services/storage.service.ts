import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthResponse } from '../models/authResponse';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  //JSON.stringify(data)
  private readonly APP_TOKEN = 'app_token';
  // this Section for email
  private readonly Email = "email";
   //Observable user object (replace any with your user class/interface)
     private _userObject = new BehaviorSubject<any>({Email: this.Email});
  // Expose an observable that can be used by components
    userObject$ = this._userObject.asObservable();
  //emailSubject : BehaviorSubject<string> = new BehaviorSubject<string>('')  
  // end Section email

    tokenSubject$ = new BehaviorSubject<string | null>(this.getToken());

     setToken(data: string) {
       this.tokenSubject$.next(data);
      localStorage.setItem(this.APP_TOKEN,data);
     }
    getToken() {
      //return this.tokenSubject$.getValue();
      return localStorage.getItem(this.APP_TOKEN);
    }
    removeToken() {
      // return this.tokenSubject$.next(null);
      this.tokenSubject$.next(null);
    }
    expiredToken(expiration:number):boolean{
      return Math.floor(new Date().getTime() / 1000) >= expiration;
     }

/// ORIGINALE CODE 
//  setToken(data: string){
//   localStorage.setItem(this.APP_TOKEN,data);
//  }
//  getToken(){
//   return localStorage.getItem(this.APP_TOKEN);
//  }
//  removeToken(){
//   localStorage.removeItem(this.APP_TOKEN);
//  }

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





// for sending the current user to sidebar 

//  user = new BehaviorSubject<string | null>(null);
//  setUser(name: string | null){
//  this.user.next(name)
// }

// getPayload(){
//   const token  = this.getToken();
//   if(token && token.split('.').length === 3){
//     const payload = token.split('.')[1]
//     const data = JSON.parse(atob(payload))
//     this.setUser(data.name)
//     return data
//   }
//   return null
//  }

}
