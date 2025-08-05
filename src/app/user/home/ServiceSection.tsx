'use client';

import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Tính thời tiết',
    description: 'Lorem ipsum dolor sit amet, adipisicing elit.',
    icon: '/weather.svg',
  },
  {
    title: 'Hướng dẫn du lịch tốt nhất',
    description: 'Lorem ipsum dolor sit amet, adipisicing elit.',
    icon: '/guide.svg',
  },
  {
    title: 'Mạng xã hội du lịch',
    description: 'Lorem ipsum dolor sit amet, adipisicing elit.',
    icon: '/social.svg',
  },
];

const ServiceSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden bg-transparent">
      <div
        className="absolute w-[500px] h-[500px] bg-[var(--secondary)] opacity-50 blur-[250px] rounded-full pointer-events-none"
        style={{ top: '150px', left: '-180px' }}
      />

      <div
        className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] rounded-full pointer-events-none"
        style={{ top: '300px', right: '-1500px' }}
      />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center md:justify-between gap-6 relative z-10">
        <div className="md:w-[300px] flex-shrink-0">
          <p className="text-[var(--error)] font-medium font-inter text-[24px] mb-2">
            What we serve
          </p>
          <h2 className="text-[28px] font-bold font-inter text-[var(--black-1)] leading-snug">
            Chúng tôi cung cấp <br /> dịch vụ tốt nhất
          </h2>
        </div>

        <div className="flex-1 flex gap-x-6 gap-y-6 flex-wrap justify-start">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white w-[250px] rounded-xl px-5 py-6 text-left border-r-2 border-b-2 border-[var(--secondary)] transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className="w-10 h-10 mb-4 rounded-full flex items-center justify-center"
                style={{
                  background:
                    'radial-gradient(circle, rgba(208,228,255,0.9) 40%, transparent 80%)',
                  mixBlendMode: 'multiply',
                }}
              >
                <Image src={service.icon} alt={service.title} width={24} height={24} />
              </div>
              <h3 className="text-base font-medium text-[var(--black-1)] mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--gray-3)]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
