
import React from 'react';
import Navbar from '@/components/Navbar';
import SmartBookingForm from '@/components/SmartBookingForm';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

const Booking = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-[#800000] mb-4">
              Book Your Stay
            </h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Experience luxury and comfort at Airport Link Guesthouse. 
              Complete your reservation with our smart booking system.
            </p>
          </div>
          <SmartBookingForm />
        </div>
      </div>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Booking;
