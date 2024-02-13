import { Component, Input, OnInit } from '@angular/core';
import { AsphaltProduct, Brand } from 'src/app/core/interfaces/products.interface';

@Component({
  selector: 'app-asphalt-list',
  templateUrl: './asphalt-list.component.html',
  styleUrls: ['./asphalt-list.component.css']
})
export class AsphaltListComponent implements OnInit {

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
      price: undefined
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
      price: undefined
    },
    {
      name: 'Bitumen - MC 0',
      imageUrl: 'assets/img/bitumen-1.jpeg',
      price: 10000,
      description: 'This is a type of bitumen typically used for road construction and maintenance. MC 0 bitumen is known for its high quality and durability, making it suitable for various asphalt applications.',
      meta: {
        weight: '25 kg',
        usage: 'For road construction and maintenance projects'
      }
    },
    {
      name: 'Bitumen - MC 1',
      imageUrl: 'assets/img/bitumen-1.jpeg',
      price: 10000,
      description: 'Similar to MC 0, MC 1 bitumen is another grade of bitumen commonly used in road construction. It offers excellent binding properties and resistance to weathering, ensuring long-lasting road surfaces.',
      meta: {
        weight: '25 kg',
        usage: 'Suitable for various asphalt applications'
      }
    },
    {
      name: 'Bitumen - S 125',
      imageUrl: 'assets/img/bitumen-1.jpeg',
      price: 10000,
      description: 'S 125 bitumen is a specialized type of bitumen designed for specific applications, such as asphalt paving in areas with high traffic volume or heavy loads. It provides superior strength and stability to road surfaces.',
      meta: {
        weight: '30 kg',
        usage: 'High-quality bitumen for road surfaces'
      }
    },
    {
      name: 'Bitumen - C.B.E',
      imageUrl: 'assets/img/bitumen-1.jpeg',
      price: 10000,
      description: 'C.B.E bitumen refers to a modified bitumen product that incorporates additives to enhance its performance characteristics. This type of bitumen offers improved elasticity, adhesion, and resistance to cracking, making it ideal for demanding asphalt applications.',
      meta: {
        weight: '28 kg',
        usage: 'Commonly used in asphalt mixes'
      }
    },
    {
      name: 'Bitumen - C.B.E + TERRASIL',
      description: 'Similar to C.B.E bitumen, C.B.E + TERRASIL bitumen is a modified bitumen product that includes additional additives, such as TERRASIL, to further enhance its properties. TERRASIL additives may provide benefits such as improved durability, flexibility, and resistance to rutting.',
      imageUrl: 'assets/img/bitumen-1.jpeg',
      price: 10000,
      meta: {
        weight: '28 kg',
        usage: 'Enhanced bitumen blend for improved performance'
      }
    },
    {
      name: 'Bitumen - 60/70',
      description: '60/70 bitumen refers to a specific grade of bitumen categorized by its penetration value and softening point. This grade of bitumen is commonly used in road construction for its medium viscosity and suitable temperature range, making it versatile for various asphalt applications.',
      imageUrl: 'assets/img/bitumen-1.jpeg',
      price: 10000,
      meta: {
        weight: '28 kg',
        usage: 'Versatile bitumen grade for various applications'
      }
    },
    {
      name: 'Aggregate - 1”',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: '1” aggregate is a coarse material commonly used in construction projects for concrete production, drainage systems, and road base layers.',
      meta: {
        weight: '50 kg',
        usage: 'Construction'
      }
    },
    {
      name: 'Aggregate - 1⁄2”',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: '1⁄2” aggregate is a medium-sized material used in various construction applications, including concrete mixing, landscaping, and road construction.',
      meta: {
        weight: '50 kg',
        usage: 'Construction'
      }
    },
    {
      name: 'Aggregate - 1⁄4”',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: '1⁄4” aggregate, also known as fine aggregate, is commonly used in concrete mixes to improve workability and finish. It is also used in landscaping and surface dressing applications.',
      meta: {
        weight: '50 kg',
        usage: 'Construction'
      }
    },
    {
      name: 'Aggregate - 3/8”',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: '3/8” aggregate, also known as pea gravel, is a versatile material used in construction projects, landscaping, and decorative applications. It is commonly used for drainage, walkways, and exposed aggregate concrete.',
      meta: {
        weight: '50 kg',
        usage: 'Construction'
      }
    },
    {
      name: 'Aggregate - DUST',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: 'Aggregate dust, also known as stone dust or crusher fines, is a byproduct of crushing stone, gravel, or rock. It is commonly used as a base material for paving, landscaping, and construction projects.',
      meta: {
        weight: '50 kg',
        usage: 'Construction'
      }
    },
    {
      name: 'Aggregate - SAND',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: 'Sand is a granular material composed of finely divided rock and mineral particles. It is commonly used in construction projects for concrete mixing, masonry work, and landscaping.',
      meta: {
        weight: '50 kg',
        usage: 'Construction'
      }
    },
    {
      name: 'Aggregate - LATERITE',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: 'Laterite is a soil and rock type rich in iron and aluminum oxides. It is commonly used in construction projects for building foundations, road construction, and landscaping.',
      meta: {
        weight: '50 kg',
        usage: 'Construction'
      }
    },
    {
      name: 'Aggregate - STONE BASE',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: 'Stone base is a dense, compacted material used as a foundation for roads, driveways, and building structures. It provides stability, support, and drainage for the overlying structure.',
      meta: {
        weight: '50 kg',
        usage: 'Construction'
      }
    },
    {
      name: 'Aggregate - INTERLOCKING STONES',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: 'Interlocking stones, also known as pavers or paving stones, are durable, versatile materials used for landscaping, hardscaping, and outdoor paving projects. They create attractive and functional surfaces for patios, walkways, driveways, and more.',
      meta: {
        weight: '50 kg',
        usage: 'Landscaping'
      }
    },
    {
      name: 'Aggregate - STAMP CONCRETE',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: 'Stamped concrete, also known as patterned or imprinted concrete, is a decorative concrete surface designed to resemble brick, stone, tile, wood, and other materials. It is commonly used for driveways, patios, pool decks, and walkways.',
      meta: {
        weight: '50 kg',
        usage: 'Construction'
      }
    },
    {
      name: 'Aggregate - CEMENT',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: 'Cement is a binder material used in construction projects to bind together other materials, such as sand, gravel, and water, to form concrete and mortar. It is essential for building foundations, walls, floors, and structures.',
      meta: {
        weight: '50 kg',
        usage: 'Construction'
      }
    },
    {
      name: 'Aggregate - SURFACE',
      imageUrl: 'assets/img/aggregate-1.webp',
      price: 40400,
      description: 'Aggregate suitable for surface applications.',
      meta: {
        weight: '50 kg',
        usage: 'Surface applications'
      }
    },
    {
      name: 'Aggregate - DRESSING',
      imageUrl: 'assets/img/aggregate-2.jpg',
      price: 40400,
      description: 'Aggregate suitable for surface applications.',
      meta: {
        weight: '50 kg',
        usage: 'Dressing applications'
      }
    },
  ];

  @Input() anInput: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  view: 'grid' | 'list' = sessionStorage.getItem('productsView') as 'grid' | 'list' || 'grid';

  changeView(view: 'grid' | 'list'): void {
    this.view = view;
    sessionStorage.setItem('productsView', this.view);
  }

  handleBrandChange(brand: Brand, product: AsphaltProduct): void {
    product.price = brand.price;
  }

  toggleDescription(el: HTMLElement) {
    if (el.classList.contains('text-truncate')) {
      el.classList.remove('text-truncate');
    } else {
      el.classList.add('text-truncate');
    }
  }

}
