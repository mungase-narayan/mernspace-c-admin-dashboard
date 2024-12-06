import { CreateUserData, Credentials, User } from "../types";
import { api } from "./client";

export const register = (userData: User) => api.post("users", userData);
export const login = (credentials: Credentials) =>
  api.post("auth/login", credentials);

export const self = () => api.get("auth/self");
export const logout = () => api.post("auth/logout");
export const getUsers = (queryString: string) =>
  api.get(`/users/getAll?${queryString}`);
export const createUser = (user: CreateUserData) => api.post(`/users`, user);
export const updateUser = (user: CreateUserData, id: string) =>
  api.patch(`/users/${id}`, user);
export const getTenants = (queryString: string) =>
  api.get(`/tenants/getList?${queryString}`);
