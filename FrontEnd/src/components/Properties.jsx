import React, { useEffect, useState } from 'react';
import items from "../Data/categories.js";
import axios from 'axios';

const Properties = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [fetchedProperties , setFetchedProperties] = useState([]);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory("All");
      return;
    }
    setSelectedCategory(category);
  };


 
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const resp = await axios.get("http://localhost:3000/api/host/");
        console.log(resp.data); 
        setFetchedProperties(resp.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProperties();
  }, [selectedCategory]);

  useEffect(() => {
    console.log(fetchedProperties);
  }, [fetchedProperties]);



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

      <div className='w-10/11 p-10 flex-col m-auto justify-center'>
         {fetchedProperties.map((prop , index) => (
          <div key={index} className="bg-white rounded-3xl p-5 shadow-md my-3">
               
            </div>
         ))}
      </div>
    </>
  );
};

export default Properties;

