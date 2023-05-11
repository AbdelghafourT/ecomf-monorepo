import { Router } from '@angular/router';
import { StorageService } from './../../services/storage.service';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { AuthResponse } from '@brightcoding/users';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'users-singin',
  templateUrl: './singin.component.html',
  styleUrls: ['./singin.component.css']
})
export class SinginComponent {
  authError = false;
  messageError = "Error in from the server,please try again"
  loginForm = new FormGroup({
    email:new UntypedFormControl('',Validators.required),
    passeword:new UntypedFormControl('',Validators.required)
  })
constructor(private authService:AuthService,private storageService:StorageService,private router:Router){}

singin(email:string,passeword:string){
  this.authService.login(email,passeword).subscribe({
    //next: res => console.log(res),
    //error:err => console.log(err)
    next: (res:AuthResponse) =>{
      this.storageService.setToken(res.token)
      this.router.navigate(['/admin'])
      this.authError = false
      this.loginForm.reset()
    },
    error:(err:HttpErrorResponse) =>{
      this.authError = true;
      if(err.status === 400){
        this.messageError = err.error.message
      }
    }
  })
}
submit(){
  if(this.loginForm.invalid){
    return 
  }
  this.singin(this.form.email.value,this.form.passeword.value)
  //console.log(this.loginForm)
}
get form(){
  return this.loginForm.controls;
}
}
