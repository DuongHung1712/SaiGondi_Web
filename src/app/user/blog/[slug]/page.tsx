// src/app/user/blog/[slug]/page.tsx
import { useParams } from 'next/navigation';

export default function BlogPostPage() {
  const params = useParams();
  return <div>Chi tiết blog: {params.slug}</div>;
}
