import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NumbersOnlyDirective } from '../directives/NumbersOnly.directive';
import { PhoneNumberDirective } from '../directives/InputNumbersOnly.directive';
import { LoaderComponent } from './loader/loader.component';
@NgModule({
  declarations: [
    NumbersOnlyDirective,
    PhoneNumberDirective,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
  ],
  exports: [
    NumbersOnlyDirective,
    PhoneNumberDirective,
    LoaderComponent
  ]
})
export class SharedComponentsModule { }
