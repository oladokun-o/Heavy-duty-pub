import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { AsphaltListComponent } from './asphalt-list/asphalt-list.component';
import { AsphaltComponent } from './asphalt/asphalt.component';
import { CabinListComponent } from './cabin-list/cabin.component';
import { CabinComponent } from './cabin/cabin.component';
import { HaulagesListComponent } from './haulages-list/haulages.component';
import { HaulageComponent } from './haulage/haulage.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent
      },
      {
        path: 'products',
        redirectTo: ''
      },
      {
        path: 'asphalts',
        component: AsphaltListComponent
      },
      {
        path: 'equipments/:id',
        component: ProductComponent
      },
      {
        path: 'asphalts/:id',
        component: AsphaltComponent
      },
      {
        path: 'porta-cabins',
        component: CabinListComponent
      },
      {
        path: 'cabins/:id',
        component: CabinComponent
      },
      {
        path: 'haulages',
        component: HaulagesListComponent
      },
      {
        path: 'haulages/:id',
        component: HaulageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
