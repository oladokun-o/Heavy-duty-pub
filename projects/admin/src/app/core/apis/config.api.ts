import { environment } from "projects/admin/src/environments/environment";

const apiUrl = environment.apiBaseUrl;

export const apiConfig = {
  auth: {
    login: () => `${apiUrl}/login`,
    createuser: () => `${apiUrl}/createuser`,
    getUser: (id: number) => `${apiUrl}/getuser/${id}`,
    logout: () => `${apiUrl}/logout`,
    validateLogin: () => `${apiUrl}/protected`
  }
};
