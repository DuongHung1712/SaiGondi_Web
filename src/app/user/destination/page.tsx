"use client";

import { useEffect, useState } from "react";
import BackgroundBlur from "@/shared/BackgroundBlur";
import Slider from "rc-slider";
import Tooltip from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";
import "rc-slider/assets/index.css";
import DestinationCard from "./DestinationCard";
import SearchBox from "@/components/ui/SearchBox";
import { getDestinations } from "@/lib/place/destinationApi";

export default function DestinationPage() {
  // State quản lý filter
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000000);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  // State dữ liệu
  const [destinations, setDestinations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // State phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalDestinations, setTotalDestinations] = useState(0);
  const itemsPerPage = 10;

  // Fetch API khi filter/page thay đổi
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getDestinations({
          services: selectedOptions,
          page: currentPage,
          limit: itemsPerPage,
        });

        setDestinations(res.data.places || []);
        setTotalPages(res.data.pagination?.totalPages || 1);
        setTotalDestinations(res.data.pagination?.total || 0);
      } catch (err) {
        console.error("Fetch destinations error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [minPrice, maxPrice, selectedOptions, currentPage]);

  // Handle thay đổi checkbox filter
  const checkboxChangeHandle = (option: string) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  // Tạo danh sách page hiển thị (có "...")
  function getPageNumbers(current: number, total: number): (number | string)[] {
    const delta = 2;
    const pages: (number | string)[] = [];

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  }

  return (
    <main className="relative min-h-screen bg-white z-10 w-[90%] mx-auto">
      <BackgroundBlur />
      <SearchBox />

      <div className="flex gap-12 mb-12">
        {/* Bộ lọc */}
        <div id="filter" className="hidden lg:flex flex-col w-[30%]">
          <h2 className="font-bold text-lg">BỘ LỌC</h2>

          {/* Giá */}
          <div className="flex justify-between mt-4">
            <h6 className="font-semibold">Giá</h6>
            <i className="ri-arrow-down-wide-line"></i>
          </div>
          <Slider
            range
            min={0}
            max={10000000}
            value={[minPrice, maxPrice]}
            onChange={(value) => {
              const [min, max] = value as number[];
              setMinPrice(min);
              setMaxPrice(max);
            }}
            trackStyle={{ backgroundColor: "var(--primary)", height: 12 }}
            handleStyle={{
              borderColor: "var(--primary)",
              backgroundColor: "#fff",
              borderWidth: 2,
              height: 20,
              width: 20,
              marginTop: -4,
            }}
            railStyle={{ backgroundColor: "#e5e5e5", height: 12 }}
            handleRender={(node, handleProps) => (
              <Tooltip
                overlay={`${(
                  Math.round(handleProps.value / 10000) * 10000
                ).toLocaleString("vi-VN")} VND`}
                visible={handleProps.dragging}
                placement="top"
                overlayInnerStyle={{
                  fontSize: 12,
                  padding: "4px 8px",
                  color: "#000",
                  background: "#fff",
                }}
                overlayClassName="!z-50"
              >
                {node}
              </Tooltip>
            )}
          />

          <span className="block h-px bg-gray-300 my-6" />

          {/* Xếp hạng */}
          <h4 className="font-semibold">Xếp hạng</h4>
          <div className="flex gap-2 lg:gap-4 lg:mt-4 cursor-pointer">
            {[0, 1, 2, 3, 4].map((star) => (
              <div
                key={star}
                className="border h-6 w-6 p-4 flex items-center justify-center rounded-[4px] border-[#8DD3BB]"
              >
                {star}+
              </div>
            ))}
          </div>

          <span className="block h-px overflow-hidden bg-gray-400 lg:my-8 origin-top scale-y-20" />

          {/* Dịch vụ nổi bật */}
          <h4 className="font-semibold">Dịch vụ nổi bật</h4>
          <div className="flex flex-col mt-3 space-y-2">
            {[
              "Free breakfast",
              "Free parking",
              "Free internet",
              "Free airport shuttle",
              "Free cancellation",
            ].map((option) => (
              <label key={option} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => checkboxChangeHandle(option)}
                />
                {option}
              </label>
            ))}
          </div>

          <span className="block h-px bg-gray-300 my-6" />

          {/* Tiện ích */}
          <h4 className="font-semibold">Tiện ích</h4>
          <div className="flex flex-col mt-3 space-y-2">
            {["24h front desk", "Air-conditioned", "Fitness", "Pool"].map(
              (option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option)}
                    onChange={() => checkboxChangeHandle(option)}
                  />
                  {option}
                </label>
              )
            )}
            <button className="text-red-500 text-left">+24 more</button>
          </div>
        </div>

        {/* Danh sách điểm đến */}
        <div className="flex flex-col w-full lg:w-[70%]">
          {/* Tabs */}
          <div className="grid grid-cols-3 border rounded-2xl shadow bg-white">
            <div className="flex flex-col border-r px-4 py-3 rounded-tl-2xl rounded-bl-2xl">
              <h4 className="font-bold">Tất cả</h4>
              <p className="text-gray-500">{totalDestinations} điểm đến</p>
            </div>
            <div className="flex flex-col border-r px-4 py-3">
              <h4 className="font-bold">Ăn uống</h4>
              <p className="text-gray-500">--</p>
            </div>
            <div className="flex flex-col px-4 py-3 rounded-tr-2xl rounded-br-2xl">
              <h4 className="font-bold">Vui chơi</h4>
              <p className="text-gray-500">--</p>
            </div>
          </div>

          {/* Sort */}
          <div className="flex justify-between mt-8 items-center">
            <h4 className="text-sm lg:text-base">
              Hiển thị {destinations.length}/{totalDestinations} điểm đến
            </h4>
            <div className="flex items-center gap-2">
              <h4 className="text-sm lg:text-base">Sắp xếp theo:</h4>
              <select className="rounded-md focus:outline-none text-sm lg:text-base border px-2 py-1">
                <option value="popular">Phổ biến nhất</option>
                <option value="rating">Đánh giá cao nhất</option>
                <option value="newest">Mới nhất</option>
              </select>
            </div>
          </div>

          {/* List */}
          <div className="flex flex-col mt-8 gap-6">
            {loading ? (
              <p>Đang tải dữ liệu...</p>
            ) : destinations.length > 0 ? (
              destinations.map((destination) => (
                <DestinationCard key={destination._id} destination={destination} />
              ))
            ) : (
              <p>Không tìm thấy địa điểm phù hợp.</p>
            )}
          </div>

          {/* Pagination */}
          {!loading && totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2 flex-wrap">
              {/* Prev */}
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 border rounded-lg disabled:opacity-50 cursor-pointer"
              >
                Trước
              </button>

              {getPageNumbers(currentPage, totalPages).map((page, idx) =>
                page === "..." ? (
                  <span key={idx} className="px-3 py-1">
                    ...
                  </span>
                ) : (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page as number)}
                    className={`px-3 py-1 border rounded-lg cursor-pointer ${
                      currentPage === page
                        ? "bg-primary text-white"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    {page}
                  </button>
                )
              )}

              {/* Next */}
              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 border rounded-lg disabled:opacity-50 cursor-pointer"
              >
                Sau
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
