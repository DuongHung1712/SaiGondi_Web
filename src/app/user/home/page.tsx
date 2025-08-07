import SearchBox from '@/components/ui/SearchBox';
import HomeBanner from './HomeBanner';
import ServiceSection from './ServiceSection';
import HotDestinations from './HotDestinations';
import BlurBackground from '@/components/ui/BlurBackground';
import HotSearchSection from './HotSearchSection';
import PopularPostsSection from './PopularPostsSection';
import HotBloggerSection from './HotBloggerSection';
import FeedbackSection from './FeedbackSection';
import TrendSection from './TrendSection';
import Image from 'next/image';
import QNASection from './QNASection';

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
      <HotBloggerSection/>
      <FeedbackSection/>
      <TrendSection/>
      <div className="absolute pointer-events-none" style={{ top: '4900px',zIndex: 0 }}>
        <Image
          src="/OBJECTS.svg"
          alt="Background Objects"
          width={200}
          height={200}
        />
      </div>
      <QNASection/>
    </div>
  );
}
