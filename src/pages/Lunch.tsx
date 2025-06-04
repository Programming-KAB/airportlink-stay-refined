
import React, { useState } from 'react';
import MenuLayout from '@/components/menu/MenuLayout';
import MenuHeader from '@/components/menu/MenuHeader';
import MenuFilter from '@/components/menu/MenuFilter';
import MenuGrid from '@/components/menu/MenuGrid';
import { lunchItems, lunchCategories } from '@/data/lunchMenu';

const Lunch = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredItems = selectedCategory === 'All' 
    ? lunchItems 
    : lunchItems.filter(item => item.category === selectedCategory);

  return (
    <MenuLayout>
      <MenuHeader 
        title="Lunch Menu"
        description="Enjoy our delicious 2-course lunch experience for $10. Fresh, flavorful options for your midday meal."
      />

      <div className="flex flex-col lg:flex-row gap-8">
        <MenuGrid items={filteredItems} />
        <MenuFilter 
          categories={lunchCategories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>
    </MenuLayout>
  );
};

export default Lunch;
