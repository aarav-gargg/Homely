import React, { useState } from 'react';
import items from "../Data/categories.js";

const Properties = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category) => {
    if(selectedCategory === category){
      setSelectedCategory("All");
      return;
    }
    setSelectedCategory(category);
  };

  return (
    <>
      <div className='px-10 py-6 md:px-5 flex justify-center flex-wrap gap-5'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-black cursor-pointer rounded-3xl px-2 py-2 hover:bg-slate-600
            }`}
            onClick={() => handleCategoryClick(item.label)}
          >
            <item.icon className={`text-white text-3xl mb-2 ${item.label === selectedCategory ? 'text-amber-400' : ''}`} />
            <div className={`font-black ${item.label === selectedCategory ? 'text-white text-xl' : ''}`}>{item.label}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Properties;

