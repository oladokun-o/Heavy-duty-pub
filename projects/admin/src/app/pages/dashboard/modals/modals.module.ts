import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmComponent } from './confirm/confirm.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';



@NgModule({
  declarations: [
    NewUserComponent,
    ConfirmComponent,
    ProductComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class ModalsModule { }
