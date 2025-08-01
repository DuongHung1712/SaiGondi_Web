import '../styles/globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Sài Gòn Đi',
  description: 'Khám phá – Check-in – Viết blog tại TP.HCM',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
