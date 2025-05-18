
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
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Your Comfort Away From Home",
    description: "Experience luxury and convenience at Airport Link Guesthouse. Located minutes from the airport, enjoy our premium accommodations and exceptional service."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Relax in Style",
    description: "Our comfortable rooms are designed to provide the perfect blend of luxury and relaxation for your stay."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    title: "Convenient Airport Access",
    description: "Just minutes away from the airport, making your travels stress-free and comfortable."
  }
];

const HeroSlider: React.FC = () => {
  return (
    <div className="relative h-[80vh] min-h-[600px] bg-gray-900">
      <Carousel className="w-full h-full" opts={{ loop: true }}>
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              {/* Background image with overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url('${slide.image}')` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
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
                    <a href="#booking">
                      <Button className="bg-secondary hover:bg-secondary-dark text-primary transition-colors text-lg px-8 py-6">
                        Book Your Stay
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
