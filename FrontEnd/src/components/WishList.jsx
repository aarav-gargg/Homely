import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import PropertyCard from './PropertyCard';

const WishList = () => {
  const user = useSelector((state) => state?.user);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchWishList = async () => {
      try {
        if (user?.user?._id) {
          const wishList = await axios.get(`http://localhost:3000/api/user/${user?.user?._id}/wishList`);
          if (wishList.status === 200) {
            setProperties(wishList.data); 
          }
        }
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishList();
  }, [user?.user?._id]); 

  return (
    <>
      <div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 mx-11 my-7 px-11 font-roboto">
            Your WishList
          </h1>
        </div>
        <div className="px-12 pb-32 lg:px-5 flex flex-wrap justify-center gap-1">
          {properties.length === 0 && (
            <div className="flex flex-col items-center justify-center h-64 bg-proper rounded-lg shadow-md p-6 text-center">
              <h2 className="text-2xl font-bold text-gray-700 mb-2">Nothing Here</h2>
              <p className="text-gray-500">Looks like you aren't exploring, start exploring now!</p>
            </div>
          )}
          {properties.length > 0 &&
            properties.map(({ _id, creator, photos, city, state, country, category, price, type, booking = false }) => (
              <div className="flex flex-col" key={_id}>
                <PropertyCard
                  id={_id}
                  creator={creator}
                  photos={photos}
                  city={city}
                  state={state}
                  country={country}
                  category={category}
                  type={type}
                  price={price}
                  booking={booking}
                />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default WishList;
