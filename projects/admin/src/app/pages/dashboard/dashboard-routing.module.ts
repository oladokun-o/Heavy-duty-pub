import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { UsersComponent } from './pages/users/users.component';
import { OrdersResolver } from '../../core/resolvers/orders.resolver';
import { UserDetailsResolver, UsersResolver } from '../../core/resolvers/users.resolver';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    resolve: {
      userDetails: UserDetailsResolver,
      orders: OrdersResolver,
      users: UsersResolver
    },
    children: [
      {
        path: '',
        redirectTo: 'orders'
      },
      {
        path: 'orders',
        component: OrdersComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
