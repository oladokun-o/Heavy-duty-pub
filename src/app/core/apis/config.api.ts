import { environment } from "src/environments/environment";


const apiUrl = environment.apiBaseUrl;

export const apiConfig = {
  orders: {
    create: () => `${apiUrl}/orders/new`
  },
  contact: {
    support: () => `${apiUrl}/contact`
  }
};
