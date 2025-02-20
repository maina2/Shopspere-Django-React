import api from "./api";

export const login = async (username:string,email: string, password: string) => {
  const response = await api.post("/users/login/", { username,email, password });
  return response.data;
};

export const register = async (userData: object) => {
  const response = await api.post("/users/register/", userData);
  return response.data;
};

export const getUserProfile = async () => {
  const response = await api.get("/users/profile/");
  return response.data;
};

export const updateUserProfile = async (userData: object) => {
  const response = await api.put("/users/profile/", userData);
  return response.data;
};
