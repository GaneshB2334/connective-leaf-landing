
import React from 'react';
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="text-2xl font-bold text-foreground mb-4">
              <span className="text-primary">Mentor</span>Connect
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Connecting professionals with expert mentors for career growth and success.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href={`#${social}`} 
                  className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center text-foreground/60 hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={`Follow us on ${social}`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Platform
            </h3>
            <ul className="space-y-2">
              {['How it Works', 'Become a Mentor', 'Find a Mentor', 'Pricing'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              {['Blog', 'Guides', 'Events', 'Success Stories', 'FAQ'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Accessibility'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MentorConnect. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {['Privacy', 'Terms', 'Cookies'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
