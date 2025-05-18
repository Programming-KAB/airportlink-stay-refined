
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

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
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3">What Our Guests Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it — hear what our guests have to say about their experiences at Airport Link Guesthouse.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-primary-light border-none hover-scale">
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
                <p className="italic text-gray-200">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
