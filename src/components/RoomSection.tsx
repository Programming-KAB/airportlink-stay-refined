
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import RoomPreview from './RoomPreview';

type Room = {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  image: string;
  features: string[];
  gallery: string[];
};

const rooms: Room[] = [
  {
    id: "deluxe-twin",
    name: "Deluxe Twin Bed Room",
    description: "Elegant room with two comfortable twin beds, perfect for friends or colleagues traveling together.",
    price: 70,
    capacity: 2,
    image: "http://away2uganda.com/Air/IMG_8074.jpeg",
    features: ["Free Wi-Fi", "Air Conditioning", "TV", "Private Bathroom", "Room Service", "Coffee Maker"],
    gallery: [
      "http://away2uganda.com/Air/IMG_8074.jpeg",
      "http://away2uganda.com/Air/IMG_8071.jpeg",
      "http://away2uganda.com/Air/IMG_8064.jpeg",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    ]
  },
  {
    id: "double-bed",
    name: "Double Bed Room",
    description: "Elegant room with two comfortable twin beds, perfect for friends or colleagues traveling together.",
    price: 70,
    capacity: 2,
    image: "https://airportlinkguesthouse.com/air/Single_bed_in.jpg",
    features: ["Free Wi-Fi", "Air Conditioning", "TV", "Private Bathroom", "Room Service", "Coffee Maker"],
    gallery: [
      "http://away2uganda.com/Air/IMG_8074.jpeg",
      "http://away2uganda.com/Air/IMG_8071.jpeg",
      "http://away2uganda.com/Air/IMG_8064.jpeg",
      ""
    ]
  }
  {
    id: "deluxe-single",
    name: "Deluxe Single Bed Room",
    description: "Premium single room with luxurious furnishings and all modern amenities for a comfortable stay.",
    price: 60,
    capacity: 1,
    image: "https://airportlinkguesthouse.com/air/Single_bed_in.jpg",
    features: ["Free Wi-Fi", "Air Conditioning", "TV", "Private Bathroom", "Mini Fridge", "Work Desk"],
    gallery: [
      "https://airportlinkguesthouse.com/air/Single_bed_in.jpg",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
      "http://away2uganda.com/Air/IMG_8064.jpeg"
    ]
  },
  {
    id: "extra-bed",
    name: "Extra Bed",
    description: "Additional comfortable bed that can be added to any room for extra guests.",
    price: 35,
    capacity: 1,
    image: "http://away2uganda.com/Air/IMG_8071.jpeg",
    features: ["Comfortable Bedding", "Can be added to any room", "Perfect for families", "Additional guest accommodation"],
    gallery: [
      "http://away2uganda.com/Air/IMG_8071.jpeg",
      "http://away2uganda.com/Air/IMG_8074.jpeg",
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    ]
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="room-card h-full">
              <Card className="h-full flex flex-col">
                <RoomPreview room={room}>
                  <div className="h-64 overflow-hidden cursor-pointer relative group">
                    <img src={room.image} alt={room.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="bg-white/90 px-4 py-2 rounded-lg text-[#800000] font-medium">
                        Click to Preview
                      </div>
                    </div>
                  </div>
                </RoomPreview>
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
                  <Link to={`/booking?room=${room.id}`} className="w-full">
                    <Button className="w-full bg-[#800000] hover:bg-[#990000] transition-colors">
                      Book Now
                    </Button>
                  </Link>
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
