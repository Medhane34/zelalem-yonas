// components/blog/PostCard.tsx
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { cardVariants } from "@/lib/motion";
import { ImageAtom as Image } from "@/components/atoms/Image";
import type { Post } from "@/lib/queries/blog";
import { urlFor } from "@/lib/image";

interface PostCardProps {
  post: Post;
}

export const PostCard = ({ post }: PostCardProps) => {
  const title = post.title || "Untitled Post";
  const excerpt = post.excerpt || "Read more to learn about this topic.";
  const category = post.category?.title || "General";
  const authorName = post.author?.name || "Anonymous";

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "Recent";

  // IMAGE URL
  const imageObj = post.mainImage;
  const imageUrl = imageObj?.asset?.url
    ? urlFor(imageObj).width(800).height(600).fit("crop").auto("format").url()
    : "/fallback-card.jpg";

  const blurDataURL = imageObj?.asset?.metadata?.lqip;

  // AUTHOR AVATAR
const authorImageObj = post.author?.image;
const authorAvatar = authorImageObj?.asset?.url
  ? urlFor(authorImageObj)
      .width(64)
      .height(64)
      .fit("crop")
      .url()
  : "/fallback-avatar.jpg";

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="group block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white dark:bg-slate-800"
    >
      <Link href={`/blog/${post.slug?.current}`} className="block">       <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={imageObj?.alt || title}
            height={192}
            width={400}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 400px"
            placeholder={blurDataURL ? "blur" : "empty"}
            blurDataURL={blurDataURL}
          />
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-brand-700 px-3 py-1 rounded-full text-xs font-medium">
              {category}
            </span>
          </div>
        </div>

        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-brand-600 mb-2">
            <span>{publishedDate}</span>
          </div>

          <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-2 line-clamp-2 group-hover:text-brand-600 transition-colors">
            {title}
          </h3>

          <p className="text-sm text-text-light/70 dark:text-text-dark/70 mb-4 line-clamp-2">
            {excerpt}
          </p>

          <div className="flex items-center gap-3">
            <Image
              src={authorAvatar}
              alt={authorName}
              width={10}
              height={10}
              className="rounded-full ring-2 ring-white/50"
            />
            <span className="text-sm text-text-light/70 dark:text-text-dark/70">
              {authorName}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};