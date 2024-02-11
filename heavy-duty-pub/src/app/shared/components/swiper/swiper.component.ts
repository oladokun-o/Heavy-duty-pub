import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Slide } from 'src/app/core/interfaces/slider.interface';
import SwiperCore, { Autoplay, Swiper, SwiperOptions } from 'swiper';

SwiperCore.use([Autoplay]);

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
