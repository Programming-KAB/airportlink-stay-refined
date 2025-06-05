
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bed, UtensilsCrossed, Map, WifiHigh, Star, CalendarCheck } from 'lucide-react';

const AmenitiesPreview: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-[#F2FCE2]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#800000] mb-6">Our Amenities</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Enjoy premium services and facilities during your stay with us
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
          <div className="hover-scale p-4 bg-white rounded-lg shadow-md">
            <WifiHigh className="mx-auto h-10 w-10 text-[#800000]" />
            <h3 className="mt-3 font-medium">Free WiFi</h3>
          </div>
          
          <div className="hover-scale p-4 bg-white rounded-lg shadow-md">
            <Bed className="mx-auto h-10 w-10 text-[#800000]" />
            <h3 className="mt-3 font-medium">Comfortable Beds</h3>
          </div>
          
          <div className="hover-scale p-4 bg-white rounded-lg shadow-md">
            <UtensilsCrossed className="mx-auto h-10 w-10 text-[#800000]" />
            <h3 className="mt-3 font-medium">Breakfast Included</h3>
          </div>
          
          <div className="hover-scale p-4 bg-white rounded-lg shadow-md">
            <Star className="mx-auto h-10 w-10 text-[#800000]" />
            <h3 className="mt-3 font-medium">Quality Service</h3>
          </div>
          
          <div className="hover-scale p-4 bg-white rounded-lg shadow-md">
            <CalendarCheck className="mx-auto h-10 w-10 text-[#800000]" />
            <h3 className="mt-3 font-medium">Flexible Booking</h3>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link to="/amenities">
            <Button variant="outline" className="border-[#800000] text-[#800000] hover:bg-[#800000] hover:text-white">
              See All Amenities
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AmenitiesPreview;
