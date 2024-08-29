import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesPagesModule } from './pages/pages.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    ServicesPagesModule
  ]
})
export class ServicesModule { }
