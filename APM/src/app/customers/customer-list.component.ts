import { Component } from '@angular/core';
import { ICustomer } from './customer';

@Component({
    selector: 'comp-customers',
    templateUrl: './customer-list.component.html',
    styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {
    pageTitle: string = "CustList";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    constructor() {
        this.filteredCustomers = this.customers;
        this.listFilter = 'rrr';
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
    customers: ICustomer[] = [
        {
            Name: "Işıl", 
            ImageUrl: "assets/images/saw.png",
            BirthDate: "01.21.2011",
            Height: 1.2
            
        },
        {
            Name: "Mert",
            ImageUrl: "assets/images/garden_cart.png",
            BirthDate: "11.02.2017",
            Height: 0.8826
        },
        {
            Name: "Erbil", 
            ImageUrl: "assets/images/xbox-controller.png",
            BirthDate: "05.18.1979",
            Height: 1.7
        },
        {
            Name: "Mesut",
            ImageUrl: "assets/images/hammer.png",
            BirthDate: "04.24.1983",
            Height: 1.82
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}