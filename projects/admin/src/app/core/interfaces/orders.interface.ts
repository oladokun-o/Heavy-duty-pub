export interface Order {
  order_id: number
  customer_name: string
  email: string
  phone: string
  address: string
  quantity: number
  total_price: number
  order_date: string
  status: OrderStatus
  products: Product[]
}

export interface Product {
  id: number
  order_id: number
  product_id?: number
  name: string
  qty: number
  amount: number
  price: number
}

export enum OrderStatus {
  Pending = 'pending',
  Processing = 'processing',
  Completed = 'completed',
  Cancelled = 'cancelled',
  Shipped = 'shipped',
  Delivered = 'delivered'
}

export interface OrderResponse {
  message: string;
  status: number;
}
