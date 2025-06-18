import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  const foodImages = [
    "https://airportlinkguesthouse.com/dishes/chkn.jpeg",
    "https://airportlinkguesthouse.com/dishes/ckn.jpeg",
    "https://airportlinkguesthouse.com/dishes/dsh%201.jpeg",
    "https://airportlinkguesthouse.com/dishes/steak%201.jpeg",
    "https://airportlinkguesthouse.com/dishes/steak.jpeg"
  ];

  const roomImages = [
    "http://away2uganda.com/Air/IMG_8074.jpeg",
    "http://away2uganda.com/Air/IMG_8071.jpeg",
    "https://airportlinkguesthouse.com/air/Single_bed_in.jpg",
    "https://www.airportlinkguesthouse.com/air/Trip_Bed.jpg",
    "https://airportlinkguesthouse.com/dishes/rooms/rm%201.jpeg",
    "https://airportlinkguesthouse.com/dishes/rooms/rm%204.jpeg",
    "https://airportlinkguesthouse.com/dishes/rooms/rm%205.jpeg",
    "https://airportlinkguesthouse.com/dishes/rooms/rm2.jpeg",
    "https://airportlinkguesthouse.com/dishes/rooms/rm3.jpeg"
  ];

  const restaurantImages = [
    "https://away2uganda.com/Air/IMG_8064.jpeg",
    "http://away2uganda.com/Air/IMG_8063.jpeg"
  ];

  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-playfair font-bold text-[#800000] text-center mb-8">Our Gallery</h1>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem value="food" className="border border-gray-200 rounded-lg">
            <AccordionTrigger className="px-6 py-4 text-xl font-playfair font-semibold text-[#800000] hover:no-underline">
              Food Gallery ({foodImages.length} images)
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
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
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="rooms" className="border border-gray-200 rounded-lg">
            <AccordionTrigger className="px-6 py-4 text-xl font-playfair font-semibold text-[#800000] hover:no-underline">
              Rooms Gallery ({roomImages.length} images)
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
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
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="restaurant" className="border border-gray-200 rounded-lg">
            <AccordionTrigger className="px-6 py-4 text-xl font-playfair font-semibold text-[#800000] hover:no-underline">
              Restaurant Gallery ({restaurantImages.length} images)
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {restaurantImages.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Restaurant ${index + 1}`} 
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </Card>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Gallery;
