// app/blog/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Checkbox } from "@heroui/react";
import { getPosts, getPostsByCategory, getCategories } from '@/lib/queries/blog';
import { PostCard } from '@/components/blog/PostCard';
import type { Post, Category } from '@/lib/queries/blog';

export default function BlogListPage() {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories once
  useEffect(() => {
    getCategories().then((cats) => {
      console.log('Fetched categories:', cats); // Debug—remove after
      setCategories(cats);
    }).catch((err) => {
      console.error('Categories fetch error:', err);
    });
  }, []);

  // Fetch posts on category change
  useEffect(() => {
    if (activeCategory) {
      getPostsByCategory(activeCategory).then((filteredPosts) => {
        console.log('Filtered posts for', activeCategory, ':', filteredPosts); // Debug—remove after
        setPosts(filteredPosts);
      });
    } else {
      getPosts(9).then((allPosts) => {
        console.log('All posts:', allPosts); // Debug—remove after
        setPosts(allPosts);
      });
    }
  }, [activeCategory]);

  const handleCategoryChange = (catSlug: string) => {
    setActiveCategory(catSlug);
    if (catSlug) {
      router.push(`/blog?category=${catSlug}`);
    } else {
      router.push('/blog');
    }
  };

  const clearFilter = () => {
    setActiveCategory('');
    router.push('/blog');
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

        {/* Filter Sidebar */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-1">
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <div className="space-y-2">
              <button
                onClick={clearFilter}
                className={`p-2 rounded w-full text-left ${
                  !activeCategory
                    ? 'bg-brand-100 text-brand-700'
                    : 'text-text-light/70 dark:text-text-dark/70 hover:text-brand-600'
                }`}
              >
                All Categories
              </button>
              {categories.length > 0 ? (
                categories.map((cat: Category) => (
                  <Checkbox
                    key={cat._id}
                    isSelected={activeCategory === cat.slug}
                    onValueChange={() => handleCategoryChange(cat.slug)}
                    className="w-full"
                  >
                    {cat.title}
                  </Checkbox>
                ))
              ) : (
                <p className="text-text-light/70 dark:text-text-dark/70">Loading categories...</p>
              )}
            </div>
            {activeCategory && (
              <button
                onClick={clearFilter}
                className="mt-2 text-sm text-brand-600 hover:underline"
              >
                Clear filter
              </button>
            )}
          </div>

          {/* Posts Grid */}
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.length > 0 ? (
              posts.map((post: Post) => (
                <PostCard key={post._id} post={post} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
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