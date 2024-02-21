import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './delivery/delivery.component';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [
    DeliveryComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule
  ]
})
export class ModalsModule { }
