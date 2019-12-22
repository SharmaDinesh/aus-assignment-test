import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  public currentUser: any;
  public activeId: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }

  goToProfile(id) {
    if(this.currentUser.role === 'Admin') {
      this.activeId = id
      this.router.navigate(['role/' + this.currentUser.role + '/profile']); 
    }else {
      this.activeId = id
      this.router.navigate(['role/'+ this.currentUser.role + '/profile']);
    } 
    
  }

  goToHome(id) {
    if(this.currentUser.role === 'Admin') {
      this.activeId = id
      this.router.navigate(['role/admin']); 
    }else {
      this.activeId = id
      this.router.navigate(['role/user']);
    } 
  }

}
