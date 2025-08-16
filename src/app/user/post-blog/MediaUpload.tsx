"use client";

interface MediaUploadProps {
  images: string[];
  videos: string[];
  onImagesChange: (files: File[]) => void;
  onVideosChange: (files: File[]) => void;
}

export default function MediaUpload({
  images,
  videos,
  onImagesChange,
  onVideosChange,
}: MediaUploadProps) {
  return (
    <div className="bg-[var(--background)] rounded-lg border border-[var(--gray-5)] p-5">
      <h3 className="font-bold mb-5 text-[var(--foreground)]">PHƯƠNG TIỆN</h3>

      <div className="mb-5">
        <div className="flex items-center mb-3">
          <p className="font-medium text-[var(--foreground)] mr-3">Hình ảnh</p>
          {images.length > 0 && (
            <span className="text-sm text-gray-500">
              Đã chọn {images.length} hình ảnh
            </span>
          )}
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <label className="cursor-pointer block">
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => onImagesChange(Array.from(e.target.files || []))}
            />
            <div className="flex flex-col items-center justify-center">
              <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-gray-500 mb-1">Chọn tối đa 5 hình ảnh</p>
              <p className="text-xs text-gray-400">Định dạng: JPG, PNG, GIF (Mỗi ảnh tối đa 5MB)</p>
            </div>
          </label>
        </div>

        {images.length > 0 && (
          <div className="mt-4">
            <p className="font-medium text-[var(--foreground)] mb-2">Xem trước bài đăng</p>
            <div className="flex gap-3 flex-wrap">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="w-20 h-20 rounded-lg overflow-hidden border border-gray-300 relative"
                >
                  <img src={src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        <div className="flex items-center mb-3">
          <p className="font-medium text-[var(--foreground)] mr-3">Video</p>
          {videos.length > 0 && (
            <span className="text-sm text-gray-500">
              Đã chọn {videos.length} video
            </span>
          )}
        </div>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
          <label className="cursor-pointer block">
            <input
              type="file"
              accept="video/*"
              className="hidden"
              onChange={(e) => onVideosChange(Array.from(e.target.files || []))}
            />
            <div className="flex flex-col items-center justify-center">
              <svg className="w-10 h-10 text-gray-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <p className="text-sm text-gray-500">Chọn video để tải lên</p>
            </div>
          </label>
        </div>

        {videos.length > 0 && (
          <div className="mt-4">
            <p className="font-medium text-[var(--foreground)] mb-2">Xem trước bài đăng</p>
            <div className="flex gap-3">
              {videos.map((src, idx) => (
                <div
                  key={idx}
                  className="w-40 h-40 rounded-lg overflow-hidden border border-gray-300 relative"
                >
                  <video
                    src={src}
                    className="w-full h-full object-cover"
                    controls
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}