
import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';

const slides = [
  {
    id: 1,
    image: "https://www.airportlinkguesthouse.com/wp-content/uploads/2025/05/Trip_Bed-scaled.jpg",
    title: "Comfortable & Spacious Accommodations",
    description: "Experience our well-appointed triple rooms with premium bedding, modern amenities, and a tranquil atmosphere. Perfect for families or groups traveling together.",
    buttonText: "Explore Our Rooms"
  },
  {
    id: 2,
    image: "https://www.airportlinkguesthouse.com/wp-content/uploads/2024/10/Outside_sits-scaled.jpg",
    title: "Relaxing Outdoor Space",
    description: "Unwind in our peaceful outdoor seating area surrounded by greenery. The perfect spot to enjoy your morning coffee or evening refreshments after a day of travel.",
    buttonText: "View Our Amenities"
  },
  {
    id: 3,
    image: "https://www.airportlinkguesthouse.com/wp-content/uploads/2024/10/Single-_bed_out-scaled.jpg",
    title: "Cozy Single Accommodations",
    description: "Our single rooms offer comfort and convenience for the solo traveler. Enjoy quality bedding and a peaceful atmosphere with easy airport access.",
    buttonText: "Book Now"
  },
  {
    id: 4,
    image: "https://www.airportlinkguesthouse.com/wp-content/uploads/2024/10/Trip_Bed-scaled.jpg",
    title: "Premium Triple Rooms",
    description: "Spacious triple rooms ideal for groups or families, featuring comfortable beds and all the amenities you need for a relaxing stay near the airport.",
    buttonText: "See Availability"
  }
];

const HeroSlider: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] bg-[#800000] w-full">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full w-full p-0">
              {/* Background image with overlay - full width and height */}
              <div 
                className="absolute inset-0 bg-cover bg-center w-full h-full" 
                style={{ 
                  backgroundImage: `url('${slide.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-[#800000] opacity-50"></div>
              </div>

              {/* Content */}
              <div className="relative container mx-auto h-full flex items-center px-4">
                <div className="max-w-2xl text-white">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl opacity-90 mb-8">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href={slide.id === 2 ? "#amenities" : slide.id === 3 ? "#booking" : "#rooms"}>
                      <Button className="bg-[#4CAF50] hover:bg-[#388E3C] text-white transition-colors text-lg px-8 py-6">
                        {slide.buttonText}
                      </Button>
                    </a>
                    <a href="#rooms">
                      <Button variant="outline" className="border-white text-white hover:bg-white/10 transition-colors text-lg px-8 py-6">
                        Explore Rooms
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <div className="absolute bottom-5 right-5 z-20 flex gap-2">
          <CarouselPrevious className="relative -left-0 bg-white/20 hover:bg-white/40 border-none text-white h-10 w-10" />
          <CarouselNext className="relative -right-0 bg-white/20 hover:bg-white/40 border-none text-white h-10 w-10" />
        </div>
      </Carousel>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSlider;
