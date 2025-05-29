
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const lunchItems = [
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    description: 'Fresh romaine lettuce with caesar dressing, croutons, and parmesan',
    price: 9,
    category: 'Salads',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'club-sandwich',
    name: 'Classic Club Sandwich',
    description: 'Triple-decker sandwich with turkey, bacon, lettuce, and tomato',
    price: 11,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'tomato-soup',
    name: 'Tomato Basil Soup',
    description: 'Creamy tomato soup with fresh basil, served with grilled cheese',
    price: 8,
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'grilled-chicken-wrap',
    name: 'Grilled Chicken Wrap',
    description: 'Grilled chicken with vegetables and sauce in a tortilla wrap',
    price: 10,
    category: 'Wraps',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'quinoa-bowl',
    name: 'Mediterranean Quinoa Bowl',
    description: 'Quinoa with roasted vegetables, chickpeas, and tahini dressing',
    price: 12,
    category: 'Bowls',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'fish-tacos',
    name: 'Fish Tacos',
    description: 'Grilled fish with cabbage slaw and chipotle sauce in corn tortillas',
    price: 13,
    category: 'Mexican',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'caprese-sandwich',
    name: 'Caprese Sandwich',
    description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze',
    price: 9,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'asian-noodle-soup',
    name: 'Asian Noodle Soup',
    description: 'Ramen noodles in savory broth with vegetables and soft-boiled egg',
    price: 11,
    category: 'Soups',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  }
];

const categories = ['All', 'Salads', 'Sandwiches', 'Soups', 'Wraps', 'Bowls', 'Mexican'];

const Lunch = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? lunchItems 
    : lunchItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-[#800000] mb-3">Lunch Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Enjoy our delicious 2-course lunch experience for $10. Fresh, flavorful options for your midday meal.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl font-playfair text-[#800000]">{item.name}</CardTitle>
                      <Badge className="bg-[#4CAF50] text-white font-medium">
                        ${item.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex-grow">
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <Badge variant="outline" className="bg-white mb-4">
                      {item.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Filter Menu */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-playfair font-bold text-[#800000] mb-4">Filter by Category</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`w-full justify-start ${
                      selectedCategory === category 
                        ? "bg-[#800000] hover:bg-[#990000]" 
                        : "border-gray-300 hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Lunch;
