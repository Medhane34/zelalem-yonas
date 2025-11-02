// components/organisms/about/TeamSection.tsx - UPDATED
"use client";

export const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Zelalem Abebe",
      title: "Senior Partner",
      specialization: "Civil Litigation",
      experience: "15+ years",
      image: "/avatars/avatar-3d-2.jpeg",
      link: "/team/zelalem"
    },
    {
      id: 2,
      name: "Yonas Mekonnen", 
      title: "Managing Partner",
      specialization: "Business Law",
      experience: "12+ years", 
      image: "/images/team/yonas.jpg",
      link: "/team/yonas"
    },
    {
      id: 3,
      name: "Sara Johnson",
      title: "Associate Attorney", 
      specialization: "Family Law",
      experience: "8+ years",
      image: "/images/team/sara.jpg",
      link: "/team/sara"
    },
    {
      id: 4,
      name: "Michael Chen",
      title: "Legal Counsel",
      specialization: "Real Estate",
      experience: "10+ years",
      image: "/images/team/michael.jpg",
      link: "/team/michael"
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 text-lg uppercase tracking-wider mb-4">
            Our Team
          </h2>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our Legal Experts
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Our team of experienced attorneys brings decades of combined legal expertise.
          </p>
        </div>

        {/* Cards without motion - direct implementation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="group relative text-center">
              {/* Image Container - Reduced margin to bring overlay closer */}
              <div className="relative mb-20"> {/* Changed from mb-16 to mb-20 */}
                {/* Team Member Photo Placeholder */}
                <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto border-4 border-white shadow-lg"></div>
                
                {/* Floating Overlay - Smaller and positioned lower */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-56 bg-white dark:bg-gray-800 rounded-xl p-3 shadow-lg border border-gray-200 dark:border-gray-700">
                  {/* Name - Smaller font */}
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  
                  {/* Title - Smaller font */}
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-medium mb-1">
                    {member.title}
                  </p>
                  
                  {/* Specialization - Smaller and tighter */}
                  <p className="text-xs text-gray-600 dark:text-gray-400 mb-2 leading-tight">
                    {member.specialization} • {member.experience}
                  </p>

                  {/* Learn More Link - Smaller */}
                  <a 
                    href={member.link} 
                    className="text-xs font-semibold text-accent-600 hover:text-accent-700 transition-colors"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};