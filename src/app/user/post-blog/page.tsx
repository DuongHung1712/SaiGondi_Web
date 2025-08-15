"use client";
import MediaUpload from "./MediaUpload";
import PostForm from "./PostForm";
import CategoryTagsForm from "./CategoryTagsForm"
import { useState } from "react";

export default function PostBlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [videos, setVideos] = useState<string[]>([]);
  const [category, setCategory] = useState("Du lịch");
  const [address, setAddress] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleImageFiles = (files: File[]) => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setImages(urls);
  };

  const handleVideoFiles = (files: File[]) => {
    const urls = files.map((file) => URL.createObjectURL(file));
    setVideos(urls);
  };

  const handleSubmit = () => {
    console.log({
      title,
      content,
      images,
      videos,
      category,
      address,
      tags,
    });
  };
  return (
    <div className="max-w-4xl mx-auto mt-6">
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
      />
      <CategoryTagsForm
        category={category}
        address={address}
        tags={tags}
        onCategoryChange={setCategory}
        onAddressChange={setAddress}
        onTagsChange={setTags}
      />
    </div>
  );
}
