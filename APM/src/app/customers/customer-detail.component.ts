import { Component, OnInit } from '@angular/core';
import { ICustomer } from './customer';

@Component({
  //selector: 'pm-customer-detail', //Only needed for using as nested components
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  pageTitle: string = 'Customer Detail';
  customer: ICustomer;

  constructor() { }

  ngOnInit() {
  }

}
