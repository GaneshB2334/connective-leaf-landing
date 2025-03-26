
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
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
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="relative py-20">
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-t from-primary/5 to-blue-50"
        aria-hidden="true"
      ></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="glass-card p-8 md:p-12 text-center opacity-0 translate-y-8 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Accelerate Your Career Growth?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers through expert mentorship. Your journey begins today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base h-12 px-8 shadow-lg shadow-primary/20">
              Find a Mentor
            </Button>
            <Button size="lg" variant="outline" className="text-base h-12 px-8">
              Learn More
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            No credit card required to start. 7-day free trial on all plans.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
