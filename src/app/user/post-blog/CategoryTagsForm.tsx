"use client";
import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { FiX } from "react-icons/fi";

interface CategoryTagsFormProps {
  categories: string[];
  tags: string[];
  address: string;
  onCategoriesChange: (values: string[]) => void;
  onTagsChange: (values: string[]) => void;
  onAddressChange: (value: string) => void;
}

const CATEGORY_OPTIONS = ["Du lịch", "Ăn uống", "Khách sạn", "Mua sắm", "Tâm linh", "1", "2", "3"];

export default function CategoryTagsForm({
  categories,
  tags,
  address,
  onCategoriesChange,
  onTagsChange,
  onAddressChange,
}: CategoryTagsFormProps) {
  const [open, setOpen] = useState(false);
  const [tagInput, setTagInput] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
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
    if (e.key === "Enter" && tagInput.trim() !== "") {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        onTagsChange([...tags, tagInput.trim()]);
      }
      setTagInput("");
    }
  };

  const removeTag = (tag: string) => {
    onTagsChange(tags.filter((t) => t !== tag));
  };

  return (
    <div className="bg-[var(--background)] rounded-lg border border-[var(--gray-5)] p-5" >
      <h3 className="font-bold mb-3 text-[var(--foreground)]">DANH MỤC</h3>

      <div className="mb-3 relative" ref={dropdownRef}>
        <span className="block font-medium text-[var(--gray-2)] mb-1 pt-2">
          Danh mục
        </span>
        <div
          className="bg-[#F9F9FC] border border-[var(--gray-5)] rounded-lg p-3 cursor-pointer select-none flex justify-between items-center"
          onClick={() => setOpen(!open)}
        >
          <span>
            {categories.length > 0 ? categories.join(", ") : "Chọn danh mục"}
          </span>
          <svg
            className={`w-4 h-4 transition-transform ${
              open ? "rotate-180" : "rotate-0"
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

        {open && (
          <div className="absolute left-0 mt-1 w-full bg-[#F9F9FC] border border-[var(--gray-5)] rounded-lg shadow-lg p-3 max-h-40 overflow-y-auto">
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
        <div className="flex flex-wrap gap-2 border border-[var(--gray-5)] rounded-lg p-2 bg-[#F9F9FC]">
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
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={handleAddTag}
            placeholder="Nhập tag và Enter"
            className="flex-1 min-w-[120px] p-1 bg-transparent outline-none"
          />
        </div>
      </div>

      <label className="block mb-3">
        <span className="block font-medium text-[var(--gray-2)] mb-1 pt-2">
          Địa chỉ
        </span>
        <input
          type="text"
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
          className="w-full bg-[#F9F9FC] border border-[var(--gray-5)] rounded-lg p-3 outline-none focus:ring-2 focus:ring-[var(--primary)]"
        />
      </label>
    </div>
  );
}