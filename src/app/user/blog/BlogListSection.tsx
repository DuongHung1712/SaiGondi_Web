'use client';

import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Button from "@/components/ui/Button";
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

type BlogListSectionProps = {
  activeCategoryKey: string;
};

const BlogListSection = ({ activeCategoryKey }: BlogListSectionProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await blogApi.getBlogs();
        let blogs: Post[] = res.data.map(mapBlogToPost);

        if (activeCategoryKey !== "all") {
          blogs = blogs.filter((b: Post) => b.category === activeCategoryKey);
        }

        setPosts(blogs);
      } catch (err) {
        console.error("Lỗi khi lấy blogs:", err);
      }
    }

    fetchBlogs();
  }, [activeCategoryKey]);

  return (
    <section className="px-4 pb-10 max-w-7xl mx-auto">
      <div className="space-y-2 border border-[var(--gray-5)] shadow-lg">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Button variant="primary">Show more results</Button>
      </div>
    </section>
  );
};

export default BlogListSection;
