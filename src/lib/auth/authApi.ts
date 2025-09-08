import axios from "axios";
import axiosInstance from "../axiosInstance";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

type VerifyOtpPayload =
  | { otp: string; email: string }
  | { otp: string; phone: string };

export const authApi = {
  // Đăng nhập
  login: async (email: string, password: string) => {
    const res = await axios.post(`${API_URL}/users/login`, { email, password });
    return res.data;
  },

  // Đăng ký
  register: async (
    lastName: string,
    firstName: string,
    email: string,
    phone: string,
    password: string
  ) => {
    const res = await axios.post(`${API_URL}/users/register`, {
      lastName,
      firstName,
      email,
      phone,
      password
    });
    return res.data;
  },

  // Đăng xuất
  logout: async () => {
    const res = await axiosInstance.post("/users/logout");
    return res.data;
  },

  // Refresh token (đã dùng trong axiosInstance)
  requestToken: async (refreshToken: string) => {
    const res = await axios.post(`${API_URL}/users/request-token`, { refreshToken });
    return res.data;
  },

  // Đổi mật khẩu
  changePassword: async (oldPassword: string, newPassword: string) => {
    const res = await axiosInstance.put("/users/change-password", {
      oldPassword,
      newPassword
    });
    return res.data;
  },

  // Gửi OTP qua email
  sendEmailOTP: async (email: string, purpose: "register" | "verify" | "forgot_password") => {
    const res = await axios.post(`${API_URL}/users/send-otp`, { email, purpose });
    return res.data;
  },

  // Xác thực OTP
  verifyOTP: async (emailOrPhone: string, otp: string) => {
    const isEmail = emailOrPhone.includes("@");
    const payload: VerifyOtpPayload = isEmail
      ? { otp, email: emailOrPhone }
      : { otp, phone: emailOrPhone };

    const res = await axios.post(`${API_URL}/users/verify-otp`, payload);
    return res.data;
  },

  // Lấy profile từ token
  getProfile: async () => {
    const res = await axiosInstance.get("/users/profile");
    return res.data;
  }
};
