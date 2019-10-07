import { NgModule } from '@angular/core';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { ConvertToSpaces } from '../shared/convert-to-spaces.pipe';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent,
    ConvertToSpaces
  ],
  imports: [
    RouterModule.forChild([
      { path: 'customers', component: CustomerListComponent },
      { path: 'customers/:id', component: CustomerDetailComponent },
    ]),
    SharedModule
  ]
})
export class CustomerModule { }
