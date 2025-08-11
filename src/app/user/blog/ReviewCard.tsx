'use client';

import Image from 'next/image';
import { IoFlagSharp } from 'react-icons/io5';

type Review = {
  id: number;
  rating: string;
  name: string;
  avatar: string;
  content: string;
};

type ReviewCardProps = {
  review: Review;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="relative border-b border-[var(--gray-2)] py-4 flex flex-col gap-2">
      <button
        className="absolute right-0 top-0 p-2 text-[var(--gray-2)] hover:text-[var(--gray-1)]"
        title="Báo cáo đánh giá"
      >
        <IoFlagSharp size={18} />
      </button>

      {/* Nội dung đánh giá */}
      <div className="flex items-start gap-3 pr-8"> 
        <Image
          src={review.avatar}
          alt={review.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">
            {review.rating} <span className="text-[var(--gray-2)]">| {review.name}</span>
          </p>
          <p className="text-sm text-[var(--gray-2)] whitespace-pre-line">{review.content}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
