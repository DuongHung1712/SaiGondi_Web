import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const checkinApi = {
  getUserCheckins: async () => {
    const token = localStorage.getItem("accessToken");
    const res = await axios.get(`${API_URL}/me/checkins`, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    return res.data.data;
  },
};
