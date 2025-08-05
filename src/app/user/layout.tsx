import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Người dùng | Sài Gòn Đi',
};

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.variable}>
      <Header />
      <main className="container mx-auto py-8">{children}</main>
      <Footer />
    </div>
  );
}
