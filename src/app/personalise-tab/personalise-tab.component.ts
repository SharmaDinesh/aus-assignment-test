import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalise-tab',
  templateUrl: './personalise-tab.component.html',
  styleUrls: ['./personalise-tab.component.scss'],
})
export class PersonaliseTabComponent implements OnInit {
  public currentUser: any;
  public activeId: any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
  }

  goToProfile(id: any) {
    if(this.currentUser.role === 'Admin') {
      this.activeId = id
      this.router.navigate(['role/' + this.currentUser.role + '/profile']); 
    }else {
      this.activeId = id
      this.router.navigate(['role/'+ this.currentUser.role + '/profile']);
    } 
    
  }

  goToHome(id: any) {
    if(this.currentUser.role === 'Admin') {
      this.activeId = id
      this.router.navigate(['role/admin']); 
    }else {
      this.activeId = id
      this.router.navigate(['role/user']);
    } 
  }

}
