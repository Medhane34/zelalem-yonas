// components/blog/TableOfContents.tsx
"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface TOCItem {
  id: string;
  title: string;
  level: 1 | 2 | 3; // h1/h2/h3
}

interface TableOfContentsProps {
  toc: TOCItem[]; // Generated from headings
}

export const TableOfContents = ({ toc }: TableOfContentsProps) => {
  const [activeId, setActiveId] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find(entry => entry.isIntersecting);
        setActiveId(visibleEntry ? visibleEntry.target.id : '');
      },
      { rootMargin: '-20% 0px -80% 0px' } // Offset for partial visibility
    );

    toc.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [toc]);

  if (toc.length === 0) return null;

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-4 w-full max-w-xs"
    >
      <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-lg">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center justify-between w-full text-left mb-2"
        >
          <h3 className="font-bold text-text-light dark:text-text-dark">On this page</h3>
          <ChevronDownIcon className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="space-y-1 text-sm"
            >
              {toc.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={`
                      block py-1 pr-2 rounded transition-colors
                      ${activeId === item.id ? 'text-brand-600 font-semibold bg-brand-50' : 'text-text-light/70 dark:text-text-dark/70 hover:text-brand-600'}
                    `}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  );
};