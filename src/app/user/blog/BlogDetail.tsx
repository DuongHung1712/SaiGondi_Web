'use client';

import Image from 'next/image';
import { FaRegHeart, FaRegComment, FaShareAlt, FaHeart } from 'react-icons/fa';
import { LuCopy, LuShare2 } from 'react-icons/lu';
import { RiCalendar2Line } from 'react-icons/ri';
import { useEffect, useRef, useState } from 'react';
import { PiShareFat } from 'react-icons/pi';
import Link from 'next/link';
import { Post } from '@/types/blog';

type BlogDetailProps = {
  post: Post;
};

export default function BlogDetail({ post }: BlogDetailProps) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.totalLikes);
  const [showShareMenu, setShowShareMenu] = useState(false);

  const commentRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleLike = () => {
    if (liked) setLikeCount((prev) => prev - 1);
    else setLikeCount((prev) => prev + 1);
    setLiked(!liked);
  };

  const scrollToComments = () => {
    commentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    alert('Đã sao chép liên kết!');
    setShowShareMenu(false);
  };

  const handleSharePersonal = () => {
    alert('Đã chia sẻ về trang cá nhân.');
    setShowShareMenu(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowShareMenu(false);
      }
    };
    if (showShareMenu) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showShareMenu]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Tiêu đề */}
      <h1 className="text-justify text-3xl font-extrabold leading-snug text-[var(--foreground)] mb-2">
        {post.title}
      </h1>

      {/* Categories + Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="inline-block bg-[#F2F8F7] text-sm text-[var(--gray-1)] font-medium px-3 py-1 rounded-md">
          {post.category}
        </span>
        {post.tags?.map((tag, idx) => (
          <span
            key={idx}
            className="inline-block bg-gray-100 text-sm text-gray-600 px-3 py-1 rounded-md"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Thông tin tác giả + like/share */}
      <div className="flex items-center justify-between flex-wrap text-sm text-[var(--gray-1)] mb-4">
        <div className="flex items-center gap-2">
          <Link href={`/user/profile`} className="flex items-center gap-2">
            <Image
              src={post.authorAvatar}
              alt={post.author}
              width={32}
              height={32}
              className="rounded-full object-cover"
            />
            <span>{post.author}</span>
          </Link>
          <span className="mx-1 text-[var(--gray-2)]">|</span>
          <div className="flex items-center gap-1">
            <RiCalendar2Line className="text-[var(--gray-2)]" />
            <span>{new Date(post.date).toLocaleDateString('vi-VN')}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[var(--foreground)] text-base mt-2 sm:mt-0">
          <div className="cursor-pointer flex items-center gap-1" onClick={toggleLike}>
            {liked ? (
              <FaHeart className="text-[var(--error)]" />
            ) : (
              <FaRegHeart className="text-[var(--foreground)]" />
            )}
            <span>{likeCount}</span>
          </div>
          <div className="cursor-pointer flex items-center gap-1" onClick={scrollToComments}>
            <FaRegComment className="text-[var(--foreground)]" />
            <span>89</span>
          </div>
          <div className="relative" ref={menuRef}>
            <div
              className="cursor-pointer flex items-center gap-1"
              onClick={() => setShowShareMenu((prev) => !prev)}
            >
              <LuShare2 className="text-[var(--foreground)]" />
              <span>{post.shareCount ?? 0}</span>
            </div>
            {showShareMenu && (
              <div className="absolute right-0 mt-2 w-63 bg-[var(--background)] border border-[var(--gray-5)] rounded-lg shadow-lg z-10">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  <LuCopy size={20} />
                  <span>Sao chép liên kết</span>
                </button>
                <button
                  onClick={handleSharePersonal}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100"
                >
                  <PiShareFat size={20} />
                  <span>Chia sẻ về trang cá nhân</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Ảnh chính */}
      <div className="w-full h-[300px] relative mb-6">
        <Image
          src={post.image || '/Logo.svg'}
          alt={post.title || 'No title'}
          fill
          className="object-cover rounded-lg"
        />
      </div>

      {/* Nội dung */}
      <article className="prose prose-lg max-w-none text-justify text-[var(--foreground)] space-y-6">
        {post.content.map((block, idx) => {
          if (block.type === 'text') {
            return <p key={idx}>{block.value}</p>;
          }
          if (block.type === 'image' && block.url) {
            return (
              <div key={idx} className="flex justify-center my-6">
                <Image
                  src={block.url}
                  alt={block.value || `image-${idx}`}
                  width={800}
                  height={600}
                  className="rounded-md max-w-full h-auto object-contain"
                />
              </div>
            );
          }
          if (block.type === 'video' && block.url) {
            return (
              <div key={idx} className="flex justify-center my-6">
                <video src={block.url} controls className="w-full max-h-[500px] rounded-md" />
              </div>
            );
          }
          return null;
        })}
      </article>

      {/* Album */}
      {post.album && post.album.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Album</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {post.album.map((item, idx) => (
              <div key={idx} className="relative w-full h-56">
                {item.type === 'image' ? (
                  <Image
                    src={item.url}
                    alt={item.caption || 'album'}
                    fill
                    className="object-cover rounded-lg"
                  />
                ) : (
                  <video src={item.url} controls className="w-full h-full object-cover rounded-lg" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      <div ref={commentRef}></div>
    </div>
  );
}
