// components/blog/AuthorBio.tsx
import Image from 'next/image';

interface AuthorBioProps {
  author: {
    name: string | null;
    image: string | null;
    bio: string | null; // ← FIXED: Optional bio
  } | null;
}

export const AuthorBio = ({ author }: AuthorBioProps) => {
  if (!author) return null;

  return (
    <div className="mb-8 p-4 bg-white dark:bg-slate-800 rounded-lg">
      <Image
        src={author.image || '/images/default-avatar.jpg'}
        alt={author.name || 'Anonymous'}
        width={80}
        height={80}
        className="rounded-full mb-4"
      />
      <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-2">
        {author.name || 'Anonymous'}
      </h3>
      <p className="text-text-light/70 dark:text-text-dark/70 text-sm">
        {author.bio || 'Legal expert at Zelalem & Yonas Law Office.'}
      </p>
    </div>
  );
};