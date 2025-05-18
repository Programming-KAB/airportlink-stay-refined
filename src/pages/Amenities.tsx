
import React from 'react';
import Navbar from '@/components/Navbar';
import AmenitiesSection from '@/components/AmenitiesSection';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

const Amenities = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      
      <div className="pt-10">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center text-primary mb-6">Amenities & Services</h1>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto px-4 mb-12">
          Discover all the facilities and services we offer to make your stay comfortable and memorable.
        </p>
      </div>
      
      <AmenitiesSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Amenities;
