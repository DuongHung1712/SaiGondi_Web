'use client';

import Image from 'next/image';
import React from 'react';
import LocationCard from '@/components/cards/LocationCard';

type Loc = {
  title: string;
  district: string;
  image: string;
  size: 'small' | 'medium' | 'large';
  height?: number;
  position: string;        
  positionMobile: string;  
};

const locations: Loc[] = [
  {
    title: 'Phố đi bộ',
    district: 'Quận 1',
    image: '/pdb.svg',
    size: 'small',
    height: 75,
    position: 'top-[100px] right-[220px]',
    positionMobile: 'top-[50px] right-[90px]',
  },
  {
    title: 'Dinh độc lập',
    district: 'Quận 5',
    image: '/pdb.svg',
    size: 'medium',
    height: 90,
    position: 'top-[260px] left-[415px]',
    positionMobile: 'top-[140px] left-[30px]',
  },
  {
    title: 'Nhà thờ Đức Bà',
    district: 'Quận 1',
    image: '/ntdb.svg',
    size: 'large',
    height: 120,
    position: 'bottom-[50px] left-[60px]',
    positionMobile: 'bottom-[20px] left-[10px]',
  },
];

const HomeBanner = () => {
  return (
    <section className="relative bg-transparent py-9">
      {/* lề trái/phải cố định: px-6 (24px) trên mọi kích thước */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10">
          <div className="flex-1 space-y-5 z-10 pt-6 md:text-left">
            <h1 className="font-inter font-bold leading-tight text-[var(--black-1)] text-3xl sm:text-4xl md:text-5xl">
              Bắt đầu hành trình của bạn chỉ bằng một cú nhấp chuột, khám phá thế giới tươi đẹp!
            </h1>
            <p className="text-[var(--gray-2)] font-inter leading-relaxed max-w-[580px] mx-auto md:mx-0 text-base sm:text-lg">
              Lên kế hoạch và đặt chuyến đi hoàn hảo của bạn với lời khuyên của chuyên gia, mẹo du lịch, thông tin điểm đến và nguồn cảm hứng từ chúng tôi!
            </p>
          </div>

          <div className="flex-1 relative flex items-center justify-center min-h-[360px] md:min-h-[520px]">
            <Image
              src="/banner.svg"
              alt="Decorative Circle"
              width={650}
              height={650}
              className="z-0 w-[340px] sm:w-[440px] md:w-[650px]"
              priority
            />
            <div className="absolute bg-white p-2 rounded-full shadow-md z-10 top-[28px] left-[50px] md:top-[40px] md:left-[90px]">
              <Image src="/camera.svg" alt="Camera Icon" width={34} height={34} />
            </div>

            <div className="absolute bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow text-gray-700 font-inter text-xs md:text-sm z-10 top-[70px] right-[30px] md:top-[90px] md:right-[60px]">
              Quận 9
            </div>

            <div className="absolute inset-0 pointer-events-none transform scale-90 md:scale-100">
              {locations.map((loc, index) => (
                <div
                  key={index}
                  className={`absolute ${loc.positionMobile} md:${loc.position}`}
                >
                  <LocationCard {...loc} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
