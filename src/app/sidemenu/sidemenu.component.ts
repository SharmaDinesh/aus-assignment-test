import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss'],
})
export class SidemenuComponent implements OnInit {
  public currentUser: any
  public currentUrl: any;
  public menuValue: any
  constructor(private router: Router) { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))
    console.log('currentUser', this.currentUser.role);
    console.log('currentUrl', this.router.url);
    this.stateUrlAccess();
    if(this.currentUser.role === 'Admin') {
      this.router.navigate(['role/admin']);
      this.currentUrl = this.router.url
      // this.stateUrlAccess();
      this.menuValue = [{
        menu1: 'Profile',
        menu2: 'Dashboard'
      }]
      console.log('this.menuValue', this.menuValue);
    }else {
      this.router.navigate(['role/user']);
      this.currentUrl = this.router.url
      // this.stateUrlAccess();
      this.menuValue = [{
        menu1: 'Availability',
        menu2: 'Job History'
      }]
    } 
  }

  stateUrlAccess() {
    this.router.events.subscribe((url:any) => {
      if(url.url === undefined) {
        this.currentUrl = this.router.url;
        console
      }else {
        this.currentUrl = url.url;
      }
    }); 
  }

}
