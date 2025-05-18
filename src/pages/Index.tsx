
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import BookingForm from '@/components/BookingForm';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Bed, UtensilsCrossed, Map, WifiHigh, Star, CalendarCheck } from 'lucide-react';

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
      
      {/* Welcome Section */}
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
      
      {/* Featured Rooms Section */}
      <div className="section-fade-in py-16 px-4 bg-white">
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
      
      {/* Amenities Preview Section */}
      <div className="section-fade-in py-16 px-4 bg-[#F2FCE2]">
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
              <Map className="mx-auto h-10 w-10 text-[#800000]" />
              <h3 className="mt-3 font-medium">Airport Shuttle</h3>
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
      
      <div className="section-fade-in bg-[#800000] text-white">
        <TestimonialsSection />
      </div>
      
      {/* Safari Link Section */}
      <div className="section-fade-in py-16 px-4 bg-white">
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
      
      <div className="section-fade-in py-16 px-4 bg-[#F2FCE2]">
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
