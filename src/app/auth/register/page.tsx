// src/app/auth/register/page.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function RegisterPage() {
  const router = useRouter();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agree, setAgree] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: gọi API register sau này
    router.push("/auth/otp");
  };

  return (
    <>
      <h2 className="heading-2 font-bold text-[var(--secondary)] mb-1">ĐĂNG KÝ</h2>
      <p className="text-sm text-gray-600 mb-5">Hãy bắt đầu tạo tài khoản cho bản thân</p>

      <form onSubmit={handleSubmit} className="space-y-5 pt-5">
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            label="Họ và tên lót"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <Input
            type="text"
            label="Tên"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Input
            type="email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="text"
            label="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            label="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>

        <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            label="Xác thực mật khẩu"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showConfirmPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
          </button>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            checked={agree}
            onChange={() => setAgree(!agree)}
            className="w-4 h-4 rounded border-gray-300"
            required
          />
          <label htmlFor="terms" className="text-sm text-gray-600">
            Tôi đã đọc các điều khoản và điều kiện
          </label>
        </div>

        <Button type="submit" variant="primary" className="w-full mt-4">
          ĐĂNG KÝ
        </Button>
      </form>

      <p className="text-sm mt-6 text-gray-600 text-center">
        Bạn đã có tài khoản? <a href="/auth/login" className="text-[var(--primary)] hover:underline">Đăng nhập ngay</a>
      </p>

      <div className="flex items-center gap-2 pt-5">
        <hr className="flex-1 border-gray-300" />
        <span className="text-gray-500 text-sm">Hoặc đăng ký bằng</span>
        <hr className="flex-1 border-gray-300" />
      </div>

      <div className="flex justify-center mt-8 space-x-4">
        <Button variant="outline-primary"><FaFacebookF className="text-[var(--primary)] text-xl" /></Button>
        <Button variant="outline-primary"><FcGoogle className="text-xl" /></Button>
        <Button variant="outline-primary"><FaApple className="text-black text-xl" /></Button>
      </div>
    </>
  );
}
