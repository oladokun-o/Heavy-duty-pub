import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Slide } from 'src/app/core/interfaces/slider.interface';
import SwiperCore, { Autoplay, EffectCreative, EffectFade, Navigation, Pagination, Swiper, SwiperOptions } from 'swiper';

SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade, EffectCreative]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit, OnChanges {
 @Input() config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    initialSlide: 0,
    loop: true,
    watchOverflow: true,
    observeParents: true,
    observeSlideChildren: true,
    observer: true,
    speed: 800,
    autoplay: {
      delay: 5000
    }
  };

  @Input() slides: Slide[] = [];

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges): void { }

  onSwipe(swiper: Swiper) {

  }

  onSlideChange() {

  }
}
