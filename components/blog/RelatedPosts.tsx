// components/blog/RelatedPosts.tsx
import Link from 'next/link';
import { PostCard } from './PostCard';
import type { Post } from '@/lib/queries/blog';

interface RelatedPostsProps {
  relatedPosts: Post[] | null; // ← FIXED: Optional
}

export const RelatedPosts = ({ relatedPosts }: RelatedPostsProps) => {
  if (!relatedPosts || relatedPosts.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4">
        Related Posts
      </h3>
      <div className="space-y-4">
        {relatedPosts.slice(0, 3).map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};