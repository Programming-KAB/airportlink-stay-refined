
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const refreshmentItems = [
  // Single Juices
  {
    id: 'passion-fruit-juice',
    name: 'Passion Fruit Juice',
    description: 'Fresh passion fruit juice',
    price: 12000,
    category: 'Single Juices',
    image: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'pineapple-juice',
    name: 'Pineapple Juice',
    description: 'Fresh pineapple juice',
    price: 12000,
    category: 'Single Juices',
    image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'watermelone-juice',
    name: 'Watermelone Juice',
    description: 'Fresh watermelon juice',
    price: 12000,
    category: 'Single Juices',
    image: 'https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  
  // Smoothies
  {
    id: 'pineapple-passion',
    name: 'Pineapple Passion',
    description: 'Pineapple, Banana, Fresh Ginger & Yoghurt',
    price: 15000,
    category: 'Smoothies',
    image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'banana-beauty',
    name: 'Banana Beauty',
    description: 'Frozen banana, milk and honey. Mango, Pineapple, Banana & Yoghurt',
    price: 15000,
    category: 'Smoothies',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },

  // Health Boast Juices
  {
    id: 'ginger-top',
    name: 'Ginger Top',
    description: 'Carrots & Orange',
    price: 15000,
    category: 'Health Boast Juices',
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'minty-fresh',
    name: 'Minty Fresh',
    description: 'Lemon, Orange, Ginger & Mint',
    price: 15000,
    category: 'Health Boast Juices',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'tropical-juice-coctail',
    name: 'Tropical Juice (Coctail)',
    description: 'Mixed tropical fruits cocktail',
    price: 15000,
    category: 'Health Boast Juices',
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },

  // Milk Shakes
  {
    id: 'single-flavor',
    name: 'Single Flavor',
    description: 'Chocolate, strawberry or Vanilla',
    price: 15000,
    category: 'Milk Shakes',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'oreo-milk-shake',
    name: 'Oreo Milk Shake',
    description: 'Oreo biscuits & Ice cream',
    price: 15000,
    category: 'Milk Shakes',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'avocado-milkshake',
    name: 'Avocado Milkshake',
    description: 'Avocado, milk & honey',
    price: 15000,
    category: 'Milk Shakes',
    image: 'https://images.unsplash.com/photo-1563227812-0ea4c22e6cc8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },

  // Teas
  {
    id: 'black-tea',
    name: 'Black Tea',
    description: 'Classic black tea',
    price: 5000,
    category: 'Teas',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'english-tea',
    name: 'English Tea',
    description: 'Traditional English breakfast tea',
    price: 10000,
    category: 'Teas',
    image: 'https://images.unsplash.com/photo-1594631661960-21d83d7e3480?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'african-tea',
    name: 'African Tea',
    description: 'Traditional African tea blend',
    price: 12000,
    category: 'Teas',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'green-tea',
    name: 'Green Tea',
    description: 'Fresh green tea',
    price: 8000,
    category: 'Teas',
    image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'iced-tea',
    name: 'Iced Tea',
    description: 'Refreshing iced tea',
    price: 8000,
    category: 'Teas',
    image: 'https://images.unsplash.com/photo-1499638673689-79a0b5115d87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'rooibos-tea',
    name: 'Rooibos Tea',
    description: 'South African red bush tea',
    price: 8000,
    category: 'Teas',
    image: 'https://images.unsplash.com/photo-1594736797933-d0c501ba2fe6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'lemon-tea',
    name: 'Lemon Tea',
    description: 'Tea with fresh lemon',
    price: 8000,
    category: 'Teas',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'green-tea-mint',
    name: 'Green Tea (Mint)',
    description: 'Green tea with fresh mint',
    price: 8000,
    category: 'Teas',
    image: 'https://images.unsplash.com/photo-1564890273-315c46d2d132?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },

  // Coffees
  {
    id: 'filtered-coffee',
    name: 'Filtered Coffee',
    description: 'Fresh filtered coffee',
    price: 12000,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'african-coffee',
    name: 'African Coffee',
    description: 'Premium African coffee beans',
    price: 12000,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'english-coffee',
    name: 'English Coffee',
    description: 'Traditional English coffee',
    price: 12000,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1521302200778-33500795e128?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Strong Italian espresso',
    price: 10000,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'capuccino',
    name: 'Capuccino',
    description: 'Classic cappuccino with foam',
    price: 12000,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'cafelatte',
    name: 'Cafelatte',
    description: 'Smooth cafe latte',
    price: 12000,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'cafe-mocha',
    name: 'Cafe Mocha',
    description: 'Coffee with chocolate',
    price: 12000,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'latte-macchiato',
    name: 'Latte Macchiato',
    description: 'Layered latte macchiato',
    price: 12000,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'iced-mocha',
    name: 'Iced Mocha',
    description: 'Cold mocha with ice',
    price: 12000,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'hot-chocolate',
    name: 'Hot Chocolate',
    description: 'Rich hot chocolate',
    price: 12000,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1542990253-0b8de10fb2d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  },
  {
    id: 'iced-coffee',
    name: 'Iced Coffee',
    description: 'Refreshing iced coffee',
    price: 12000,
    category: 'Coffees',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  }
];

const categories = ['All', 'Single Juices', 'Smoothies', 'Health Boast Juices', 'Milk Shakes', 'Teas', 'Coffees'];

const Refreshment = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? refreshmentItems 
    : refreshmentItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2FCE2] via-white to-[#E8F5E8]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-[#800000] to-[#B71C1C] bg-clip-text text-transparent mb-4">
            Refreshment Suggestions
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Refresh yourself with our selection of juices, smoothies, teas, and coffees
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

export default Refreshment;
