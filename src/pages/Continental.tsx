
import React, { useState } from 'react';
import MenuLayout from '@/components/menu/MenuLayout';
import MenuHeader from '@/components/menu/MenuHeader';
import MenuFilter from '@/components/menu/MenuFilter';
import MenuGrid from '@/components/menu/MenuGrid';
import { continentalDishes, continentalCategories } from '@/data/continentalMenu';

const Continental = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDishes = selectedCategory === 'All' 
    ? continentalDishes 
    : continentalDishes.filter(dish => dish.category === selectedCategory);

  return (
    <MenuLayout>
      <MenuHeader 
        title="Continental Menu"
        description="Start your day with our delicious continental breakfast selection, complimentary with your stay"
      />

      <div className="flex flex-col lg:flex-row gap-8">
        <MenuGrid items={filteredDishes} />
        <MenuFilter 
          categories={continentalCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
    </MenuLayout>
  );
};

export default Continental;
