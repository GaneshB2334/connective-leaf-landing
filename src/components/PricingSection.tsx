
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const pricingPlans = [
  {
    name: "Basic",
    price: 49,
    description: "Perfect for individuals starting their professional journey",
    features: [
      "2 sessions per month",
      "Access to community forums",
      "Email support",
      "Basic learning resources",
      "Progress tracking"
    ],
    popular: false,
    delay: "delay-100"
  },
  {
    name: "Professional",
    price: 99,
    description: "Ideal for serious professionals looking to advance their careers",
    features: [
      "4 sessions per month",
      "Priority mentor matching",
      "Direct messaging with mentor",
      "Comprehensive learning paths",
      "Skill assessments",
      "Priority support",
      "Career roadmap planning"
    ],
    popular: true,
    delay: "delay-200"
  },
  {
    name: "Executive",
    price: 249,
    description: "For leaders and executives seeking strategic guidance",
    features: [
      "8 sessions per month",
      "VIP mentor matching",
      "Unlimited messaging",
      "Custom learning curriculum",
      "Leadership assessments",
      "24/7 premium support",
      "Network expansion opportunities",
      "Executive workshops access"
    ],
    popular: false,
    delay: "delay-300"
  }
];

const PricingCard = ({ plan, index }: { plan: typeof pricingPlans[0], index: number }) => {
  return (
    <div 
      className={cn(
        "relative flex flex-col rounded-2xl transition-all duration-700 ease-out opacity-0 translate-y-8",
        plan.popular ? "glass-card border-primary/30 shadow-xl" : "glass-card",
        plan.delay,
        "pricing-card"
      )}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-0 right-0 flex justify-center">
          <div className="bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full shadow-md">
            Most Popular
          </div>
        </div>
      )}
      
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
        
        <div className="mb-6">
          <span className="text-3xl md:text-4xl font-bold">${plan.price}</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm">
              <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={cn(
            "w-full",
            plan.popular ? "" : "bg-secondary text-foreground hover:bg-secondary/80"
          )}
          variant={plan.popular ? "default" : "outline"}
        >
          Get Started
        </Button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionHeading = document.querySelector('.pricing-heading');
            if (sectionHeading) {
              sectionHeading.classList.add('opacity-100');
              sectionHeading.classList.remove('opacity-0', 'translate-y-8');
            }
            
            const pricingCards = document.querySelectorAll('.pricing-card');
            pricingCards.forEach((card) => {
              card.classList.add('opacity-100');
              card.classList.remove('opacity-0', 'translate-y-8');
            });
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
    <section id="pricing" className="relative py-24" ref={sectionRef}>
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(30,144,255,0.1),transparent)]"
        aria-hidden="true"
      ></div>
      
      <div className="section-container">
        <div className="text-center max-w-2xl mx-auto mb-16 opacity-0 translate-y-8 transition-all duration-700 ease-out pricing-heading">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-muted-foreground text-lg">
            Choose the plan that works best for your career goals. No hidden fees or commitments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
        
        <div className="mt-16 text-center glass-card p-6 max-w-2xl mx-auto opacity-0 translate-y-8 transition-all duration-700 ease-out delay-400" id="enterprise-plan">
          <h3 className="text-xl font-semibold mb-2">Enterprise Plan</h3>
          <p className="text-muted-foreground mb-4">
            Custom solutions for organizations looking to provide mentorship at scale.
          </p>
          <Button variant="outline">Contact Sales</Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
