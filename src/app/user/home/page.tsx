import SearchBox from '@/components/ui/SearchBox';
import HomeBanner from './HomeBanner';
import ServiceSection from './ServiceSection';
import HotDestinations from './HotDestinations';
import BlurBackground from '@/components/ui/BlurBackground';
import HotSearchSection from './HotSearchSection';
import PopularPostsSection from './PopularPostsSection';

export default function UserHomePage() {
  return (
    <div className="">
      <BlurBackground />
      <HomeBanner />
      <SearchBox />
      <ServiceSection />
      <HotDestinations />
      <HotSearchSection/>
      <PopularPostsSection/>
    </div>
  );
}
