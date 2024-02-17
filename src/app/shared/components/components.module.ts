import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { AsphaltsComponent } from './asphalts/asphalts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { PageHeadComponent } from './page-head/page-head.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { EquipmentsComponent } from './equipments/equipments.component';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    SwiperComponent,
    AsphaltsComponent,
    AboutUsComponent,
    PageHeadComponent,
    ReviewsComponent,
    LatestNewsComponent,
    EquipmentsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule,
    NgSelectModule,
    NgbTooltipModule
  ],
  exports: [
    SwiperComponent,
    AsphaltsComponent,
    AboutUsComponent,
    PageHeadComponent,
    ReviewsComponent,
    LatestNewsComponent,
    EquipmentsComponent,
    CartComponent
  ]
})
export class SharedComponentsModule { }
