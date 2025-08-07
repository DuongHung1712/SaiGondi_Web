// QnASection.tsx
'use client';

import QnaCard from '@/components/cards/QnaCard';
import Button from '@/components/ui/Button';

const qnaData = [
  {
    id: 1,
    title: '“Xin kinh nghiệm Xuyên Việt 30 ngày”',
    description:
      'Mình dự kiến giữa tháng 04 này làm chuyến xuyên việt (gửi xe từ TP. HCM ra Hà Nội rồi đi cung Đông Bắc - Tây Bắc. Vòng về lại để chạy xe vào lại HCM.',
    author: 'Nguyễn Văn A',
    source: 'Google',
    image: '/city-2.svg',
  },
  {
    id: 2,
    title: '“Xin kinh nghiệm Xuyên Việt 30 ngày”',
    description:
      'Mình dự kiến giữa tháng 04 này làm chuyến xuyên việt (gửi xe từ TP. HCM ra Hà Nội rồi đi cung Đông Bắc - Tây Bắc. Vòng về lại để chạy xe vào lại HCM.',
    author: 'Nguyễn Văn A',
    source: 'Google',
    image: '/city-2.svg',
  },
  {
    id: 3,
    title: '“Xin kinh nghiệm Xuyên Việt 30 ngày”',
    description:
      'Mình dự kiến giữa tháng 04 này làm chuyến xuyên việt (gửi xe từ TP. HCM ra Hà Nội rồi đi cung Đông Bắc - Tây Bắc. Vòng về lại để chạy xe vào lại HCM.',
    author: 'Nguyễn Văn A',
    source: 'Google',
    image: '/city-2.svg',
  },
  {
    id: 4,
    title: '“Xin kinh nghiệm Xuyên Việt 30 ngày”',
    description:
      'Mình dự kiến giữa tháng 04 này làm chuyến xuyên việt (gửi xe từ TP. HCM ra Hà Nội rồi đi cung Đông Bắc - Tây Bắc. Vòng về lại để chạy xe vào lại HCM.',
    author: 'Nguyễn Văn A',
    source: 'Google',
    image: '/city-2.svg',
  },
];

export default function QNASection() {
  return (
    <section className="w-full py-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Q/A - Hỏi đáp du lịch</h2>
            <p className="text-sm text-gray-600 mt-1">Các câu hỏi bàn luận về Du lịch</p>
          </div>
          <Button
            variant="outline-primary"
            className="text-sm px-4 py-1.5 h-fit rounded-none"
          >
            Xem tất cả
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {qnaData.map((item) => (
            <QnaCard
              key={item.id}
              title={item.title}
              description={item.description}
              author={item.author}
              sourceText={item.source}
              imageUrl={item.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}