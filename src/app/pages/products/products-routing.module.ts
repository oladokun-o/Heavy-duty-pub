import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ProductComponent } from './product/product.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'products/:id',
        component: ProductComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
