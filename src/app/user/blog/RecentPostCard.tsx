// components/blog/RecentPostCard.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { FiClock } from 'react-icons/fi';

type RecentPostCardProps = {
  image: string;
  category: string;
  title: string;
  author: string;
  authorAvatar: string; 
  date: string;
};

const RecentPostCard = ({
  image,
  category,
  title,
  author,
  authorAvatar,
  date,
}: RecentPostCardProps) => {
  return (
    <div className="flex gap-3">
      <div className="w-22 h-22 relative rounded overflow-hidden flex-shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-xs text-green-700 bg-green-100 px-2 py-0.5 rounded w-fit mb-1">
          {category}
        </span>
        <h3 className="text-sm font-semibold leading-tight line-clamp-2">
          {title}
        </h3>
              <div className="flex items-center gap-2 text-xs text-gray-600 mt-1">
                  
          <Image
              src={authorAvatar}
              alt={author}
              width={16}
              height={16}
              className="object-cover rounded-full"
          />
          <span>{author}</span>
          <span className="mx-1">|</span>
          <span className="flex items-center gap-1">
            <FiClock className="text-gray-500" />
            {new Date(date).toLocaleDateString('vi-VN')}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecentPostCard;
