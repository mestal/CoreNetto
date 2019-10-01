import { Injectable } from '@angular/core';
import { ICustomer } from './customer';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {

    getCustomers(): ICustomer[] {
        return [
            {
                Name: "Işıl", 
                ImageUrl: "assets/images/saw.png",
                BirthDate: "05.07.2005",
                Height: 1.2,
                Rating: 5
            },
            {
                Name: "Mert",
                ImageUrl: "assets/images/garden_cart.png",
                BirthDate: "11.02.2000",
                Height: 0.8826,
                Rating: 5
            },
            {
                Name: "Erbil", 
                ImageUrl: "assets/images/xbox-controller.png",
                BirthDate: "01.18.1990",
                Height: 1.7,
                Rating: 5
            },
            {
                Name: "Mesut",
                ImageUrl: "assets/images/hammer.png",
                BirthDate: "11.15.1986",
                Height: 1.82,
                Rating: 3.5
            }
        ];
    }
}