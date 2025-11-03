// components/blog/PostCard.tsx
"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cardVariants } from '@/lib/motion';
import { ImageAtom } from '@/components/atoms/Image'; // ← FIXED: Use your ImageAtom
import type { Post } from '@/lib/queries/blog'; // Import Post type

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  // Full null fallbacks for all fields
  const defaultTitle = post.title || 'Untitled Post';
  const defaultExcerpt = post.excerpt || 'Read more to learn about this topic.';
  const categoryTitle = post.category?.title || 'General';
  const authorName = post.author?.name || 'Anonymous';
  const authorImage = post.author?.image || '/images/default-avatar.jpg';
  const publishedDate = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Recent';
  const imageSrc = post.image?.asset?.url || '/images/blog-placeholder.jpg'; // Fallback for ImageAtom
  const imageAlt = post.image?.alt || defaultTitle;

  return (
    <motion.a
      href={`/blog/${post.slug}`}
      variants={cardVariants}
      whileHover="hover"
      className="group block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="relative h-48">
        <ImageAtom
          src={imageSrc}
          alt={imageAlt}
          width={400}
          height={300}
          className="group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2 text-sm text-brand-600">
          <span>{categoryTitle}</span>
          <span>•</span>
          <span>{publishedDate}</span>
        </div>
        <h3 className="text-xl font-bold text-text-light dark:text-text-dark mb-2">
          {defaultTitle}
        </h3>
        <p className="text-text-light/70 dark:text-text-dark/70 mb-4 line-clamp-2">
          {defaultExcerpt}
        </p>
        <div className="flex items-center gap-2">
          <img
            src={authorImage}
            alt={authorName}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-text-light/70 dark:text-text-dark/70">
            {authorName}
          </span>
        </div>
      </div>
    </motion.a>
  );
};