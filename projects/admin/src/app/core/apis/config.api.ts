import { environment } from "projects/admin/src/environments/environment";
import { OrderStatus } from "../interfaces/orders.interface";

const apiUrl = environment.apiBaseUrl;

export const apiConfig = {
  auth: {
    login: () => `${apiUrl}/login`,
    createuser: () => `${apiUrl}/createuser`,
    getUser: (id: number) => `${apiUrl}/getuser/${id}`,
    logout: () => `${apiUrl}/logout`,
    validateLogin: () => `${apiUrl}/protected`,
    getUsers: () => `${apiUrl}/getusers`,
  },
  orders: {
    getOrders: () => `${apiUrl}/orders`,
    deleteOrder:(orderId: number) => `${apiUrl}/orders/${orderId}`,
    updateOrderStatus:(orderId: number) => `${apiUrl}/orders/${orderId}/status`,
  }
};
