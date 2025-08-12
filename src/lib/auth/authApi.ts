import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const authApi = {
  // Đăng nhập
  login: async (email: string, password: string) => {
    const res = await axios.post(`${API_URL}/users/login`, {
      email,
      password
    });
    return res.data;
  },

  // Đăng ký
  register: async (
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string
  ) => {
    const res = await axios.post(`${API_URL}/users/register`, {
      firstName,
      lastName,
      email,
      phone,
      password
    });
    return res.data;
  },
};
