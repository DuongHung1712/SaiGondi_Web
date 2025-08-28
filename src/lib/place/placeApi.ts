import axios from "axios";
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const placeApi = {
  getAll: async () => {
    const res = await axios.get(`${API_URL}/places`);
    return res.data.data; 
  },
};
