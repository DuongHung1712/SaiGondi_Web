import React, { useState, useEffect } from "react";
import Image from "next/image";

interface AuthLayoutProps {
  children: React.ReactNode;
  reverse?: boolean; // true = ảnh bên trái
  images?: string[]; 
}

const AuthLayout = ({
  children,
  reverse = false,
  images = ["/rectangle20.svg", "/rectangle21.svg", "/rectangle22.svg"],
}: AuthLayoutProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] bg-[var(--secondary)] opacity-50 blur-[250px] pointer-events-none"
        style={{ top: "-220px", left: "-140px" }} />

      <div className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] pointer-events-none"
        style={{ top: "-230px", left: "1170px" }} />

      <div className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] pointer-events-none"
        style={{ top: "700px", left: "-60px" }} />

      <div className="absolute w-[500px] h-[500px] bg-[var(--secondary)] opacity-50 blur-[250px] pointer-events-none"
        style={{ top: "650px", left: "1160px" }} />

      <div className="flex-1 hidden md:flex justify-center items-center py-18 pl-18 pr-18">
        {reverse && (
          <div className="flex-1 hidden md:flex justify-end items-center pr-30">
            <div className="relative w-[618px] h-[816px] rounded-2xl overflow-hidden">
              <Image
                src={images[current]}
                alt="Auth image"
                fill
                className="object-cover transition-all duration-700"
                priority
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, idx: number) => (
                  <span
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === current
                        ? "w-6 bg-[var(--secondary)]"
                        : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="flex-1 flex items-center justify-center">
          <div className="w-full">
            <div className="w-[400px] h-[100px] relative mb-6">
              <Image
                src="/logo.svg"
                alt="Sài Gòn Đi"
                fill
                className="object-contain"
                priority
              />
            </div>
            {children}
          </div>
        </div>

        {!reverse && (
          <div className="flex-1 hidden md:flex justify-start items-center pl-30">
            <div className="relative w-[618px] h-[816px] rounded-2xl overflow-hidden">
              <Image
                src={images[current]}
                alt="Auth image"
                fill
                className="object-cover transition-all duration-700"
                priority
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, idx: number) => (
                  <span
                    key={idx}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === current
                        ? "w-6 bg-[var(--secondary)]"
                        : "w-2 bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthLayout;
