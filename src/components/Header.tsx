import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Sài Gòn Đi</Link>
        <nav className="space-x-4">
          <Link href="/blog" className="hover:text-accent">Blog</Link>
          <Link href="/checkin" className="hover:text-accent">Check-in</Link>
          <Link href="/login" className="hover:text-accent">Đăng nhập</Link>
        </nav>
      </div>
    </header>
  );
}
