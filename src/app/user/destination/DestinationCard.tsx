"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface Props {
  destination: any; // để linh hoạt nhận từ cả 2 API
}

const DestinationCard = ({ destination }: Props) => {
  const router = useRouter();

  // Lấy id (ưu tiên _id, fallback placeId)
  const id = destination._id || destination.placeId;

  // Nếu không có id thì không cho click
  const handleClick = () => {
    if (!id) {
      console.error("Destination không có id:", destination);
      return;
    }
    router.push(`/user/destination/${id}`);
  };

  // Lấy ảnh (ưu tiên image, fallback images[0])
  const imageUrl =
    destination.image ||
    (Array.isArray(destination.images) && destination.images[0]) ||
    "/image.svg";

  // Một số field fallback
  const avgRating = destination.avgRating || 0;
  const reviewCount = destination.reviewCount || destination.totalRatings || 0;
  const location = destination.location || destination.address || "Chưa rõ";

  return (
    <div className="grid grid-cols-[30%_70%] rounded-xl shadow-md bg-white overflow-hidden">
      {/* Ảnh */}
      <Image
        alt={destination.name}
        src={imageUrl}
        width={400}
        height={300}
        unoptimized
        className="w-full h-48 object-cover"
      />

      {/* Nội dung */}
      <div className="flex flex-col p-4">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold">{destination.name}</h2>
            <span className="text-[var(--primary)] flex items-center gap-1 text-sm">
              <i className="ri-map-pin-fill"></i> {location}
            </span>

            <div className="flex items-center gap-4 text-sm">
              {/* Rating sao */}
              <span className="flex items-center gap-1 text-yellow-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <i
                    key={index}
                    className={
                      index + 1 <= Math.floor(avgRating)
                        ? "ri-star-fill"
                        : index + 0.5 <= avgRating
                        ? "ri-star-half-line"
                        : "ri-star-line"
                    }
                  />
                ))}
              </span>

              {/* Số service (nếu có) */}
              {destination.serviceCount && (
                <span className="text-[var(--primary)]">
                  <i className="ri-cup-fill"></i>{" "}
                  {destination.serviceCount} SERVICE
                </span>
              )}
            </div>

            {/* Rating + status */}
            <div className="flex gap-4 items-center mt-2">
              <div className="border px-3 py-1 rounded-md text-[var(--primary)] font-bold">
                {avgRating.toFixed(1)}
              </div>
              {destination.status && (
                <div className="text-[var(--primary)] font-semibold">
                  {destination.status}
                </div>
              )}
              <div className="hidden md:block text-gray-500 text-sm">
                {reviewCount} Đánh giá
              </div>
            </div>
          </div>

          {/* Category + distance */}
          <div className="flex flex-col items-end text-sm">
            {destination.category && (
              <div className="bg-[var(--secondary)] text-white px-3 py-1 rounded-md">
                {destination.category}
              </div>
            )}
            {destination.distance && <p className="mt-2">{destination.distance}</p>}
          </div>
        </div>

        {/* Divider */}
        <span className="block h-px bg-gray-300 my-4" />

        {/* Actions */}
        <div className="flex justify-between items-center">
          <i className="ri-heart-fill border border-[var(--primary)] rounded-md p-2 text-[var(--secondary)] cursor-pointer"></i>
          <button
            onClick={handleClick}
            disabled={!id}
            className="btn-primary w-[70%] sm:w-[80%] h-10 rounded-3xl text-white text-sm cursor-pointer disabled:bg-gray-400"
          >
            XEM CHI TIẾT
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
