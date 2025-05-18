
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type Room = {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  image: string;
  features: string[];
};

const rooms: Room[] = [
  {
    id: "standard",
    name: "Standard Room",
    description: "Comfortable and cozy room perfect for solo travelers or couples.",
    price: 75,
    capacity: 2,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    features: ["Free Wi-Fi", "Air Conditioning", "TV", "Private Bathroom"]
  },
  {
    id: "deluxe",
    name: "Deluxe Room",
    description: "Spacious room with a king-sized bed and additional amenities for extra comfort.",
    price: 120,
    capacity: 2,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    features: ["Free Wi-Fi", "Air Conditioning", "TV", "Private Bathroom", "Mini Fridge", "Coffee Maker"]
  },
  {
    id: "family",
    name: "Family Suite",
    description: "Perfect for families, featuring separate rooms and ample space for everyone.",
    price: 180,
    capacity: 4,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    features: ["Free Wi-Fi", "Air Conditioning", "TV", "Private Bathroom", "Mini Fridge", "Multiple Beds", "Lounge Area"]
  }
];

const RoomSection: React.FC = () => {
  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-primary mb-3">Our Accommodations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose from our selection of comfortable and elegant rooms, designed to make your stay memorable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="room-card h-full">
              <Card className="h-full flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-playfair text-primary">{room.name}</CardTitle>
                    <Badge className="bg-secondary text-primary font-medium">
                      ${room.price}/night
                    </Badge>
                  </div>
                  <CardDescription className="text-sm text-gray-600">
                    Capacity: {room.capacity} {room.capacity > 1 ? 'People' : 'Person'}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 flex-grow">
                  <p className="text-gray-700 mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {room.features.map((feature, index) => (
                      <Badge key={index} variant="outline" className="bg-white">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="pt-0">
                  <a href="#booking" className="w-full">
                    <Button className="w-full bg-primary hover:bg-primary-light transition-colors">
                      Book Now
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomSection;
