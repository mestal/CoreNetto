import { Component, OnInit } from '@angular/core';
import { ICustomer } from './customer';
import { CustomerService } from './customer.service';

@Component({
    selector: 'comp-customers',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
    pageTitle: string = "CustList";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    constructor(private customerService: CustomerService) {
        this.listFilter = '';
    }
    
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredCustomers = this.listFilter ? this.performFilter(this.listFilter) : this.customers;
    }

    performFilter(filterBy: string): ICustomer[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.customers.filter((customer: ICustomer) => 
            customer.Name.toLocaleLowerCase().indexOf(filterBy) !== -1
        );
    }

    filteredCustomers: ICustomer[];
    customers: ICustomer[];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    ratingClicked(message: string): void {
        console.log(message);
    }

    ngOnInit(): void {
        console.log("OnInit calleddd");
        this.customers = this.customerService.getCustomers();
        this.filteredCustomers = this.customers;
    }
}