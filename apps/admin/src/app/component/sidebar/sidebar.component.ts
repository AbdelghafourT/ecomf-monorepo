import { StorageService } from './../../../../../../libs/users/src/lib/services/storage.service';
import { AuthService } from './../../../../../../libs/users/src/lib/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  email:string | null = ''
  //user:string | null = null
  currentUser:any
constructor(private route : ActivatedRoute,public router:Router,private authService:AuthService,private storageService:StorageService){}
 
  ngOnInit(): void {
   this.storageService.userObject$.subscribe((email:string)=>{this.email = email});  
   //this.email = this.storageService.getEmail() || ''
   //this.storageService.user.subscribe((res:string | null) => this.user = res);
  }

logout() {
  this.storageService.removeToken();
  this.storageService.removeEmail(); 
  this.router.navigate(['/singin']);
}

}
