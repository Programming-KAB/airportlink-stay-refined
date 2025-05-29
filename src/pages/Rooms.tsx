
import React from 'react';
import Navbar from '@/components/Navbar';
import RoomSection from '@/components/RoomSection';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

const Rooms = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      <RoomSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Rooms;
