'use client';
import { useState, useEffect, useMemo } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Chart
} from 'chart.js';
import type { Plugin, LinearScale as LinearScaleType } from 'chart.js';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa6';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const LOCATION_DATA = [
  { name: 'Bàn Cờ', value: 5 },
  { name: 'Thủ Đức', value: 4 },
  { name: 'Cầu Kiệu', value: 6 },
  { name: 'Linh Xuân', value: 4 },
  { name: 'Vũng Tàu', value: 6 },
  { name: 'Tân Bình', value: 8 },
  { name: 'An Phú', value: 3 },
];

export default function ScoreSection() {
  const maxValue = Math.max(...LOCATION_DATA.map(l => l.value));
  const [width, setWidth] = useState<number>(0);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categoryPercent = width < 640 ? 0.4 : 0.3;
  const barPercent = width < 640 ? 0.9 : 1;

  const data = useMemo(() => {
    const barThickness = width >= 1280 ? 36 : width >= 1024 ? 32 : width >= 640 ? 28 : 24;
    return {
      labels: LOCATION_DATA.map(l => l.name),
      datasets: [
        {
          label: '',
          data: LOCATION_DATA.map(l => l.value),
          backgroundColor: LOCATION_DATA.map(l =>
            l.value === maxValue ? '#3B82F6' : '#FEECBA'
          ),
          borderRadius: 50,
          borderSkipped: false,
          barThickness,
          maxBarThickness: 40,
          categoryPercentage: categoryPercent,
          barPercentage: barPercent,
        },
      ],
    };
  }, [maxValue, width, categoryPercent, barPercent]);

  const options = useMemo(() => {
    const fontSize = width >= 1280 ? 13 : width >= 1024 ? 12 : width >= 640 ? 12 : 11;
    return {
      responsive: true,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      layout: { padding: 0 },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#1e293b', font: { size: fontSize, weight: 500 as const }, maxRotation: 0, autoSkip: true },
          stacked: false,
          categoryPercentage: categoryPercent,
          barPercentage: barPercent,
        },
        y: {
          min: 0,
          max: 10,
          ticks: {
            stepSize: 1,
            padding: 4,
            color: '#94a3b8',
            font: { size: fontSize, weight: 500 as const },
            callback: (value: string | number) => [0, 1, 2, 5, 10].includes(Number(value)) ? value : '',
          },
          grid: { drawTicks: false, color: 'transparent', borderColor: 'transparent' },
        },
      },
      animation: { duration: 250 },
      interaction: { intersect: false, mode: 'nearest' as const },
    };
  }, [width, categoryPercent, barPercent]);

  const dashedLinePlugin: Plugin<'bar'> = {
    id: 'dashedLineAt10',
    afterDraw: (chart: Chart) => {
      const y = chart.scales?.y as LinearScaleType;
      if (!y) return;
      const yValue = y.getPixelForValue(10);
      const { left, right } = chart.chartArea;
      const { ctx } = chart;
      ctx.save();
      ctx.beginPath();
      ctx.setLineDash([5, 5]);
      ctx.moveTo(left, yValue);
      ctx.lineTo(right, yValue);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#cbd5e1';
      ctx.stroke();
      ctx.restore();
    },
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-end">
        <div className="col-span-1 lg:col-span-2 bg-[#F8F8FC] rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h2 className="text-base sm:text-xl font-bold text-gray-800">HÀNH TRÌNH CỦA BẠN</h2>
            <div className="relative">
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="self-start sm:self-auto bg-[#B4CEFC] border border-gray-200 text-gray-800 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 shadow-sm"
              >
                Checkin nhiều nhất:
                <span className="bg-white rounded-full p-[3px] flex items-center justify-center">
                  <FaChevronDown className="w-3 h-3 text-gray-800" />
                </span>
              </button>
              {openDropdown && (
                <div className="absolute right-0 mt-1 w-32 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                  {[].map(frame => (
                    <button
                      key={frame}
                      onClick={() => { }}
                      className="w-full text-left px-3 py-2 hover:bg-gray-100"
                    >
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div className="h-56 sm:h-64 md:h-72 lg:h-[300px]">
            <Bar data={data} options={options} plugins={[dashedLinePlugin]} />
          </div>
        </div>
        <div className="bg-[#F8F8FC] rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col items-center justify-center lg:self-end">
          <Image
            src="/conquering.svg"
            alt="Hãy chinh phục"
            width={320}
            height={320}
            className="w-40 sm:w-48 lg:w-56 xl:w-64 h-auto"
            priority
          />
        </div>
      </div>
    </div>
  );
}
