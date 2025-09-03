// src/lib/blog/mapBlogToPost.ts

import { Post } from "@/types/blog";

export function mapBlogToPost(blog: any): Post {
  return {
    id: blog._id,
    slug: blog.slug,
    title: blog.title,
    image: blog.mainImage || "/Logo.svg",

    // categories
    category: blog.categories?.[0] || "Chưa phân loại",
    categories: blog.categories || [],
    tags: blog.tags || [],

    // author
    author: typeof blog.authorId === "object"
      ? `${blog.authorId.firstName || ""} ${blog.authorId.lastName || ""}`.trim() || "Ẩn danh"
      : "Ẩn danh",
    authorAvatar: typeof blog.authorId === "object"
      ? blog.authorId.avatar || "/Logo.svg"
      : "/Logo.svg",

    // time & location
    date: blog.createdAt,
    address: blog.locationDetail || blog.ward?.name || blog.province || "",

    // content & album
    content: blog.content || [],
    album: blog.album || [],

    // privacy & interactions
    privacy: blog.privacy || "public",
    totalLikes: blog.totalLikes || 0,
    totalComments: blog.totalComments || 0,
    shareCount: blog.shareCount || 0,
    viewCount: blog.viewCount || 0,

    // status
    status: blog.status || "pending",
  };
}
