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

  const [selected, setSelected] = useState(badges[1]); 

  const completedCount = badges.filter(b => b.status === 'Đã chinh phục').length;
  const progressPercent = (completedCount / badges.length) * 100;

  return (
    <div className="p-6 py-18 rounded-xl max-w-7xl mx-auto">
      <h2 className="text-lg sm:text-xl font-medium text-gray-500 uppercase">
        Danh hiệu cá nhân
      </h2>
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-1">
        Xin chào, Quốc Hưng
      </h1>

      <div className="w-full h-1.5 bg-gray-200 rounded-full mt-4 mb-8">
        <div
          className="h-full bg-blue-500 rounded-full transition-all duration-500"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 lg:gap-20 mb-12">
        {badges.map((item, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(item)}
            className="rounded-lg p-4 text-center bg-white transition cursor-pointer border border-gray-300"
          >
            <p
              className={`text-xl font-semibold ${
                selected.title === item.title
                  ? 'text-blue-500'
                  : item.active
                  ? 'text-gray-700'
                  : 'text-gray-400'
              }`}
            >
              {item.title}
            </p>
            <p
              className={`text-xl mt-1 ${
                item.active ? 'text-[#8ACA90]' : 'text-gray-400'
              }`}
            >
              {item.status}
            </p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="bg-[#F8F8FC] rounded-xl shadow p-4 flex flex-col text-center items-center justify-center w-full lg:w-[250px]">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">{selected.title}</h3>
          <div className="w-20 h-20 sm:w-28 sm:h-28 mb-2">
            <CircularProgressbar
              value={selected.progress}
              text={`${selected.progress}%`}
              styles={buildStyles({
                textColor: '#000',
                pathColor: '#2563EB',
                trailColor: '#E5E7EB',
                textSize: '18px',
              })}
            />
          </div>
          <p className="text-sm sm:text-base text-gray-500">
            {selected.progress < 100
              ? `Còn ${100 - selected.progress}% bạn sẽ chinh phục được danh hiệu mới`
              : 'Bạn đã chinh phục danh hiệu này!'}
          </p>
        </div>

        <div className="bg-[#F8F8FC] rounded-xl shadow p-6 lg:flex-[2]">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
            ĐIỂM TỪ HOẠT ĐỘNG
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-6">
            {[
              { img: '/checkin.svg', label: 'Check-in', sub: '17 lần' },
              { img: '/review.svg', label: 'Viết đánh giá', sub: '6 lần' },
              { img: '/blog.svg', label: 'Viết Blog', sub: '6 bài' },
            ].map((act, i) => (
              <div key={i} className="flex items-center">
                <Image src={act.img} alt={act.label} width={36} height={36} className="mr-2" />
                <div>
                  <p className="text-sm sm:text-base text-gray-700">{act.label}</p>
                  <p className="text-sm sm:text-base text-[var(--black-1)] font-medium">{act.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 sm:space-y-6">
            {[
              { name: 'Check-in', score: 85, color: '#76A7FE' },
              { name: 'Viết đánh giá', score: 60, color: '#FEECBA' },
              { name: 'Viết Blog', score: 90, color: '#8ACA90' },
            ].map((act, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm sm:text-xl text-gray-700">{act.name}</span>
                  <span className="text-sm sm:text-base text-gray-500">{act.score} ĐIỂM</span>
                </div>
                <div className="w-full h-1.5 bg-gray-200 rounded-full">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${act.score}%`, backgroundColor: act.color }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
