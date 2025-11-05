// components/blog/BlogPreviewSection.tsx
import Link from 'next/link';
import { ImageAtom } from '@/components/atoms/Image';
import { SolidButton } from '@/components/atoms/Button';

// Native date formatter (NO date-fns!)
const formatDate = (dateString: string): string => {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',  // Nov
    day: 'numeric',  // 4
    year: 'numeric', // 2025
  }).format(new Date(dateString));
};

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  mainImage?: {
    asset?: { url: string };
    alt?: string;
  };
  categories?: Array<{ title?: string }>;
}

interface BlogPreviewSectionProps {
  posts: Post[];
}

export const BlogPreviewSection = ({ posts }: BlogPreviewSectionProps) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Our Latest Blog Posts
          </h2>
          <Link href="/blog">
            <SolidButton
              variant="outline"
              color="brand"
              className="px-6 py-3 text-base font-medium"
            >
              See All Blog Posts
            </SolidButton>
          </Link>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group block"
            >
              <article className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
                {post.mainImage?.asset?.url && (
                  <div className="aspect-video overflow-hidden">
                    <ImageAtom
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt || post.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center gap-3 text-sm text-gray-600 mb-3">
                    <time>
                      {formatDate(post.publishedAt)}
                    </time>
                    {post.categories?.[0]?.title && (
                      <>
                        <span>•</span>
                        <span className="text-brand-600 font-medium">
                          {post.categories[0].title}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};