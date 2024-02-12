import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { AsphaltsComponent } from './asphalts/asphalts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';
import { PageHeadComponent } from './page-head/page-head.component';

@NgModule({
  declarations: [
    SwiperComponent,
    AsphaltsComponent,
    AboutUsComponent,
    PageHeadComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule
  ],
  exports: [
    SwiperComponent,
    AsphaltsComponent,
    AboutUsComponent,
    PageHeadComponent
  ]
})
export class SharedComponentsModule { }
