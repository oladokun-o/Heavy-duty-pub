import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './swiper/swiper.component';
import { SwiperModule } from 'swiper/angular';
import { AsphaltsComponent } from './asphalts/asphalts.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SwiperComponent,
    AsphaltsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    SwiperModule,
    RouterModule
  ],
  exports: [
    SwiperComponent,
    AsphaltsComponent,
    AboutUsComponent
  ]
})
export class SharedComponentsModule { }
