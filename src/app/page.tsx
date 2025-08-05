import SearchBox from '@/components/ui/SearchBox';
import HomeBanner from './user/home/HomeBanner';
import ServiceSection from './user/home/ServiceSection';
import HotDestinations from './user/home/HotDestinations';

export default function HomePage() {
  return (
    <main>
      <HomeBanner />
      <SearchBox/>
      <ServiceSection/>
      <HotDestinations/>
    </main>
  );
}
// import Button from '../components/ui/Button';
// import Input from '../components/ui/Input';

// export default function HomePage() {
//   return (
//     <section className="py-10 px-4 text-center">
//       <h1 className="text-4xl font-bold text-primary mb-4">
//         Chào mừng đến với <span className="text-accent">Sài Gòn Đi</span>
//       </h1>
//       <p className="text-lg text-gray-700 max-w-2xl mx-auto">
//         Cùng khám phá những địa điểm thú vị tại TP.HCM, check-in, chia sẻ hành trình và tạo nên cộng đồng yêu Sài Gòn!
//       </p>

//       {/* 👇 Các Button test */}
//       <div className="flex flex-wrap gap-4 justify-center mt-8">
//         <Button variant="primary">Bắt đầu</Button>
//         <Button variant="secondary">Khám phá</Button>
//         <Button variant="outline-primary">Check-in</Button>
//         <Button variant="outline-secondary">Chia sẻ</Button>
//       </div>

//       {/* 👇 Input test */}
//       <div className="max-w-md mx-auto mt-10 text-left space-y-4">
//         <Input label="Email" />
//         <Input label="Tên" status="success" supportText="Đã xác nhận" />
//         <Input label="Số điện thoại" status="error" supportText="Số không hợp lệ" />
//         <Input label="Tìm kiếm" status="search" supportText="Tìm kiếm...." />
//       </div>
//     </section>
//   );
// }