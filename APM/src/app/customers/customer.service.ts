import { Injectable } from '@angular/core';
import { ICustomer } from './customer';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    private customerUrl = 'http://localhost:62581/api/Customers';

    constructor(private http: HttpClient) { }

    getCustomers(): Observable<ICustomer[]> {
        return this.http.get<ICustomer[]>(this.customerUrl);
    }

    getCustomer(id: string): Observable<ICustomer> {
        return this.http.get<ICustomer>(this.customerUrl + "/" + id);
    }
}