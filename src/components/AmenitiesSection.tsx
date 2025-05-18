
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const amenities = [
  {
    icon: "🚗",
    title: "Free Parking",
    description: "Convenient on-site parking available for all guests."
  },
  {
    icon: "🚿",
    title: "Hot Water 24/7",
    description: "Enjoy hot showers around the clock for your comfort."
  },
  {
    icon: "🍽️",
    title: "Breakfast Included",
    description: "Start your day with our complimentary breakfast service."
  },
  {
    icon: "🧹",
    title: "Daily Housekeeping",
    description: "We maintain pristine cleanliness throughout your stay."
  },
  {
    icon: "🌐",
    title: "Free Wi-Fi",
    description: "Stay connected with high-speed internet access."
  },
  {
    icon: "🚕",
    title: "Airport Shuttle",
    description: "Complimentary shuttle service to and from the airport."
  },
  {
    icon: "🔒",
    title: "24/7 Security",
    description: "Feel safe with our around-the-clock security service."
  },
  {
    icon: "☕",
    title: "Coffee & Tea",
    description: "Complimentary coffee and tea in all rooms."
  }
];

const AmenitiesSection: React.FC = () => {
  return (
    <section id="amenities" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-3">Amenities & Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide a range of amenities and services to make your stay comfortable and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-3">
                <div className="text-3xl mb-2">{amenity.icon}</div>
                <CardTitle className="text-xl font-playfair text-primary">{amenity.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600">
                  {amenity.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
