import { dataBlogPosts } from '@/data/data';
import FeaturedPost from './FeaturedPost';
import SearchBox from '@/components/ui/SearchBox';

export default function BlogPage() {
  const featuredPosts = dataBlogPosts.slice(0, 3);

  return (
   <main>
      <FeaturedPost posts={featuredPosts} />
      <div className='max-w-5xl mx-auto'>
        <SearchBox />
      </div>
    </main>
  );
}
