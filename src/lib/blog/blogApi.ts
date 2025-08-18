// src/lib/blog/blogApi.ts
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const blogApi = {
  createBlog: async (data: {
    title: string;
    content: string;
    categories?: string[];
    media?: string[];
    privacy?: "public" | "private";
  }) => {
    const token = localStorage.getItem("accessToken");
    const res = await axios.post(`${API_URL}/blogs`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  },
};
