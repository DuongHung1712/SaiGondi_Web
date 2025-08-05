"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import AuthLayout from "@/components/auth/AuthLayout";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { FiChevronLeft } from "react-icons/fi";

export default function RegisterOtpPage() {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Gọi API verify OTP
    console.log("OTP nhập:", otp);
  };

  return (
    <AuthLayout>
      <a
        href="/auth/register"
        className="text-sm text-gray-500 hover:underline inline-flex items-center mb-4"
      >
        <FiChevronLeft className="mr-2 text-base" />
        Quay lại trang đăng ký
      </a>

      <h2 className="heading-2 font-bold text-[var(--primary)] mb-1">
        MÃ OTP
      </h2>
      <p className="text-sm text-gray-600 mb-5">
        Mã xác thực đã được gửi tới email của bạn.
      </p>

      <form onSubmit={handleVerifyOtp} className="space-y-5 pt-5">
        <Input
          type="text"
          label="Mã xác thực"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <button
          type="button"
          className="text-sm text-[var(--primary)] hover:underline -mt-3"
          onClick={() => console.log("Gửi lại mã OTP")}
        >
          Gửi lại mã!
        </button>

        <Button type="submit" variant="primary" className="w-full mt-4">
          XÁC THỰC
        </Button>
      </form>
    </AuthLayout>
  );
}
