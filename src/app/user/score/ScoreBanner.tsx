'use client';

import React from 'react';

export default function ScoreBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="px-6 pt-10">
        <h2 className="text-3xl font-bold leading-snug text-[#2b6fe5]">
          CHINH PHỤC DANH HIỆU
          <br />
          CHO BẢN THÂN
        </h2>
      </div>

      <div className="relative w-full">
        <svg viewBox="0 0 1100 300" className="w-full h-auto">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2b6fe5" />
              <stop offset="25%" stopColor="#f97316" />
              <stop offset="50%" stopColor="#10b981" />
              <stop offset="100%" stopColor="#a855f7" />
            </linearGradient>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <path
            d="M0 250 L1100 0 L1100 300 L0 300 Z"
            fill="url(#grad1)"
            opacity="0.05"
          />

          <path
            d="M0,250 C200,250 250,180 350,120 S550,160 700,140 S900,100 1100,40"
            stroke="url(#lineGradient)"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            filter="url(#glow)"
          />

          <circle cx="80" cy="250" r="14" fill="#fff" stroke="#2b6fe5" strokeWidth="4" />
          <circle cx="350" cy="120" r="14" fill="#fff" stroke="#f97316" strokeWidth="4" />
          <circle cx="700" cy="140" r="14" fill="#fff" stroke="#10b981" strokeWidth="4" />
          <circle cx="1050" cy="40" r="14" fill="#fff" stroke="#a855f7" strokeWidth="4" />
        </svg>

        <div className="absolute left-[60px] top-[200px] text-center">
          <div className="text-indigo-600 font-bold">TÂN KHÁM PHÁ</div>
          <div className="text-gray-500 text-xs">0Đ</div>
        </div>

        <div className="absolute left-[320px] top-[60px] text-center">
          <div className="text-orange-500 font-bold">KHÁM PHÁ VIÊN</div>
          <div className="text-gray-500 text-xs">100 ĐIỂM</div>
        </div>

        <div className="absolute left-[670px] top-[80px] text-center">
          <div className="text-green-600 font-bold">THỔ ĐỊA</div>
          <div className="text-gray-500 text-xs">300 ĐIỂM</div>
        </div>

        <div className="absolute left-[1020px] top-[-10px] text-center">
          <div className="text-purple-600 font-bold">NHÀ THÁM HIỂM</div>
          <div className="text-gray-500 text-xs">600 ĐIỂM</div>
        </div>
      </div>
    </section>
  );
}
