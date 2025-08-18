"use client";
import MediaUpload from "./MediaUpload";
import PostForm from "./PostForm";
import CategoryTagsForm from "./CategoryTagsForm";
import Button from "@/components/ui/Button";
import { useState } from "react";
import { FiX, FiSave } from "react-icons/fi";
import Image from "next/image";

export default function PostBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>(["Du lịch"]);
  const [tags, setTags] = useState<string[]>([]);
  const [address, setAddress] = useState("");

  const handleImageFiles = (files: File[]) => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...urls]);
  };

  const handleVideoFiles = (files: File[]) => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setVideos((prev) => [...prev, ...urls]);
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const removeVideo = (index: number) => {
    setVideos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    console.log({
      title,
      content,
      images,
      videos,
      categories,
      tags,
      address,
    });
  };

  return (
    <main className="relative overflow-hidden">
      {/* blur */}
      <div className="absolute w-[500px] h-[500px] bg-[var(--secondary)] opacity-50 blur-[250px] pointer-events-none z-0" style={{ top: '200px', left: '-240px' }} />
      <div className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] pointer-events-none z-0" style={{ top: '500px', left: '1200px' }} />
      <div className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] pointer-events-none z-0" style={{ top: '1100px', left: '-60px' }} />
      <div className="absolute w-[500px] h-[500px] bg-[var(--secondary)] opacity-50 blur-[250px] pointer-events-none z-0" style={{ top: '2000px', left: '1300px' }} />
      <div className="absolute w-[500px] h-[500px] bg-[var(--primary)] opacity-50 blur-[250px] pointer-events-none z-0" style={{ top: '2500px', left: '-60px' }} />
      
      <Image
        src="/city-bg.svg"
        alt="city-bg"
        width={355}
        height={216}
        className="absolute left-[-100px] top-[100px] z-0 pointer-events-none
              w-[200px] sm:w-[250px] md:w-[300px] lg:w-[355px] h-auto"
      />
      <Image
        src="/Graphic_Elements.svg"
        alt="Graphic_Elements"
        width={192}
        height={176}
        className="absolute left-[1420px] top-[875px] z-0 pointer-events-none
              w-[100px] sm:w-[140px] md:w-[160px] lg:w-[192px] h-auto"
      />
      <Image
        src="/Graphic_Elements.svg"
        alt="Graphic_Elements"
        width={192}
        height={176}
        className="absolute left-[1420] top-[2800px] z-0 pointer-events-none
        w-[100px] sm:w-[140px] md:w-[160px] lg:w-[192px] h-auto"
      />

      <div className="relative z-10 max-w-4xl mx-auto mt-6 space-y-6 px-4 md:px-6">
        <PostForm
          title={title}
          content={content}
          onTitleChange={setTitle}
          onContentChange={setContent}
        />

        <MediaUpload
          images={images}
          videos={videos}
          onImagesChange={handleImageFiles}
          onVideosChange={handleVideoFiles}
          removeImage={removeImage}
          removeVideo={removeVideo}
        />

        <CategoryTagsForm
          categories={categories}
          tags={tags}
          address={address}
          onCategoriesChange={setCategories}
          onTagsChange={setTags}
          onAddressChange={setAddress}
        />

        <div className="flex justify-center space-x-4 mt-6 py-6">
          <Button
            variant="outline-secondary"
            onClick={() => console.log("Cancel")}
            className="flex items-center gap-2 rounded-xl border border-[var(--gray-3)] text-[var(--gray-1)] hover:bg-[var(--gray-5)]"
          >
            <FiX /> Hủy
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            className="flex items-center gap-2 rounded-xl"
          >
            <FiSave /> Đăng bài
          </Button>
        </div>
      </div>
    </main>
  );
}
