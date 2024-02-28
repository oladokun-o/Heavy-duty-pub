import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPagesModule } from './pages/pages.module';
import { ModalsModule } from './modals/modals.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DashboardPagesModule,
    ModalsModule
  ]
})
export class DashboardModule { }
