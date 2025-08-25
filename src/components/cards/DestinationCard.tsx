'use client';

import React from 'react';
import Image from 'next/image';
import { HiLocationMarker } from 'react-icons/hi';
import Button from '@/components/ui/Button';

type DestinationCardProps = {
  title: string;
  location: string;
  distance: string;
  image: string;
};

const DestinationCard: React.FC<DestinationCardProps> = ({ title, location, distance, image }) => {
  return (
    <div className="flex flex-col h-full rounded-2xl bg-white/10 backdrop-blur-[12px] shadow-lg hover:shadow-xl transition border-2 border-white overflow-hidden">
      <div className="relative w-full aspect-[4/3]">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="flex flex-col justify-between flex-1 p-4 sm:p-5">
        <div className="space-y-1.5 sm:space-y-2.5">
          <p className="text-[11px] sm:text-xs text-[var(--gray-3)] flex items-center gap-1">
            <HiLocationMarker className="w-3.5 h-3.5 text-blue-500" />
            {location}
          </p>
          <h3 className="text-sm sm:text-base font-bold text-[var(--black-1)]">{title}</h3>
          <p className="text-[11px] sm:text-xs text-[var(--gray-3)]">{distance}</p>
        </div>

        <div className="mt-3 sm:mt-4">
          <Button
            variant="outline-primary"
            className="bg-[var(--white)] text-[var(--primary)] text-xs sm:text-sm font-medium px-4 py-1.5 w-full justify-center rounded-none border-none"
          >
            XEM CHI TIẾT
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
