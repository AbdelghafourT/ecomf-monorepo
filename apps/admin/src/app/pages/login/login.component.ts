import { Router } from '@angular/router';
import { UsersService } from './../../../../../../libs/shared/src/lib/services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(private usersService:UsersService,private router:Router){}

  ngOnInit(): void {
    
  }
  loginForm  = new FormGroup({
    email :new  UntypedFormControl('',[Validators.required,Validators.email]),
    passeword:new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(15),Validators.pattern('[a-zA-Z0-9 ]*')]),
  })

  singIn(){
    this.usersService.loginUser(this.loginForm.value).subscribe((res)=>{
      this.router.navigate(['/admin/product']);
    })
  }
}
