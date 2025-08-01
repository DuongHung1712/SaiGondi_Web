export default function HomePage() {
  return (
    <section className="py-10 px-4 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">
        Chào mừng đến với <span className="text-accent">Sài Gòn Đi</span>
      </h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">
        Cùng khám phá những địa điểm thú vị tại TP.HCM, check-in, chia sẻ hành trình và tạo nên cộng đồng yêu Sài Gòn!
      </p>
      <div className="mt-6">
        <button className="bg-accent text-white px-6 py-3 rounded hover:bg-amber-600 transition">
          Bắt đầu hành trình
        </button>
      </div>
    </section>
  );
}
