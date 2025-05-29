
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const continentalDishes = [
  {
    id: 'classic-croissant',
    name: 'Classic Croissant',
    description: 'Buttery, flaky croissant served with jam and butter',
    price: 8,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab794f575d81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'cheese-platter',
    name: 'Continental Cheese Platter',
    description: 'Selection of European cheeses with crackers and grapes',
    price: 15,
    category: 'Appetizers',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'smoked-salmon',
    name: 'Smoked Salmon Bagel',
    description: 'Fresh bagel with smoked salmon, cream cheese, and capers',
    price: 12,
    category: 'Main Courses',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'fruit-bowl',
    name: 'Fresh Fruit Bowl',
    description: 'Seasonal fresh fruits with yogurt and honey',
    price: 6,
    category: 'Healthy Options',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'granola-parfait',
    name: 'Granola Parfait',
    description: 'Layers of yogurt, granola, and fresh berries',
    price: 7,
    category: 'Healthy Options',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'pain-au-chocolat',
    name: 'Pain au Chocolat',
    description: 'Traditional French pastry with dark chocolate',
    price: 9,
    category: 'Pastries',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  }
];

const categories = ['All', 'Pastries', 'Appetizers', 'Main Courses', 'Healthy Options'];

const Continental = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDishes = selectedCategory === 'All' 
    ? continentalDishes 
    : continentalDishes.filter(dish => dish.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-[#800000] mb-3">Continental Dishes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover our selection of European-inspired dishes, perfect for any time of day.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredDishes.map((dish) => (
                <Card key={dish.id} className="h-full flex flex-col">
                  <div className="h-48 overflow-hidden">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover" />
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-center">
                      <CardTitle className="text-xl font-playfair text-[#800000]">{dish.name}</CardTitle>
                      <Badge className="bg-[#4CAF50] text-white font-medium">
                        ${dish.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex-grow">
                    <p className="text-gray-700 mb-4">{dish.description}</p>
                    <Badge variant="outline" className="bg-white mb-4">
                      {dish.category}
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

export default Continental;
