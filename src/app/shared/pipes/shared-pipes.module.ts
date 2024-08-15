import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NestedBrandPipe } from './nested-brand.pipe';



@NgModule({
  declarations: [
    NestedBrandPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NestedBrandPipe
  ]
})
export class SharedPipesModule { }
