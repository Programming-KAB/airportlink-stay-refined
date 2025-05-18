
import React from 'react';
import Navbar from '@/components/Navbar';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

const About = () => {
  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      
      <div className="pt-10">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-center text-primary mb-6">About Us</h1>
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto px-4 mb-12">
          Learn more about Airport Link Guesthouse and our dedication to providing exceptional hospitality.
        </p>
      </div>
      
      <AboutSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default About;
