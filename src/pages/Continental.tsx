
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const continentalDishes = [
  {
    id: 'full-english-breakfast',
    name: 'Full English Breakfast',
    description: 'Two eggs, bacon, sausage, baked beans, tomatoes and toast',
    price: 25000,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'eggs-benedict',
    name: 'Eggs Benedict',
    description: 'Poached Eggs and Ham on homemade bread with Hollandaise sauce',
    price: 25000,
    category: 'Main Dishes',
    image: 'https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'bacon-egg-butty',
    name: 'Bacon and Egg Butty',
    description: 'With homemade bread, fresh or toasted',
    price: 20000,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'buttered-mushrooms',
    name: 'Buttered Mushrooms',
    description: 'Fresh mushrooms, cream, coriander & black pepper served on toast',
    price: 18000,
    category: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'sausage-sandwich',
    name: 'Sausage Sandwich',
    description: 'Premium sausage in fresh bread',
    price: 16000,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'smashed-avocado-poached-eggs',
    name: 'Smashed Avocado and Poached Eggs on Toast',
    description: 'Fresh avocado and perfectly poached eggs on artisan toast',
    price: 18000,
    category: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'avocado-tartar',
    name: 'Avocado Tartar',
    description: 'Cubes of fresh avocado, tomato & onions on a bed of toast',
    price: 16000,
    category: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'classic-blt',
    name: 'Classic BLT',
    description: 'Bacon lettuce and tomato',
    price: 18000,
    category: 'Sandwiches',
    image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'pancakes-panache',
    name: 'Pancakes Panache',
    description: 'Layered Pancake with banana and honey sprinkled with roasted nuts',
    price: 18000,
    category: 'Sweet Treats',
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'eggs-toast',
    name: 'Eggs and Toast',
    description: 'Eggs of your choice on toast',
    price: 15000,
    category: 'Simple & Light',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'tropical-fruit-salad',
    name: 'Tropical Fruit Salad',
    description: 'Fresh seasonal tropical fruits',
    price: 12000,
    category: 'Healthy Options',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'granola-muesli',
    name: 'Home Made Granola/Muesli',
    description: 'Served with fruits, yogurt & honey',
    price: 15000,
    category: 'Healthy Options',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'toast',
    name: 'Toast',
    description: '2 Toasted slices of homemade bread served with butter',
    price: 10000,
    category: 'Simple & Light',
    image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'french-toast',
    name: 'French Toast',
    description: 'Served with Pancake syrup',
    price: 16000,
    category: 'Sweet Treats',
    image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  }
];

const categories = ['All', 'Main Dishes', 'Sandwiches', 'Vegetarian', 'Sweet Treats', 'Healthy Options', 'Simple & Light'];

const Continental = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDishes = selectedCategory === 'All' 
    ? continentalDishes 
    : continentalDishes.filter(dish => dish.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2FCE2] via-white to-[#E8F5E8]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-[#800000] to-[#B71C1C] bg-clip-text text-transparent mb-4">
            Continental Menu
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Start your day with our delicious continental breakfast selection, complimentary with your stay
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredDishes.map((dish) => (
                <Card key={dish.id} className="h-full flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <div className="h-48 overflow-hidden rounded-t-lg relative">
                    <img src={dish.image} alt={dish.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-playfair text-[#800000] group-hover:text-[#B71C1C] transition-colors">
                        {dish.name}
                      </CardTitle>
                      <Badge className="bg-gradient-to-r from-[#4CAF50] to-[#45A049] text-white font-bold text-sm px-3 py-1 shadow-lg">
                        {dish.price.toLocaleString()} UGX
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex-grow">
                    <p className="text-gray-700 mb-4 leading-relaxed">{dish.description}</p>
                    <Badge variant="outline" className="bg-gradient-to-r from-[#FFA500]/10 to-[#FF8C00]/10 border-[#FFA500] text-[#800000] font-medium">
                      {dish.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Filter Menu */}
          <div className="lg:w-72">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sticky top-24 border border-white/20">
              <h3 className="text-xl font-playfair font-bold bg-gradient-to-r from-[#800000] to-[#B71C1C] bg-clip-text text-transparent mb-6">
                Filter Categories
              </h3>
              <div className="space-y-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className={`w-full justify-start text-left transition-all duration-300 ${
                      selectedCategory === category 
                        ? "bg-gradient-to-r from-[#800000] to-[#B71C1C] hover:from-[#990000] hover:to-[#D32F2F] text-white shadow-lg transform scale-105" 
                        : "border-gray-300 hover:bg-gradient-to-r hover:from-[#FFA500]/10 hover:to-[#FF8C00]/10 hover:border-[#FFA500] hover:text-[#800000] hover:shadow-md"
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
