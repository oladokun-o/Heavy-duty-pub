import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { NewsComponent } from './news/news.component';
import { LayoutModule } from '../layout/layout.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from '../shared/shared.module';
import { NewsPostComponent } from './news/news-post/news-post.component';
import { ProductsModule } from './products/products.module';
import { CheckoutComponent } from './checkout/checkout.component';

const components = [
  HomeComponent,
  AboutUsComponent,
  ServicesComponent,
  ContactComponent,
  ProductsComponent,
  NewsComponent
];
@NgModule({
  declarations: [
    PagesComponent,
    ...components,
    PageNotFoundComponent,
    NewsPostComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    RouterModule,
    LayoutModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
