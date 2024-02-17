import { Equipment } from "../interfaces/products.interface";

export const PortaCabinsEquipmentsList: Equipment[] = [
  {
      id: 1,
      name: 'Porta Cabin',
      description: 'A basic porta cabin suitable for various temporary accommodations.',
      imageUrl: 'assets/img/porta-cabin-1.jpg',
      gallery: [''],
      prices: {
          default: 500000,
          day: 50000,
          week: 250000,
          month: 550000
      },
      meta: {
          weight: 'Operating weight: 10 kg',
          type: 'equipment'
      }
  },
  {
      id: 2,
      name: 'Deluxe Porta Cabin',
      description: 'A luxurious and spacious porta cabin perfect for executive use.',
      imageUrl: 'assets/img/porta-cabin-2.webp',
      gallery: [''],
      prices: {
          default: 750000,
          day: 75000,
          week: 375000,
          month: 825000
      },
      meta: {
          weight: 'Operating weight: 12 kg',
          type: 'equipment'
      }
  },
  {
      id: 3,
      name: 'Portable Office Cabin',
      description: 'An office cabin solution that is easy to transport and set up.',
      imageUrl: 'assets/img/porta-cabin-3.webp',
      gallery: [''],
      prices: {
          default: 600000,
          day: 60000,
          week: 300000,
          month: 660000
      },
      meta: {
          weight: 'Operating weight: 11 kg',
          type: 'equipment'
      }
  }
];

