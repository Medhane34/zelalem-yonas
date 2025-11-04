// components/blog/PortableTextRenderer.tsx
"use client";
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/lib/image';

const components = {
  types: {
    image: ({ value }: any) => {
      // Safety first
      if (!value?.asset?._ref) {
        console.warn('Missing image asset', value);
        return null;
      }

      const imgUrl = urlFor(value)
        .width(800)
        .height(600)
        .fit('max')
        .auto('format')
        .url();

      if (!imgUrl) {
        console.warn('Failed to generate image URL', value);
        return null;
      }

      return (
        <figure className="my-8">
          <Image
            src={imgUrl}
            alt={value.alt || 'Blog image'}
            width={800}
            height={600}
            className="rounded-lg shadow-md w-full h-auto"
            sizes="(max-width: 768px) 100vw, 800px"
            priority={false}
          />
          {value.caption && (
            <figcaption className="text-center text-sm text-muted-foreground mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({ value, children }: any) => {
      const href = value?.href || '#';
      const isExternal = href.startsWith('http');
      return (
        <Link
          href={href}
          {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          className="text-brand-600 hover:underline"
        >
          {children}
        </Link>
      );
    },
  },
  block: {
    h1: ({ children }: any) => {
      // Safely extract plain text from children which may contain React nodes
      const extractText = (node: any): string => {
        if (node == null) return '';
        if (typeof node === 'string') return node;
        if (Array.isArray(node)) return node.map(extractText).join('');
        if (typeof node === 'object') return extractText(node.props?.children ?? node.children ?? '');
        return String(node);
      };

      const text = extractText(children);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return (
        <h1 id={id} className="text-3xl font-bold my-8 scroll-mt-24">
          <a href={`#${id}`} className="group inline-flex items-center">
            {text}
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-brand-600">#</span>
          </a>
        </h1>
      );
    },
    h2: ({ children }: any) => {
      const extractText = (node: any): string => {
        if (node == null) return '';
        if (typeof node === 'string') return node;
        if (Array.isArray(node)) return node.map(extractText).join('');
        if (typeof node === 'object') return extractText(node.props?.children ?? node.children ?? '');
        return String(node);
      };

      const text = extractText(children);
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
      return (
        <h2 id={id} className="text-2xl font-bold my-6 scroll-mt-20">
          <a href={`#${id}`} className="group inline-flex items-center">
            {text}
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity text-brand-600">#</span>
          </a>
        </h2>
      );
    },
    normal: ({ children }: any) => <p className="my-4 leading-relaxed">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="ml-6 list-disc space-y-2 my-4">{children}</ul>,
    number: ({ children }: any) => <ol className="ml-6 list-decimal space-y-2 my-4">{children}</ol>,
  },
};

export const PortableTextRenderer = ({ content }: { content: any }) => {
  if (!content || !Array.isArray(content) || content.length === 0) {
    return <p className="text-muted-foreground italic">No content available.</p>;
  }

  return <PortableText value={content} components={components} />;
};