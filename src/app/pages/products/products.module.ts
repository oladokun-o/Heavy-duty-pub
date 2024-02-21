import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AsphaltListComponent } from './asphalt-list/asphalt-list.component';
import { AsphaltComponent } from './asphalt/asphalt.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CabinComponent } from './cabin/cabin.component';
import { HaulagesComponent } from './haulages/haulages.component';


@NgModule({
  declarations: [
    ProductsListComponent,
    ProductComponent,
    AsphaltListComponent,
    AsphaltComponent,
    CabinComponent,
    HaulagesComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    NgSelectModule
  ]
})
export class ProductsModule { }
