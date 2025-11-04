// app/blog/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Checkbox } from '@/components/ui/Checkbox';
import { getPosts, getPostsByCategory, getCategories } from '@/lib/queries/blog';
import { PostCard } from '@/components/blog/PostCard';
import type { Post, Category } from '@/lib/queries/blog';

export default function BlogListPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Sync URL → state
  useEffect(() => {
    const cat = searchParams.get('category') || '';
    setActiveCategory(cat);
  }, [searchParams]);

  // Fetch categories
  useEffect(() => {
    getCategories().then(setCategories);
  }, []);

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const result = activeCategory
          ? await getPostsByCategory(activeCategory)
          : await getPosts(9);
        setPosts(result);
      } catch (error) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [activeCategory]);

  const handleCategoryChange = (catSlug: string, checked: boolean) => {
    if (checked && catSlug) {
      setActiveCategory(catSlug);
      router.push(`/blog?category=${catSlug}`, { scroll: false });
    } else {
      setActiveCategory('');
      router.push('/blog', { scroll: false });
    }
  };

  const clearFilter = () => {
    setActiveCategory('');
    router.push('/blog', { scroll: false });
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-text-light dark:text-text-dark mb-4">
            Legal Insights & Updates
          </h1>
          <p className="text-text-light/70 dark:text-text-dark/70 max-w-2xl mx-auto">
            Stay informed on the latest developments in law from our experts.
          </p>
        </div>

        {/* Filter + Posts */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              <button
                onClick={clearFilter}
                className={`p-2 rounded w-full text-left transition-colors ${
                  !activeCategory
                    ? 'bg-brand-100 text-brand-700 font-medium'
                    : 'text-text-light/70 dark:text-text-dark/70 hover:text-brand-600'
                }`}
              >
                All Categories
              </button>

              {categories.map((cat) => (
                <Checkbox
                  key={cat._id}
                  isSelected={activeCategory === cat.slug}
                  onValueChange={(checked) => handleCategoryChange(cat.slug, checked)}
                  className="w-full"
                >
                  {cat.title}
                </Checkbox>
              ))}
            </div>

            {activeCategory && (
              <button
                onClick={clearFilter}
                className="mt-3 text-sm text-brand-600 hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>

          {/* Posts */}
          <div className="md:col-span-3">
            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-text-light/70 dark:text-text-dark/70">Loading posts...</p>
              </div>
            ) : posts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-text-light/70 dark:text-text-dark/70 mb-4">
                  No posts in this category yet—check back soon.
                </p>
                <button
                  onClick={clearFilter}
                  className="text-brand-600 hover:underline"
                >
                  Browse all posts
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}