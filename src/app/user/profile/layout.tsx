// src/app/user/profile/layout.tsx
export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-xl font-bold mb-4">Hồ sơ cá nhân</h1>
      {children}
    </section>
  );
}
