import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
constructor(public router:Router){}
}
