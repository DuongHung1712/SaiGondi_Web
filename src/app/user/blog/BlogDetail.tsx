'use client';

import Image from 'next/image';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { FaRegHeart, FaRegComment, FaShareAlt } from 'react-icons/fa';
import { SlCalender } from 'react-icons/sl';
import { LuShare2 } from 'react-icons/lu';
import { RiCalendar2Line } from 'react-icons/ri';


type BlogPost = {
  title: string;
  category: string;
  author: string;
  authorAvatar: string;
  image: string;
  address: string;
  date: string;
  content: string;
};

type BlogDetailProps = {
  post: BlogPost;
};

export default function BlogDetail({ post }: BlogDetailProps) {
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-justify text-3xl font-extrabold leading-snug text-[var(--foreground)] mb-2">{post.title}</h1>
            <p className="inline-block bg-[#F2F8F7] text-sm text-[var(--gray-1)] font-medium px-3 py-1 rounded-md mb-4">
                {post.category}
            </p>

            <div className="flex items-center justify-between flex-wrap text-sm text-[var(--gray-1)] mb-4">
                {/* Bên trái: Avatar + Tên + Ngày */}
                <div className="flex items-center gap-2">
                    <Image
                    src={post.authorAvatar}
                    alt={post.author}
                    width={32}
                    height={32}
                    className="rounded-full object-cover"
                    />
                    <span>{post.author}</span>
                    <span className="mx-1 text-[var(--gray-2)]">|</span>
                    <div className="flex items-center gap-1">
                        <RiCalendar2Line className="text-[var(--gray-2)]" />
                        <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
                    </div>
                </div>
                
                {/* Bên phải: Tim - Bình luận - Chia sẻ */}
                <div className="flex items-center gap-4 text-[var(--foreground)] text-base mt-2 sm:mt-0">
                    <div className="flex items-center gap-1">
                        <FaRegHeart className="text-[var(--foreground)]" />
                        <span>162</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaRegComment className="text-[var(--foreground)]" />
                        <span>89</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <LuShare2 className="text-[var(--foreground)]" />
                        <span>50</span>
                    </div>
                </div>
            </div>
            
            {/* Hình ảnh */}
            <div className="w-full h-[300px] relative mb-6">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                />
            </div>
            
            {/* Nội dung */}
            <article className="prose prose-lg max-w-none text-justify text-[var(--foreground)]">
                <Markdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    components={{
                    img: ({ node, ...props }) => (
                        <div className="flex justify-center my-6">
                        <img
                            {...props}
                            className="rounded-md max-w-[864px] max-h-[533px] w-auto h-auto"
                            alt={props.alt || ''}
                        />
                        </div>
                    ),
                    }}
                >
                    {post.content}
                </Markdown>
            </article>
        </div>
    );
}