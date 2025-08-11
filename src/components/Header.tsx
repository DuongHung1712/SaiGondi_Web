'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaChevronDown } from 'react-icons/fa6';
import Button from '@/components/ui/Button';
import { useEffect, useRef, useState } from 'react';
import { HiOutlineGlobeAlt, HiOutlineDotsHorizontal } from 'react-icons/hi';

export default function Header() {
  const pathname = usePathname();

  const isLoggedIn = false; // 
  const userName = 'Quốc Hưng';

  const [avatarOpen, setAvatarOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (avatarRef.current && !avatarRef.current.contains(e.target as Node)) {
        setAvatarOpen(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  const navItems = [
    { label: 'Trang chủ', href: '/' },
    { label: 'Bài viết', href: '/user/blog' },
    { label: 'Hành trình', href: '/hanh-trinh' },
  ];

  const isActive = (href: string) =>
    href === '/'
      ? pathname === '/' || pathname === '/user/home'
      : pathname === href;

  return (
    <header className="bg-[var(--background)]/90 shadow-sm relative w-full z-50">
      <div className="w-full max-w-screen-2xl mx-auto px-5 sm:px-6 lg:px-14 py-4 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/Logo.svg" alt="Logo" width={150} height={100} />
        </Link>
        <nav className="hidden md:flex flex-1 justify-center space-x-6 text-base">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition text-[var(--primary)] ${
                isActive(item.href) ? 'font-black' : 'font-medium'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 ml-auto">
          <div className="text-gray-500 rounded-full p-2">
            <HiOutlineGlobeAlt size={24} />
          </div>

          {!isLoggedIn && (
            <div className="hidden md:block">
              <Link href="/auth/login">
                <Button variant="outline-primary">Đăng nhập / Đăng ký</Button>
              </Link>
            </div>
          )}

          {isLoggedIn && (
            <div
              className="relative hidden md:flex items-center gap-2 cursor-pointer"
              ref={avatarRef}
              onClick={() => setAvatarOpen((v) => !v)}
            >
              <Image
                src="/Image.svg"
                alt="Avatar"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
              <span className="text-black font-inter">{userName}</span>
              <FaChevronDown className="text-gray-500" size={14} />
              {avatarOpen && (
                <div className="absolute right-0 top-[110%] w-44 bg-white rounded-xl shadow-lg py-1 border border-gray-100">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setAvatarOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-m text-[var(--primary)] hover:bg-gray-50 rounded-xl"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          )}

          <div className="relative md:hidden" ref={mobileMenuRef}>
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Mở menu"
              className="w-9 h-9 flex items-center justify-center border border-gray-300 rounded-full"
            >
              <HiOutlineDotsHorizontal size={20} className="text-gray-600" />
            </button>

            {mobileMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-4 py-2 hover:bg-gray-100 ${
                      isActive(item.href)
                        ? 'text-[var(--primary)] font-semibold'
                        : 'text-[var(--primary)]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="border-t border-gray-200" />

                {!isLoggedIn ? (
                  <Link
                    href="/auth/login"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-1 py-2 text-sm text-[var(--primary)]hover:bg-gray-100 text-center"
                  >
                   <Button variant="outline-primary">Đăng nhập / Đăng ký</Button>
                  </Link>
                ) : (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-[var(--primary)] hover:bg-gray-100"
                  >
                    Đăng xuất
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
