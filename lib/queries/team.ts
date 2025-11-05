// lib/queries/team.ts
import { groq } from 'next-sanity';

// components/team/TeamHero.tsx
interface TeamMember {
  name: string;
  photo?: {
    asset?: { url: string };
    alt?: string;
  };
  heroStatement: string;
  position: string;
  slug: string; // ← FIXED: string, not object
}

interface TeamHeroProps {
  member: TeamMember;
}


export const getTeamMember = (slug: string) => groq`
  *[_type == "teamMember" && slug.current == $slug][0] {
    _id,
    name,
    slug { current },  // ← FIXED: string
    position,
    photo { asset-> { url, metadata { lqip } }, alt },
    heroStatement,
    personalStory,
    practiceAreas[] { area, result },
    achievements[],
    clientResults[] { title, outcome },
    testimonials[] { quote, author, role },
    education[] { degree, institution, year },
    barAdmissions[],
    publications[],
    community[],
    seoTitle,
    seoDescription
  }
`;

export const getTeamSlugs = () => groq`
  *[_type == "teamMember"] { slug { current } }
`;