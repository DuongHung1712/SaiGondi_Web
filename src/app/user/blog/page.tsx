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
    <main className="relative overflow-hidden">
      {/* blur */}
      <div className="absolute w-[500px] h-[500px] bg-[var(--secondary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: '270px', left: '-240px' }} />
      <div className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: '600px', left: '1200px' }} />
      <div className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: '1100px', left: '-60px' }} />
      <div className="absolute w-[500px] h-[500px] bg-[var(--secondary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: '2000px', left: '1300px' }} />
      <div className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: '2500px', left: '-60px' }} />
      
      <Image
        src="/city-bg.svg"
        alt="city-bg"
        width={355}
        height={216}
        className="absolute left-[-100] top-[535px] z-0 pointer-events-none"
      />
      <Image
        src="/Graphic_Elements.svg"
        alt="Graphic_Elements"
        width={192}
        height={176}
        className="absolute left-[1420] top-[875px] z-0 pointer-events-none"
      />
      <Image
        src="/Graphic_Elements.svg"
        alt="Graphic_Elements"
        width={192}
        height={176}
        className="absolute left-[1420] top-[2800px] z-0 pointer-events-none"
      />

      {/* nội dung trang page */}
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
