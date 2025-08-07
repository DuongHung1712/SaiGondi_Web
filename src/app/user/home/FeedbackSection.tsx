'use client';

import { useState } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const testimonials = [
  {
    name: 'THU HIỀN',
    content:
      'SÀI GÒN điểm đến nghỉ dưỡng và vui chơi trên bản đồ Việt Nam, không chỉ thu hút với nhiều cảnh đẹp nơi đây còn tạo ấn tượng với nhiều điểm vui chơi cùng thú cưng thú vị',
  },
  {
    name: 'VĂN MINH',
    content:
      'Tôi rất ấn tượng với sự đa dạng và không khí năng động tại Sài Gòn. Chắc chắn sẽ quay lại!',
  },
  {
    name: 'LAN ANH',
    content:
      'Một nơi tuyệt vời cho cả gia đình. Trẻ nhỏ cực kỳ thích thú với các hoạt động giải trí ở đây.',
  },
];

export default function FeedbackSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const testimonial = testimonials[currentIndex];

  return (
    <section className="relative py-20 px-4">
      <div className="relative max-w-xl mx-auto text-center px-4">
        <FaQuoteLeft className="text-4xl text-[var(--gray-3)] mb-6 mx-auto" />

        <h4 className="text-[var(--gray-3)] leading-relaxed text-sm sm:text-base font-inter mb-2">{testimonial.name}</h4>
        <p className="text-[var(--gray-3)] leading-relaxed text-sm sm:text-base font-inter">
          {testimonial.content}
        </p>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-85">
        <button
          onClick={handlePrev}
          className="w-13 h-13 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
        >
          <IoIosArrowBack className="text-[var(--gray-3)] text-3xl" />
        </button>
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 right-85">
        <button
          onClick={handleNext}
          className="w-13 h-13 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
        >
          <IoIosArrowForward className="text-[var(--gray-3)] text-3xl" />
        </button>
      </div>
    </section>
  );
}
