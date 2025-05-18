
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const WelcomeSection: React.FC = () => {
  return (
    <div className="py-16 px-4">
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
  );
};

export default WelcomeSection;
