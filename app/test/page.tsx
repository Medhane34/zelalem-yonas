import { getPostBySlug } from '@/lib/queries/blog';
import { PortableTextRenderer } from '@/components/blog/PortableTextRenderer';

export default async function TestPage() {
  const post = await getPostBySlug('sample'); // Replace with real slug
  if (!post) return <div>Post not found</div>;

  return (
    <article className="prose max-w-none">
      <h1>{post.title}</h1>
      <PortableTextRenderer content={post.body} />
    </article>
  );
}