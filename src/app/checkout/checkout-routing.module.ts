import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from '../checkout/checkout.component';
import { SummaryComponent } from './summary/summary.component';
import { CompleteComponent } from './complete/complete.component';

const routes: Routes = [
  {
    path: '',
    component: CheckoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'summary'
      },
      {
        path: 'summary',
        component: SummaryComponent,
      },
      {
        path: 'complete',
        component: CompleteComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutPagesRoutingModule { }
