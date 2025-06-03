import React, { useEffect, useState } from 'react';
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
    image: "http://away2uganda.com/Air/IMG_8074.jpeg",
    title: "Luxury Stay",
    subtitle: "Near the Airport",
    description: "Experience premium comfort with our well-appointed rooms and exceptional service.",
    buttonText: "Book Now",
    link: "/#booking"
  },
  {
    id: 2,
    image: "http://away2uganda.com/Air/IMG_8063.jpeg",
    title: "Peaceful Retreat",
    subtitle: "Outdoor Oasis",
    description: "Unwind in our serene outdoor spaces, perfect for relaxation and refreshment.",
    buttonText: "Explore",
    link: "/amenities"
  },
  {
    id: 3,
    image: "https://airportlinkguesthouse.com/air/Single_bed_in.jpg",
    title: "Modern Comfort",
    subtitle: "Single Rooms",
    description: "Contemporary single rooms designed for the discerning traveler.",
    buttonText: "View Rooms",
    link: "/rooms"
  },
  {
    id: 4,
    image: "https://www.airportlinkguesthouse.com/air/Out_View.jpeg",
    title: "Family Space",
    subtitle: "Triple Rooms",
    description: "Spacious accommodations perfect for families and groups.",
    buttonText: "Learn More",
    link: "/rooms"
  }
];

const HeroSlider: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        setLoadedImages(prev => ({ ...prev, [slide.id]: true }));
      };
    });
  }, []);

  return (
    <div className="relative w-full aspect-[16/9] min-h-[400px] max-h-[700px] overflow-hidden">
      <img
        src={slides[currentSlide]?.image}
        alt={slides[currentSlide]?.title}
        className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700"
        style={{ zIndex: 1 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />
      <Carousel className="w-full h-full relative z-20" opts={{ loop: true, align: "start", skipSnaps: false }} setApi={setApi}>
        <CarouselContent className="h-full">
          {slides.map((slide, idx) => (
            <CarouselItem key={slide.id} className="h-full w-full p-0 flex items-center justify-center">
              {/* Content */}
              <div className="container mx-auto px-4 md:px-8 h-full flex flex-col items-center pt-20">
                <div className="max-w-2xl w-full text-center">
                  <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-light text-[#FFA500] tracking-wider drop-shadow-lg">
                      {slide.subtitle}
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mt-8 drop-shadow-2xl">
                      {slide.title}
                    </h1>
                    <p className="text-xl text-gray-200 max-w-xl mx-auto mt-4 drop-shadow-lg">
                      {slide.description}
                    </p>
                  </div>
                  <div className="pt-10">
                    <a href={slide.link}>
                      <Button className="bg-[#FFA500] hover:bg-[#E69500] text-white px-8 py-6 text-lg rounded-none shadow-lg">
                        {slide.buttonText}
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Dots */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#FFA500] w-8' : 'bg-white/50 hover:bg-white/75'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export default HeroSlider;

