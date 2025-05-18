
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import RoomSection from '@/components/RoomSection';
import AboutSection from '@/components/AboutSection';
import AmenitiesSection from '@/components/AmenitiesSection';
import ContactSection from '@/components/ContactSection';
import BookingForm from '@/components/BookingForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  // Add scroll effect for sections
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-fade-in');
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
          section.classList.add('visible');
        }
      });
    };

    // Initial check
    handleScroll();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSlider />
      
      <div className="section-fade-in" id="rooms">
        <RoomSection />
      </div>
      
      <div className="section-fade-in" id="about">
        <AboutSection />
      </div>
      
      <div className="section-fade-in" id="amenities">
        <AmenitiesSection />
      </div>
      
      <div className="section-fade-in">
        <TestimonialsSection />
      </div>
      
      <div className="section-fade-in" id="contact">
        <ContactSection />
      </div>
      
      <div className="section-fade-in" id="booking">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
