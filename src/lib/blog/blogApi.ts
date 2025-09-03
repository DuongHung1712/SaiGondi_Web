// src/lib/blog/blogApi.ts
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

export const blogApi = {
  // Lấy danh sách blog (có phân trang + lọc theo query)
  // getBlogs: async (token: string, query?: Record<string, any>) => { //có token
  //   const res = await axios.get(`${API_URL}/blogs`, {
  //     headers: { Authorization: `Bearer ${token}` },
  //     params: query
  //   });
  //   return res.data;
  // },
  getBlogs: async (query?: Record<string, any>) => { //không token
    const res = await axios.get(`${API_URL}/blogs`, {
      params: query
    });
    return res.data;
  },

  // Lấy chi tiết blog theo id
  getBlogById: async (id: string) => {
    const res = await axios.get(`${API_URL}/blogs/${id}`);
    return res.data;
  },

  // Lấy chi tiết blog theo slug
  getBlogBySlug: async (slug: string) => {
    const res = await axios.get(`${API_URL}/blogs/slug/${slug}`);
    return res.data;
  },

  // Tạo blog mới
  createBlog: async (formData: FormData, token: string) => {
    const res = await axios.post(`${API_URL}/blogs`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    });
    return res.data;
  },

  // Cập nhật blog
  updateBlog: async (id: string, formData: FormData, token: string) => {
    const res = await axios.put(`${API_URL}/blogs/${id}`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data"
      }
    });
    return res.data;
  },

  // Xóa blog
  deleteBlog: async (id: string, token: string) => {
    const res = await axios.delete(`${API_URL}/blogs/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  },

  // Like hoặc bỏ like blog
  likeBlog: async (id: string, token: string) => {
    const res = await axios.patch(
      `${API_URL}/blogs/${id}/like`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  },

  // Chia sẻ blog
  shareBlog: async (id: string, token: string) => {
    const res = await axios.post(
      `${API_URL}/blogs/${id}/share`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  },

  // Cập nhật quyền riêng tư blog
  updateBlogPrivacy: async (id: string, privacy: "public" | "private", token: string) => {
    const res = await axios.patch(
      `${API_URL}/blogs/${id}/privacy`,
      { privacy },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  },

  // Cập nhật trạng thái blog (vd: draft/published)
  updateBlogStatus: async (id: string, status: string, token: string) => {
    const res = await axios.patch(
      `${API_URL}/blogs/${id}/status`,
      { status },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  },

  // Lấy danh sách blog theo tác giả
  getBlogsByAuthor: async (authorId: string, token: string) => {
    const res = await axios.get(`${API_URL}/blogs/author/${authorId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
  }
};
