import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProjectManagementComponent } from './project-management/project-management.component';
import { DesignComponent } from './design/design.component';
import { RoadRehabComponent } from './road-rehab/road-rehab.component';
import { DrainageComponent } from './drainage/drainage.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListComponent,
    ProjectManagementComponent,
    DesignComponent,
    RoadRehabComponent,
    DrainageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PagesModule { }
