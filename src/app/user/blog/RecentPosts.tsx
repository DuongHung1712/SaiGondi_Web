// components/blog/RecentPosts.tsx
'use client';

import React from 'react';
import { dataBlogPosts } from '@/data/data';
import RecentPostCard from './RecentPostCard';

const RecentPosts = () => {
  const sortedPosts = [...dataBlogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">BÀI VIẾT MỚI ĐĂNG</h2>
      <div className="flex flex-col gap-4">
        {sortedPosts.slice(0, 5).map((post) => (
          <RecentPostCard
            key={post.id}
            image={post.image}
            category={post.category}
            title={post.title}
            author={post.author}
            authorAvatar={post.authorAvatar}
            date={post.date}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
