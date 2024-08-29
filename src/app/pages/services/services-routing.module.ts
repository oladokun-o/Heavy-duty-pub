import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesComponent } from './services.component';
import { ListComponent } from './pages/list/list.component';
import { DisplayComponent } from './pages/display/display.component';

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
        path: ':service',
        component: DisplayComponent,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
