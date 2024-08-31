import React, { useEffect, useState } from 'react';
import items from '../Data/categories';
import types from "../Data/types";
import facilities from '../Data/facilities.jsx';
import { IoInformationCircle } from "react-icons/io5";
import { FaPlus, FaMinus } from 'react-icons/fa';
import { MdAddToPhotos } from "react-icons/md"

const Host = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [guests, setGuests] = useState(1);
  const [bedrooms, setBedrooms] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [selectedFacilities, setSelectedFacilities] = useState([]);

  const handleFacilityToggle = (facilityName) => {
    setSelectedFacilities((prevSelected) =>
      prevSelected.includes(facilityName)
        ? prevSelected.filter((name) => name !== facilityName)
        : [...prevSelected, facilityName]
    );
  };

  const increaseCount = (setter) => setter((prev) => prev + 1);
  const decreaseCount = (setter) => setter((prev) => (prev > 0 ? prev - 1 : 0));

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
    console.log("SELECYED FACILITIES ARE: ", selectedFacilities)
  }, [category, type, selectedFacilities])

  return (
    <>
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 mx-10 my-7 font-roboto">Host a Property</h1>
        <form>
          <div className="w-4/5 m-auto my-9 bg-slate-500 rounded-2xl p-3">
            <h2 className="font-roboto text-2xl text-white">Basic Details of the Place</h2>
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

              <div className="flex flex-col">
                <label htmlFor="address" className="font-roboto text-lg text-black mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="123 Block RZ"
                  className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 my-4">
                <div className="flex-1">
                  <label htmlFor="city" className="font-roboto text-lg text-black mb-1 mx-1">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Mumbai"
                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
                    required
                  />
                </div>

                <div className="flex-1">
                  <label htmlFor="state" className="font-roboto text-lg text-black mb-1 mx-1">State</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    placeholder="Maharashtra"
                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
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
                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
                    required
                  />
                </div>

                <div className="flex-1">
                  <label htmlFor="country" className="font-roboto text-lg text-black mb-1 mx-1">Country</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    placeholder="India"
                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="w-4/5 m-auto  bg-slate-500 rounded-2xl p-3">
              <h2 className="font-roboto text-2xl text-black my-3">Additional Details</h2>
              <div className="flex flex-wrap justify-between gap-5">
                <div className="w-48 p-3 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-center mb-2">Guests</h3>
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => decreaseCount(setGuests)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <FaMinus />
                    </button>
                    <span className="text-2xl">{guests}</span>
                    <button
                      type="button"
                      onClick={() => increaseCount(setGuests)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <div className="w-48 p-3 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-center mb-2">Bedrooms</h3>
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => decreaseCount(setBedrooms)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <FaMinus />
                    </button>
                    <span className="text-2xl">{bedrooms}</span>
                    <button
                      type="button"
                      onClick={() => increaseCount(setBedrooms)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>

                <div className="w-48 p-3 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-center mb-2">Beds</h3>
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => decreaseCount(setBeds)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <FaMinus />
                    </button>
                    <span className="text-2xl">{beds}</span>
                    <button
                      type="button"
                      onClick={() => increaseCount(setBeds)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>


                <div className="w-48 p-3 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-center mb-2">Bathrooms</h3>
                  <div className="flex justify-between items-center">
                    <button
                      type="button"
                      onClick={() => decreaseCount(setBathrooms)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <FaMinus />
                    </button>
                    <span className="text-2xl">{bathrooms}</span>
                    <button
                      type="button"
                      onClick={() => increaseCount(setBathrooms)}
                      className="p-2 bg-gray-200 rounded-full hover:bg-gray-300"
                    >
                      <FaPlus />
                    </button>
                  </div>
                </div>
              </div>
            </div>


          </div>

          <div className="w-4/5 m-auto my-9 bg-slate-500 rounded-2xl p-3">
            <h2 className="font-roboto text-2xl text-white">Additional Details of the Place</h2>
            <hr className="text-black dark:text-gray-400 my-2" />
            <div className="w-4/5 m-auto p-2">
              <h2 className="font-roboto text-2xl text-black my-3">Facilities</h2>
              <div className="w-4/5 m-auto p-2">
                <div className="flex flex-wrap gap-4">
                  {facilities.map((facility) => (
                    <div
                      key={facility.name}
                      className={`flex items-center gap-2 p-2 border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-blue-100 border-blue-400 ${selectedFacilities.includes(facility.name)
                        ? 'bg-blue-100 border-blue-400'
                        : ''
                        }`}
                      onClick={() => handleFacilityToggle(facility.name)}
                    >
                      {facility.icon}
                      <span className="text-lg text-gray-700">{facility.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-4/5 m-auto p-2">
              <h2 className="font-roboto text-2xl text-black my-3">Add photos of the property</h2>
              <div className='w-1/6 h-auto  p-11 border border-gray-300 rounded-md shadow-md flex align-middle justify-center'>
              <MdAddToPhotos className="text-4xl text-gray-700 cursor-pointer"/>
              </div>
            </div>
          </div>

        </form>
      </div>
    </>
  );
};

export default Host;
