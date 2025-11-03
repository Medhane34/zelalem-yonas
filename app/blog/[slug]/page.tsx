// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/queries/blog';
import { PortableTextRenderer } from '@/components/blog/PortableTextRenderer';
import { AuthorBio } from '@/components/blog/AuthorBio';
import { RelatedPosts } from '@/components/blog/RelatedPosts';
import { TableOfContents } from '@/components/blog/TableOfContents';
import { Metadata } from 'next';
import Link from 'next/link';
import type { Post } from '@/lib/queries/blog';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: (post.title || 'Untitled Post') + ' | Zelalem & Yonas Law Office',
    description: post.excerpt || 'Read our latest legal insights.',
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) notFound();

  // Generate TOC from body (headings only)
  const toc = post.body?.filter(
    (block: any) => block._type === 'block' && ['h1', 'h2', 'h3'].includes(block.style)
  ).map((block: any) => ({
    id: block.children[0].text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
    title: block.children[0].text,
    level: parseInt(block.style[1]) as 1 | 2 | 3, // Explicitly cast to 1 | 2 | 3
  })) || [];

  return (
    <article className="py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-text-light dark:text-text-dark mb-4">
            {post.title || 'Untitled Post'}
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm text-text-light/70 dark:text-text-dark/70 mb-6">
            <span>{post.category?.title || 'General'}</span>
            <span>•</span>
            <span>{new Date(post.publishedAt || Date.now()).toLocaleDateString()}</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        {/* 3-Col Layout */}
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left: TOC Sidebar */}
          <div className="lg:col-span-2 hidden md:block">
            <TableOfContents toc={toc} />
          </div>

          {/* Center: Main Content */}
          <div className="lg:col-span-6">
            <div className="prose max-w-none mb-8">
              <PortableTextRenderer content={post.body || []} />
            </div>
          </div>

          {/* Right: Related Posts Sidebar */}
          <div className="lg:col-span-4">
            <RelatedPosts relatedPosts={post.relatedPosts || []} />
            <AuthorBio author={post.author || null} />
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {post.category && (
              <Link href={`/blog?category=${post.category.slug}`} className="text-brand-600 hover:underline">
                {post.category.title}
              </Link>
            )}
          </div>
          <Link href="/blog" className="text-brand-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}