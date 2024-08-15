import { environment } from "src/environments/environment";

const apiUrl = environment.apiBaseUrl, cmsUrl = environment.cmsBaseUrl;

export const apiConfig = {
  orders: {
    create: () => `${apiUrl}/orders/new`
  },
  contact: {
    support: () => `${apiUrl}/contact`
  },
  products: {
    query: (query: string) => `${cmsUrl}/?query=${query}`
  }
};
