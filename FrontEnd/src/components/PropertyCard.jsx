import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import axios from 'axios';

const PropertyCard = ({
  id,
  creator,
  photos,
  city,
  state,
  country,
  category,
  type,
  price,
  booking,
  startDate,
  endDate,
}) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(false);
  const user = useSelector((state) => state?.user);
  const userId = user?.user?._id;

  const [properties, setProperties] = useState([]);


  useEffect(() => {
    const fetchWishList = async () => {
      try {
        if (user?.user?._id) {
          const wishList = await axios.get(`http://localhost:3000/api/user/${user?.user?._id}/wishList`);
          if (wishList.status === 200) {
            setProperties(wishList.data); 
            // Check if current property is in the wishlist
            const isInWishlist = wishList.data.some((property) => property._id === id);
            setIsClicked(isInWishlist);
          }
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishList();
  }, [user?.user?._id, id]);

  const showPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const showNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const handleWishList = async () => {
    try {
      if (!isClicked) {
        if (user.user === null) {
          alert("Please login to add to wishlist");
          navigate('/login');
        } else {
          const resp = await axios.get(`http://localhost:3000/api/user/wishList/${userId}/${id}`);
          if (resp.status === 200) {
            alert("Added to WISHLIST");
            navigate(`/${userId}/wishList`);
          }
        }
      } else {
        const resp = await axios.patch(`http://localhost:3000/api/user/wishList/delete/${userId}/${id}`);
        if (resp.status === 200) {
          alert("Removed from WISHLIST");
          location.reload();
          setIsClicked(!isClicked);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='relative cursor-pointer p-3 rounded-lg hover:shadow-lg bg-proper mx-2'
      onClick={() => {
        navigate(`/properties/${id}`);
      }}>
      <div className='w-72 overflow-hidden rounded-lg mb-2.5 '>
        <div className='flex w-full items-center transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {photos.length === 0 && <div className='w-full h-full flex justify-center items-center my-11 py-11'>
            <AiOutlineLoading3Quarters className='animate-spin text-4xl spin-animation my-11' />
          </div>}
          {photos.length > 0 && photos?.map((photo, index) => (
            <div
              className='relative flex-none w-full h-64 flex items-center justify-center bg-gray-200'
              key={index}
            >
              <img
                src={`http://localhost:3000/${photo?.replace('public', '')}`}
                alt=""
                className='w-full h-full object-cover'
              />
              <div
                className={`absolute p-2 rounded-full border-none cursor-pointer flex bg-white/80 z-50 top-1 right-1.5 hover:bg-white ${isClicked ? 'text-red-500' : 'text-gray-500'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  handleWishList();
                }}>
                {isClicked ? <FaHeart /> : <FaRegHeart />}
              </div>

              <div className='absolute top-1/2 transform-translate-y-1/2 p-2 rounded-full border-none cursor-pointer flex items-center justify-center bg-white/80 z-50 left-1.5 hover:bg-white'
                onClick={(e) => {
                  e.stopPropagation();
                  showPrevSlide();
                }}>
                <FaArrowLeft />
              </div>

              <div className='absolute top-1/2 transform-translate-y-1/2 p-2 rounded-full border-none cursor-pointer flex items-center justify-center bg-white/80 z-50 right-1.5 hover:bg-white'
                onClick={(e) => {
                  e.stopPropagation();
                  showNextSlide();
                }}>
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
      {photos.length > 0 && <div>
        <h3 className='items-center justify-center font-poppins text-sm font-bold'>{city}, {state}, {country}</h3>
        <p className='font-semibold text-sm'>{category}</p>
        <p className='font-semibold text-sm'>{type}</p>
        <span className='font-semibold text-md'>₹{price}</span>
        {startDate && endDate && <div><span className='font-semibold text-sm text-white'>
          From {new Date(startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          <br />
          To {new Date(endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </span></div>}
      </div>}
    </div>
  );
}

export default PropertyCard;
