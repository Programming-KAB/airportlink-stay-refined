
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const lunchItems = [
  // Starters and Appetizers
  {
    id: 'chapati-chips',
    name: 'Chapati Chips',
    description: 'Served with Guacamoles',
    price: 12000,
    category: 'Starters & Appetizers',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'pita-bread-dips',
    name: 'Pita Bread and Dips',
    description: 'Homemade pita bread served with Humus, Guacamole and Marinated Olives',
    price: 20000,
    category: 'Starters & Appetizers',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'spring-rolls',
    name: 'Spring Rolls',
    description: 'Vegetable or Beef Spring rolls served with sweet chili',
    price: 15000,
    category: 'Starters & Appetizers',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'samosas',
    name: 'Samosas',
    description: 'Vegetable or Beef served with chili jam',
    price: 15000,
    category: 'Starters & Appetizers',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'buffalo-wings',
    name: 'Buffalo Wings',
    description: 'Crispy chicken wings tossed with hot sauce & served with cocktail sauce',
    price: 20000,
    category: 'Starters & Appetizers',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  // Soups
  {
    id: 'pumpkin-soup',
    name: 'Pumpkin Soup',
    description: 'Simple & tasty, served with homemade bread roll',
    price: 18000,
    category: 'Soups',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'mushroom-soup',
    name: 'Cream of Mushroom Soup',
    description: 'Rich and creamy mushroom soup',
    price: 18000,
    category: 'Soups',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'tomato-soup',
    name: 'Tomato Soup',
    description: 'Classic tomato soup with fresh herbs',
    price: 18000,
    category: 'Soups',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  // Salads
  {
    id: 'avocado-salad',
    name: 'Avocado Salad',
    description: 'Onion, cucumber, tomato & avocado',
    price: 25000,
    category: 'Salads',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    description: 'Locally sourced ingredients complemented with feta cheese, olives & our best olive oil',
    price: 28000,
    category: 'Salads',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'chicken-caesar',
    name: 'Chicken Caesar',
    description: 'Chicken strips, bread croutons, parmesan, lettuce and homemade Caesar dressing',
    price: 30000,
    category: 'Salads',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  // Wraps
  {
    id: 'steak-guacamole-wrap',
    name: 'Steak and Guacamole',
    description: 'Marinated beef fillet and fresh mushrooms accompanied by smooth avocado and yoghurt mix',
    price: 29000,
    category: 'Wraps',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'chicken-fajita',
    name: 'Chicken Fajita',
    description: 'Hot chicken strips with bell peppers & onions served with sour cream, guacamole and salsa',
    price: 28000,
    category: 'Wraps',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  // Sandwiches & Burgers
  {
    id: 'source-steak-sandwich',
    name: 'Source Steak or Chicken Sandwich',
    description: 'Tender slices of beef OR Chicken gently fried with onion in a delicious sauce, tucked between two slices of homemade bread. Served with chips',
    price: 30000,
    category: 'Sandwiches & Burgers',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'classic-burger',
    name: 'Chicken, Beef or Spicy Bean Burger',
    description: 'A healthy patty of your choice served on a homemade bread roll topped with cheese & served with side chips',
    price: 30000,
    category: 'Sandwiches & Burgers',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  // Mains
  {
    id: 'cartoccio-fish',
    name: 'Cartoccio Fish',
    description: 'Seasoned whole tilapia slathered with diced vegetables, wrapped in a foil and baked served with rice',
    price: 45000,
    category: 'Mains',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'grilled-fish',
    name: 'Grilled Whole Fish',
    description: 'Served with chips and salads',
    price: 45000,
    category: 'Mains',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  }
];

const categories = ['All', 'Starters & Appetizers', 'Soups', 'Salads', 'Wraps', 'Sandwiches & Burgers', 'Mains'];

const Lunch = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? lunchItems 
    : lunchItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2FCE2] via-white to-[#E8F5E8]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-[#800000] to-[#B71C1C] bg-clip-text text-transparent mb-4">
            Lunch Menu
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Enjoy our delicious 2-course lunch experience for $10. Fresh, flavorful options for your midday meal.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <Card key={item.id} className="h-full flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
                  <div className="h-48 overflow-hidden rounded-t-lg relative">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardHeader className="pb-3">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-playfair text-[#800000] group-hover:text-[#B71C1C] transition-colors">
                        {item.name}
                      </CardTitle>
                      <Badge className="bg-gradient-to-r from-[#4CAF50] to-[#45A049] text-white font-bold text-sm px-3 py-1 shadow-lg">
                        {item.price.toLocaleString()} UGX
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex-grow">
                    <p className="text-gray-700 mb-4 leading-relaxed">{item.description}</p>
                    <Badge variant="outline" className="bg-gradient-to-r from-[#FFA500]/10 to-[#FF8C00]/10 border-[#FFA500] text-[#800000] font-medium">
                      {item.category}
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

export default Lunch;
