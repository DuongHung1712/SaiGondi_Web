'use client';

import React from 'react';
import Image from 'next/image';

const bloggers = [
  { id: 1, src: '/avatar.svg', position: 'top-[200px] left-[9%]', size: 90 },
  { id: 2, src: '/avatar2.svg', position: 'top-[340px] left-[21%]', size: 140 },
  { id: 3, src: '/avatar3.svg', position: 'top-[190px] left-[33.5%]', size: 118 },
  { id: 4, src: '/avatar.svg', highlight: true, position: 'top-[270px] left-[46%]', size: 140 },
  { id: 5, src: '/avatar5.svg', position: 'top-[200px] left-[60%]', size: 135 },
  { id: 6, src: '/avatar6.svg', position: 'top-[360px] left-[73%]', size: 116 },
  { id: 7, src: '/avatar7.svg', position: 'top-[200px] left-[84%]', size: 116 },
];

const blueDots = [
  { top: 'top-[400px]', left: 'left-[16.5%]', size: 23 },
  { top: 'top-[250px]', left: 'left-[31%]', size: 13 },
  { top: 'top-[270px]', left: 'left-[56.5%]', size: 20 },
  { top: 'top-[450px]', left: 'left-[71%]', size: 12 },
  { top: 'top-[200px]', left: 'left-[82.6%]', size: 10 },
{ top: 'top-[340px]', left: 'left-[94.6%]', size: 18 },
];


export default function HotBloggerSection() {
  return (
    <section className="relative px-4 pt-10 pb-[450px]">
      <div className="relative z-20 mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold font-inter text-gray-800 mb-6">Hot Blogger</h2>
      </div>

      <div className="absolute top-40 left-0 w-full h-[350px] z-0 pointer-events-none select-none">
        <Image
          src="/wave-path.svg"
          alt="Wave Path"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

    <div className="absolute top-0 left-0 w-full h-[100%] z-10">
    {blueDots.map((dot, index) => (
        <div
        key={index}
        className={`absolute ${dot.top} ${dot.left} rounded-full bg-blue-500`}
        style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
        }}
        />
    ))}
    </div>

    <div className="absolute top-0 left-0 w-full h-[100%] z-20">
    {bloggers.map((blogger) => (
        <div
        key={blogger.id}
        className={`absolute ${blogger.position} rounded-full ${
            blogger.highlight ? 'border-4 border-yellow-400' : ''
        } shadow-lg overflow-hidden`}
        style={{
            width: blogger.size,
            height: blogger.size,
        }}
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
