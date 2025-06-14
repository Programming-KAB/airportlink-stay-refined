
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-6">About Airport Link Guesthouse</h2>
            <p className="text-gray-700 mb-6">
              Welcome to Airport Link Guesthouse, where comfort meets convenience. 
              Established in 2010, our guesthouse has been providing travelers with a home away from home experience 
              for over a decade.
            </p>
            <p className="text-gray-700 mb-6">
              Located just minutes from the airport, we offer the perfect accommodation solution for travelers 
              seeking comfort and accessibility. Our dedicated staff ensures that every guest experiences 
              warm hospitality and personalized service during their stay.
            </p>
            <p className="text-gray-700 mb-8">
              Whether you're staying for a quick overnight before a flight or looking for a comfortable 
              base for your extended visit, Airport Link Guesthouse combines quality amenities, 
              spotless rooms, and exceptional service to make your stay unforgettable.
            </p>
            <div className="flex space-x-4">
              <Link to="/amenities">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 transition-colors">
                  Our Amenities
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="bg-secondary hover:bg-secondary-dark text-primary-dark transition-colors">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="http://away2uganda.com/Air/IMG_8064.jpeg" 
                alt="Guesthouse room" 
                className="rounded-lg shadow-md hover-scale h-64 object-cover"
              />
              <img 
                src="https://airportlinkguesthouse.com/air/Outside_sits.jpg" 
                alt="Guesthouse dining area" 
                className="rounded-lg shadow-md hover-scale h-40 object-cover"
              />
            </div>
            <div className="space-y-4">
              <img 
                src="https://airportlinkguesthouse.com/air/Single_bed_in.jpg" 
                alt="Guesthouse lounge" 
                className="rounded-lg shadow-md hover-scale h-40 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
