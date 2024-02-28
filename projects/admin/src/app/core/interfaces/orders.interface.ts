export interface Order {

}

export enum OrderStatus {
  Pending = 'pending',
  Processing = 'processing',
  Completed = 'completed',
  Cancelled = 'cancelled'
}

export interface OrderResponse {
  message: string;
  status: number;
}
