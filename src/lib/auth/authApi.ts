import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// Kiểu cho payload verify OTP
type VerifyOtpPayload =
  | { otp: string; email: string }
  | { otp: string; phone: string };

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

  // Đăng xuất
  logout: async (token: string) => {
    const res = await axios.post(
      `${API_URL}/users/logout`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return res.data;
  },

  // Refresh token
  requestToken: async (refreshToken: string) => {
    const res = await axios.post(`${API_URL}/users/request-token`, {
      refreshToken,
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

    let payload: VerifyOtpPayload;
    if (isEmail) {
      payload = { otp, email: emailOrPhone };
    } else {
      payload = { otp, phone: emailOrPhone };
    }

    console.log("verifyOTP payload:", payload); // Debug

    const res = await axios.post(`${API_URL}/users/verify-otp`, payload);
    return res.data;
  },

  // Lấy thông tin profile theo token
  getProfile: async (token: string) => {
    const res = await axios.get(`${API_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': '0',
      },
    });
    return res.data;
  },
};