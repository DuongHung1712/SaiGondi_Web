'use client';

import { useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Image from 'next/image';

export default function AchievementSection() {
  const badges = [
    { title: 'TÂN KHÁM PHÁ', status: 'Đã chinh phục', active: true, progress: 100 },
    { title: 'KHÁM PHÁ VIÊN', status: 'Đã chinh phục', active: true, progress: 85 },
    { title: 'THỔ ĐỊA', status: 'Còn thiếu 80 điểm', active: false, progress: 60 },
    { title: 'NHÀ THÁM HIỂM', status: 'Còn thiếu 380 điểm', active: false, progress: 20 },
  ];

  const [selected, setSelected] = useState(badges[1]); // mặc định chọn KHÁM PHÁ VIÊN

  return (
    <div className="p-6 rounded-xl max-w-7xl mx-auto">
      <h2 className="text-sm font-medium text-gray-500 uppercase">Danh hiệu cá nhân</h2>
      <h1 className="text-2xl font-bold text-gray-900 mt-1">Xin chào, Quốc Hưng</h1>

      {/* Thanh tiến trình tổng */}
      <div className="w-full h-1.5 bg-gray-200 rounded-full mt-4 mb-6">
        <div className="h-full bg-blue-500 rounded-full w-1/3"></div>
      </div>

      {/* Danh hiệu */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {badges.map((item, idx) => (
          <button
            key={idx}
            onClick={() => setSelected(item)}
            className={`rounded-lg p-3 text-center border transition ${
              selected.title === item.title ? 'ring-2 ring-blue-400' : ''
            } ${item.active ? 'bg-white border-green-200' : 'bg-white border-gray-200'}`}
          >
            <p className="text-xs font-semibold text-gray-700">{item.title}</p>
            <p
              className={`text-xs mt-1 ${
                item.active ? 'text-green-500' : 'text-gray-400'
              }`}
            >
              {item.status}
            </p>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="bg-[#F8F8FC] rounded-xl shadow p-4 flex flex-col text-center items-center justify-center w-65">
          <h3 className="text-sm font-semibold text-gray-700 mb-4">{selected.title}</h3>
          <div className="w-32 h-32 mb-2">
            <CircularProgressbar
              value={selected.progress}
              text={`${selected.progress}%`}
              styles={buildStyles({
                textColor: '#000',
                pathColor: '#2563EB',
                trailColor: '#E5E7EB',
                textSize: '20px',
              })}
            />
          </div>
          <p className="text-xs text-gray-500">
            {selected.progress < 100
              ? `Còn ${100 - selected.progress}% bạn sẽ chinh phục được danh hiệu mới`
              : 'Bạn đã chinh phục danh hiệu này!'}
          </p>
        </div>

        {/* Cột phải: điểm từ hoạt động */}
        <div className="bg-[#F8F8FC] rounded-xl shadow p-6 w-204">
          <h3 className="text-sm font-semibold text-gray-800 mb-4">ĐIỂM TỪ HOẠT ĐỘNG</h3>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { img: '/checkin.svg', label: 'Check-in', sub: '17 lần' },
              { img: '/review.svg', label: 'Viết đánh giá', sub: '6 lần' },
              { img: '/blog.svg', label: 'Viết Blog', sub: '6 bài' },
            ].map((act, i) => (
              <div key={i} className="flex items-center">
                <Image src={act.img} alt={act.label} width={36} height={36} className="mr-2" />
                <div>
                  <p className="text-xs text-gray-700">{act.label}</p>
                  <p className="text-xs text-gray-500">{act.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Thanh tiến độ hoạt động */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-700">Check-in</span>
                <span className="text-sm text-gray-500">85 ĐIỂM</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-full bg-[#76A7FE] rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-700">Viết đánh giá</span>
                <span className="text-sm text-gray-500">60 ĐIỂM</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-full bg-[#FEECBA] rounded-full" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-700">Viết Blog</span>
                <span className="text-sm text-gray-500">90 ĐIỂM</span>
              </div>
              <div className="w-full h-1.5 bg-gray-200 rounded-full">
                <div className="h-full bg-[#8ACA90] rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
