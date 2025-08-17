'use client';
import Image from 'next/image';

const milestones = [
  { title: 'TÂN KHÁM PHÁ', points: 0, icon: '/icon4.svg', color: '#5161EB', top: '82%', left: '28%' },
  { title: 'KHÁM PHÁ VIÊN', points: 100, icon: '/icon5.svg', color: '#F96651', top: '36%', left: '45.5%' },
  { title: 'THỔ ĐỊA', points: 300, icon: '/icon6.svg', color: '#02714D', top: '22%', left: '71.5%' },
  { title: 'NHÀ THÁM HIỂM', points: 600, icon: '/icon7.svg', color: '#7829EC', top: '-25%', right: '8.9%' },
];

export default function ScoreBanner() {
  return (
    <div className="relative w-full pt-20 pb-10 overflow-hidden shadow-lg">
      <div className="absolute bottom-0 w-full z-0 translate-x-[120px] lg:translate-x-[10px]">
          <Image src="/Vector_3.svg" alt="đường kẻ" width={1555} height={100} />
        <div className="absolute bottom-0 w-full top-1 z-0 translate-x-[120px] sm:translate-x-[60px] md:translate-x-[80px] lg:translate-x-[135px]">
          <Image src="/blur.svg" alt="Blur effect" width={1388} height={100} />
        </div>
      </div>

      <div className="relative z-10">
        <h2 className="max-w-7xl mx-auto text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--primary)] leading-snug mb-10 px-4 text-center lg:text-left">
          CHINH PHỤC DANH HIỆU <br className="hidden sm:block" /> CHO BẢN THÂN
        </h2>

        <div className="relative w-full h-[280px] sm:h-[380px] md:h-[450px] lg:h-[350px]">
          {milestones.map((m, i) => {
            const isSpecial = m.title === 'NHÀ THÁM HIỂM';
            return (
              <div
                key={i}
                className="absolute z-20"
                style={{
                  top: m.top,
                  ...(m.left && { left: m.left }),
                  ...(m.right && { right: m.right }),
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {isSpecial ? (
                  <>
                    <div
                      className="absolute text-left whitespace-nowrap -translate-y-1/2"
                      style={{
                        top: '-30%',
                        left: '-160px',
                      }}
                    >
                      <p
                        className="text-lg sm:text-xl lg:text-2xl font-bold"
                        style={{ color: m.color }}
                      >
                        {m.title}
                      </p>
                      <span className="text-sm sm:text-base text-gray-500">
                        {m.points} ĐIỂM
                      </span>
                    </div>

                    <div className="flex justify-center">
                      <Image
                        src={m.icon}
                        alt={m.title}
                        width={30}
                        height={30}
                        className="sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px]"
                      />
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-start">
                    <p
                      className="text-lg sm:text-xl lg:text-2xl font-bold"
                      style={{ color: m.color }}
                    >
                      {m.title}
                    </p>
                    <span className="text-sm sm:text-base text-gray-500 mb-2 sm:mb-4">
                      {m.points} ĐIỂM
                    </span>
                    <div className="self-center">
                      <Image
                        src={m.icon}
                        alt={m.title}
                        width={30}
                        height={30}
                        className="sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px]"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
