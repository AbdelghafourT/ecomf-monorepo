import { usersRoutes } from './../../../../../../libs/users/src/lib/lib.routes';
import { UsersService } from './../../../../../../libs/shared/src/lib/services/users.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormControl, Validators } from '@angular/forms';
import { Users } from 'libs/shared/src/lib/models/users';
import { Router } from '@angular/router';
import { AvatarService } from 'libs/shared/src/lib/services/avatar.service';

@Component({
  selector: 'admin-postuser',
  templateUrl: './postuser.component.html',
  styleUrls: ['./postuser.component.css']
})
export class PostuserComponent implements OnInit{
  constructor(private usersService:UsersService,private router: Router, private avatarService: AvatarService){}
  user:Users[]=[];
  ngOnInit(): void {
    
  }



  userForm  = new FormGroup({
    name:new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(10),Validators.pattern('[a-zA-Z0-9 ]*')]),
    email :new  UntypedFormControl('',[Validators.required,Validators.email]),
    passeword:new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(15),Validators.pattern('[a-zA-Z0-9 ]*')]),
    address :new  UntypedFormControl('',[Validators.required,Validators.minLength(4),Validators.maxLength(30),Validators.pattern('[a-zA-Z0-9 ]*')]),
    // city:new  UntypedFormControl('',[Validators.minLength(4),Validators.maxLength(10)]),
    // country :new  UntypedFormControl('',[Validators.minLength(4),Validators.maxLength(10)]),
    // phone:new  UntypedFormControl(''),
    // age: new UntypedFormControl('',Validators.required),
  })
  // saveUser(){
  //   const user: Users = this.userForm.value;
  //   this.usersService.postUser(user).subscribe(() => {
  //     this.avatarService.getAvatarForUser(user._id ?? '').subscribe(avatar => {
  //       // save the avatar to the user object
  //       user.avatar = URL.createObjectURL(avatar);
  //       // update the user with the new avatar
  //       this.usersService.updateUser(user?._id ?? '',user).subscribe(() => {
  //         this.router.navigate(['/admin/users']);
  //       });
  //     });
  //   });
  // }
  
  saveUser(){
    this.usersService.postUser(this.userForm.value).subscribe(()=>{
     
        this.router.navigate(['/login']);
    
    })
  }
  // saveUser() {
  //   const avatarSubscription = this.avatarService.getRandomAvatar().subscribe((image: Blob) => {
  //     const urlCreator = window.URL || window.webkitURL;
  //     const avatarUrl = urlCreator.createObjectURL(image);
  //     const userData = { ...this.userForm.value, avatarUrl };
  //     this.usersService.postUser(userData).subscribe(() => {
  //       this.router.navigate(['/admin/users']);
  //       avatarSubscription.unsubscribe(); // Unsubscribe from the avatar subscription
  //     });
  //   });
  // }

// saveUser() {
//   const userId = uuidv4();
//   const avatarSubscription = this.avatarService.getAvatarForUser(userId).subscribe((image: Blob) => {
//     const urlCreator = window.URL || window.webkitURL;
//     const avatarUrl = urlCreator.createObjectURL(image);
//     const userData = { ...this.userForm.value, avatarUrl };
//     this.usersService.postUser(userData).subscribe(() => {
//       this.router.navigate(['/admin/users']);
//       avatarSubscription.unsubscribe();
//     });
//   });
// }

  
}

