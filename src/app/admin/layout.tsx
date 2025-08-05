import { Inter } from 'next/font/google';
// import AdminSidebar from '@/components/admin/AdminSidebar'; // Nếu có
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'Quản trị | Sài Gòn Đi',
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`flex ${inter.variable}`}>
      {/* <AdminSidebar /> */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
