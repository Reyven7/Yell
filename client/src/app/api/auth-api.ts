import {
  AuthResponce,
  LoginCredential,
  RegisterCredential,
} from "@/types/auth.types";
import { User } from "@/types/user.types";
import axios from "axios";
import api from "./api";

const BASE_URL = "http://localhost:3000/api/auth";

export const login = async (credentials: LoginCredential) => {
  const res = await axios.post<AuthResponce>(`${BASE_URL}/login`, credentials);
  return res.data;
};

export const register = async (credentials: RegisterCredential) => {
  const res = await axios.post(`${BASE_URL}/register`, credentials);
  return res.data;
};

export const getMe = async () => {
  const res = await api.get<User>(`${BASE_URL}/me`);
  return res.data;
};

export const logout = async () => {
  const res = await axios.get(`${BASE_URL}/logout`, {});
  return res.data;
};
