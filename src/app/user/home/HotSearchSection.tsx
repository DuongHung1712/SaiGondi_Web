'use client';

import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: '/location.svg',
    title: 'DU LỊCH THỦ ĐỨC',
    description: 'Choose your favorite location',
    active: false,
  },
  {
    icon: '/calendar.svg',
    title: 'LỊCH TRÌNH QUANH SÀI GÒN',
    description: 'Set the date you want',
    active: true,
  },
  {
    icon: '/discount.svg',
    title: 'DU LỊCH TIẾT KIỆM NHẤT',
    description: 'Get discount for every services',
    active: false,
  },
];

const HotSearchSection = () => {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        <div className="space-y-6 z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-inter text-[var(--black-1)] mb-1">
              Tìm kiếm hot
            </h2>
            <p className="text-sm font-inter text-[var(--gray-3)]">
              Những lựa chọn tốt nhất của khách hàng chúng tôi
            </p>
          </div>

          <div className="space-y-4">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-2xl transition ${
                  item.active ? 'bg-white shadow-md' : 'bg-white/60'
                }`}
              >
                <div className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0">
                  <Image src={item.icon} alt="icon" width={64} height={64} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[var(--black-1)]">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[var(--gray-3)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[500px] pb-16">
          <div className="absolute -top-10 left-100 w-[280px] h-[200px] z-0">
            <Image
              src="/city-bg.svg"
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>

          <div className="absolute top-0 right-[160px] w-[300px] h-[350px] rounded-2xl overflow-hidden shadow-xl z-10">
            <Image
              src="/city-1.svg"
              alt="City 1"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="absolute bottom-0 left-80 w-[300px] h-[350px] rounded-2xl overflow-hidden shadow-xl z-20 translate-y-10">
            <Image
              src="/city-2.svg"
              alt="City 2"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotSearchSection;
