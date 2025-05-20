
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    title: "Comfortable & Spacious Accommodations",
    description: "Experience our well-appointed triple rooms with premium bedding, modern amenities, and a tranquil atmosphere. Perfect for families or groups traveling together.",
    buttonText: "Explore Our Rooms"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    title: "Relaxing Outdoor Space",
    description: "Unwind in our peaceful outdoor seating area surrounded by greenery. The perfect spot to enjoy your morning coffee or evening refreshments after a day of travel.",
    buttonText: "View Our Amenities"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    title: "Cozy Single Accommodations",
    description: "Our single rooms offer comfort and convenience for the solo traveler. Enjoy quality bedding and a peaceful atmosphere with easy airport access.",
    buttonText: "Book Now"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    title: "Premium Triple Rooms",
    description: "Spacious triple rooms ideal for groups or families, featuring comfortable beds and all the amenities you need for a relaxing stay near the airport.",
    buttonText: "See Availability"
  }
];

const HeroSlider: React.FC = () => {
  // Create a ref to store the carousel API
  const [api, setApi] = React.useState<CarouselApi>();
  
  // Set up auto-sliding every 10 seconds
  useEffect(() => {
    if (!api) {
      return;
    }

    const autoSlideInterval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        // If we can't scroll next, it means we're at the end, so go back to the first slide
        api.scrollTo(0);
      }
    }, 10000); // 10 seconds

    return () => clearInterval(autoSlideInterval);
  }, [api]);

  return (
    <div className="relative h-[80vh] min-h-[600px] bg-[#800000] w-full overflow-hidden">
      <Carousel className="w-full h-full" opts={{ loop: true }} setApi={setApi}>
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full w-full p-0">
              {/* Background image covering full slider area */}
              <div 
                className="absolute inset-0 w-full h-full"
                style={{ 
                  backgroundImage: `url('${slide.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                {/* Semi-transparent deep red overlay for better text visibility */}
                <div className="absolute inset-0 bg-[#800000] opacity-60"></div>
              </div>

              {/* Content */}
              <div className="relative h-full container mx-auto flex items-center px-4">
                <div className="max-w-2xl text-white z-10">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl opacity-90 mb-8">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href={slide.id === 2 ? "#amenities" : slide.id === 3 ? "#booking" : "#rooms"}>
                      <Button className="bg-[#FFA500] hover:bg-[#E69500] text-white transition-colors text-lg px-8 py-6">
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
          <CarouselPrevious className="relative -left-0 bg-[#FFA500] hover:bg-[#E69500] border-none text-white h-10 w-10" />
          <CarouselNext className="relative -right-0 bg-[#FFA500] hover:bg-[#E69500] border-none text-white h-10 w-10" />
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
