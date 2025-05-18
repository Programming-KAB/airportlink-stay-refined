
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      
      <div className="pt-10">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center text-primary mb-6">Contact Us</h1>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto px-4 mb-12">
          Get in touch with our friendly staff for reservations, inquiries, or any assistance you might need for your stay.
        </p>
      </div>
      
      <ContactSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Contact;
