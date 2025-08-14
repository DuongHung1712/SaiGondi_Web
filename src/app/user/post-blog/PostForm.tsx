import React from "react";

interface PostFormProps {
  title?: string;
  content?: string;
}

const PostForm: React.FC<PostFormProps> = ({
  title = "CÙNG TRẢI NGHIỆM MỘT NGÀY TẠI AN PHÚ",
  content = `QUÁN CHAY CỰC XINH NÉP MÌNH TRONG LÒNG CỦA SÀI GÒN!!
Quán này mới mở trên đường Nguyễn Văn Nguyên, bạn nào mà mê món ăn Healthy thì ít nhiều sẽ biết đến quán nha 😊`
}) => {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="font-bold text-[var(--foreground)] text-lg mb-4">THÔNG TIN BÀI ĐĂNG</h2>

      <label className="block font-semibold mb-1">Tiêu đề</label>
      <input
        type="text"
        defaultValue={title}
        className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-300"
      />

      <label className="block font-semibold mb-1">Nội dung</label>
      <textarea
        rows={5}
        defaultValue={content}
        className="w-full border rounded px-3 py-2 mb-4 focus:outline-none focus:ring focus:ring-blue-300"
      ></textarea>

      <div className="flex flex-col gap-2">
        <button className="px-4 py-2 border rounded hover:bg-gray-100 text-sm text-left">
          ➕ Thêm hình
        </button>
        <button className="px-4 py-2 border rounded hover:bg-gray-100 text-sm text-left">
          🎥 Thêm Video
        </button>
      </div>
    </div>
  );
};

export default PostForm;
