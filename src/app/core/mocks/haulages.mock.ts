import { Haulage } from "../interfaces/products.interface";

export const MockHaulages: Haulage[] = [
  {
    id: 1,
    name: "Small Haulage",
    price: 40000,
    imageUrl: "assets/img/truck-1.png",
    description: "Haulage service for small loads, suitable for minor road construction tasks.",
    qty: 0,
    meta: {
      type: 'Haulage',
      weight: '20 tons'
    }
  },
  {
    id: 2,
    name: "Medium Haulage",
    price: 45000,
    imageUrl: "assets/img/truck-2.png",
    description: "Haulage service for medium-sized loads, ideal for average road construction projects.",
    qty: 0,
    meta: {
      type: 'Haulage',
      weight: '40 tons'
    }
  },
  {
    id: 3,
    name: "Large Haulage",
    price: 55000,
    imageUrl: "assets/img/truck-3.png",
    description: "Haulage service for large loads, suitable for extensive road construction assignments.",
    qty: 0,
    meta: {
      type: 'Haulage',
      weight: '60 tons'
    }
  }
];
