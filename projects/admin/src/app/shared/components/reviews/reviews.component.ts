import { Component, OnInit } from '@angular/core';
import SwiperCore, { Autoplay, EffectCreative, EffectFade, Grid, Navigation, Pagination, SwiperOptions} from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade, EffectCreative, Grid]);

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  config: SwiperOptions = {
    spaceBetween: 0,
    loop: true,
    speed: 800,
    autoplay: {
      delay: 5000
    },
    breakpoints: {
      500: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      1024: {
        slidesPerView: 3
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
