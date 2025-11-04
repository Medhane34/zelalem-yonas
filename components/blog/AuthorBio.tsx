// components/blog/AuthorBio.tsx
import Image from "next/image";
import { urlFor } from "@/lib/image";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";

export function AuthorBio({ author }: { author: any }) {
  const avatarUrl = author?.image?.asset?.url
    ? urlFor(author.image).width(128).height(128).url()
    : author?.avatar
    ? author.avatars
    : "/fallback-avatar.jpg";

  // ← ONLY render <Image> if we have a valid URL
  return (
    <div className="flex items-center gap-4 p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
      {avatarUrl && (
        <Image
          src={avatarUrl}
          alt={author?.name || "Author"}
          width={64}
          height={64}
          className="rounded-full ring-2 ring-brand-200"
        />
      )}
      <div>
        <p className="font-semibold text-text-light dark:text-text-dark">
          {author?.name || "Anonymous"}
        </p>
        {author?.bio && (
          <div className="text-sm text-text-light/70 dark:text-text-dark/70 mt-1 prose prose-sm dark:prose-invert">
            <PortableTextRenderer content={author.bio} />
          </div>
        )}
      </div>
    </div>
  );
}