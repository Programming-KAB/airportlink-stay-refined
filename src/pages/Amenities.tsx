import React from 'react';
import Navbar from '@/components/Navbar';
import AmenitiesSection from '@/components/AmenitiesSection';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

const Amenities = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      
      <AmenitiesSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Amenities;
