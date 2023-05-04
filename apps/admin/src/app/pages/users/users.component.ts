import { AvatarService } from './../../../../../../libs/shared/src/lib/services/avatar.service';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from './../../../../../../libs/shared/src/lib/services/users.service';
import { Component, OnInit } from '@angular/core';
import { ResUsers, Users } from 'libs/shared/src/lib/models/users';

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
}
