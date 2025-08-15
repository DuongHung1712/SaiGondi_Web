"use client";

interface CategoryTagsFormProps {
  category: string;
  address: string;
  tags: string[];
  onCategoryChange: (value: string) => void;
  onAddressChange: (value: string) => void;
  onTagsChange: (tags: string[]) => void;
}

export default function CategoryTagsForm({
  category,
  address,
  tags,
  onCategoryChange,
  onAddressChange,
  onTagsChange,
}: CategoryTagsFormProps) {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-5">
      <h3 className="font-semibold mb-3 text-gray-700">DANH MỤC</h3>

      <label className="block mb-3">
        <span className="block text-gray-600 font-medium mb-1">Danh mục</span>
        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option value="Du lịch">Du lịch</option>
          <option value="Ăn uống">Ăn uống</option>
        </select>
      </label>

      <label className="block mb-3">
        <span className="block text-gray-600 font-medium mb-1">Địa chỉ</span>
        <input
          type="text"
          value={address}
          onChange={(e) => onAddressChange(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </label>

      <label className="block">
        <span className="block text-gray-600 font-medium mb-1">Tags</span>
        <input
          type="text"
          value={tags.join(", ")}
          onChange={(e) =>
            onTagsChange(
              e.target.value
                .split(",")
                .map((tag) => tag.trim())
                .filter(Boolean)
            )
          }
          placeholder="Nhập tags, cách nhau bởi dấu phẩy"
          className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-400"
        />
      </label>
    </div>
  );
}
