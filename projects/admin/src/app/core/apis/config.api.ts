import { environment } from "src/environments/environment";


const apiUrl = environment.apiBaseUrl;

export const apiConfig = {
  auth: {
    login: () => `${apiUrl}/login`,
    createuser: () => `${apiUrl}/createuser`
  }
};
