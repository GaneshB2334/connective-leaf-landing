
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const mentors = [
  {
    name: "Sarah Johnson",
    role: "Tech Lead at Google",
    specialties: ["Machine Learning", "Career Transition", "Leadership"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    rating: 4.9,
    reviews: 134
  },
  {
    name: "David Chen",
    role: "Product Director at Meta",
    specialties: ["Product Strategy", "UX Design", "Market Research"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    rating: 4.8,
    reviews: 98
  },
  {
    name: "Maya Patel",
    role: "Startup Advisor & Angel Investor",
    specialties: ["Fundraising", "Growth Strategy", "Business Development"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    rating: 5.0,
    reviews: 67
  },
  {
    name: "James Wilson",
    role: "Engineering Director at Amazon",
    specialties: ["System Design", "Team Building", "Technical Leadership"],
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    rating: 4.7,
    reviews: 112
  }
];

const MentorCard = ({ mentor, index }: { mentor: typeof mentors[0], index: number }) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 opacity-0 translate-y-8 transition-all duration-700 ease-out",
        `delay-${index * 100}`,
        "mentor-card"
      )}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-xl overflow-hidden image-glow">
              <img 
                src={mentor.image} 
                alt={mentor.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-white rounded-full px-2 py-1 text-xs font-medium text-primary shadow-sm border border-primary/10">
              {mentor.rating} ★
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">{mentor.name}</h3>
            <p className="text-sm text-muted-foreground">{mentor.role}</p>
            <p className="text-xs mt-1">{mentor.reviews} reviews</p>
          </div>
        </div>
        
        <div className="mb-4 flex flex-wrap gap-2">
          {mentor.specialties.map((specialty) => (
            <span 
              key={specialty} 
              className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full"
            >
              {specialty}
            </span>
          ))}
        </div>
        
        <div className="mt-auto pt-4">
          <Button variant="outline" className="w-full">View Profile</Button>
        </div>
      </div>
    </div>
  );
};

const MentorsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const mentorCards = document.querySelectorAll('.mentor-card');
            mentorCards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('opacity-100');
                card.classList.remove('opacity-0', 'translate-y-8');
              }, index * 100);
            });
            
            const sectionHeading = document.querySelector('.mentors-heading');
            if (sectionHeading) {
              sectionHeading.classList.add('opacity-100');
              sectionHeading.classList.remove('opacity-0', 'translate-y-8');
            }
          }
        });
      },
      {
        threshold: 0.1
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const categories = ["All", "Technology", "Business", "Design", "Marketing", "Leadership"];

  return (
    <section id="mentors" className="relative py-24" ref={sectionRef}>
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_left,rgba(30,144,255,0.1),transparent)]"
        aria-hidden="true"
      ></div>
      
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out mentors-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Mentors</h2>
          <p className="text-muted-foreground text-lg">
            Learn from industry leaders with proven track records and a passion for mentoring.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm transition-all",
                activeCategory === category
                  ? "bg-primary text-white shadow-md"
                  : "bg-secondary/80 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mentors.map((mentor, index) => (
            <MentorCard key={mentor.name} mentor={mentor} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" className="px-8">
            Browse All Mentors
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentorsSection;
