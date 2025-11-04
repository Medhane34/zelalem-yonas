// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/queries/blog";
import { PortableTextRenderer } from "@/components/blog/PortableTextRenderer";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { RelatedPosts } from "@/components/blog/RelatedPosts";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { Metadata } from "next";
import Link from "next/link";
import type { Post } from "@/lib/queries/blog";
import { BlogHero } from "@/components/blog/BlogHero";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title || "Untitled"} | Zelalem & Yonas Law Office`,
    description: post.excerpt || "Read our latest legal insights.",
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  /* Build TOC ----------------------------------------------------------- */
  const toc =
    post.body
      ?.filter(
        (b: any) =>
          b._type === "block" && ["h1", "h2", "h3"].includes(b.style)
      )
      .map((b: any) => ({
        id: b.children[0].text
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, ""),
        title: b.children[0].text,
        level: parseInt(b.style[1], 10) as 1 | 2 | 3,
      })) || [];

  return (
    <>
      {/* ----------  HERO HEADER  ---------- */}
      {/* <header className="w-full bg-gradient-to-b from-background to-background/90 border-b border-divider">
        <div className="container mx-auto px-6 py-10 md:py-16 text-center max-w-5xl">
          <h1 className="text-3xl md:text-5xl font-bold text-foreground">
            {post.title || "Untitled Post"}
          </h1>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-foreground/60">
            <span>{post.category?.title || "General"}</span>
            <span aria-hidden>•</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt || Date.now()).toLocaleDateString(
                "en-US",
                { year: "numeric", month: "long", day: "numeric" }
              )}
            </time>
            <span aria-hidden>•</span>
            <span>5 min read</span>
          </div>
        </div>
      </header> */}

      <BlogHero
  post={{
    ...post,
    category: post.category?.title,
    author: post.author
      ? {
          name: post.author.name || 'Anonymous',
          avatar: post.author.image?.asset?.url || undefined, // ← FIXED
        }
      : undefined,
  }}
/>

      {/* ----------  3-COLUMN BODY  ---------- */}
      <div className="container mx-auto px-6 py-10 max-w-7xl">
        <div className="grid grid-cols-12 gap-8">
          {/* ------ LEFT: TOC (sticky) ------ */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-24">
              <TableOfContents toc={toc} />
            </div>
          </aside>

          {/* ------ CENTER: ARTICLE ------ */}
          <article className="lg:col-span-6 col-span-12">
            {/* Mobile TOC (accordion) */}
            <details className="lg:hidden mb-6 block">
              <summary className="cursor-pointer font-semibold text-foreground/80">
                Table of contents
              </summary>
              <div className="mt-3">
                <TableOfContents toc={toc} />
              </div>
            </details>

<div className="prose prose-lg dark:prose-invert max-w-none mx-auto px-6 py-12">
  <PortableTextRenderer content={post.body} />
</div>

            {/* Back link */}
            <div className="mt-10 text-sm">
              <Link
                href="/blog"
                className="text-brand-600 hover:underline flex items-center gap-1"
              >
                ← Back to Blog
              </Link>
            </div>
          </article>

          {/* ------ RIGHT: RELATED + AUTHOR (sticky) ------ */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <section>
                <h2 className="text-lg font-semibold mb-4">Related Posts</h2>
                <RelatedPosts relatedPosts={post.relatedPosts || []} />
              </section>

              <section>
                <AuthorBio author={post.author || null} />
              </section>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}