// components/blog/BlogHero.tsx
import Image from "next/image";
import { urlFor } from "@/lib/image";
import { CalendarIcon, ClockIcon, UserIcon } from "@heroicons/react/24/outline";

interface BlogHeroProps {
  post: {
    title: string;
    excerpt?: string;
    mainImage?: {
      asset?: { url: string; metadata?: { lqip?: string } };
      alt?: string;
    };
    publishedAt: string;
    author?: {
      name?: string;
      avatar?: string;  // ← ADD THIS
      image?: {
        asset?: { url: string; metadata?: { lqip?: string } };
        alt?: string;
      };
    };
    readingTime?: string;
    category?: string;
  };
}

export function BlogHero({ post }: BlogHeroProps) {
  const imgUrl = post.mainImage?.asset?.url
    ? urlFor(post.mainImage)
        .width(1920)
        .height(1080)
        .fit("crop")
        .auto("format")
        .url()
    : "/fallback-hero.jpg";

  const blurDataURL = post.mainImage?.asset?.metadata?.lqip;

  const date = new Date(post.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // AUTHOR AVATAR URL
  // Inside BlogHero component
const authorAvatar = post.author?.avatar
  ? post.author.avatar
  : post.author?.image?.asset?.url
    ? urlFor(post.author.image).width(96).height(96).url()
    : "/fallback-avatar.jpg";

  return (
    <section className="relative w-full h-[60vh] min-h-[400px] overflow-hidden">
      <Image
        src={imgUrl}
        alt={post.mainImage?.alt || post.title}
        fill
        className="object-cover"
        priority
        placeholder={blurDataURL ? "blur" : "empty"}
        blurDataURL={blurDataURL}
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-8 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-6 items-end">
          {/* Left: Meta */}
          <div className="text-white/80 text-sm space-y-1">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-4 h-4" />
              <span>{post.readingTime || "5 min"} read</span>
            </div>
            {post.category && (
              <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs">
                {post.category}
              </div>
            )}
          </div>

          {/* Center: Title */}
          <div className="md:col-span-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="mt-3 text-lg text-white/90 max-w-2xl mx-auto md:mx-0">
                {post.excerpt}
              </p>
            )}
          </div>

          {/* Right: Author */}
          {/* Right: Author */}
<div className="flex items-center justify-center md:justify-end gap-3 text-white">
  <Image
    src={authorAvatar}
    alt={post.author?.name || "Anonymous"}
    width={48}
    height={48}
    className="rounded-full ring-2 ring-white/50"
  />
  <div>
    <p className="text-sm text-white/70">Written by</p>
    <p className="font-medium text-white">{post.author?.name || "Anonymous"}</p>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}