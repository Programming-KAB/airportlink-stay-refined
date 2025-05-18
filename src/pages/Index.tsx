
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import BookingForm from '@/components/BookingForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import WelcomeSection from '@/components/WelcomeSection';
import FeaturedRooms from '@/components/FeaturedRooms';
import AmenitiesPreview from '@/components/AmenitiesPreview';
import SafariSection from '@/components/SafariSection';
import CtaSection from '@/components/CtaSection';
import useFadeInOnScroll from '@/hooks/useFadeInOnScroll';

const Index = () => {
  // Use the fade-in effect for sections
  useFadeInOnScroll();
  
  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      <HeroSlider />
      <BookingForm />
      
      {/* Welcome Section */}
      <div className="section-fade-in">
        <WelcomeSection />
      </div>
      
      {/* Featured Rooms Section */}
      <div className="section-fade-in">
        <FeaturedRooms />
      </div>
      
      {/* Amenities Preview Section */}
      <div className="section-fade-in">
        <AmenitiesPreview />
      </div>
      
      <div className="section-fade-in bg-[#800000] text-white">
        <TestimonialsSection />
      </div>
      
      {/* Safari Link Section */}
      <div className="section-fade-in">
        <SafariSection />
      </div>
      
      <div className="section-fade-in">
        <CtaSection />
      </div>
      
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
