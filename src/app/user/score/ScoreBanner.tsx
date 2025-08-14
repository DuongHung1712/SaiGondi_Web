'use client';
import Image from 'next/image';

const milestones = [
  { title: 'TÂN KHÁM PHÁ', points: 0, icon: '/icon4.svg', color: '#5E5CE6', top: '68%', left: '5%' },
  { title: 'KHÁM PHÁ VIÊN', points: 100, icon: '/icon5.svg', color: '#FF3B30', top: '45%', left: '30%' },
  { title: 'THỔ ĐỊA', points: 300, icon: '/icon6.svg', color: '#34C759', top: '55%', left: '55%' },
  { title: 'NHÀ THÁM HIỂM', points: 600, icon: '/icon7.svg', color: '#AF52DE', top: '15%', right: '5%' },
];

export default function ScoreBanner() {
  return (
    <div className="relative w-full bg-white py-10 overflow-hidden">
      <h2 className="max-w-7xl mx-auto text-4xl font-bold text-[var(--primary)] leading-snug mb-10 px-4">
        CHINH PHỤC DANH HIỆU <br /> CHO BẢN THÂN
      </h2>

      <div className="relative w-full h-[500px]">
        <Image
          src="/Vector_3.svg"
          alt="Đường kẻ"
          width={1000} 
          height={200}
          className="absolute top-[20px] right-[750px]" 
        />
        {milestones.map((m, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center"
            style={{
              top: m.top,
              ...(m.left && { left: m.left }),
              ...(m.right && { right: m.right }),
              transform: 'translate(-50%, -50%)',
            }}
          >
            <Image src={m.icon} alt={m.title} width={40} height={40} />
            <p className="mt-2 text-sm font-bold" style={{ color: m.color }}>
              {m.title}
            </p>
            <span className="text-xs text-gray-500">{m.points} ĐIỂM</span>
          </div>
        ))}
      </div>
    </div>
  );
}
