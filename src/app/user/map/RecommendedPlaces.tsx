'use client';

import React from 'react';
import DestinationCard from '@/components/cards/DestinationCard';
import Button from '@/components/ui/Button';

const recommendedPlaces = [
  { title: 'PHƯỜNG THỦ ĐỨC', location: 'Phường Bàn Cờ', distance: 'Cách bạn 90m', image: '/hot-destination.svg' },
  { title: 'PHƯỜNG BÀN CỜ', location: 'Phường Bàn Cờ', distance: 'Cách bạn 90m', image: '/hot-destination.svg' },
  { title: 'PHƯỜNG LINH XUÂN', location: 'Phường Bàn Cờ', distance: 'Cách bạn 90m', image: '/hot-destination.svg' },
];

export default function RecommendedPlaces() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              ĐỊA ĐIỂM GỢI Ý
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Kỳ nghỉ giúp bạn có trải nghiệm thú vị tại Sài Gòn!
            </p>
          </div>
          <Button
            variant="outline-primary"
            className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 h-fit rounded-none sm:static absolute right-4 top-0"
          >
            Xem tất cả
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recommendedPlaces.map((place, idx) => (
            <DestinationCard key={idx} {...place} />
          ))}
        </div>
      </div>
    </section>
  );
}
