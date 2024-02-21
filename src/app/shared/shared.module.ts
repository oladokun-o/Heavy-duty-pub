import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/components.module';
import { CartModalsModule } from './components/cart/modals/modals.module';
import { NumbersOnlyDirective } from './directives/NumbersOnly.directive';



@NgModule({
  declarations: [
    NumbersOnlyDirective
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    CartModalsModule,
  ],
  exports: [
    CommonModule,
    SharedComponentsModule,
    NumbersOnlyDirective
  ]
})
export class SharedModule { }
