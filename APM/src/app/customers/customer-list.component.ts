import { Component } from '@angular/core';

@Component({
    selector: 'comp-customers',
    templateUrl: './customer-list.component.html'
})
export class CustomerListComponent {
    pageTitle: string = "CustList";
    customers: any[] = [
        {
            Name: "Işıl", 
        },
        {
            Name: "Mert"
        },
        {
            Name: "Erbil"
        },
        {
            Name: "Mesut"
        }
    ];
}