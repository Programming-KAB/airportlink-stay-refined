
import React from 'react';
import Navbar from '@/components/Navbar';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      <ContactSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Contact;
