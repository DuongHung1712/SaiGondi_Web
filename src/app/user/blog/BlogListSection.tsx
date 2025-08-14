'use client';

import React from 'react';
import { dataBlogPosts } from '@/data/data';
import BlogCard from './BlogCard';
import Button from '@/components/ui/Button';

type BlogListSectionProps = {
  activeCategoryKey: string;
};

const BlogListSection = ({ activeCategoryKey }: BlogListSectionProps) => {
  const filteredPosts =
    activeCategoryKey === 'all'
      ? dataBlogPosts
      : dataBlogPosts.filter((p) => p.category === activeCategoryKey);

  return (
    <section className="px-4 pb-10 max-w-7xl mx-auto">
      <div className="space-y-2 border border-[var(--gray-5)] shadow-lg">
        {filteredPosts.map((post) => (
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
