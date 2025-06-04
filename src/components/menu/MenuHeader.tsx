
import React from 'react';

interface MenuHeaderProps {
  title: string;
  description: string;
}

const MenuHeader: React.FC<MenuHeaderProps> = ({ title, description }) => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-playfair font-bold bg-gradient-to-r from-[#800000] to-[#B71C1C] bg-clip-text text-transparent mb-4">
        {title}
      </h1>
      <div className="w-24 h-1 bg-gradient-to-r from-[#FFA500] to-[#FF8C00] mx-auto mb-4"></div>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg">
        {description}
      </p>
    </div>
  );
};

export default MenuHeader;
