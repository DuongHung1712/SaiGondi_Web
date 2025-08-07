'use client';

import React from 'react';
import Image from 'next/image';

const bloggers = [
  { id: 1, src: '/avatar.svg', position: 'top-[180px] left-[8%]' },
  { id: 2, src: '/avatar2.svg', position: 'top-[400px] left-[22%]' },
  { id: 3, src: '/avatar3.svg', position: 'top-[180px] left-[34%]' },
  { id: 4, src: '/avatar.svg', highlight: true, position: 'top-[320px] left-[47%]' },
  { id: 5, src: '/avatar5.svg', position: 'top-[180px] left-[62%]' },
  { id: 6, src: '/avatar6.svg', position: 'top-[400px] left-[74%]' },
  { id: 7, src: '/avatar7.svg', position: 'top-[180px] left-[85%]' },
];

export default function HotBloggerSection() {
  return (
    <section className="relative px-4 pt-10 pb-[450px] ">
      <div className="relative z-20 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold font-inter text-gray-800 mb-6">Hot Blogger</h2>
      </div>

      {/* Wave background */}
      <div className="absolute top-40 left-0 w-full h-[350px] z-0 pointer-events-none select-none">
        <Image
          src="/wave-path.svg"
          alt="Wave Path"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Avatars */}
      <div className="absolute top-0 left-0 w-full h-[350px] z-10">
        {bloggers.map((blogger) => (
          <div
            key={blogger.id}
            className={`absolute ${blogger.position} w-[100px] h-[100px] rounded-full border-4 ${
              blogger.highlight ? 'border-yellow-400' : 'border-white'
            } shadow-lg overflow-hidden`}
          >
            <Image
              src={blogger.src}
              alt={`Blogger ${blogger.id}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
