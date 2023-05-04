import { Component } from '@angular/core';

@Component({
  selector: 'brightcoding-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  isOpen: boolean = false;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
