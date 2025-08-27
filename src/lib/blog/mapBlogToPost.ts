// src/lib/blog/mapBlogToPost.ts

import { Post } from "@/types/blog";

export function mapBlogToPost(blog: any): Post {
  return {
    id: blog._id,
    slug: blog.slug,
    title: blog.title,
    image: blog.mainImage,
    category: blog.categories?.[0] || "Chưa phân loại",
    author: blog.authorId 
      ? `${blog.authorId.firstName} ${blog.authorId.lastName}` 
      : "Ẩn danh",
    authorAvatar: blog.authorId?.avatar || "",
    date: blog.createdAt,
    address: blog.locationDetail || "",
    content: blog.content?.find((c: any) => c.type === "text")?.value || ""
  };
}
