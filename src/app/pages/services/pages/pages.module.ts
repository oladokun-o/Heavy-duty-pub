import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';
import { DisplayComponent } from './display/display.component';



@NgModule({
  declarations: [
    ListComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ServicesPagesModule { }
