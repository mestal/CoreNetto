import { Component, OnInit } from '@angular/core';
import { ICustomer } from './customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './customer.service';

@Component({
  //selector: 'pm-customer-detail', //Only needed for using as nested components
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
  pageTitle: string = 'Customer Detail';
  customer: ICustomer;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private customerService: CustomerService,
              private router: Router) { 

    }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    var sub = this.customerService.getCustomer(id).subscribe({
          next: customer => {
              this.customer = customer;
          },
          error: err => this.errorMessage = err
      }
    );
  }

  onBack(): void {
    this.router.navigate(['./customers']);
  }

}
