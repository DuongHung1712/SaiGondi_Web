'use client';
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
import type { Plugin } from 'chart.js';
import type { LinearScale as LinearScaleType } from 'chart.js';
import Image from 'next/image';
import { useMemo } from 'react';
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

  const getBarThickness = () => {
    if (typeof window === 'undefined') return 24;
    const w = window.innerWidth;
    if (w >= 1280) return 36;
    if (w >= 1024) return 32;
    if (w >= 640)  return 28;
    return 24;
  };

  const getFontSize = () => {
    if (typeof window === 'undefined') return 12;
    const w = window.innerWidth;
    if (w >= 1280) return 13;
    if (w >= 1024) return 12;
    if (w >= 640)  return 12;
    return 11;
  };

  const categoryPercent = 0.3;
  const barPercent = 1;

  const data = useMemo(() => ({
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
        barThickness: getBarThickness(),
        maxBarThickness: 40,
        categoryPercentage: categoryPercent,
        barPercentage: barPercent,
      },
    ],
  }), [maxValue]);

  const options = useMemo(() => ({
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    layout: { padding: { top: 0, left: 0, right: 0, bottom: 0 } },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          color: '#1e293b',
          font: { size: getFontSize(), weight: 500 as const },
          maxRotation: 0,
          autoSkip: true,
        },
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
          font: { size: getFontSize(), weight: 500 as const },
          callback: function (value: string | number) {
            const allowedTicks = [0, 1, 2, 5, 10];
            return allowedTicks.includes(Number(value)) ? value : '';
          },
        },
        grid: {
          drawTicks: false,
          color: 'transparent',
          borderColor: 'transparent',
        },
      },
    },
    animation: { duration: 250 },
    interaction: { intersect: false, mode: 'nearest' as const }
  }), []);

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
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 items-end">
        <div className="col-span-1 lg:col-span-2 bg-[#F8F8FC] rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3 sm:mb-4">
            <h2 className="text-base sm:text-lg font-bold text-gray-800">HÀNH TRÌNH CỦA BẠN</h2>
            <button className="self-start sm:self-auto bg-[#B4CEFC] border border-gray-200 text-gray-800 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium flex items-center gap-2 shadow-sm">
              Checkin nhiều nhất
              <span className="bg-white rounded-full p-[3px] flex items-center justify-center">
                <FaChevronDown className="w-3 h-3 text-gray-800" />
              </span>
            </button>
          </div>
          <div className="h-64 sm:h-72 md:h-80 lg:h-[300px]">
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
