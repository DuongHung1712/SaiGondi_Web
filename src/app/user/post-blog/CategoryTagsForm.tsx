"use client";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { FiX } from "react-icons/fi";

interface CategoryTagsFormProps {
  categories: string[];
  tags: string[];
  address: string;
  ward: string;
  onCategoriesChange: (values: string[]) => void;
  onTagsChange: (values: string[]) => void;
  onAddressChange: (value: string) => void;
  onWardChange: (value: string) => void;
}

const CATEGORY_OPTIONS = [
  "Du lịch",
  "Ăn uống",
  "Khách sạn",
  "Mua sắm",
  "Tâm linh",
  "1",
  "2",
  "3",
];
const WARD_OPTIONS = ["Phường 1", "Phường 2", "Phường 3", "Phường 4"];

export default function CategoryTagsForm({
  categories,
  tags,
  address,
  ward,
  onCategoriesChange,
  onTagsChange,
  onAddressChange,
  onWardChange,
}: CategoryTagsFormProps) {
  const [openCategory, setOpenCategory] = useState(false);
  const [openWard, setOpenWard] = useState(false);
  const [tagInput, setTagInput] = useState("");

  const categoryRef = useRef<HTMLDivElement>(null);
  const wardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setOpenCategory(false);
      }
      if (wardRef.current && !wardRef.current.contains(event.target as Node)) {
        setOpenWard(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleCategory = (value: string) => {
    if (categories.includes(value)) {
      onCategoriesChange(categories.filter((c) => c !== value));
    } else {
      onCategoriesChange([...categories, value]);
    }
  };

  const handleAddTag = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === " " && tagInput.trim() !== "") {
      e.preventDefault();
      if (!tagInput.startsWith("#")) {
        return;
      }

      const tag = tagInput.trim();

      const uniqueTags = [...new Set([...tags, tag])];
      onTagsChange(uniqueTags);

      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    onTagsChange(tags.filter((t) => t !== tag));
  };

  return (
    <div className="bg-[var(--background)] rounded-lg border border-[var(--gray-5)] p-5">
      <h3 className="font-bold mb-3 text-[var(--foreground)]">DANH MỤC</h3>

      <div className="mb-3 relative" ref={categoryRef}>
        <span className="block font-medium text-[var(--gray-2)] mb-1 pt-2">
          Danh mục
        </span>
        <div
          className="bg-[#F9F9FC] border border-[var(--gray-5)] rounded-lg p-3 cursor-pointer select-none flex justify-between items-center focus-within:ring-2 focus-within:ring-[var(--primary)]"
          onClick={() => setOpenCategory(!openCategory)}
          tabIndex={0}
        >
          <span>
            {categories.length > 0 ? categories.join(", ") : "Chọn danh mục"}
          </span>
          <svg
            className={`w-4 h-4 transition-transform ${
              openCategory ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {openCategory && (
          <div className="absolute left-0 mt-1 w-full bg-[#F9F9FC] border border-[var(--gray-5)] rounded-lg shadow-lg p-3 max-h-40 overflow-y-auto z-10">
            {CATEGORY_OPTIONS.map((option) => (
              <label
                key={option}
                className="flex items-center gap-2 p-1 cursor-pointer"
              >
                <input
                  type="checkbox"
                  checked={categories.includes(option)}
                  onChange={() => toggleCategory(option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="mb-3">
        <span className="block font-medium text-[var(--gray-2)] mb-1 pt-2">
          Tags
        </span>
        <div className="flex flex-wrap gap-2 border border-[var(--gray-5)] rounded-lg p-2 bg-[#F9F9FC] focus-within:ring-2 focus-within:ring-[var(--primary)]">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 bg-[#DEDEFA] text-[var(--primary)] px-2 py-1 rounded-lg text-sm"
            >
              {tag}
              <button
                type="button"
                onClick={() => removeTag(tag)}
                className="ml-1 text-xs hover:text-blue-600"
              >
                <FiX size={14} />
              </button>
            </span>
          ))}
          <input
            type="text"
            value={tagInput}
            onChange={(e) => {
              const val = e.target.value;

              if (val === "" || val.startsWith("#")) {
                setTagInput(val);
              }
            }}
            onKeyDown={handleAddTag}
            placeholder="Nhập tag, bắt đầu với #, cách ra để hoàn thành"
            className="flex-1 min-w-[120px] p-1 bg-transparent outline-none"
          />
        </div>
      </div>

      <label className="block mb-3">
        <span className="block font-medium text-[var(--gray-2)] mb-1 pt-2">
          Địa chỉ chi tiết
        </span>
        <input
          type="text"
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
          placeholder="Nhập số nhà, tên đường..."
          className="w-full bg-[#F9F9FC] border border-[var(--gray-5)] rounded-lg p-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
        />
      </label>

      <div className="mb-3 relative" ref={wardRef}>
        <span className="block font-medium text-[var(--gray-2)] mb-1 pt-2">
          Phường
        </span>
        <div
          className="bg-[#F9F9FC] border border-[var(--gray-5)] rounded-lg p-3 cursor-pointer select-none flex justify-between items-center focus-within:ring-2 focus-within:ring-[var(--primary)]"
          onClick={() => setOpenWard(!openWard)}
          tabIndex={0}
        >
          <span>{ward ? ward : "Chọn phường"}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              openWard ? "rotate-180" : "rotate-0"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>

        {openWard && (
          <div className="absolute left-0 mt-1 w-full bg-[#F9F9FC] border border-[var(--gray-5)] rounded-lg shadow-lg p-3 max-h-32 overflow-y-auto z-10">
            {WARD_OPTIONS.map((option) => (
              <div
                key={option}
                className="p-2 cursor-pointer hover:bg-gray-100 rounded"
                onClick={() => {
                  onWardChange(option);
                  setOpenWard(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
