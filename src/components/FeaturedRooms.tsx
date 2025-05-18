
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const FeaturedRooms: React.FC = () => {
  return (
    <div className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#800000] mb-6">Our Accommodations</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Choose from our variety of rooms designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Room Card 1 */}
          <div className="room-card bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
                alt="Deluxe Twin Room" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-[#800000] mb-2">Deluxe Twin</h3>
              <p className="text-gray-600 mb-4">Two comfortable twin beds, perfect for friends or colleagues.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#4CAF50]">$95/night</span>
                <Link to="/rooms">
                  <Button size="sm" className="bg-[#800000] hover:bg-[#600000] text-white">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Room Card 2 */}
          <div className="room-card bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Deluxe Single Room" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-[#800000] mb-2">Deluxe Single</h3>
              <p className="text-gray-600 mb-4">Premium room with luxurious furnishings and modern amenities.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#4CAF50]">$85/night</span>
                <Link to="/rooms">
                  <Button size="sm" className="bg-[#800000] hover:bg-[#600000] text-white">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Room Card 3 */}
          <div className="room-card bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80" 
                alt="Budget Single Room" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-[#800000] mb-2">Budget Single</h3>
              <p className="text-gray-600 mb-4">Cozy and economical room for solo travelers.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#4CAF50]">$60/night</span>
                <Link to="/rooms">
                  <Button size="sm" className="bg-[#800000] hover:bg-[#600000] text-white">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          
          {/* Room Card 4 */}
          <div className="room-card bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-48 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="Triple Bed Room" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-playfair font-bold text-[#800000] mb-2">Triple Room</h3>
              <p className="text-gray-600 mb-4">Spacious room with three beds for families or groups.</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-[#4CAF50]">$140/night</span>
                <Link to="/rooms">
                  <Button size="sm" className="bg-[#800000] hover:bg-[#600000] text-white">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <Link to="/rooms">
            <Button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white">
              View All Rooms
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRooms;
