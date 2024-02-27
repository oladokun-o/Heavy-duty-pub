import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsModule } from './components/components.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedComponentsModule,
  ],
  exports: [
    CommonModule,
    SharedComponentsModule,
  ]
})
export class SharedModule { }
