'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from 'react-icons/fa';

const features = [
  {
    icon: <FaMapMarkerAlt className="text-orange-500" size={20} />,
    date: '17/09/2024',
    title: 'Khám phá Phường Bàn có những điều mình chưa',
    author: 'Quốc Hùng',
    location: 'Phường Bàn Cờ • Bình Thạnh(25)',
    active: true,
  },
  {
    icon: <FaCalendarAlt className="text-orange-500" size={20} />,
    date: '17/09/2024',
    title: 'Khám phá Phường Bàn có những điều mình chưa',
    author: 'Quốc Hùng',
    location: 'Phường Bàn Cờ • Bình Thạnh(25)',
    active: true,
  },
  {
    icon: <FaUser className="text-orange-500" size={20} />,
    date: '17/09/2024',
    title: 'Khám phá Phường Bàn có những điều mình chưa',
    author: 'Quốc Hùng',
    location: 'Phường Bàn Cờ • Bình Thạnh(25)',
    active: true,
  },
  {
    icon: <FaMapMarkerAlt className="text-orange-500" size={20} />,
    date: '17/09/2024',
    title: 'Khám phá Phường Bàn có những điều mình chưa',
    author: 'Quốc Hùng',
    location: 'Phường Bàn Cờ • Bình Thạnh(25)',
    active: true,
  },
];

const PopularPostsSection = () => {
  return (
    <section className="relative px-4 py-20">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold font-inter text-gray-800">CÁC BÀI VIẾT ĐƯỢC XEM NHIỀU NHẤT</h1>
            <Button
                variant="outline-primary"
                className="bg-[var(--white)] text-[var(--black-1)] h-10 text-xs font-medium px-3 py-1 justify-center rounded-none">
                  Xem tất cả
            </Button>
        </div>
        <p className="text-gray-600 mb-6 font-inter">Cùng xem các bài viết được xem nhiều nhất hôm nay</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden relative">
              <Image src="/city-2.svg" alt="Cityscape" width={300} height={200} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                  <span>{item.date}</span>
                </div>
                 <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                 <span>{item.title}</span>
                 </div>
                <p className="text-gray-800 font-semibold">{item.author}</p>
                <div className="flex items-center text-xs text-gray-500 mt-2">
                  <span className="flex items-center">
                    {item.icon}
                    {item.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularPostsSection;