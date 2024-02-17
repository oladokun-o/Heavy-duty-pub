import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/components.module';
import { CartModalsModule } from './components/cart/modals/modals.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedComponentsModule,
    CartModalsModule
  ],
  exports: [
    CommonModule,
    SharedComponentsModule
  ]
})
export class SharedModule { }
