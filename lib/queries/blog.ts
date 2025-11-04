import { groq } from 'next-sanity';
import { client } from '@/lib/sanity';

export interface Category {
  _id: string;
  title: string;
   slug: string; // ← REQUIRED
}

export interface Post {
  excerpt: string;
  image: any;
  body: never[];
  relatedPosts: never[];
  _id: string;
  title: string;
slug?: { current: string };  // ← FIXED: Object, not strings  excerpt: string;
  publishedAt: string;
  mainImage?: {
    asset?: {
      url: string;
      metadata?: { lqip?: string };
    };
    alt?: string;
  };
  author?: {
    name?: string;
   avatar?: string;  // ← ADD THIS
    image?: {
      asset?: { url: string };
    };
  };
  categories?: Array<{
    title?: string;
    slug?: { current: string };
  }>;
}
export const getPosts = async (limit = 9) => {
  return client.fetch(
    groq`*[_type == "post" && publishedAt < now()] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug { current },
      excerpt,
      publishedAt,
      mainImage {
        asset-> { _id, url, metadata { lqip } },
        alt
      },
      author-> {
        name,
        image {
          asset-> { _id, url, metadata { lqip } }
        }
      },
      "categories": categories[]-> { title, slug { current } }
    }`,
    { limit }
  );
};

// lib/queries/blog.ts (Update getPostBySlug)
export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  try {
    return await client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0] {
  _id, title, slug, publishedAt, body, excerpt,

  // ← FIX: Get full image with asset URL
  author-> {
    name,
    bio,
    image {
      asset-> {
        _id,
        url,
        metadata { lqip }
      },
      alt
    }
  },

  category-> { title, slug, _ref },

  mainImage {
    asset-> {
      _id,
      url,
      metadata { lqip }
    },
    alt
  },

  "relatedPosts": *[_type == "post" && category._ref == ^.category._ref && !(_id == ^._id)] | order(publishedAt desc) [0...3] {
    _id, title, slug, excerpt, publishedAt,
    mainImage {
      asset-> {
        _id,
        url,
        metadata { lqip }
      },
      alt
    },
    category-> { title },
    author-> {
      name,
      image {
        asset-> { url }
      }
    }
  }
}`,
      { slug }
    );
  } catch (error) {
    console.error('getPostBySlug error:', error);
    return null;
  }
};

// lib/queries/blog.ts
export const getPostsByCategory = async (categorySlug: string): Promise<Post[]> => {
  try {
    console.log('Fetching posts for slug:', categorySlug);

    const result = await client.fetch(
      groq`*[
        _type == "post" && 
        defined(categories) && 
        $categorySlug in categories[]->slug.current &&
        publishedAt < now()
      ] | order(publishedAt desc) {
        _id,
        title,
        slug { current },
        excerpt,
        publishedAt,
        mainImage {
          asset-> { _id, url, metadata { lqip } },
          alt
        },
        author-> {
          name,
          image {
            asset-> { _id, url, metadata { lqip } }
          }
        },
        "categories": categories[]-> { title, slug { current } }
      }`,
      { categorySlug }
    );

    console.log('Posts found:', result);
    return result;
  } catch (error) {
    console.error('getPostsByCategory error:', error);
    return [];
  }
};

// lib/queries/blog.ts

export const getCategories = async (): Promise<Category[]> => {
  try {
    const result = await client.fetch(
      groq`*[_type == "category" && defined(slug.current)] | order(title asc) {
        _id,
        title,
        "slug": slug.current
      }`
    );
    console.log('Categories loaded:', result);
    return result;
  } catch (error) {
    console.error('getCategories error:', error);
    return [];
  }
};

export const getAuthors = async () => {
  return client.fetch(groq`*[_type == "author"] | order(name asc) { _id, name, slug, image }`);
};