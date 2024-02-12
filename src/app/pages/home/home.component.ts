import { Component } from '@angular/core';
import { Slider } from 'src/app/core/interfaces/slider.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slidesAndConfig: Slider = {
    slides: [
      {
        imageUrl: 'assets/img/hero-slider-1.jpg'
      },
      {
        imageUrl: 'assets/img/hero-slider-2.jpg'
      },
      {
        imageUrl: 'assets/img/hero-slider-3.jpg'
      },
      {
        imageUrl: 'assets/img/hero-slider-4.jpg'
      },
      {
        imageUrl: 'assets/img/hero-slider-5.jpg'
      },
    ],
    config: {
      autoplay: {
        delay: 5000
      }
    }
  }

}
