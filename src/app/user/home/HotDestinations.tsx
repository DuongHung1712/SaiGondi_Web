'use client';

import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { HiLocationMarker } from 'react-icons/hi';

const destinations = [
  {
    title: 'PHƯỜNG THỦ ĐỨC',
    location: 'Phường Bàn Cờ',
    distance: 'Cách bạn 90m',
    image: '/hot-destination.svg',
  },
  {
    title: 'PHƯỜNG BÀN CỜ',
    location: 'Phường Bàn Cờ',
    distance: 'Cách bạn 90m',
    image: '/hot-destination.svg',
  },
  {
    title: 'PHƯỜNG BẾN NGHÉ',
    location: 'Phường Bàn Cờ',
    distance: 'Cách bạn 90m',
    image: '/hot-destination.svg',
  },
  {
    title: 'PHƯỜNG LINH XUÂN',
    location: 'Phường Bàn Cờ',
    distance: 'Cách bạn 90m',
    image: '/hot-destination.svg',
  },
];

const HotDestinations = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-[#D0E4FF] to-[var(--background)]">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-2xl font-bold font-inter text-[var(--black-1)] mb-1">Điểm đến hot</h2>
            <p className="text-sm text-[var(--gray-3)] font-inter">Kỳ nghỉ giúp bạn có trải nghiệm thú vị tại Sài Gòn!</p>
          </div>
          <Button
            variant="outline-primary"
            className="text-sm px-4 py-1.5 h-fit"
          >
            Xem tất cả
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {destinations.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-[300px] rounded-2xl border border-white/20 bg-white/10 backdrop-blur-[12px] shadow-lg hover:shadow-xl transition p-4"
            >
              <div className="space-y-3">
                <div className="relative mx-[-8px] w-[calc(100%+16px)] h-[160px] rounded-2xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div>
                  <p className="text-xs text-[var(--gray-3)] mb-1 flex items-center gap-1">
                    <HiLocationMarker className="w-3.5 h-3.5 text-[var(--primary)]" />
                    {item.location}
                  </p>
                  <h3 className="text-sm font-bold text-[var(--black-1)] mb-1">{item.title}</h3>
                  <p className="text-xs text-[var(--gray-3)]">{item.distance}</p>
                </div>
              </div>

              <div className="mt-4">
                <Button
                  variant="outline-primary"
                  className="text-xs font-medium px-3 py-1 w-full justify-center"
                >
                  Xem chi tiết
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HotDestinations;
