
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
import FloatingChat from '@/components/FloatingChat';

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
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      <HeroSlider />
      <BookingForm />
      
      <div className="section-fade-in" id="rooms">
        <RoomSection />
      </div>
      
      <div className="section-fade-in bg-[#F2FCE2]" id="about">
        <AboutSection />
      </div>
      
      <div className="section-fade-in" id="amenities">
        <AmenitiesSection />
      </div>
      
      <div className="section-fade-in bg-[#F2FCE2]">
        <TestimonialsSection />
      </div>
      
      <div className="section-fade-in" id="contact">
        <ContactSection />
      </div>
      
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
