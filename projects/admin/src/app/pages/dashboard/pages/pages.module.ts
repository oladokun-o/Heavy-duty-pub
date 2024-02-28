import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [
    OrdersComponent,
    UsersComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
