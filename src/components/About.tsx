import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, Clock, MapPin, Coffee, Wifi, Utensils } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section with Image Grid */}
      <div className="relative">
        <div className="grid grid-cols-12 gap-4 h-[80vh]">
          <div className="col-span-8 relative">
            <img 
              src="http://away2uganda.com/Air/IMG_8064.jpeg" 
              alt="Luxury Hotel Interior" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-12 text-white">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-serif mb-4"
              >
                Welcome to Airportlink
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl font-light"
              >
                Where luxury meets convenience
              </motion.p>
            </div>
          </div>
          <div className="col-span-4 grid grid-rows-2 gap-4">
            <img 
              src="away2uganda.com/Air/IMG_8063.jpeg" 
              alt="Hotel View" 
              className="w-full h-full object-cover"
            />
            <img 
              src="away2uganda.com/Air/IMG_7889.jpeg" 
              alt="Hotel Interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Quick Info Bar */}
      <div className="bg-[#800000] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-center space-x-4">
              <MapPin className="w-8 h-8" />
              <div>
                <h3 className="font-semibold">Prime Location</h3>
                <p className="text-sm text-white/80">5 mins from Entebbe Airport</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Coffee className="w-8 h-8" />
              <div>
                <h3 className="font-semibold">Complimentary Breakfast</h3>
                <p className="text-sm text-white/80">Fresh daily</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Wifi className="w-8 h-8" />
              <div>
                <h3 className="font-semibold">High-Speed WiFi</h3>
                <p className="text-sm text-white/80">Free throughout</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Utensils className="w-8 h-8" />
              <div>
                <h3 className="font-semibold">Fine Dining</h3>
                <p className="text-sm text-white/80">Local & international cuisine</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl font-serif text-[#800000] mb-6">Our Story</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Airportlink Guesthouse is more than just a place to stay - it's a gateway to Uganda's vibrant culture and warm hospitality. 
                  Strategically located just 5 minutes from Entebbe International Airport, we offer the perfect blend of comfort, convenience, and local charm.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our modern facilities and personalized service ensure that every guest experiences the best of Ugandan hospitality, 
                  whether you're here for business, leisure, or a quick layover.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Star className="w-8 h-8 text-[#800000] mb-4" />
                  <h4 className="font-semibold text-gray-800">Premium Rooms</h4>
                  <p className="text-sm text-gray-600">Luxury amenities included</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Clock className="w-8 h-8 text-[#800000] mb-4" />
                  <h4 className="font-semibold text-gray-800">24/7 Service</h4>
                  <p className="text-sm text-gray-600">Always at your service</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img 
                src="IMG_7887.jpeg" 
                alt="Hotel Interior" 
                className="w-full h-[600px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <p className="text-gray-600 mt-2">Rated 5.0 by our guests</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-serif text-[#800000] mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experience the perfect blend of luxury, comfort, and authentic Ugandan hospitality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Award className="w-12 h-12 text-[#800000] mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Award-Winning Service</h3>
              <p className="text-gray-600">Our dedicated staff ensures your stay is nothing short of exceptional</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Users className="w-12 h-12 text-[#800000] mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Local Experience</h3>
              <p className="text-gray-600">Immerse yourself in authentic Ugandan culture and hospitality</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <Clock className="w-12 h-12 text-[#800000] mb-6" />
              <h3 className="text-xl font-semibold mb-4 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for all your needs</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative py-20">
        <div className="absolute inset-0">
          <img 
            src="http://away2uganda.com/Air/IMG_8064.jpeg" 
            alt="Hotel Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#800000]/80"></div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-serif text-white mb-6">Experience Luxury Living</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Book your stay with us and discover the perfect blend of comfort, convenience, and authentic Ugandan hospitality
            </p>
            <a 
              href="/contact" 
              className="inline-block bg-white text-[#800000] hover:bg-gray-100 font-semibold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Your Stay
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;