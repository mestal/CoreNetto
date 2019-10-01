import { Component } from '@angular/core';

@Component({
    selector: 'comp-customers',
    templateUrl: './customer-list.component.html'
})
export class CustomerListComponent {
    pageTitle: string = "CustList";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    customers: any[] = [
        {
            Name: "Işıl", 
            ImageUrl: "assets/images/saw.png"
            
        },
        {
            Name: "Mert",
            ImageUrl: "assets/images/garden_cart.png"
        },
        {
            Name: "Erbil", 
            ImageUrl: "assets/images/xbox-controller.png"
        },
        {
            Name: "Mesut",
            ImageUrl: "assets/images/hammer.png"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}