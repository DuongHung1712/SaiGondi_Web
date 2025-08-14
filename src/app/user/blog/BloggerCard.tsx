import Image from 'next/image';
import React from 'react';
import { FaFacebookSquare } from 'react-icons/fa';
import { SiZalo } from 'react-icons/si';

type BloggerCardProps = {
  avatar: string;
  name: string;
  description: string;
  facebookLink?: string;
  zaloLink?: string;
};

const BloggerCard = ({
  avatar,
  name,
  description,
  facebookLink = '#',
  zaloLink = '#',
}: BloggerCardProps) => {
  return (
    <div className="flex items-start gap-4">
      <div className="w-16 h-16 relative rounded-full overflow-hidden flex-shrink-0">
        <Image src={avatar} alt={name} fill className="object-cover" />
      </div>
      <div>
        <h4 className="font-semibold text-base">{name}</h4>
        <p className="text-sm text-[var(--gray-2)] leading-tight">
          {description}
        </p>
        <div className="flex gap-3 mt-2 text-[var(--primary)] text-xl">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <FaFacebookSquare />
          </a>
          <a href={zaloLink} target="_blank" rel="noopener noreferrer">
            <SiZalo />
          </a>
        </div>
      </div>
    </div>
  );
};

export default BloggerCard;
