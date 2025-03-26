
import React from 'react';
import { cn } from "@/lib/utils";

const features = [
  {
    title: "AI-Powered Matching",
    description: "Our intelligent system matches you with mentors based on your goals, industry, and experience level.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    delay: "delay-100"
  },
  {
    title: "Seamless Scheduling",
    description: "Book sessions based on your availability. Our calendar integration makes scheduling effortless.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    delay: "delay-200"
  },
  {
    title: "Structured Guidance",
    description: "Follow customized learning paths with clear milestones and actionable feedback.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    delay: "delay-300"
  },
  {
    title: "Secure Communication",
    description: "Chat, video calls, and file sharing all in one place with end-to-end encryption.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    delay: "delay-400"
  },
  {
    title: "Progress Tracking",
    description: "Set goals and track your progress. Celebrate achievements and identify areas for improvement.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    delay: "delay-500"
  },
  {
    title: "Community Access",
    description: "Join a community of like-minded professionals. Network, share experiences, and grow together.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    delay: "delay-600"
  }
];

const FeatureCard = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 opacity-0 translate-y-8 transition-all duration-700 ease-out",
        feature.delay,
        "feature-card"
      )}
      data-index={index}
    >
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.remove('opacity-0', 'translate-y-8');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );
    
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach((card) => {
      observer.observe(card);
    });
    
    return () => {
      featureCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out section-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Our Mentorship Works</h2>
          <p className="text-muted-foreground text-lg">
            Our platform is designed to make professional mentorship accessible, effective, and engaging.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
      
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_right,rgba(30,144,255,0.1),transparent)]"
        aria-hidden="true"
      ></div>
      
      {/* Observer for section heading */}
      {React.useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove('opacity-0', 'translate-y-8');
              }
            });
          },
          {
            threshold: 0.1
          }
        );
        
        const sectionHeading = document.querySelector('.section-heading');
        if (sectionHeading) {
          observer.observe(sectionHeading);
        }
        
        return () => {
          if (sectionHeading) {
            observer.unobserve(sectionHeading);
          }
        };
      }, [])}
    </section>
  );
};

export default FeaturesSection;
