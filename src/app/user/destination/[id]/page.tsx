"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { getDestinationById, createReview, getReviewsByPlaceId } from "@/lib/place/destinationApi";
import { Place } from "@/types/place";
import { Review } from "@/types/review";
import ReviewCard from "../ReviewCard";

import useUser from "@/hooks/useUser";

const DestinationDetail = () => {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;
  const { user, isAuthenticated, loading: userLoading } = useUser();

  const [destination, setDestination] = useState<Place | null>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (id) {
      const fetchData = async () => {
        try {
          const destinationRes = await getDestinationById(id);
          const place = destinationRes?.data || destinationRes?.place || destinationRes;
          setDestination(place);
          setReviews(place.reviews || []);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  }, [id]);

  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!destination) {
    return <div className="text-center py-10">Destination not found.</div>;
  }

  console.log("Destination data:", destination); // For browser console debugging

  const mainImage =
    Array.isArray(destination.images) && destination.images.length > 0
      ? destination.images[0]
      : "/image.svg";

  return (
    <div className="bg-gradient-to-b from-orange-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 flex gap-2 mb-4">
          <span>Việt Nam</span>
          <span>/</span>
          <span>Thành phố Hồ Chí Minh</span>
          <span>/</span>
          <span className="text-gray-700 font-medium">Phường Thủ Đức</span>
        </div>

        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              {destination.name}
            </h1>
            <div className="flex items-center gap-2 text-blue-600 mt-2">
              <i className="ri-map-pin-2-fill"></i>
              <span>Phường Thủ Đức</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-semibold">
                {(destination.avgRating || 0).toFixed(1)}
              </span>
              <span className="text-sm text-gray-600">
                Very Good {destination.totalRatings || 0} Đánh giá
              </span>
              <span className="text-pink-600 text-sm">Cách bạn 350m</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="border rounded-lg p-2 hover:bg-gray-100">
              <i className="ri-heart-line text-gray-600 text-lg"></i>
            </button>
            <button className="border rounded-lg p-2 hover:bg-gray-100">
              <i className="ri-bookmark-line text-gray-600 text-lg"></i>
            </button>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold">
              Ăn uống
            </button>
          </div>
        </div>

        {/* Gallery */}
        <div className="grid grid-cols-4 gap-2 mt-6">
          <div className="col-span-2 row-span-2">
            <Image
              src={mainImage}
              alt={destination.name}
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {Array.isArray(destination.images) &&
            destination.images.slice(1, 5).map((img, idx) => (
              <Image
                key={idx}
                src={img || "/image.svg"}
                alt={`Ảnh ${idx + 2} của ${destination.name}`}
                width={400}
                height={300}
                className="w-full h-40 object-cover rounded-lg"
              />
            ))}

          {Array.isArray(destination.images) &&
            destination.images.length > 5 && (
              <div className="relative">
                <Image
                  src={destination.images[5]}
                  alt="Xem thêm"
                  width={400}
                  height={300}
                  className="w-full h-40 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white font-semibold rounded-lg cursor-pointer">
                  Xem thêm
                </div>
              </div>
            )}
        </div>

        {/* Giới thiệu */}
        <section className="mt-8">
          <h2 className="text-lg font-bold mb-3">GIỚI THIỆU</h2>
          <p className="text-gray-700 leading-relaxed">
            {destination.description}
          </p>

          {/* Rating tags */}
          <div className="mt-6 flex items-center gap-4">
            <div className="bg-blue-600 text-white text-center px-4 py-3 rounded-lg">
              <p className="text-2xl font-bold">
                {(destination.avgRating || 0).toFixed(1)}
              </p>
              <p className="text-sm">{destination.totalRatings} nhận xét</p>
            </div>
            <div className="flex gap-3 flex-wrap">
              {["Trung tâm phường", "Trung tâm phường", "Trung tâm phường"].map(
                (tag, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 border rounded-lg text-gray-700"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Vị trí */}
        
          <section className="mt-8">
            <h2 className="text-lg font-bold mb-3">Vị trí</h2>
            <p className="text-gray-600 mb-3">{destination.address}</p>
            <iframe
              src={`https://www.google.com/maps?q=${destination.location?.coordinates?.[1] ?? destination.lat},${destination.location?.coordinates?.[0] ?? destination.lng}&hl=vi&z=16&output=embed`}
              width="100%"
              height="400"
              className="rounded-lg border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="mt-3">
              <a
                href={`https://www.google.com/maps?q=${destination.location?.coordinates?.[1] ?? destination.lat},${destination.location?.coordinates?.[0] ?? destination.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium"
              >
                Xem trên Google Map
              </a>
            </div>
          </section>
                

        {/* Đánh giá */}
        <section className="mt-8">
          <h2 className="text-lg font-bold mb-6">ĐÁNH GIÁ</h2>
          <div className="flex items-center gap-6 mb-6">
            <span className="text-4xl font-bold text-green-800">
              {(destination.avgRating || 0).toFixed(1)}
            </span>
            <span className="text-gray-600">
              {destination.totalRatings} Lượt đánh giá
            </span>
          </div>

          {/* Review list */}
          <div className="space-y-6">
            {reviews.length > 0 ? (
              reviews.map((reviewItem) => (
                <ReviewCard key={reviewItem._id} review={reviewItem} />
              ))
            ) : (
              <p className="text-gray-600">Chưa có đánh giá nào.</p>
            )}
          </div>

          

          {userLoading ? (
            <div className="mt-6 h-10"></div> // Placeholder to prevent layout shift
          ) : isAuthenticated ? (
            <button
              className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold"
              onClick={() => setShowReviewForm(true)}
            >
              Viết đánh giá
            </button>
          ) : (
            <Link href="/auth/login">
              <span className="mt-6 inline-block bg-gray-400 text-white px-5 py-2 rounded-lg font-semibold cursor-pointer">
                Đăng nhập để đánh giá
              </span>
            </Link>
          )}

          {showReviewForm && (
            <div className="mt-8 overflow-auto max-h-[80vh]">
              <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative mx-auto">
                {/* Nút đóng */}
                <button
                  className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                  onClick={() => setShowReviewForm(false)}
                >
                  <i className="ri-close-line text-xl"></i>
                </button>

                {/* Header */}
                <div className="flex flex-col items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 mb-2">
                    <i className="ri-check-line text-green-600 text-xl"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">ĐÁNH GIÁ</h3>
                  <p className="text-gray-500 text-sm">Viết đánh giá địa điểm</p>
                </div>

                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (!user || !user._id) {
                      alert("Bạn phải đăng nhập để thực hiện việc này.");
                      router.push('/auth/login');
                      return;
                    }
                    try {
                      const reviewData = {
                        destinationId: id,
                        rating: rating,
                        comment: comment,
                        userId: user._id, // Pass the user ID
                      };
                      await createReview(reviewData);

                      // Refetch reviews sau khi tạo mới
                      const reviewsRes = await getReviewsByPlaceId(id);
                      setReviews(reviewsRes.reviews || []);

                      setShowReviewForm(false);
                      setRating(0);
                      setComment("");
                    } catch (error) {
                      console.error("Failed to submit review:", error);
                      alert("Gửi đánh giá thất bại.");
                    }
                  }}
                >
                  {/* Rating Stars */}
                  <div className="flex justify-center mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="focus:outline-none"
                      >
                        <i
                          className={`ri-star-fill text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}>
                        </i>
                      </button>
                    ))}
                  </div>

                  {/* Nội dung đánh giá */}
                  <div className="mb-4">
                    <label
                      htmlFor="comment"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Nội dung đánh giá
                    </label>
                    <input
                      type="text"
                      id="comment"
                      placeholder="Quán ăn ngon..."
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-end gap-3">
                    <button
                      type="button"
                      className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-100"
                      onClick={() => setShowReviewForm(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700"
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </section>

        {/* Bài viết liên quan */}
        <section className="mt-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">CÁC BÀI VIẾT LIÊN QUAN</h2>
            <button className="text-blue-600 text-sm font-medium">
              Xem tất cả
            </button>
          </div>
          <p className="text-gray-600 mb-6">
            Cùng xem các trải nghiệm của khách hàng
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border shadow hover:shadow-lg transition"
              >
                <Image
                  src="/image.svg"
                  alt="Post"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <span className="text-sm text-gray-500 block mb-1">
                    17/08/2024
                  </span>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Khám phá Phường bạn có mới cùng mình nhé
                  </h3>
                  <div className="flex items-center text-sm text-gray-600 gap-1">
                    <i className="ri-map-pin-fill"></i> Phường Bến Cơ
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default DestinationDetail;
