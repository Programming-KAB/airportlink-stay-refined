
import React from 'react';
import Navbar from '@/components/Navbar';
import RoomSection from '@/components/RoomSection';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

const Rooms = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      
      <div className="pt-10">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center text-primary mb-6">Our Rooms</h1>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto px-4 mb-12">
          Explore our comfortable and well-appointed accommodations designed for your relaxation.
        </p>
      </div>
      
      <RoomSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Rooms;
