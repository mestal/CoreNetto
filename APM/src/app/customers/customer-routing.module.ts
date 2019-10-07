import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      { path: 'customers', component: CustomerListComponent },
      { path: 'customers/:id', component: CustomerDetailComponent },
    ]),
  ],
  exports: [
    RouterModule
  ]
})
export class CustomerRoutingModule { }
