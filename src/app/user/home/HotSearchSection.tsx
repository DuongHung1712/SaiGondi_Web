'use client';

import React from 'react';
import Image from 'next/image';

const features = [
  { icon: '/location.svg', title: 'DU LỊCH THỦ ĐỨC', description: 'Choose your favorite location', active: false },
  { icon: '/calendar.svg', title: 'LỊCH TRÌNH QUANH SÀI GÒN', description: 'Set the date you want', active: true },
  { icon: '/discount.svg', title: 'DU LỊCH TIẾT KIỆM NHẤT', description: 'Get discount for every services', active: false },
];

const HotSearchSection = () => {
  return (
    <section className="px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        {/* LEFT */}
        <div className="space-y-6 z-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold font-inter text-[var(--black-1)] mb-1">
              Tìm kiếm hot
            </h2>
            <p className="text-xs md:text-sm font-inter text-[var(--gray-3)]">
              Những lựa chọn tốt nhất của khách hàng chúng tôi
            </p>
          </div>

          <div className="space-y-3 md:space-y-4">
            {features.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl transition ${
                  item.active ? 'bg-white shadow-md' : 'bg-white/60'
                }`}
              >
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center shrink-0">
                  <Image src={item.icon} alt="icon" width={64} height={64} className="w-8 h-8 md:w-12 md:h-12" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-semibold text-[var(--black-1)]">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[var(--gray-3)]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative w-full h-[380px] sm:h-[420px] md:h-[500px] pb-8 md:pb-16">
          <div
            className="
              absolute top-[-20px] left-[140px]  /* mobile chỉnh ở đây */
              w-[200px] h-[140px] z-0
              md:-top-20 md:left-[390px] md:translate-x-0 md:w-[280px] md:h-[200px]
            "
          >
            <Image
              src="/city-bg.svg"
              alt="Background"
              fill
              className="object-cover rounded-2xl"
            />
          </div>

          <div
            className="
              absolute top-[30px] left-[3px]  /* mobile chỉnh ở đây */
              w-[220px] h-[260px]
              rounded-2xl overflow-hidden shadow-xl z-10
              md:top-0 md:right-[90px] md:left-auto md:translate-x-0
              md:w-[300px] md:h-[350px]
            "
          >
            <Image
              src="/city-1.svg"
              alt="City 1"
              fill
              className="object-cover"
            />
          </div>

          <div
            className="
              absolute top-[180px] left-[70px]  /* mobile chỉnh ở đây */
              w-[220px] h-[260px]
              rounded-2xl overflow-hidden shadow-xl z-20
              md:bottom-0 md:left-80 md:translate-x-0 md:w-[300px] md:h-[350px] md:translate-y-10
            "
          >
            <Image
              src="/city-2.svg"
              alt="City 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HotSearchSection;
