import { groq } from 'next-sanity';
// lib/sanity/queries.ts
import { client } from '@/lib/sanity';
export interface Category {
  _id: string;
  title: string;
  slug: string;
}

export interface Post {
  body: never[];
  relatedPosts: never[];
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  image: { asset: { url: string }; alt: string };
  author: { name: string; image: string };
  category: {
      slug: any; title: string 
};
}
export const getPosts = async (limit = 10): Promise<Post[]> => {
  return client.fetch(
    groq`*[_type == "post" && publishedAt < now() && title != null] | order(publishedAt desc) [0...${limit}] {
      _id, title, slug, publishedAt, excerpt, body[0...1], author->, category->, image
    }`
  );
};

// lib/queries/blog.ts (Update getPostBySlug)
export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    return await client.fetch(
      groq`*[_type == "post" && slug.current == $slug && publishedAt < now()][0] {
        _id, title, slug, publishedAt, body, excerpt, 
        author-> { name, image, bio }, // ← FIXED: Add bio
        category-> { title, slug, _ref }, // ← FIXED: Add _ref for related
        image,
        "relatedPosts": *[_type == "post" && category._ref == ^.category._ref && !(_id == ^._id) && publishedAt < now()] | order(publishedAt desc) [0...3] {
          _id, title, slug, excerpt, publishedAt, image, category-> { title }
        }
      }`,
      { slug }
    );
  } catch (error) {
    console.error('getPostBySlug error:', error);
    return null;
  }
};

export const getPostsByCategory = async (categorySlug: string, limit = 10): Promise<Post[]> => {
  try {
    return await client.fetch(
      groq`*[_type == "post" && publishedAt < now() && title != null && category->slug.current == $categorySlug] | order(publishedAt desc) [0...${limit}] {
        _id, title, slug, publishedAt, excerpt, body[0...1], author->, category->, image
      }`,
      { categorySlug }
    );
  } catch (error) {
    console.error('getPostsByCategory fetch error:', error);
    return [];
  }
};

export const getCategories = async () => {
  return client.fetch(groq`*[_type == "category"] | order(title asc) { _id, title, slug }`);
};

export const getAuthors = async () => {
  return client.fetch(groq`*[_type == "author"] | order(name asc) { _id, name, slug, image }`);
};