'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { IoChatbubbles } from 'react-icons/io5';
import { HiLocationMarker } from 'react-icons/hi';

const features = [
  { date: '17/09/2024', title: 'Khám phá Phường Bình Thạnh có những điều mình chưa', name: 'Quốc Hưng', location: 'Phường Bình Thạnh', comments: 'Bình luận (25)' },
  { date: '17/09/2024', title: 'Khám phá Phường Bình Thạnh có những điều mình chưa', name: 'Quốc Hưng', location: 'Phường Bình Thạnh', comments: 'Bình luận (25)' },
  { date: '17/09/2024', title: 'Khám phá Phường Bình Thạnh có những điều mình chưa', name: 'Quốc Hưng', location: 'Phường Bình Thạnh', comments: 'Bình luận (25)' },
  { date: '17/09/2024', title: 'Khám phá Phường Bình Thạnh có những điều mình chưa', name: 'Quốc Hưng', location: 'Phường Bình Thạnh', comments: 'Bình luận (25)' },
];

const PopularPostsSection = () => {
  return (
    <section className="relative px-4 pt-20 pb-60">
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="flex items-start justify-between flex-wrap gap-3 mb-6">
          <h1 className="text-3xl font-bold font-inter text-gray-800 leading-tight">
            CÁC BÀI VIẾT ĐƯỢC XEM NHIỀU NHẤT
          </h1>

          <Button
            variant="outline-primary"
            className="bg-white text-black h-10 text-xs sm:text-sm font-medium px-3 py-1 rounded-none ml-auto"
          >
            Xem tất cả
          </Button>
        </div>

        <p className="text-gray-600 mb-6 font-inter text-sm sm:text-base">
          Cùng xem các bài viết được xem nhiều nhất hôm nay
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-45 sm:gap-y-20">
          {features.map((item, index) => (
            <div key={index} className="relative py-6">
              <div className="absolute bottom-0 left-0 w-full h-70 z-0">
                <Image
                  src="/city-2.svg"
                  alt="Cityscape"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="bg-white left-3 shadow-lg overflow-hidden relative z-10 translate-y-45 w-[85%] ml-0 mt-8 mb-6">
                <div className="absolute top-6 left-0 w-1 h-10 bg-[var(--warning)] z-20" />
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-[var(--warning)] mb-3 sm:mb-4">
                    <span>{item.date}</span>
                  </div>

                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1 leading-snug">
                      {item.title}
                    </h3>

                    <div className="flex items-center space-x-2">
                      <Image
                        src="/avatar.svg"
                        alt="Avatar"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <p className="text-gray-800 text-[12px] sm:text-sm font-inter">
                        {item.name}
                      </p>
                    </div>

                    <div className="flex justify-between items-center text-[10px] sm:text-[11px] text-gray-500 mt-2 whitespace-nowrap">
                      <span className="flex items-center gap-1 min-w-0">
                        <HiLocationMarker className="text-[var(--warning)] shrink-0" />
                        <span className="truncate">{item.location}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <IoChatbubbles className="text-[var(--warning)]" />
                        {item.comments}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block absolute top-42 right-9 w-[200px] h-[200px] pointer-events-none -z-10">
        <Image
          src="/Graphic_Elements.svg"
          alt="Background"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default PopularPostsSection;
