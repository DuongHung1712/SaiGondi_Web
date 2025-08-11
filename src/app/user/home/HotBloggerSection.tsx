'use client';

import React from 'react';
import Image from 'next/image';

export default function HotBloggerSection() {
  return (
    <section className="relative px-0 pt-10">
      
      <div className="relative z-20 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold font-inter text-gray-800 mb-6">
          Hot Blogger
        </h2>
      </div>
      <div className="relative w-full z-10 mt-20"> 
        <div className="w-full overflow-hidden">
          <Image
            src="/Avt_list.svg"
            alt="Hot Blogger Avatars"
            layout="responsive"
            width={1600}
            height={500}
            className="object-cover"
            priority
          />
        </div>
      </div>
      
    </section>
  );
}
