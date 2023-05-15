import { StorageService } from './../services/storage.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationExtras, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private storageService:StorageService,private router:Router){}
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token:string | null = this.storageService.getToken();
    //const tokenString: string = token !== null ? token : '';


    if(!token){
      this.router.navigate(['/singin'])
      return false
    }
    
    if(token.split('.').length == 3){
      // const payload = token.split('.')[1]
      // const decodePayload = JSON.parse(atob(payload));
      // return decodePayload.isAdmin && this.storageService.expiredToken()
      // console.log(isAdmin)
      // methode 2
      const payload = token.split('.')[1]
      const {isAdmin,exp,email} = JSON.parse(atob(payload));
      this.storageService.setEmail(email); 
      return isAdmin && !this.storageService.expiredToken(exp)      
    }
    else{
      this.router.navigate(['/singin'])
      return false
    }
    return true;
  }
  
}
