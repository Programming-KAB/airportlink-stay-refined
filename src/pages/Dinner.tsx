
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const dinnerItems = [
  // Pork Favorites
  {
    id: 'fried-pork',
    name: 'Fried Pork',
    description: 'Seasoned crunchy pork cubes fried with vegetables and served with a side of your choice',
    price: 35000,
    category: 'Pork Favorites',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'pork-ribs',
    name: 'Pork Ribs in Special Seasoned Marinade',
    description: 'Served with vegetable fried rice and guacamole',
    price: 35000,
    category: 'Pork Favorites',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'pork-chops',
    name: 'Chunky Pork Chops',
    description: 'Lightly fried, served with jacket potatoes and brandy cream sauce or BBQ sauce',
    price: 35000,
    category: 'Pork Favorites',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  // Let's Dig In!
  {
    id: 'greek-lamb',
    name: 'Greek Lamb',
    description: 'Slow cooked Greek style lamb in a rich olive & tomato sauce served with crunchy tzatziki toast',
    price: 32000,
    category: 'Signature Mains',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'tender-t-bone',
    name: 'Tender T-Bone Steak',
    description: 'Pan fried and served with our new herb baste, side chips & salad garnish',
    price: 35000,
    category: 'Signature Mains',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'char-grilled-fillet',
    name: 'Char-Grilled Fillet Steak',
    description: 'With Blue Roquefort cheese sauce served with potato wedges & our delicious pumpkin mash',
    price: 36000,
    category: 'Signature Mains',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'beef-stroganoff',
    name: 'Classic Beef Stroganoff',
    description: 'Well marinated pieces of beef fillet cooked in a creamy mushroom sauce and served on a bed of pasta or rice',
    price: 35000,
    category: 'Signature Mains',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'quarter-chicken',
    name: 'Quarter Chicken',
    description: 'Pan-fried chicken served with chips and salad garnish',
    price: 35000,
    category: 'Poultry',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  // Pasta
  {
    id: 'spaghetti-napolitana',
    name: 'Spaghetti Napolitana',
    description: 'Pasta spaghetti in a flavored tomato sauce with fresh basil & parmesan cheese',
    price: 35000,
    category: 'Pasta',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'fettuccini-alfredo',
    name: 'Fettuccini Alfredo',
    description: 'Fettuccini pasta in a creamy delicious alfredo sauce with chicken strips',
    price: 35000,
    category: 'Pasta',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'spaghetti-bolognese',
    name: 'Spaghetti Bolognese',
    description: 'Al-dente spaghetti with a packed full bolognaise finished with parmesan and served with garlic bread',
    price: 35000,
    category: 'Pasta',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'chicken-lemon-carbonara',
    name: 'Chicken and Lemon Spaghetti Carbonara',
    description: 'A rich citric combination blended with cream and egg',
    price: 35000,
    category: 'Pasta',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'tagliatelle',
    name: 'Tagliatelle',
    description: 'Served with a creamy spinach and mushroom sauce',
    price: 34000,
    category: 'Pasta',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  // Curries
  {
    id: 'vegetable-curry',
    name: 'Vegetable Curry',
    description: 'Hot or mild served with rice or chapatti',
    price: 35000,
    category: 'Curries',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'chicken-beef-curry',
    name: 'Chicken or Beef Curry',
    description: 'Aromatic curry with your choice of protein',
    price: 35000,
    category: 'Curries',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  // Pizza Corner
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    description: 'Tomato, Cheese & Basil',
    price: 30000,
    category: 'Pizza Corner',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'vegetarian-pizza',
    name: 'Vegetarian Pizza',
    description: 'Vegetables & cheese',
    price: 35000,
    category: 'Pizza Corner',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'supreme-pizza',
    name: 'Supreme Pizza',
    description: 'Beef mince, Bacon, mushrooms, olives & peppers',
    price: 40000,
    category: 'Pizza Corner',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  // Desserts
  {
    id: 'affogato',
    name: 'Affogato',
    description: 'Vanilla ice cream and a shot of espresso',
    price: 18000,
    category: 'Desserts',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'ice-cream-scoops',
    name: '3 Scoops',
    description: 'Choose between or mix chocolate, vanilla or strawberry ice cream. Add chocolate sauce',
    price: 15000,
    category: 'Desserts',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'banana-split',
    name: 'Banana Split',
    description: 'Banana served with 2 scoops vanilla ice cream',
    price: 28000,
    category: 'Desserts',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  },
  {
    id: 'home-made-cake',
    name: 'Home Made Cake with Ice Cream',
    description: 'Please ask availability!',
    price: 15000,
    category: 'Desserts',
    image: 'http://away2uganda.com/Air/IMG_8060.jpeg'
  }
];

const categories = ['All', 'Pork Favorites', 'Signature Mains', 'Poultry', 'Pasta', 'Curries', 'Pizza Corner', 'Desserts'];

const Dinner = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? dinnerItems 
    : dinnerItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F2FCE2] via-white to-[#E8F5E8]">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-[#800000] to-[#B71C1C] bg-clip-text text-transparent mb-4">
            Dinner Menu
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Enjoy our exquisite 3-course dinner experience for $15. Choose from our carefully crafted dinner selections.
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

export default Dinner;
