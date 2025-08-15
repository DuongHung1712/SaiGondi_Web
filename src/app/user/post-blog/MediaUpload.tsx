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
      <h3 className="font-bold mb-3 text-[var(--foreground)]">PHƯƠNG TIỆN</h3>

      <div className="mb-5">
        <p className="mb-2 font-medium text-gray-600">Hình ảnh</p>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => onImagesChange(Array.from(e.target.files || []))}
        />
        <div className="flex gap-3 mt-3">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="w-20 h-20 rounded-lg overflow-hidden border border-gray-300"
            >
              <img src={src} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-2 font-medium text-gray-600">Video</p>
        <input
          type="file"
          accept="video/*"
          onChange={(e) => onVideosChange(Array.from(e.target.files || []))}
        />
        <div className="flex gap-3 mt-3">
          {videos.map((src, idx) => (
            <div
              key={idx}
              className="w-20 h-20 rounded-lg overflow-hidden border border-gray-300"
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
    </div>
  );
}
