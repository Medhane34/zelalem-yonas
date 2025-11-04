// components/blog/RelatedPosts.tsx
import { Post } from "@/lib/queries/blog";
import { PostCard } from "./PostCard";

export const RelatedPosts = ({ relatedPosts }: { relatedPosts: Post[] }) => {
  if (!relatedPosts?.length) return null;

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-bold text-text-light dark:text-text-dark">
        Related Posts
      </h3>
      <div className="grid gap-6 md:grid-cols-1">
        {relatedPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};