
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import MentorsSection from '@/components/MentorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  // Enhance scroll behavior for smooth animations
  useEffect(() => {
    // Preload all images
    const preloadImages = () => {
      const imageUrls = [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
      ];
      
      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };
    
    preloadImages();
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (!targetId || targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <MentorsSection />
        <TestimonialsSection />
        <PricingSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
