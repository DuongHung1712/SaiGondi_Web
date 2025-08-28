'use client';

import { useEffect, useState } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { badgeApi } from "@/lib/badge/badgeApi";
import Image from 'next/image';
import { BadgeType } from '@/types/badge';

type UserAction = {
  action: string;
  points: number;
};

export default function AchievementSection() {
  const [firstName, setFirstName] = useState("Bạn");
  const [badges, setBadges] = useState<BadgeType[]>([]);
  const [selected, setSelected] = useState<BadgeType | null>(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      if (user.fullName) {
        const nameParts = user.fullName.trim().split(" ");
        setFirstName(nameParts[0] || "Bạn");
      }
    }

    const fetchBadges = async () => {
      try {
        const data: BadgeType[] = await badgeApi.getUserBadges();

        const userActions: UserAction[] = await badgeApi.getUserActions();

        const activityPoints: Record<string, number> = {};
        userActions.forEach((act: UserAction) => {
          activityPoints[act.action] = (activityPoints[act.action] || 0) + act.points;
        });

        const enrichedBadges = data.map((b: BadgeType) => ({ ...b, activityPoints }));

        setBadges(enrichedBadges);
        if (enrichedBadges.length > 0) setSelected(enrichedBadges[0]);
      } catch (err) {
        console.error("API error:", err);
      }
    };

    fetchBadges();
  }, []);

  const completedCount = badges.filter(b => b.userProgress.status === 'earned').length;
  const progressPercent = badges.length > 0 ? (completedCount / badges.length) * 100 : 0;
  const activityPoints = selected?.activityPoints || {};
  const progressValue =
    selected?.pointsRequired && selected.pointsRequired > 0
      ? (selected.userProgress.currentPoints / selected.pointsRequired) * 100
      : 0;
  return (
    <div className="p-6 py-18 rounded-xl max-w-7xl mx-auto">
      <h2 className="text-lg sm:text-xl font-medium text-gray-500 uppercase">
        Danh hiệu cá nhân
      </h2>
      <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mt-1">
        Xin chào, {firstName}
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
                selected?._id === item._id
                  ? 'text-blue-500'
                  : item.userProgress.status === 'earned'
                  ? 'text-gray-700'
                  : 'text-gray-400'
              }`}
            >
              {item.name}
            </p>
            <p
              className={`text-xl mt-1 ${
                item.userProgress.status === 'earned' ? 'text-[#8ACA90]' : 'text-gray-400'
              }`}
            >
              {item.userProgress.status === 'earned' ? 'Đã chinh phục' : 'Còn thiếu điểm'}
            </p>
          </div>
        ))}
      </div>

      {selected && (
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
          <div className="bg-[#F8F8FC] rounded-xl shadow p-4 flex flex-col text-center items-center justify-center w-full lg:w-[250px]">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">{selected.name}</h3>
            <div className="w-20 h-20 sm:w-28 sm:h-28 mb-2">
              <CircularProgressbar
                value={Math.min(100, progressValue)}
                text={`${Math.min(100, progressValue).toFixed(0)}%`}
                styles={buildStyles({
                  textColor: '#000',
                  pathColor: '#2563EB',
                  trailColor: '#E5E7EB',
                  textSize: '18px',
                })}
              />
            </div>
            <p className="text-sm sm:text-base text-gray-500">
              {selected.userProgress.status === 'earned'
                ? 'Bạn đã chinh phục danh hiệu này!'
                : `Còn ${
                    (selected.pointsRequired ?? 0) - (selected.userProgress.currentPoints ?? 0)
                  } điểm nữa sẽ chinh phục`}
            </p>
          </div>

          <div className="bg-[#F8F8FC] rounded-xl shadow p-6 lg:flex-[2]">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
              ĐIỂM TỪ HOẠT ĐỘNG
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-6">
              {[
                { key: 'checkinplace', img: '/checkin.svg', label: 'Check-in' },
                { key: 'comment', img: '/review.svg', label: 'Viết đánh giá' },
                { key: 'createblog', img: '/blog.svg', label: 'Viết Blog' },
              ].map((act, i) => {
                const points = activityPoints[act.key] || 0;
                return (
                  <div key={i} className="flex items-center">
                    <Image src={act.img} alt={act.label} width={36} height={36} className="mr-2" />
                    <div>
                      <p className="text-sm sm:text-base text-gray-700">{act.label}</p>
                      <p className="text-sm sm:text-base text-[var(--black-1)] font-medium">
                        {points} điểm
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-4 sm:space-y-6">
              {[
                { key: 'checkinplace', name: 'Check-in', color: '#76A7FE' },
                { key: 'comment', name: 'Viết đánh giá', color: '#FEECBA' },
                { key: 'createblog', name: 'Viết Blog', color: '#8ACA90' },
              ].map((act, idx) => {
                const points = activityPoints[act.key] || 0;
                const maxPoints =
                  (selected.condition?.[act.key]?.points || 0) *
                  (selected.condition?.[act.key]?.count || 1);

                const scorePercent = maxPoints ? (points / maxPoints) * 100 : 0;

                return (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm sm:text-xl text-gray-700">{act.name}</span>
                      <span className="text-sm sm:text-base text-gray-500">{points} ĐIỂM</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${scorePercent}%`, backgroundColor: act.color }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
