
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import BookingForm from '@/components/BookingForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
      
      <div className="section-fade-in py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">Welcome to Airport Link Guesthouse</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Discover our comfortable accommodations, exceptional amenities, and warm hospitality. 
            We're conveniently located near the airport to make your travels seamless.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/rooms">
              <Button className="bg-[#800000] hover:bg-[#600000] text-white">Explore Our Rooms</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white">
                Learn About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="section-fade-in bg-[#F2FCE2]">
        <TestimonialsSection />
      </div>
      
      <div className="section-fade-in py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">Plan Your Stay Today</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Whether you're traveling for business or leisure, Airport Link Guesthouse 
            offers the perfect accommodation solution with our convenient location and 
            comfortable rooms.
          </p>
          <a href="#booking">
            <Button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white px-8 py-3 text-lg">
              Book Your Room Now
            </Button>
          </a>
        </div>
      </div>
      
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
