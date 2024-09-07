import React, { useEffect, useState } from 'react';
import items from '../Data/categories';
import { useSelector } from 'react-redux';
import types from "../Data/types";
import facilities from '../Data/facilities.jsx';
import { IoInformationCircle } from "react-icons/io5";
import { FaPlus, FaMinus, FaImages, FaTrashAlt } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import axios from "axios";

const Host = () => {
  const user = useSelector((state) => state.user)
  const [isDropdownOpen, setIsDropdownOpen] = useState(null);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [guests, setGuests] = useState(1);
  const [bedrooms, setBedrooms] = useState(1);
  const [beds, setBeds] = useState(1);
  const [bathrooms, setBathrooms] = useState(1);
  const [selectedFacilities, setSelectedFacilities] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [propaddress, setPropAddress] = useState({
    address: "",
    city: "",
    state: "",
    zip: 0,
    country: "",
  });

  const handleAddress = (e) => {
    const { name, value } = e.target;

    setPropAddress((prev) => (
      {
        ...prev, [name]: value,
      }
    ))
  }

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

  const handleUploadPhotos = (e) => {
    const newPhotos = e.target.files;

    setPhotos((prev) => [...prev, ...newPhotos])
  }

  const handleDragPhoto = (result) => {
    if (!result.destination) return;

    const items = Array.from(photos)

    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setPhotos(items);
  }

  const handleDeletePhoto = (index) => {
    const updatedPhotos = [...photos];
    updatedPhotos.splice(index, 1);
    setPhotos(updatedPhotos);
  };

  const [placeDescription, setPlaceDescription] = useState({
    title: "",
    description: "",
    price: 0,
  })

  const handleDescription = (e) => {
    const { name, value } = e.target;
    setPlaceDescription((prev) => (
      {
        ...prev, [name]: value,
      }
    ))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const hostData = new FormData();
      hostData.append("creator", user.user._id);
      hostData.append("category", category);
      hostData.append("type", type);
      hostData.append("address", propaddress.address);
      hostData.append("city", propaddress.city);
      hostData.append("state", propaddress.state);
      hostData.append("country", propaddress.country);
      hostData.append("zip", propaddress.zip);
      hostData.append("bedrooms", bedrooms);
      hostData.append("bathrooms", bathrooms);
      hostData.append("price", placeDescription.price);
      hostData.append("beds", beds);
      hostData.append("guests", guests);
      hostData.append("facilities", selectedFacilities);
      hostData.append("description", placeDescription.description);
      hostData.append("title", placeDescription.title);
      photos.forEach((photo) => {
        hostData.append("photos", photo);
      });

      const response = await axios.post("http://localhost:3000/api/host/create", hostData);
      if (response.status == 201) {
        alert("Property Has Been Hosted Successfully");
      }
      else {
        alert("Failed to Host Property");
      }

    } catch (error) {
      console.log(error);
      alert(error);
    }
  }


  useEffect(() => {
    console.log("CATEGORY IS : ", category);
    console.log("TYPE IS : ", type);
    console.log("SELECYED FACILITIES ARE: ", selectedFacilities)
    console.log("ADRRESS DETAILS ARE: ", propaddress)
    console.log("THE PHOTOS OF THE PLACE ARE: ", photos)
    console.log("THE  DESCRIPTION OF THE PLACE IS: ", placeDescription)
  }, [category, type, selectedFacilities, propaddress, placeDescription, photos])

  return (
    <>
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 mx-11 my-7 px-11 font-roboto">Host a Property</h1>
        <form onSubmit={handleSubmit}>
          <div className="w-4/5 m-auto my-9 bg-slate-500 rounded-2xl p-3">
            <h2 className="font-roboto text-2xl text-white">Basic Details of the Place</h2>
            <hr className="text-black dark:text-gray-400 my-2" />
            {/* CATEGORY*/}
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
            {/* TYPE */}
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
            {/* ADDRESS*/}
            <div className="w-4/5 m-auto p-2">
              <h2 className="font-roboto text-2xl text-black my-3">Where is the Property Located?</h2>

              <div className="flex flex-col">
                <label htmlFor="address" className="font-roboto text-lg text-black mb-1">Address</label>
                <input
                  type="text"
                  id="address"
                  onChange={handleAddress}
                  value={propaddress.address}
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
                    onChange={handleAddress}
                    value={propaddress.city}
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
                    onChange={handleAddress}
                    value={propaddress.state}
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
                    onChange={handleAddress}
                    value={propaddress.zip}
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
                    onChange={handleAddress}
                    value={propaddress.country}
                    placeholder="India"
                    className="p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
                    required
                  />
                </div>
              </div>
            </div>
            {/* GUESTS BATHROOMS BEDROOMS*/}
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
          {/* ADDITIONAL DETAILS */}
          <div className="w-4/5 m-auto my-9 bg-slate-500 rounded-2xl p-3">
            <h2 className="font-roboto text-2xl text-white">Additional Details of the Place</h2>
            <hr className="text-black dark:text-gray-400 my-2" />
            {/* FACILITIES*/}
            <div className="w-4/5 m-auto p-2">
              <h2 className="font-roboto text-2xl text-black my-3">Facilities</h2>
              <div className="w-4/5 m-auto p-2">
                <div className="flex flex-wrap gap-4">
                  {facilities.map((facility) => (
                    <div
                      key={facility.name}
                      className={`flex items-center text-black gap-2 p-2 border border-gray-300 rounded-md shadow-sm cursor-pointer hover:bg-blue-100 ${selectedFacilities.includes(facility.name)
                        ? 'bg-blue-100 border-blue-400'
                        : ''
                        }`}
                      onClick={() => handleFacilityToggle(facility.name)}
                    >
                      {facility.icon}
                      <span className="text-lg text-black">{facility.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* PHOTOS */}
            <div className="w-4/5 m-auto p-2">
              <h2 className="font-roboto text-2xl text-black my-3">Add photos of the property</h2>
              <DragDropContext onDragEnd={handleDragPhoto}>
                <Droppable droppableId='photos' direction='horizontal'>
                  {(provided) => (
                    <div
                      className='flex flex-wrap justify-center gap-4 border-2 rounded-3xl'
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {photos.length < 1 && (
                        <>
                          <input
                            id="image"
                            type="file"
                            className='hidden'
                            accept='image/*'
                            required
                            onChange={handleUploadPhotos}
                          />
                          <label
                            htmlFor="image"
                            className='flex flex-col justify-center items-center cursor-pointer border-3 rounded-md border-gray-900 py-6'
                          >
                            <div className='text-6xl'>
                              <FaImages />
                            </div>
                            <p className='font-semibold text-center'>Upload from your device</p>
                          </label>
                        </>
                      )}

                      {photos.length >= 1 && (
                        <>
                          {photos.map((photo, index) => (
                            <Draggable key={index} draggableId={index.toString()} index={index}>
                              {(provided) => (
                                <div
                                  className='relative w-56 h-64 rounded-md overflow-hidden py-5'
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  ref={provided.innerRef}
                                >
                                  <img
                                    src={URL.createObjectURL(photo)}
                                    alt={`Uploaded ${index}`}
                                    className='object-cover w-full h-full'
                                  />
                                  <button
                                    className='absolute top-6 right-2 text-white bg-black hover:bg-red-600 p-2 rounded-full'
                                    onClick={() => handleDeletePhoto(index)}
                                  >
                                    <FaTrashAlt />
                                  </button>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          <input
                            id="image"
                            required
                            type="file"
                            className='hidden'
                            accept='image/*'
                            onChange={handleUploadPhotos}
                          />
                          <label
                            htmlFor="image"
                            className='flex flex-col justify-center items-center cursor-pointer border-3 rounded-md border-gray-900 py-6'
                          >
                            <div className='text-6xl'>
                              <FaImages />
                            </div>
                            <p className='font-semibold text-center'>Upload from your device</p>
                          </label>
                        </>
                      )}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
            {/* DESCRIPTION */}
            <div className='w-4/5 m-auto p-4 '>
              <h2 className="font-roboto text-3xl text-gray-800 my-4">Description of the Place</h2>
              <div className="mb-4">
                <label htmlFor="title" className="block font-roboto text-lg  mb-2">Name</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={placeDescription.title}
                  onChange={handleDescription}
                  placeholder="Name of the Place"
                  className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
                  required
                />
              </div>

              <div className="mb-4">
                <p className="font-roboto text-lg  mb-2">Describe your Place</p>
                <textarea
                  name="description"
                  id="description"
                  value={placeDescription.description}
                  onChange={handleDescription}
                  required
                  placeholder="Describe your Place"
                  className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full h-32 resize-none"
                />
              </div>

              <div className="mb-4">
                <p className="font-roboto text-lg  mb-2">Price</p>
                <div className="flex items-center">
                  <span className=" text-xl mr-2">Rs.</span>
                  <input
                    type="number"
                    placeholder='10000'
                    name='price'
                    value={placeDescription.price}
                    onChange={handleDescription}
                    required
                    className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 w-full"
                  />
                </div>
              </div>
            </div>
            {/* SUBMIT */}
            <div className='w-4/5 m-auto p-4 flex justify-center'>
              <button className='bg-yellow-400 p-2 px-5 w-56 rounded-lg border-black border-2  hover:border-white hover:bg-yellow-600'>HOST</button>
            </div>
          </div>

        </form>
      </div>
    </>
  );
};

export default Host;
