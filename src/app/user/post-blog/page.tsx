"use client";
import MediaUpload from "./MediaUpload";
import PostForm from "./PostForm";
import CategoryTagsForm from "./CategoryTagsForm";
import PostPrivacySettings from "./PostPrivacySettings";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FiX, FiSave } from "react-icons/fi";
import Image from "next/image";
import { LuSend } from "react-icons/lu";
import CoverUpload from "./CoverUpload";


export default function PostBlogPage() {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);
  
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [privacy, setPrivacy] = useState("public");
  const [showSettings, setShowSettings] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [ward, setWard] = useState("");
  const [address, setAddress] = useState("");
  const [cover, setCover] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      router.push("/auth/login"); // chưa đăng nhập → về login
    } else {
      setAuthChecked(true); // có token → cho phép render
    }
  }, [router]);

  useEffect(() => {
    const draft = localStorage.getItem("blogDraft");
    if (draft) {
      const data = JSON.parse(draft);
      setTitle(data.title || "");
      setContent(data.content || "");
      setImages(data.images || []);
      setVideos(data.videos || []);
      setCategories(data.categories || []);
      setTags(data.tags || []);
      setAddress(data.address || "");
      setCover(data.cover || null);
    }
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      saveDraft();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  });

  const saveDraft = () => {
    const draft = {
      title,
      content,
      images,
      videos,
      categories,
      tags,
      ward,
      address,
      cover,
    };
    localStorage.setItem("blogDraft", JSON.stringify(draft));
    console.log("Draft saved locally ✅");
    alert("Đã lưu nháp");
  };

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
    const postData = {
      title,
      content,
      images,
      videos,
      categories,
      tags,
      ward,
      address,
      cover,
    };
    console.log("📌 Post data:", postData);
    alert("Giả lập đăng bài (chưa gọi API)");localStorage.removeItem("blogDraft");

    // Reset form
    setTitle("");
    setContent("");
    setImages([]);
    setVideos([]);
    setCategories([]); 
    setTags([]);
    setAddress("");
    setWard("");
    setCover(null);
    
  };

  if (!authChecked) {
    return <p className="text-center mt-10">Đang kiểm tra đăng nhập...</p>;
  }

  const handleCoverChange = (file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setCover(reader.result.toString());
      }
    };
    reader.readAsDataURL(file);
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
        <CoverUpload
          cover={cover}
          onCoverChange={handleCoverChange}
          onRemove={() => setCover(null)}
        />
        <div>
          <PostForm
            title={title}
            content={content}
            privacy={privacy}
            onTitleChange={setTitle}
            onContentChange={setContent}
            onPrivacyClick={() => setShowSettings(true)}
          />

          {showSettings && (
            <PostPrivacySettings
              value={privacy}
              onChange={(val) => setPrivacy(val)}
              onClose={() => setShowSettings(false)}
            />
          )}
        </div>

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
          ward={ward}
          onCategoriesChange={setCategories}
          onTagsChange={setTags}
          onAddressChange={setAddress}
          onWardChange={setWard}
        />

        <div className="flex justify-center space-x-4 mt-8 mb-12">
          <Button
            variant="outline-secondary"
            onClick={() => router.back()}
            className="flex items-center gap-2 rounded-xl border border-[var(--gray-3)] text-[var(--gray-1)] hover:bg-[var(--gray-5)]"
          >
            <FiX /> Hủy
          </Button>
          <Button
            variant="outline-secondary"
            onClick={saveDraft}
            className="flex items-center gap-2 rounded-xl border border-[var(--gray-3)] text-[var(--gray-1)] hover:bg-[var(--gray-5)]"
          >
            <FiSave /> Lưu nháp
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit}
            className="flex items-center gap-2 rounded-xl"
          >
            <LuSend /> Đăng bài
          </Button>
        </div>
      </div>
    </main>
  );
}
