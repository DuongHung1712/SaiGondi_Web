// src/types/post.ts
export interface Post {
  id: string;
  slug: string;
  title: string;
  image: string;

  // Categories & Tags
  category: string;       // dùng cho hiển thị category đầu tiên
  categories: string[];   // toàn bộ categories
  tags: string[];

  // Author
  author: string;
  authorAvatar: string;

  // Thông tin thời gian & địa điểm
  date: string;
  address: string;
  ward: string;

  // Nội dung chính
  content: {
    type: "text" | "image" | "video";
    value?: string;
    url?: string;
  }[];

  // Album
  album: {
    type: "image" | "video";
    url: string;
    caption?: string | null;
  }[];

  // Cài đặt quyền riêng tư
  privacy: "public" | "private" | "friends-only" | "pending";

  // Tương tác
  likeBy: string[]; // danh sách userId đã like
  totalLikes: number;
  totalComments: number; 
  shareCount: number;
  viewCount: number;

  // Trạng thái
  status: "pending" | "approved" | "hidden" | "deleted";
}
