import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-and-customer',
  templateUrl: './business-and-customer.component.html',
  styleUrls: ['./business-and-customer.component.scss'],
})
export class BusinessAndCustomerComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  selectBusiness(role: any) {
    const accessRole = role;
    this.router.navigate(['/signup', accessRole]);

  }
  selectCustomer(role: any) {
    const accessRole = role;
    this.router.navigate(['/signup', accessRole]);

  }

}
