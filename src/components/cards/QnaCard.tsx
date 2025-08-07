'use client';

import Image from 'next/image';
import { FcGoogle } from 'react-icons/fc';
import React, { useState } from 'react';

export interface QnaCardProps {
  title: string;
  description: string;
  author: string;
  imageUrl: string;
  sourceIcon?: React.ReactNode;
  sourceText?: string;
}

export default function QnaCard({
  title,
  description,
  author,
  imageUrl,
  sourceIcon = <FcGoogle />,
  sourceText = 'Google',
}: QnaCardProps) {
  const [expanded] = useState(false);

  return (
    <div className="relative mx-2">
      <div className="absolute right-0 bottom-0 w-full h-full bg-[#307AFD63] rounded-[20px] z-0 translate-x-2 translate-y-6 left-3" />

      <div className="relative bg-white w-full max-w-[320px] mx-auto rounded-[20px] p-5 shadow-lg z-10 transition-all duration-300">
        <h3 className="text-[17px] font-bold text-gray-900 mb-5 leading-snug">{title}</h3>

        <div
          className={`text-xs text-gray-600 mb-5 leading-snug ${
            expanded ? '' : 'line-clamp-2'
          }`}
        >
          {description}
        </div>
        <div className="flex flex-col gap-1 mb-4">
          <span className="text-sm font-semibold font-inter">{author}</span>
          <div className="flex items-center gap-2">
            {sourceIcon}
            <span className="text-xs text-gray-700">{sourceText}</span>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt={title}
          width={400}
          height={200}
          className="rounded-xl w-full h-40 object-cover"
        />
      </div>
    </div>
  );
}
