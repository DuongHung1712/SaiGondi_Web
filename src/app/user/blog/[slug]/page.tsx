import { notFound } from 'next/navigation';
import { dataBlogPosts } from '@/data/data';
import { Metadata } from 'next';
import BlogDetail from '../BlogDetail';
import FeaturedBloggers from '../FeaturedBloggers';
import RecentPosts from '../RecentPosts';
import PopularPostsSection from '../../home/PopularPostsSection';
import { LuCopy } from 'react-icons/lu';
import { FaFacebookF, FaInstagram, FaPinterestP } from 'react-icons/fa';
import ReviewSection from '../ReviewSection';
import { dataReviews } from '@/data/dataReviews';
import CommentBox from '../CommentBox';
import Image from 'next/image';

interface BlogDetailPageProps {
  params: { slug: string };
}

export function generateMetadata({ params }: BlogDetailPageProps): Metadata {
  const post = dataBlogPosts.find((item) => item.slug === params.slug);
  if (!post) return {};

  return {
    title: `${post.title} | Travel Blog`,
    description: post.content.slice(0, 150) + '...',
    openGraph: {
      title: post.title,
      description: post.content.slice(0, 150) + '...',
      images: [{ url: post.image }],
    },
  };
}

export default function BlogDetailPage({ params }: BlogDetailPageProps) {
  const post = dataBlogPosts.find((item) => item.slug === params.slug);
  if (!post) return notFound();

  return (
    <main className="relative overflow-hidden">
          {/* blur */}
          <div className="absolute w-[500px] h-[500px] bg-[var(--secondary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: '270px', left: '-240px' }} />
          <div className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: '600px', left: '1200px' }} />
          <div className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: '1100px', left: '-60px' }} />
          <div className="absolute w-[500px] h-[500px] bg-[var(--secondary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: '2000px', left: '1300px' }} />
          <div className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] pointer-events-none" style={{ top: '2500px', left: '-60px' }} />
          
          <Image
            src="/city-bg.svg"
            alt="city-bg"
            width={355}
            height={216}
            className="absolute left-[-100] top-[535px] z-0 pointer-events-none"
          />
          <Image
            src="/Graphic_Elements.svg"
            alt="Graphic_Elements"
            width={192}
            height={176}
            className="absolute left-[1420] top-[875px] z-0 pointer-events-none"
          />
          <Image
            src="/Graphic_Elements.svg"
            alt="Graphic_Elements"
            width={192}
            height={176}
            className="absolute left-[1420] top-[2800px] z-0 pointer-events-none"
          />
    <div className="max-w-7xl mx-auto px-4 mt-12">
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Nội dung bài viết */}
        <div className="w-full lg:flex-1">
          <BlogDetail post={post} />

          <div className="flex items-center gap-2 pt-5">
            <hr className="flex-1 border-[#D1E7E5]" />
            <div className="flex gap-4 py-6">
              <button className="text-[var(--gray-2)] hover:text-[var(--gray-1)] transition">
                <LuCopy size={20} />
              </button>
              <button className="text-[var(--gray-2)] hover:text-[var(--gray-1)] transition">
                <FaFacebookF size={20} />
              </button>
              <button className="text-[var(--gray-2)] hover:text-[var(--gray-1)] transition">
                <FaInstagram size={20} />
              </button>
              <button className="text-[var(--gray-2)] hover:text-[var(--gray-1)] transition">
                <FaPinterestP size={20} />
              </button>
            </div>
            <hr className="flex-1 border-[#D1E7E5]" />
          </div>

          <ReviewSection reviews={dataReviews} />
          <CommentBox />
        </div>

        {/* Bài viết mới đăng + các bloger nổi bật*/}
        <div className="w-full lg:w-80 shrink-0 pt-55">
          <RecentPosts />
          <FeaturedBloggers />
        </div>        
      </div>

      <PopularPostsSection/>
    </div>
    </main>
  );
}