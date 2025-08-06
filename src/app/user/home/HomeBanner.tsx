'use client';

import Image from 'next/image';
import React from 'react';
import LocationCard from '@/components/cards/LocationCard';

const locations: {
  title: string;
  district: string;
  image: string;
  size: 'small' | 'medium' | 'large'; 
  height?: number;
  position: string;
}[] = [
  {
    title: 'Phố đi bộ',
    district: 'Quận 1',
    image: '/pdb.svg',
    size: 'small',
    height: 75,
    position: 'top-[100px] right-[220px]',
  },
  {
    title: 'Dinh độc lập',
    district: 'Quận 5',
    image: '/pdb.svg',
    size: 'medium',
    height: 90,
    position: 'top-[235px] right-[10px]',
  },
  {
    title: 'Nhà thờ Đức Bà',
    district: 'Quận 1',
    image: '/ntdb.svg',
    size: 'large',
    height: 120,
    position: 'bottom-[50px] left-[60px]',
  },
];
const HomeBanner = () => {
  return (
    <section className="relative  overflow-hidden bg-transparent py-9">
      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-12 max-w-7xl mx-auto relative z-10">
        <div className="flex-1 space-y-6 z-10 pt-10">
          <h1 className="text-5xl font-inter font-bold leading-tight text-[var(--black-1)]">
            Bắt đầu hành trình của bạn chỉ bằng một cú nhấp chuột, khám phá thế giới tươi đẹp!
          </h1>
          <p className="text-[var(--gray-2)] font-inter text-lg leading-relaxed max-w-[580px]">
            Lên kế hoạch và đặt chuyến đi hoàn hảo của bạn với lời khuyên của chuyên gia, mẹo du lịch, thông tin điểm đến và nguồn cảm hứng từ chúng tôi!
          </p>
        </div>

        <div className="flex-1 relative flex items-center justify-center min-h-[520px]">
          <Image
            src="/banner.svg"
            alt="Decorative Circle"
            width={650}
            height={650}
            className="w-[500px] md:w-[650px] z-0"
          />

          <div className="absolute top-[40px] left-[90px] bg-white p-2 rounded-full shadow-md z-10">
            <Image src="/camera.svg" alt="Camera Icon" width={34} height={34} />
          </div>

          <div className="absolute top-[90px] right-[60px] bg-white px-4 py-2 rounded-full shadow text-gray-700 font-inter font-regular text-sm z-10">
            Quận 9
          </div>
          {locations.map((loc, index) => (
            <div key={index} className={`absolute ${loc.position}`}>
              <LocationCard {...loc} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
