import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const roomImages = [
    "http://away2uganda.com/Air/IMG_8074.jpeg",
    "http://away2uganda.com/Air/IMG_8071.jpeg",
    "http://away2uganda.com/Air/IMG_8064.jpeg",
    "https://airportlinkguesthouse.com/air/Single_bed_in.jpg",
  ];

  const natureImages = [
    "https://airportlinkguesthouse.com/air/IMG_20250217_123456.jpg", // Replace with actual nature view image
    "https://airportlinkguesthouse.com/air/IMG_20250217_123457.jpg", // Replace with actual nature view image
  ];

  const foodImages = [
    "https://airportlinkguesthouse.com/air/menu-item.jpg", // Replace with actual food image from menu
  ];

  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-playfair font-bold text-[#800000] text-center mb-8">Our Gallery</h1>
        
        <Tabs defaultValue="rooms" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="nature">Nature View</TabsTrigger>
            <TabsTrigger value="food">Food</TabsTrigger>
          </TabsList>

          <TabsContent value="rooms">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {roomImages.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Room ${index + 1}`} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="nature">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {natureImages.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Nature View ${index + 1}`} 
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="food">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foodImages.map((image, index) => (
                <Card key={index} className="overflow-hidden">
                  <img 
                    src={image} 
                    alt={`Food ${index + 1}`} 
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Gallery; 