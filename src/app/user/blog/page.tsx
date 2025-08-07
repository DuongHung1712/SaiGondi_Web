'use client';

import { useState } from 'react';
import { dataBlogPosts } from '@/data/data';
import FeaturedPost from './FeaturedPost';
import SearchBox from '@/components/ui/SearchBox';
import CategorySection from './CategorySection';
import BlogListSection from './BlogListSection';
import RecentPosts from './RecentPosts';
import FeaturedBloggers from './FeaturedBloggers';
import Image from 'next/image';

export default function BlogPage() {
  const featuredPosts = dataBlogPosts.slice(0, 3);
  const [activeCategoryKey, setActiveCategoryKey] = useState('all');
  
  return (
    <main>
      <div className="absolute -bottom-6 left-[-75] w-[280px] h-[200px] z-0">
        <Image
          src="/city-bg.svg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>
      <div className="absolute top-234 right-[-98] w-[200px] h-[200px]">
        <Image
          src="/Graphic_Elements.svg"
          alt="Background"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="absolute top-558 right-[-98] w-[200px] h-[200px]">
        <Image
          src="/Graphic_Elements.svg"
          alt="Background"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <FeaturedPost posts={featuredPosts} />
      <div className='max-w-5xl mx-auto'>
        <SearchBox />
      </div>
      
      <CategorySection
        activeTab={activeCategoryKey}
        onChangeTab={setActiveCategoryKey}
      />
      <div className='max-w-7xl mx-auto'>
        <div className="flex flex-col lg:flex-row gap-6 mt-6">
          <div className="flex-1">

            <BlogListSection activeCategoryKey={activeCategoryKey} />
          </div>
          <div className="w-full lg:w-80">
            <RecentPosts />
            <FeaturedBloggers />
          </div>
        </div>
      </div>
    </main>
  );
}
