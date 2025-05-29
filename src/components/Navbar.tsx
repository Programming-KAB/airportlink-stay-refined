
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#800000] shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img 
              src="https://www.airportlinkguesthouse.com/wp-content/uploads/2019/06/logo-white.png" 
              alt="Airport Link Guesthouse" 
              className="h-12 mr-3"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-white hover:text-secondary transition-colors">
              Home
            </Link>
            <Link to="/rooms" className="font-medium text-white hover:text-secondary transition-colors">
              Rooms
            </Link>
            <Link to="/about" className="font-medium text-white hover:text-secondary transition-colors">
              About Us
            </Link>
            <Link to="/amenities" className="font-medium text-white hover:text-secondary transition-colors">
              Amenities
            </Link>
            
            {/* Menu Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-secondary hover:bg-[#990000] data-[state=open]:bg-[#990000]">
                    Our Menu
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-4 w-80">
                      <div className="space-y-3">
                        <div className="border-b pb-2">
                          <Link to="/continental" className="block hover:bg-gray-50 p-2 rounded">
                            <h4 className="font-semibold text-lg text-[#800000]">Continental Dish</h4>
                            <p className="text-gray-600 text-sm">Complimentary with your stay</p>
                          </Link>
                        </div>
                        <div className="border-b pb-2">
                          <Link to="/lunch" className="block hover:bg-gray-50 p-2 rounded">
                            <h4 className="font-semibold text-lg text-[#800000] flex justify-between">
                              Lunch <span className="text-[#4CAF50]">$10</span>
                            </h4>
                            <p className="text-gray-600 text-sm">2-course meal</p>
                          </Link>
                        </div>
                        <div>
                          <Link to="/dinner" className="block hover:bg-gray-50 p-2 rounded">
                            <h4 className="font-semibold text-lg text-[#800000] flex justify-between">
                              Dinner <span className="text-[#4CAF50]">$15</span>
                            </h4>
                            <p className="text-gray-600 text-sm">3-course meal</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
            <Link to="/contact" className="font-medium text-white hover:text-secondary transition-colors">
              Contact
            </Link>
            <a href="/#booking">
              <Button className="bg-secondary hover:bg-secondary-dark text-primary-dark transition-colors">
                Book Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-secondary focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-secondary hover:bg-[#990000] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/rooms" 
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-secondary hover:bg-[#990000] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms
              </Link>
              <Link 
                to="/about" 
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-secondary hover:bg-[#990000] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link 
                to="/amenities" 
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-secondary hover:bg-[#990000] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </Link>
              
              {/* Mobile Menu Items */}
              <div className="px-3 py-2">
                <h4 className="font-medium text-white mb-2">Our Menu</h4>
                <div className="ml-4 space-y-1 text-sm">
                  <Link to="/continental" className="block text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
                    Continental Dish - Complimentary
                  </Link>
                  <Link to="/lunch" className="block text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
                    Lunch - $10 (2-course)
                  </Link>
                  <Link to="/dinner" className="block text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(false)}>
                    Dinner - $15 (3-course)
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-secondary hover:bg-[#990000] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a 
                href="/#booking"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full bg-secondary hover:bg-secondary-dark text-primary-dark transition-colors">
                  Book Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
