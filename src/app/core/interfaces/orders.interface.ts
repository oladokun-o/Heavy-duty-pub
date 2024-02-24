import { Item } from "./cart.interface";

export interface NewOrder {
  products: newproduct[];
  quantity: number;
  status: OrderStatus;
  address: string;
  customer_name: string;
  total_price: number;
  order_date: string;
  email: string;
  phone: string;
}

interface newproduct {
  product_id: number;
  name: string;
  qty: number;
  amount: number;
}

export enum OrderStatus {
  Pending = 'pending',
  Processing = 'processing',
  Completed = 'completed',
  Cancelled = 'cancelled'
}
