import React, { useEffect, useState } from 'react';
import items from '../Data/categories';
import types from "../Data/types";
import { IoInformationCircle } from "react-icons/io5";

const Host = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");

  const toggleDropdown = (name) => {
    setIsDropdownOpen(isDropdownOpen === name ? null : name);
  };

  const handleTypeClick = (name) => {
    setType(name);
  };

  const handleCategoryClick = (name) => {
    setCategory(name);
  }

  useEffect(() => {
    console.log("CATEGORY IS : ", category);
    console.log("TYPE IS : ", type);
  }, [category, type])

  return (
    <>
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 mx-10 my-7 font-roboto">Host a Property</h1>
        <form>
          <div className="w-4/5 m-auto my-11 bg-slate-500 rounded-2xl p-3">
            <h2 className="font-roboto text-2xl text-white">Name of the Place</h2>
            <hr className="text-black dark:text-gray-400 my-2" />
            <div className="w-4/5 m-auto p-2">
              <h2 className="font-roboto text-2xl text-black my-3">Select your category</h2>
              <ul className="flex flex-wrap justify-center items-center gap-5">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className={`w-[160px] h-[150px] relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden shadow-lg hover:cursor-pointer hover:border-white hover:border-4 ${category === item.label ? 'border-4 border-white' : ''} `}
                    style={{ backgroundImage: `url(${item.image})` }}
                    onClick={() => handleCategoryClick(item.label)}
                  >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <span className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-4/5 m-auto p-2">
              <h2 className="font-roboto text-2xl text-black my-3">Select the type of your Property</h2>
              <ul className="flex flex-row justify-center items-center gap-5">
                {types.map((typeItem) => (
                  <div
                    key={typeItem.name}
                    className={`w-[300px] h-[100px] flex flex-row items-center justify-center relative bg-cover bg-center bg-no-repeat rounded-lg overflow-visible shadow-2xl hover:cursor-pointer hover:bg-slate-600 ${type === typeItem.name ? 'bg-slate-600' : ''
                      }`}
                    onClick={() => handleTypeClick(typeItem.name)} 
                  >
                   
                    <IoInformationCircle
                      className="absolute top-2 right-2 text-white text-2xl cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation(); 
                        toggleDropdown(typeItem.name);
                      }}
                    />
                    {isDropdownOpen === typeItem.name && (
                      <div
                        className="absolute -top-[120%] right-0 z-20 w-56 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="menu-button"
                        tabIndex="-1"
                      >
                        <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-slate-300">
                          {typeItem.description}
                        </div>
                      </div>
                    )}

                    <div className="relative z-10 gap-2 flex flex-row items-center">
                      <typeItem.icon className="text-white text-3xl mb-2" />
                      <div className="text-white text-lg font-bold">{typeItem.name}</div>
                    </div>
                  </div>
                ))}
              </ul>
            </div>
            <div className="w-4/5 m-auto p-2">
  <h2 className="font-roboto text-2xl text-black my-3">Where is the Property Located?</h2>
  
  <form className="space-y-4">
    <div className="flex flex-col">
      <label htmlFor="address" className="font-roboto text-lg text-black mb-1">Address</label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="123 Main St"
        className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        required
      />
    </div>
    
    <div className="flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <label htmlFor="city" className="font-roboto text-lg text-black mb-1 mx-1">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="New York"
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      
      <div className="flex-1">
        <label htmlFor="state" className="font-roboto text-lg text-black mb-1 mx-1">State</label>
        <input
          type="text"
          id="state"
          name="state"
          placeholder="NY"
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      
      <div className="flex-1">
        <label htmlFor="zip" className="font-roboto text-lg text-black mb-1 mx-1">ZIP Code</label>
        <input
          type="text"
          id="zip"
          name="zip"
          placeholder="10001"
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
    </div>
    
    <div>
      <label htmlFor="map" className="font-roboto text-lg text-black mb-1">Location on Map (optional)</label>
      <div className="border border-gray-300 rounded-md p-2 bg-gray-100">
        <p className="text-gray-600">Embed a map here or provide a location picker.</p>
      </div>
    </div>
  </form>
</div>

          </div>
        </form>
      </div>
    </>
  );
};

export default Host;
