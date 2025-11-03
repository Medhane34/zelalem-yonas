import { client } from '@/lib/sanity';
import { postsQuery, categoriesQuery, authorsQuery } from '@/lib/queries/blog';
import { urlFor } from '@/lib/sanity';

export async function fetchPosts() {
  return await client.fetch(postsQuery);
}

export async function fetchCategories() {
  return await client.fetch(categoriesQuery);
}

export async function fetchAuthors() {
  return await client.fetch(authorsQuery);
}

export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export function getImageUrl(imageRef: any) {
  return urlFor(imageRef);
}