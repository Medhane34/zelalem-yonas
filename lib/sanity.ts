import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  useCdn: true,  // For faster reads
apiVersion: '2021-06-07', // FIXED: Stable version

  // token: process.env.SANITY_API_TOKEN,  // Uncomment if needed
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source).width(800).url();  // Optimized for blog thumbs
}