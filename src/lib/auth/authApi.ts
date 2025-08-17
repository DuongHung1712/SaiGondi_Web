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

  // Đổi mật khẩu
  changePassword: async (
    oldPassword: string,
    newPassword: string,
    token: string
  ) => {
    const res = await axios.put(
      `${API_URL}/users/change-password`,
      { oldPassword, newPassword },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return res.data;
  },

  // emailOTP
  sendEmailOTP: async (email: string, purpose: "register" | "verify" | "forgot_password") => {
    const res = await axios.post(`${API_URL}/users/send-otp`, {
      email,
      purpose
    });
    return res.data;
  },

  // Xác thực OTP
  verifyOTP: async (emailOrPhone: string, otp: string) => {
    // Xác định là email hay phone
    const isEmail = emailOrPhone.includes("@");
    
    const payload: any = { otp };
    if (isEmail) {
      payload.email = emailOrPhone;
    } else {
      payload.phone = emailOrPhone;
    }

    console.log("verifyOTP payload:", payload); // Log để debug

    const res = await axios.post(`${API_URL}/users/verify-otp`, payload);
    return res.data;
  }
};
