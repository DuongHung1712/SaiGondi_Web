'use client';

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { blogCommentApi } from '@/lib/blogComment/blogCommentApi';

type CommentBoxProps = {
  blogId: string;
  onCommentAdded?: (comment: any) => void; // callback để update list
};

const CommentBox = ({ blogId, onCommentAdded }: CommentBoxProps) => {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!content.trim()) return;

    try {
      setLoading(true);
      const newComment = await blogCommentApi.createComment(blogId, content);
      setContent('');
      if (onCommentAdded) onCommentAdded(newComment); // cập nhật list
    } catch (err) {
      console.error('Lỗi khi gửi bình luận:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Bạn đang nghĩ gì!"
        className="w-full h-[60px] p-4 shadow-lg resize-none text-sm focus:outline-none bg-[var-white]"
      />
      <div className="flex justify-end mt-2">
        <Button
          onClick={handleSubmit}
          variant="primary"
          className="rounded-full px-4 py-1 text-sm focus:outline-none"
          disabled={loading}
        >
          {loading ? 'Đang gửi...' : 'Bình luận'}
        </Button>
      </div>
    </div>
  );
};

export default CommentBox;
