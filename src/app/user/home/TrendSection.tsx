'use client';

import TrendCard from '@/components/cards/TrendCard';

export default function TrendSection() {
  return (
    <section className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">XU HƯỚNG</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-5">
          <div>
            <div className="mb-4">
              <p className="text-gray-600 mb-6 font-inter">
                Top 5 điểm đến được yêu thích
              </p>
            </div>
            <div className="w-full max-w-xl mx-auto">
              <div className="flex flex-col gap-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={`left-${index}`} className="px-4">
                    <TrendCard index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <div className="max-w-lg ml-auto px-10 mb-1 text-right py-4">
            <p className="text-gray-600 font-inter">
            {'5 xu hướng du lịch đang "gây bão"'}
            </p>
            </div>
            <div className="w-full  h-full max-w-xl mx-auto">
              <div className="flex flex-col gap-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <div key={`right-${index}`} className="px-4">
                    <TrendCard index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
