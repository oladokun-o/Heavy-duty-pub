import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ListComponent } from './pages/list/list.component';
import { ProjectManagementComponent } from './pages/project-management/project-management.component';
import { DesignComponent } from './pages/design/design.component';
import { RoadRehabComponent } from './pages/road-rehab/road-rehab.component';
import { DrainageComponent } from './pages/drainage/drainage.component';

const routes: Routes = [
  {
    path: '',
    component: ServicesComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: 'project-mgt',
        component: ProjectManagementComponent
      },
      {
        path: 'design',
        component: DesignComponent
      },
      {
        path: 'road-rehab',
        component: RoadRehabComponent
      },
      {
        path: 'drainage',
        component: DrainageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
