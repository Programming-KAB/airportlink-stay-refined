
import React from 'react';
import MenuItem from './MenuItem';

interface MenuItemData {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

interface MenuGridProps {
  items: MenuItemData[];
}

const MenuGrid: React.FC<MenuGridProps> = ({ items }) => {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item) => (
          <MenuItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
