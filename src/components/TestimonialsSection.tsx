
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    quote: "The Airport Link Guesthouse was perfect for our overnight stay before an early flight. The shuttle service was punctual, and the staff was extremely helpful.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    location: "Toronto, Canada",
    quote: "Clean rooms, comfortable beds, and friendly service. The proximity to the airport is a major plus. I'll definitely stay here again on my next trip.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    quote: "I was impressed with the quality of service for such an affordable price. The breakfast was delicious and the staff went above and beyond to make our stay comfortable.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/67.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 10000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#800000] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3">What Our Guests Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it — hear what our guests have to say about their experiences at Airport Link Guesthouse.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel 
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={(api) => {
              if (api) {
                api.on("select", () => {
                  setActiveIndex(api.selectedScrollSnap());
                });
                api.scrollTo(activeIndex);
              }
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="sm:basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="bg-[#600000] border-none hover-scale">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-medium text-white">{testimonial.name}</h4>
                          <p className="text-gray-300 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                      <div className="mb-3">
                        {Array(5).fill(0).map((_, i) => (
                          <span key={i} className="text-lg">
                            {i < testimonial.rating ? "⭐" : "☆"}
                          </span>
                        ))}
                      </div>
                      <p className="italic text-gray-200 text-lg">{testimonial.quote}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-6">
              <CarouselPrevious className="relative static mr-2 translate-y-0" />
              <CarouselNext className="relative static translate-y-0" />
            </div>
          </Carousel>
          
          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full ${
                  index === activeIndex ? 'bg-white' : 'bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
