import { Equipment } from "../interfaces/products.interface";

export const EquipmentsList: Equipment[] = [
  {
    id: 1,
    name: 'PAVER',
    description: 'A paver is a construction machine used to lay asphalt or concrete on roads, parking lots, and other surfaces. It spreads the material evenly and compacts it to create a smooth and durable surface.',
    imageUrl: 'assets/img/paver-image.jpg',
    gallery: [
      ''
    ],
    prices: {
      default: 500000,
      day: 50000,
      weekly: 250000,
      monthly: 550000
    },
    meta: {
      brand: 'Brand: Wacker Neuson',
      year: 'MFG Year: 2023',
      model: 'Model XYZ',
      weight: 'Operating weight: 10 tons'
    }
  },
  {
    id: 2,
    name: 'DOUBLE DRUM ROLLER',
    description: 'A double drum roller, also known as a tandem roller, is a heavy-duty construction machine used to compact soil, asphalt, or other materials. It has two cylindrical drums that rotate in opposite directions to achieve optimal compaction.',
    imageUrl: 'assets/img/double-drum-roller-image.webp',
    prices: {
      default: 500000,
      day: 50000,
      weekly: 250000,
      monthly: 550000
    },
    meta: {
      brand: 'Brand: Wacker Neuson',
      year: 'MFG Year: 2022',
      model: 'Model ABC',
      weight: 'Operating weight: 15 tons'
    }
  },
  {
    id: 3,
    name: 'PNEUMATIC ROLLER',
    description: 'A pneumatic roller is a type of compaction equipment used in road construction. It uses rubber tires instead of steel drums to compact asphalt or soil. Pneumatic rollers are effective for achieving smooth finishes on roads and pavements.',
    imageUrl: 'assets/img/pneumatic-roller-image.webp',
    prices: {
      default: 500000,
      day: 50000,
      weekly: 250000,
      monthly: 550000
    },
    meta: {
      brand: 'Brand: Wacker Neuson',
      year: 2023,
      model: 'Model PQR',
      weight: 'Operating weight: 12 tons'
    }
  },
  {
    id: 4,
    name: 'HAND ROLLER',
    description: 'A hand roller, also known as a manual roller, is a small compaction tool used for minor compaction tasks in road construction, landscaping, and pavement repair. It is operated manually and is suitable for small-scale projects.',
    imageUrl: 'assets/img/hand-roller-image.webp',
    prices: {
      default: 500000,
      day: 50000,
      weekly: 250000,
      monthly: 550000
    },
    meta: {
      brand: 'Brand: Wacker Neuson',
      year: 'MFG Year: 2022',
      model: 'Model LMN',
      weight: 'Operating weight: 500 kg'
    }
  },
  {
    id: 5,
    name: 'TARBOILER',
    description: 'A tar boiler, also known as a bitumen boiler, is a specialized heating device used in road construction for heating bitumen or tar to the required temperature before application. It ensures the bitumen remains in a liquid state for proper application and adhesion.',
    imageUrl: 'assets/img/tarboiler-image.webp',
    prices: {
      default: 500000,
      day: 50000,
      weekly: 250000,
      monthly: 550000
    },
    meta: {
      brand: 'Brand: Wacker Neuson',
      year: 2023,
      model: 'Model UVW',
      weight: 'Operating weight: 50 kg'
    }
  },
  {
    id: 6,
    name: 'PAY LOADER',
    description: 'A payloader, also known as a front loader or wheel loader, is a heavy equipment machine used in construction to move or load materials such as soil, asphalt, gravel, or demolition debris into trucks or other transportation vehicles.',
    imageUrl: 'assets/img/pay-loader-image.png',
    prices: {
      default: 500000,
      day: 50000,
      weekly: 250000,
      monthly: 550000
    },
    meta: {
      brand: 'Brand: Wacker Neuson',
      year: 'MFG Year: 2022',
      model: 'Model XYZ',
      weight: 'Operating weight: 10 tons'
    }
  }
];
