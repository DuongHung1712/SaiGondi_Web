import PostCard from '@/components/PostCard';

export default function BlogPage() {
  const dummyPosts = [
    { id: 1, title: 'Hành trình cà phê Võ Văn Tần', slug: 'ca-phe-vo-van-tan' },
    { id: 2, title: 'Ngắm hoàng hôn tại Cầu Mống', slug: 'cau-mong-hoang-hon' },
  ];

  return (
    <section className="py-10">
      <h1 className="text-2xl font-bold mb-6">Bài viết mới</h1>
      <div className="space-y-4">
        {dummyPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
