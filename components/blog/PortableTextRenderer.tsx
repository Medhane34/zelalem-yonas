// components/blog/PortableTextRenderer.tsx
import { PortableText } from '@portabletext/react';
import type { PortableTextReactComponents } from '@portabletext/react';
import Image from 'next/image'; // Ensure Image is imported
import Link from 'next/link';

const components = {
  types: {
    image: ({ value }: { value: { asset: { _ref: string }; alt: string; caption?: string } }) => (
      <figure className="my-8">
        <Image
          src={value.asset._ref} // Sanity image ref
          alt={value.alt || 'Blog image'}
          width={800}
          height={400}
          className="rounded-lg shadow-md"
        />
        {value.caption && <figcaption className="text-center text-text-light/70 dark:text-text-dark/70 mt-2">{value.caption}</figcaption>}
      </figure>
    ),
    blockquote: ({ value }: { value: { children: string[] } }) => (
      <blockquote className="border-l-4 border-brand-500 pl-4 italic my-4"> {/* @ts-ignore */}
        {value.children.map((child, i) => <p key={i}>{child.text}</p>)}
      </blockquote>
    ),
  },
  marks: { // Fix: Ensure marks component matches PortableTextMarkComponentProps
    link: ({ value, children }: { value?: { href: string }; children: React.ReactNode }) => (
      <Link href={value?.href || '#'} className="text-brand-600 hover:underline">
        {children}
      </Link>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="ml-6 list-disc space-y-2">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="ml-6 list-decimal space-y-2">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: { children: React.ReactNode }) => {
      const id = children?.toString()?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 'h1';
      return (
        <h1 id={id} className="text-3xl font-bold my-6 text-text-light dark:text-text-dark">
          <a href={`#${id}`} className="hover:text-brand-600"> {children}</a>
        </h1>
      );
    },
    h2: ({ children }: { children: React.ReactNode }) => {
      const id = children?.toString()?.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') || 'h2';
      return (
        <h2 id={id} className="text-2xl font-bold my-4 text-text-light dark:text-text-dark">
          <a href={`#${id}`} className="hover:text-brand-600"> {children}</a>
        </h2>
      );
    },
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="text-text-light dark:text-text-dark my-2">{children}</p>
    ),
  },
} as Partial<PortableTextReactComponents>;

interface Props {
  content: any[]; // post.body from Sanity
}

export const PortableTextRenderer = ({ content }: Props) => (
  <PortableText value={content} components={components} />
);