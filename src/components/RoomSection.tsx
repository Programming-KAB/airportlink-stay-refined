
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
    id: "deluxe-twin",
    name: "Deluxe Twin Bed Room",
    description: "Elegant room with two comfortable twin beds, perfect for friends or colleagues traveling together.",
    price: 95,
    capacity: 2,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    features: ["Free Wi-Fi", "Air Conditioning", "TV", "Private Bathroom", "Room Service", "Coffee Maker"]
  },
  {
    id: "deluxe-single",
    name: "Deluxe Single Bed Room",
    description: "Premium single room with luxurious furnishings and all modern amenities for a comfortable stay.",
    price: 85,
    capacity: 1,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    features: ["Free Wi-Fi", "Air Conditioning", "TV", "Private Bathroom", "Mini Fridge", "Work Desk"]
  },
  {
    id: "budget-single",
    name: "Budget Single Bed Room",
    description: "Cozy and economical room for solo travelers who want comfort without unnecessary extras.",
    price: 60,
    capacity: 1,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80",
    features: ["Free Wi-Fi", "Air Conditioning", "TV", "Shared Bathroom"]
  },
  {
    id: "triple",
    name: "Triple Bed Room",
    description: "Spacious room with three beds, ideal for families or small groups traveling together.",
    price: 140,
    capacity: 3,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    features: ["Free Wi-Fi", "Air Conditioning", "TV", "Private Bathroom", "Mini Fridge", "Multiple Beds", "Lounge Area"]
  }
];

const RoomSection: React.FC = () => {
  return (
    <section id="rooms" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#800000] mb-3">Our Accommodations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose from our selection of comfortable and elegant rooms, designed to make your stay memorable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="room-card h-full">
              <Card className="h-full flex flex-col">
                <div className="h-64 overflow-hidden">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-center">
                    <CardTitle className="text-xl font-playfair text-[#800000]">{room.name}</CardTitle>
                    <Badge className="bg-[#4CAF50] text-white font-medium">
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
                    <Button className="w-full bg-[#800000] hover:bg-[#990000] transition-colors">
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
