
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
            <a href="#rooms" className="font-medium text-white hover:text-secondary transition-colors">
              Rooms
            </a>
            <a href="#about" className="font-medium text-white hover:text-secondary transition-colors">
              About Us
            </a>
            <a href="#amenities" className="font-medium text-white hover:text-secondary transition-colors">
              Amenities
            </a>
            <a href="#contact" className="font-medium text-white hover:text-secondary transition-colors">
              Contact
            </a>
            <a href="#booking">
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
              <a 
                href="#rooms" 
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-secondary hover:bg-[#990000] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Rooms
              </a>
              <a 
                href="#about" 
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-secondary hover:bg-[#990000] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </a>
              <a 
                href="#amenities" 
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-secondary hover:bg-[#990000] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Amenities
              </a>
              <a 
                href="#contact" 
                className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-secondary hover:bg-[#990000] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#booking"
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
