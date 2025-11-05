// app/team/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getTeamMember } from '@/lib/queries/team';
import { client } from '@/lib/sanity'; // ← Add client import
import { TeamHero } from '@/components/team/TeamHero';

export default async function TeamMemberPage({ params }: { params: { slug: string } }) {
  // FIXED: Execute the query with client.fetch
  const member = await client.fetch(getTeamMember(params.slug), { slug: params.slug });

  // Debug log (remove after)
  console.log('Fetched member:', member);

  if (!member) {
    console.error('Member not found for slug:', params.slug);
    notFound();
  }

  return <TeamHero member={member} />;
}