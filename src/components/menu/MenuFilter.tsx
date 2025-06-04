
import React from 'react';
import { Button } from "@/components/ui/button";

interface MenuFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const MenuFilter: React.FC<MenuFilterProps> = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
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
              onClick={() => onCategoryChange(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuFilter;
