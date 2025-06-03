
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#800000] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://www.airportlinkguesthouse.com/wp-content/uploads/2019/06/logo-white.png"
                alt="Airport Link Guesthouse" 
                className="h-12"
              />
            </div>
            <h3 className="text-2xl font-playfair mb-4">Airport Link <span className="text-secondary">Guesthouse</span></h3>
            <p className="mb-4 text-gray-300">Experience comfort and convenience near the airport. Your home away from home.</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-secondary transition-colors">Home</Link></li>
              <li><Link to="/rooms" className="text-gray-300 hover:text-secondary transition-colors">Rooms</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link to="/amenities" className="text-gray-300 hover:text-secondary transition-colors">Amenities</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-secondary transition-colors">Contact</Link></li>
              <li><a href="https://away2uganda.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-secondary transition-colors">Safaris</a></li>
              <li><a href="#booking" className="text-gray-300 hover:text-secondary transition-colors">Book Now</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <span className="mr-2">📍</span>
                <span>Plot 2 Buwaya Rise Road Entebbe</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">📞</span>
                <span>+256 773 112 692</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✉️</span>
                <a href="mailto:info@airportlinkguesthouse.com" className="hover:text-secondary transition-colors">
                  info@airportlinkguesthouse.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/GorillaUG" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/wild_untouched_adventure/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.tripadvisor.com/Attraction_Review-g293841-d25043990-Reviews-Wild_Untouched_Adventure-Kampala_Central_Region.html" target="_blank" rel="noopener noreferrer" className="text-white hover:text-secondary transition-colors">
                <span className="sr-only">TripAdvisor</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353-.485-.345-1.166-.345-1.69 0L.316 8.008c-.165.117-.267.31-.267.517 0 .345.28.625.625.625.11 0 .213-.029.303-.08l2.355-1.36c1.627-1.09 3.506-1.665 5.436-1.665s3.809.575 5.436 1.665l2.355 1.36c.09.051.193.08.303.08.345 0 .625-.28.625-.625 0-.207-.102-.4-.267-.517l-2.355-1.36c-.524-.345-1.205-.345-1.69 0-2.307-1.569-4.975-2.353-7.645-2.353zm-6.84 6.704c-1.173 0-2.127.954-2.127 2.127s.954 2.127 2.127 2.127 2.127-.954 2.127-2.127-.954-2.127-2.127-2.127zm13.68 0c-1.173 0-2.127.954-2.127 2.127s.954 2.127 2.127 2.127 2.127-.954 2.127-2.127-.954-2.127-2.127-2.127zm-6.84 1.597c-1.173 0-2.127.954-2.127 2.127s.954 2.127 2.127 2.127 2.127-.954 2.127-2.127-.954-2.127-2.127-2.127z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-center text-gray-400">
              &copy; {currentYear} Airport Link Guesthouse. All rights reserved.
            </p>
            <img 
              src="https://www.airportlinkguesthouse.com/wp-content/uploads/2019/06/logo-white.png"
              alt="Airport Link Guesthouse" 
              className="h-12"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
