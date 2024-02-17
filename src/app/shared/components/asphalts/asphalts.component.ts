import { Component, Input, OnInit } from '@angular/core';
import { AsphaltProduct, Brand } from 'src/app/core/interfaces/products.interface';

@Component({
  selector: 'app-asphalts',
  templateUrl: './asphalts.component.html',
  styleUrls: ['./asphalts.component.scss']
})
export class AsphaltsComponent implements OnInit {

  constructor() { }

  asphaltProducts: AsphaltProduct[] = [
    {
      brand: [
        { name: 'NANO ZMA', price: 500000 },
        { name: 'LEVERAGE', price: 250000 },
        { name: 'SEQUIOA', price: 350000 },
        { name: 'LARALEK', price: 400000 },
        { name: 'GATEWAY', price: 500000 },
        { name: 'PW', price: 500000 },
        { name: 'PLATINUM', price: 500000 },
      ],
      imageUrl: 'assets/img/asphalt-2.webp',
      name: 'Asphalt - Binders Course',
      description: `The binder course is an essential layer in asphalt pavement construction,
      providing stability and durability to the road surface. It acts as a binder between the surface course and the base layer, distributing traffic loads
      and preventing water penetration.`,
      price: undefined,
      qty: 1
    },
    {
      brand: [
        { name: 'NANO ZMA', price: 500000 },
        { name: 'LEVERAGE', price: 250000 },
        { name: 'SEQUIOA', price: 350000 },
        { name: 'LARALEK', price: 400000 },
        { name: 'GATEWAY', price: 500000 },
        { name: 'PW', price: 500000 },
        { name: 'PLATINUM', price: 500000 }
      ],
      imageUrl: 'assets/img/asphalt-1.jpg',
      name: 'Asphalt - Wearing Course',
      description: `The wearing course, also known as the surface course, is the top layer of asphalt pavement that directly interacts with
      traffic. It provides skid resistance, smoothness, and durability to the road surface, protecting the underlying layers
      from wear and tear.`,
      price: undefined,
      qty: 1
    },
    {
      name: 'Bitumen - C.B.E + TERRASIL',
      description: 'Similar to C.B.E bitumen, C.B.E + TERRASIL bitumen is a modified bitumen product that includes additional additives, such as TERRASIL, to further enhance its properties. TERRASIL additives may provide benefits such as improved durability, flexibility, and resistance to rutting.',
      imageUrl: 'assets/img/bitumen-1.jpeg',
      price: 10000,
      meta: {
        weight: '28 kg',
        usage: 'Enhanced bitumen blend for improved performance'
      },
      qty: 1
    },
    {
      name: 'Bitumen - 60/70',
      description: '60/70 bitumen refers to a specific grade of bitumen categorized by its penetration value and softening point. This grade of bitumen is commonly used in road construction for its medium viscosity and suitable temperature range, making it versatile for various asphalt applications.',
      imageUrl: 'assets/img/bitumen-1.jpeg',
      price: 10000,
      meta: {
        weight: '28 kg',
        usage: 'Versatile bitumen grade for various applications'
      },
      qty: 1
    },
    {
      name: 'Aggregate - SURFACE',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: 'Aggregate suitable for surface applications.',
      meta: {
        weight: '50 kg',
        usage: 'Surface applications'
      },
      qty: 1
    },
    {
      name: 'Aggregate - DRESSING',
      imageUrl: 'assets/img/aggregate-2.jpg',
      price: 40400,
      description: 'Aggregate suitable for surface applications.',
      meta: {
        weight: '50 kg',
        usage: 'Dressing applications'
      },
      qty: 1
    },
  ];

  @Input() hideHead: boolean = false;

  ngOnInit(): void {

  }

  handleBrandChange(brand: Brand, product: AsphaltProduct): void {
    product.price = brand.price;
    brand.selected = true;
  }

  toggleDescription(el: HTMLElement) {
    if (el.classList.contains('text-truncate')) {
      el.classList.remove('text-truncate');
    } else {
      el.classList.add('text-truncate');
    }
  }

  inc(product: AsphaltProduct) {
    if (product.qty !== undefined) {
      // Find the selected brand of the product
      const foundBrand = this.asphaltProducts.find(p => p === product)?.brand?.find(p => p.selected);

      // Increment the quantity
      product.qty++;

      // Update the price if a brand is found and it has a price property
      if (foundBrand && foundBrand.price !== undefined) {
          foundBrand.price = product.qty;
      }
  } else {
      console.error('Invalid product or quantity property missing.');
  }
  }

  dec(product: AsphaltProduct) {
    if (product.qty) product.qty--;
  }

}
