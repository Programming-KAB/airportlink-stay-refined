
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CtaSection: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-[#F2FCE2]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">Plan Your Stay Today</h2>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
          Whether you're traveling for business or leisure, Airport Link Guesthouse 
          offers the perfect accommodation solution with our convenient location and 
          comfortable rooms.
        </p>
        <Link to="/booking">
          <Button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white px-8 py-3 text-lg">
            Book Your Room Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CtaSection;
