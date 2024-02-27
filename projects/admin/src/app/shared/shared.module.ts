import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/components.module';
import { CartModalsModule } from './components/cart/modals/modals.module';
import { NumbersOnlyDirective } from './directives/NumbersOnly.directive';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    CartModalsModule,
  ],
  exports: [
    CommonModule,
    SharedComponentsModule,
    LoaderComponent
  ]
})
export class SharedModule { }
