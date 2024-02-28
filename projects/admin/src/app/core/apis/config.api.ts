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
  },
  orders: {
    getOrders: () => `${apiUrl}/orders`,
    deleteOrder:(orderId: number) => `${apiUrl}/orders/${orderId}`,
    updateOrderStatus:(orderId: number) => `${apiUrl}/orders/${orderId}/status`,
  },
  user: {
    getUsers: () => `${apiUrl}/getusers`,
    createUser: () => `${apiUrl}/users/new`,
    deleteUser: (id: number) => `${apiUrl}/users/${id}`,
    updateUser: (id: number) => `${apiUrl}/users/${id}`,
  }
};
