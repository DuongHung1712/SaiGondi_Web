'use client';

import React, { useEffect, useState } from "react";
import RecentPostCard from "./RecentPostCard";
import { blogApi } from "@/lib/blog/blogApi";
import { Post } from "@/types/blog";

function mapBlogToPost(blog: any): Post {
  return {
    id: blog._id,
    slug: blog.slug,
    title: blog.title,
    image: blog.mainImage,
    category: blog.categories?.[0] || "Chưa phân loại",
    author: blog.authorId ? `${blog.authorId.firstName} ${blog.authorId.lastName}` : "Ẩn danh",
    authorAvatar: blog.authorId?.avatar || "/default-avatar.png",
    date: blog.createdAt,
    address: blog.locationDetail || "",
    content: blog.content?.find((c: any) => c.type === "text")?.value || ""
  };
}

const RecentPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await blogApi.getBlogs({ limit: 5, sort: "-createdAt" });
        setPosts(res.data.map(mapBlogToPost));
      } catch (err) {
        console.error("Lỗi khi lấy recent posts:", err);
      }
    }

    fetchBlogs();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">BÀI VIẾT MỚI ĐĂNG</h2>
      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <RecentPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
