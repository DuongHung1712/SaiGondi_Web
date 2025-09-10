'use client';

import { useEffect, useState } from 'react';
import CommentCard from './CommentCard';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { blogCommentApi } from '@/lib/blogComment/blogCommentApi';
import { BlogComment } from '@/types/blogComment';

type CommentSectionProps = {
  blogId: string;
};

// const REVIEWS_PER_PAGE = 5;

const CommentSection = ({ blogId }: CommentSectionProps) => {
  const [comments, setComments] = useState<BlogComment[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const { comments, pagination } = await blogCommentApi.getCommentsByBlog(blogId, {
          page: currentPage,
          // limit: REVIEWS_PER_PAGE,
        });

        setComments(comments);
        setTotalPages(pagination.totalPages);
      } catch (err) {
        console.error("Failed to fetch comments", err);
      }
    };
    fetchComments();
  }, [blogId, currentPage]);

  return (
    <div className="space-y-2">
      {comments.length > 0 ? (
        comments.map((c) => <CommentCard key={c._id} comment={c} />)
      ) : (
        <p className="text-sm text-gray-500">Chưa có bình luận nào.</p>
      )}

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-4">
          <button
            className="cursor-pointer text-xl disabled:opacity-30"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <MdNavigateBefore size={24} />
          </button>
          <span className="text-sm text-[var(--gray-2)]">
            {currentPage} / {totalPages}
          </span>
          <button
            className="cursor-pointer text-xl disabled:opacity-30"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            <MdNavigateNext size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentSection;