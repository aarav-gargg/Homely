import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import facilities from '../Data/facilities';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { BiSolidUserCheck } from "react-icons/bi";
import { DateRange } from 'react-date-range';

const Property = () => {
  const { propertyId } = useParams();
  const [fetchedProperty, setFetchedProperty] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const resp = await axios.get(`http://localhost:3000/api/host/${propertyId}`);
        setFetchedProperty(resp.data);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };
    fetchProperty();
  }, [propertyId]);

  useEffect(() => {
    console.log(fetchedProperty)
  }, [fetchedProperty])

  const showNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide >= fetchedProperty.photos.length - 2 ? 0 : prevSlide + 2
    );
  };

  const showPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide <= 0 ? fetchedProperty.photos.length - 2 : prevSlide - 2
    );
  };

  const openPopup = (image) => {
    setPopupImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupImage(null);
  };

  const [dateRange, setDateRange] = useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: "selection"
  }]);

  const handleDateSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };

  const handleSubmit = ()=>{

  }
  
  const start = new Date(dateRange[0].startDate);
  const end = new Date(dateRange[0].endDate);
  let dayCount = Math.round(end - start) / (1000 * 60 * 60 * 24);

  if (!fetchedProperty) {
    return (
      <div className='w-full h-full flex justify-center items-center my-11 py-11'>
        <AiOutlineLoading3Quarters className='animate-spin text-4xl spin-animation my-11' />
      </div>
    );
  }

  return (
    <>
      <div className='w-4/5 mx-11 px-11 my-5 flex items-start justify-start text-left relative'>
        <h1 className='font-yusei text-5xl font-bold text-gray-900 mb-2'>
          {fetchedProperty.title}
        </h1>

      </div>
      <div className="w-4/5 m-auto h-2/3  relative flex items-center justify-center my-5 ">
        <div className="flex gap-4 overflow-hidden w-full rounded-3xl">
          {[0, 1].map((offset) => {
            const index = (currentSlide + offset) % fetchedProperty.photos.length;
            return (
              <div className="flex-none w-1/2 h-96 cursor-pointer object-cover rounded-3xl" key={index} onClick={() => openPopup(fetchedProperty.photos[index])}>
                <img
                  src={`http://localhost:3000/${fetchedProperty.photos[index]?.replace('public', '')}`}
                  alt=""
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            );
          })}
        </div>

        <div
          className="absolute top-1/2 transform -translate-y-1/2 p-2 rounded-full border-none cursor-pointer flex items-center justify-center bg-white/80 z-50 left-1.5 hover:bg-white"
          onClick={(e) => {
            e.stopPropagation();
            showPrevSlide();
          }}
        >
          <FaArrowLeft />
        </div>


        <div
          className="absolute top-1/2 transform -translate-y-1/2 p-2 rounded-full border-none cursor-pointer flex items-center justify-center bg-white/80 z-50 right-1.5 hover:bg-white"
          onClick={(e) => {
            e.stopPropagation();
            showNextSlide();
          }}
        >
          <FaArrowRight />
        </div>
      </div>
      {isPopupOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/70 z-50">
          <div className="relative  bg-white p-4">
            <img
              src={`http://localhost:3000/${popupImage?.replace('public', '')}`}
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white bg-black rounded-full p-2"
              onClick={closePopup}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
      <div className='w-4/5 m-auto relative hover:shadow-2xl p-2 rounded-full my-2'>

        <div className='mx-8 text-lg font-semibold font-roboto '><span className='font-bold text-2xl text-white'>{fetchedProperty.type}</span> in {fetchedProperty.city} , {fetchedProperty.state} - {fetchedProperty.zip}</div>
        <div className='mx-8 text-md font-semibold font-roboto px-5'>
          {fetchedProperty.bedrooms} {fetchedProperty.bedrooms > 1 ? 'bedrooms' : 'bedroom'}
          <span> with </span>
          {fetchedProperty.beds} {fetchedProperty.beds > 1 ? 'beds' : 'bed'}
          <span className='mx-2 text-gray-900 text-lg'>•</span>
          {fetchedProperty.bathrooms} {fetchedProperty.bathrooms > 1 ? 'bathrooms' : 'bathroom'}
        </div>

      </div>
      <hr class="w-11/12 h-1 mx-auto my-2 bg-proper border-0 rounded " />
      <div className='w-4/5 p-2 my-3 px-5 flex justify-center m-auto'>
        <div className='w-5/6 mx-11 my-2 font-extrabold font-poppins  border-t-4 border-b-4 p-4 flex justify-center'>
          <BiSolidUserCheck className='text-5xl mx-2 text-white' />
          Hosted By : {fetchedProperty.creator.name}
          <br />
          Email : {fetchedProperty.creator.email}
        </div>
      </div>
      <div className='flex flex-row'>
        <div className='w-7/12  my-5 mx-11 px-11 flex flex-col'>
          <h2 className='text-2xl font-semibold font-yusei my-2'>About The Place</h2>
          <div className='font-yusei text-lg text-white'>
            {fetchedProperty.description}
          </div>
        </div>
        <div className='w-5/12  my-5 mx-11 flex flex-col' >
          <h2 className='text-2xl font-semibold font-yusei my-2'>Facilities Provided</h2>
          <div className='grid grid-cols-2 gap-x-3 my-7'>
            {fetchedProperty.facilities[0].split(",").map((item, index) => (
              <div className='flex items-center gap-5 text-lg font-semibold mb-5' key={index}>
                <div className='flex flex-row justify-center items-center gap-3'>
                  {facilities.find((facility) => facility.name === item).icon}
                  {item}
                </div>
              </div>
            ))
            }
          </div>

        </div>
      </div>
      <div className="flex flex-col md:flex-row  rounded-lg shadow-md p-4">
       
        <div className="w-full md:w-5/12 my-5 mx-4 md:mx-11 flex flex-col">
          <h2 className="text-2xl font-semibold font-yusei my-2">Complete Address</h2>
          <div className="w-full md:w-5/6 mx-4 md:mx-0 my-2 p-4 border-t-4 border-b-4 rounded-md shadow-sm font-bold font-poppins ">
            {fetchedProperty.address} {fetchedProperty.city}, {fetchedProperty.state}-{fetchedProperty.zip}, {fetchedProperty.country}
          </div>

          {/* Trip Details */}
          <div className="mx-auto my-4">
            <h2 className="text-2xl font-semibold font-yusei my-2">Trip Details</h2>
            <h2 className="mb-2.5 text-lg font-semibold">
              ₹{fetchedProperty.price} X {dayCount > 1 ? `${dayCount} nights` : `${dayCount=1} night`}
            </h2>
            <h2 className="mb-2.5 text-lg font-semibold">
              Total price: ₹{fetchedProperty.price * dayCount}
            </h2>
            <h3 className="text-md mb-2.5">
              Start Date: <span className='text-white font-semibold'>{dateRange[0].startDate.toDateString()}</span>
            </h3>
            <h3 className="text-md mb-2.5">
              End Date: <span className='text-white font-semibold'>{dateRange[0].endDate.toDateString()}</span>
            </h3>
            <button className="w-full mt-7 sm:max-w-[300px] py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={handleBooking}
            type='submit'
            >
              Book
            </button>
          </div>
        </div>

        {/* Date Range Picker Section */}
        <div className="w-full md:w-7/12 my-5 mx-11 md:mx-11 px-4 md:px-11 flex flex-col rounded-lg shadow-sm">
          <div className="justify-center items-center  font-yusei mx-11  md:mx-11 px-11 md:px-0">
            <h2 className="text-2xl font-semibold font-yusei my-2">How long do you want to stay</h2>
            <DateRange ranges={dateRange} onChange={handleDateSelect} />
          </div>
        </div>
      </div>


    </>
  );
};

export default Property;
