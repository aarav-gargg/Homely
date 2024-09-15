import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaArrowLeft, FaArrowRight, FaTimes } from 'react-icons/fa';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

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

  useEffect(()=>{
    console.log(fetchedProperty)
  },[fetchedProperty])

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

  if (!fetchedProperty) {
    return (
      <div className='w-full h-full flex justify-center items-center my-11 py-11'>
        <AiOutlineLoading3Quarters className='animate-spin text-4xl spin-animation my-11' />
      </div>
    );
  }

  return (
    <>
   <div className='w-80 mx-11 px-11 my-5 flex items-start justify-start text-left relative'>
  <h1 className='font-yusei text-5xl font-bold text-gray-900 mb-2'>
    {fetchedProperty.title}
  </h1>

    </div>
      <div className="w-4/5 m-auto h-2/3  relative flex items-center justify-center my-5 ">
        <div className="flex gap-4 overflow-hidden w-full">
          {[0, 1].map((offset) => {
            const index = (currentSlide + offset) % fetchedProperty.photos.length;
            return (
              <div className="flex-none w-1/2 h-96 cursor-pointer object-cover" key={index} onClick={() => openPopup(fetchedProperty.photos[index])}>
                <img
                  src={`http://localhost:3000/${fetchedProperty.photos[index]?.replace('public', '')}`}
                  alt=""
                  className="w-full h-full object-cover"
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
    </>
  );
};

export default Property;
