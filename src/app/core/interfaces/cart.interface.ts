import { Brand } from "./products.interface";

export interface CartItem {
  id: string | number;
  datetime: Date;
  item: Item;
}

export interface Item {
  id: number
  name: string
  description: string
  imageUrl: string
  prices?: Price[]
  meta: Meta
  qty: number
  amount?: number
  gallery?: string[]
  price?: number
  category?: string;
  brand?: Brand[];
}

interface Price {
  label: string
  value: number
  selected: boolean
}

interface Meta {
  brand?: string
  year?: string
  model?: string
  weight: string
  usage?: string
  type?: string
}
export interface CartDetails {
  deliveryLocation: string;
}

export interface Location {
  name: string;
  code?: string;
}
