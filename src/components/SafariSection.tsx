
import React from 'react';
import { Button } from '@/components/ui/button';

const SafariSection: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="rounded-lg overflow-hidden shadow-xl relative">
          <div className="absolute inset-0 bg-cover bg-center opacity-80" 
               style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')" }}>
          </div>
          <div className="absolute inset-0 bg-[#800000] opacity-50"></div>
          <div className="relative z-10 p-10 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">Explore Uganda's Wildlife</h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto">
              Complete your stay with an unforgettable safari experience. Discover Uganda's natural beauty, incredible wildlife, and breathtaking landscapes.
            </p>
            <a href="https://away2uganda.com" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white px-8 py-3 text-lg">
                Book Your Safari
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariSection;
