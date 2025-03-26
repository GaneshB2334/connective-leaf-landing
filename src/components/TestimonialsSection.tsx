
import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

const testimonials = [
  {
    content: "Working with my mentor has been transformative. In just 3 months, I secured a promotion and gained the confidence to lead major projects.",
    author: "Alex Rivera",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
  },
  {
    content: "The structured approach to mentorship helped me navigate a career transition from finance to tech. My mentor's guidance was invaluable.",
    author: "Jamie Chen",
    role: "Software Engineer",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    content: "I was stuck in my career until I found my mentor. Their insights and network opened doors I didn't know existed. Worth every penny.",
    author: "Morgan Taylor",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    content: "As someone starting their own business, having an experienced mentor guide me through the challenges has been crucial to my success.",
    author: "Sam Johnson",
    role: "Startup Founder",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionHeading = document.querySelector('.testimonial-heading');
            if (sectionHeading) {
              sectionHeading.classList.add('opacity-100');
              sectionHeading.classList.remove('opacity-0', 'translate-y-8');
            }
            
            const testimonialCard = document.querySelector('.testimonial-card');
            if (testimonialCard) {
              testimonialCard.classList.add('opacity-100');
              testimonialCard.classList.remove('opacity-0', 'scale-95');
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
    
    // Auto-cycle through testimonials
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      clearInterval(interval);
    };
  }, []);

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden" ref={sectionRef}>
      <div 
        className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-blue-50"
        aria-hidden="true"
      ></div>
      
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out testimonial-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-muted-foreground text-lg">
            Hear from professionals who transformed their careers through mentorship.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "glass-card p-8 md:p-10 transition-all duration-500 ease-in-out absolute inset-0 testimonial-card opacity-0 scale-95",
                  index === activeIndex ? "opacity-100 scale-100 relative z-10" : "opacity-0 scale-95 absolute z-0"
                )}
              >
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden image-glow">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-primary/20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                    <p className="text-lg md:text-xl mb-6 text-foreground">"{testimonial.content}"</p>
                    <div>
                      <h4 className="font-semibold">{testimonial.author}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full mx-1 transition-all",
                  index === activeIndex ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
