
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
      scrolled 
        ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" 
        : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-foreground">
              <span className="text-primary">Mentor</span>Connect
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'How It Works', 'Mentors', 'Testimonials', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="button-transition">
              Sign In
            </Button>
            <Button className="button-transition">
              Get Started
            </Button>
          </div>
          
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className={cn(
              "w-6 h-0.5 bg-foreground transition-all duration-300",
              mobileMenuOpen && "rotate-45 translate-y-1.5"
            )}></div>
            <div className={cn(
              "w-6 h-0.5 bg-foreground my-1.5 transition-all duration-300",
              mobileMenuOpen && "opacity-0"
            )}></div>
            <div className={cn(
              "w-6 h-0.5 bg-foreground transition-all duration-300",
              mobileMenuOpen && "-rotate-45 -translate-y-1.5"
            )}></div>
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out max-h-0",
          mobileMenuOpen && "max-h-[500px] mt-4"
        )}>
          <div className="pt-2 pb-4 space-y-1 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm p-4">
            {['Home', 'How It Works', 'Mentors', 'Testimonials', 'Pricing'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="block py-2 px-4 hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-2 space-y-2">
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
