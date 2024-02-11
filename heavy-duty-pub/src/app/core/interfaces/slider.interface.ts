import { SwiperOptions } from "swiper";

export interface Slide {
  imageUrl: string;
  caption?: string;
  alt?: string;
}

export type Slider = {
  slides: Slide[];
  config: SwiperOptions;
}
