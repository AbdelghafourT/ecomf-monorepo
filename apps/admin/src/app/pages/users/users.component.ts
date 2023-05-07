import { AvatarService } from './../../../../../../libs/shared/src/lib/services/avatar.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../../../../../../libs/shared/src/lib/services/users.service';
import { Component, OnInit } from '@angular/core';
import { ResUsers, Users } from 'libs/shared/src/lib/models/users';
import Swal from 'sweetalert2';

@Component({
  selector: 'admin-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  constructor(private usersService:UsersService,private route: ActivatedRoute,private avatarService: AvatarService){}
  userss:Users[]=[];
  avatarUrl='';

  ngOnInit(): void {
    this.getUsres();
    this.addAvatar();
    
  }
  getUsres(){
    this.usersService.getAllUsers().subscribe(({success,user}:ResUsers)=> {
      if(success){
        this.userss = user
      }
    })
  }
   addAvatar(){
    this.avatarService.getRandomAvatar().subscribe((image: Blob) => {
      const urlCreator = window.URL || window.webkitURL;
      this.avatarUrl = urlCreator.createObjectURL(image);
    }); 
   }
   destroyUser(id:string){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usersService.deleteUser(id).subscribe((res)=> {
          this.userss = res.user
          this.getUsres()
        })
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
}
