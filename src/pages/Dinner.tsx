
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const dinnerItems = [
  {
    id: 'grilled-salmon',
    name: 'Grilled Salmon',
    description: 'Fresh Atlantic salmon with herbs, served with roasted vegetables and rice',
    price: 18,
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'beef-tenderloin',
    name: 'Beef Tenderloin',
    description: 'Premium beef tenderloin with mashed potatoes and seasonal vegetables',
    price: 25,
    category: 'Meat',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'chicken-marsala',
    name: 'Chicken Marsala',
    description: 'Pan-seared chicken breast in marsala wine sauce with mushrooms',
    price: 16,
    category: 'Poultry',
    image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'vegetarian-pasta',
    name: 'Mediterranean Pasta',
    description: 'Penne pasta with fresh tomatoes, olives, basil, and feta cheese',
    price: 14,
    category: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'lamb-chops',
    name: 'Herb-Crusted Lamb Chops',
    description: 'Tender lamb chops with herb crust, mint sauce, and garlic potatoes',
    price: 22,
    category: 'Meat',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'seafood-risotto',
    name: 'Seafood Risotto',
    description: 'Creamy risotto with mixed seafood, white wine, and parmesan',
    price: 20,
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'duck-confit',
    name: 'Duck Confit',
    description: 'Classic French duck leg confit with cherry sauce and wild rice',
    price: 24,
    category: 'Poultry',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'stuffed-portobello',
    name: 'Stuffed Portobello Mushroom',
    description: 'Large portobello cap stuffed with quinoa, vegetables, and goat cheese',
    price: 13,
    category: 'Vegetarian',
    image: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  }
];

const categories = ['All', 'Seafood', 'Meat', 'Poultry', 'Vegetarian'];

const Dinner = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? dinnerItems 
    : dinnerItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#F2FCE2]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold text-[#800000] mb-3">Dinner Menu</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">Enjoy our exquisite 3-course dinner experience for $15. Choose from our carefully crafted dinner selections.</p>
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

export default Dinner;
