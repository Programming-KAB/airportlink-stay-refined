import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Users, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-[#800000]/10 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-[#800000]">
            Welcome to Airportlink Guesthouse
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your premier destination for comfort and convenience near Entebbe International Airport
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-[#800000]">Our Story</h2>
            <p className="text-gray-600 leading-relaxed">
              Airportlink Guesthouse is more than just a place to stay - it's a gateway to Uganda's vibrant culture and warm hospitality. 
              Strategically located just 5 minutes from Entebbe International Airport, we offer the perfect blend of comfort, convenience, and local charm.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our modern facilities and personalized service ensure that every guest experiences the best of Ugandan hospitality, 
              whether you're here for business, leisure, or a quick layover.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://airportlinkguesthouse.com/air/IMG_20250215_123456.jpg" 
                alt="Modern Guesthouse Interior" 
                className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="bg-white p-6 rounded-xl border border-[#800000]/20 hover:border-[#800000] transition-all shadow-lg hover:shadow-xl">
            <Star className="w-12 h-12 text-[#800000] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#800000]">Premium Comfort</h3>
            <p className="text-gray-600">Luxurious rooms with modern amenities for the perfect stay</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#800000]/20 hover:border-[#800000] transition-all shadow-lg hover:shadow-xl">
            <Award className="w-12 h-12 text-[#800000] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#800000]">Excellence</h3>
            <p className="text-gray-600">Award-winning service and attention to detail</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#800000]/20 hover:border-[#800000] transition-all shadow-lg hover:shadow-xl">
            <Users className="w-12 h-12 text-[#800000] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#800000]">Local Experience</h3>
            <p className="text-gray-600">Authentic Ugandan hospitality and cultural immersion</p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#800000]/20 hover:border-[#800000] transition-all shadow-lg hover:shadow-xl">
            <Clock className="w-12 h-12 text-[#800000] mb-4" />
            <h3 className="text-xl font-semibold mb-2 text-[#800000]">24/7 Service</h3>
            <p className="text-gray-600">Round-the-clock support for all your needs</p>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#800000]">Experience the Future of Hospitality</h2>
          <a 
            href="/contact" 
            className="inline-block bg-[#800000] hover:bg-[#800000]/90 text-white font-semibold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Book Your Stay
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 