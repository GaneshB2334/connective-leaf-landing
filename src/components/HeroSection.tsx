
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      },
      {
        threshold: 0.1
      }
    );
    
    const currentRef = heroRef.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-16">
      <div className="bg-gradient-to-br from-primary/5 to-blue-100/30 absolute inset-0 -z-10"></div>
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(40%_40%_at_50%_25%,rgba(30,144,255,0.1),transparent)]"
        aria-hidden="true"
      ></div>
      
      <div 
        ref={heroRef}
        className="section-container flex flex-col lg:flex-row items-center opacity-0 translate-y-8 transition-all duration-1000 ease-out"
      >
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0 max-w-3xl mx-auto lg:mx-0">
          <span className="inline-flex items-center px-3 py-1 text-sm bg-primary/10 text-primary rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
            Find Your Perfect Mentor
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-balance animate-slide-down">
            Accelerate Your Growth with <span className="text-gradient">Expert Mentorship</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up">
            Connect with industry leaders who have walked the path before you. Our platform matches you with mentors who understand your goals and can help you achieve them.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
            <Button size="lg" className="text-base h-12 px-8 shadow-lg shadow-primary/20">
              Find a Mentor
            </Button>
            <Button size="lg" variant="outline" className="text-base h-12 px-8">
              Become a Mentor
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center lg:justify-start space-x-6 animate-fade-in">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i} 
                  className={`w-10 h-10 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs font-medium`}
                >
                  {i}
                </div>
              ))}
            </div>
            <div>
              <p className="font-medium">Trusted by <span className="text-primary">2,000+</span> professionals</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="relative w-full max-w-md mx-auto">
            <div className="image-glow animate-float">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Person using a laptop"
                className="rounded-2xl shadow-2xl animate-scale-in object-cover w-full"
              />
            </div>
            
            <div className="glass-card absolute -bottom-8 -left-16 p-4 max-w-xs animate-fade-in">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Weekly Sessions</p>
                  <p className="text-xs text-muted-foreground">Personalized 1:1 guidance</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card absolute -top-10 -right-10 p-4 animate-fade-in delay-150">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Fast Progress</p>
                  <p className="text-xs text-muted-foreground">Reach goals 2x faster</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
