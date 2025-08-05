import SearchBox from '@/components/ui/SearchBox';
import HomeBanner from './HomeBanner';
import ServiceSection from './ServiceSection';
import HotDestinations from './HotDestinations';

export default function UserHomePage() {
  return (
    <>
      <HomeBanner />
      <SearchBox />
      <ServiceSection />
      <HotDestinations />
    </>
  );
}
