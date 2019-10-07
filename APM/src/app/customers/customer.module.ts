import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { ConvertToSpaces } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent,
    ConvertToSpaces,
    StarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'customers', component: CustomerListComponent },
      { path: 'customers/:id', component: CustomerDetailComponent },
    ])
  ]
})
export class CustomerModule { }
