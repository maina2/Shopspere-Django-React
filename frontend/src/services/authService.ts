import api from "./api"; // Assumes you have an Axios instance configured

interface LoginResponse {
  access: string;
  user: { id: number; first_name:string; last_name:string; username: string; email: string};
}


export const login = async (username: string,email: string, password: string): Promise<LoginResponse> => {
  const response = await api.post("/users/login/", {username, email, password });
  return response.data;
};


export const register = async (first_name:string,last_name:string,username: string,email: string, password: string) => {
  const response = await api.post("/users/register/",{first_name,last_name,username, email, password });
  return response.data;
};

export const getUserProfile = async () => {
  const response = await api.get("/users/profile/");
  return response.data;
};


export const logout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("user");
};
