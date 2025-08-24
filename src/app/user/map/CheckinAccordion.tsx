'use client';

import React, { useState } from 'react';
import DestinationCard from '@/components/cards/DestinationCard';
import { FiMinus, FiPlus } from 'react-icons/fi';

type PlaceGroup = {
  group: string;
  destinations: {
    title: string;
    location: string;
    distance: string;
    image: string;
  }[];
};

const data: PlaceGroup[] = [
  {
    group: 'Phường Vũng Tàu',
    destinations: [
      { title: 'PHƯỜNG LINH XUÂN', location: 'Phường Bàn Cờ', distance: 'Cách bạn 90m', image: '/hot-destination.svg' },
      { title: 'PHƯỜNG LINH XUÂN', location: 'Phường Bàn Cờ', distance: 'Cách bạn 90m', image: '/hot-destination.svg' },
      { title: 'PHƯỜNG LINH XUÂN', location: 'Phường Bàn Cờ', distance: 'Cách bạn 90m', image: '/hot-destination.svg' },
      { title: 'PHƯỜNG LINH XUÂN', location: 'Phường Bàn Cờ', distance: 'Cách bạn 90m', image: '/hot-destination.svg' },
    ],
  },
  { group: 'Phường Chợ Lớn', destinations: [] },
  { group: 'Phường Tân Đông Hoà', destinations: [] },
  { group: 'Phường Thủ Đức', destinations: [] },
  { group: 'Phường Cầu Kiệu', destinations: [] },
];

const CheckinAccordion = () => {
  const [openGroup, setOpenGroup] = useState<string | null>(data[0].group);

  const toggleGroup = (group: string) => {
    setOpenGroup(openGroup === group ? null : group);
  };

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold">CÁC ĐỊA ĐIỂM BẠN ĐÃ CHECKIN</h2>
          <p className="text-sm text-gray-500 mt-5">
            Kỳ nghỉ giúp bạn có trải nghiệm thú vị tại Sài Gòn!
          </p>
        </div>
        <div className="space-y-6">
          {data.map((item) => {
            const isOpen = openGroup === item.group;

            return (
              <div
                key={item.group}
                className={`overflow-hidden rounded-lg transition-all duration-300 ${
                  isOpen ? "mb-6" : "mb-3"
                }`}
              >
                <button
                  onClick={() => toggleGroup(item.group)}
                  className={`w-full flex items-center justify-between px-4 py-3 font-medium text-left transition-all duration-300 ${
                    isOpen
                      ? "bg-[#91B9FF] rounded-lg text-2xl"
                      : "bg-[#F2F7FF]"
                  }`}
                >
                  <span>{item.group}</span>
                  <span className="text-2xl">
                    {isOpen ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>

                {isOpen && item.destinations.length > 0 && (
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#F2F7FF]" />
                    <div className="relative p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {item.destinations.map((d, idx) => (
                        <DestinationCard key={idx} {...d} />
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default CheckinAccordion;
