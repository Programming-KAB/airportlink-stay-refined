
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, description, price, category, image }) => {
  return (
    <Card className="h-full flex flex-col group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
      <div className="h-48 overflow-hidden rounded-t-lg relative">
        <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
      </div>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-playfair text-[#800000] group-hover:text-[#B71C1C] transition-colors">
            {name}
          </CardTitle>
          <Badge className="bg-gradient-to-r from-[#4CAF50] to-[#45A049] text-white font-bold text-sm px-3 py-1 shadow-lg">
            {price.toLocaleString()} UGX
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pt-0 flex-grow">
        <p className="text-gray-700 mb-4 leading-relaxed">{description}</p>
        <Badge variant="outline" className="bg-gradient-to-r from-[#FFA500]/10 to-[#FF8C00]/10 border-[#FFA500] text-[#800000] font-medium">
          {category}
        </Badge>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
