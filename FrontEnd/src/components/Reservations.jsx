import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import PropertyCard from './PropertyCard';


const Reservations = () => {
    const user = useSelector((state) => state.user);
    const [properties, setProperties] = useState([]);
    
    useEffect(() => {
        const fetchTripList = async () => {
          try {
            const trips = await axios.get(`http://localhost:3000/api/user/${user?.user?._id}/reservations`);
      
            if (trips.status === 200) {
              console.log("trips", trips.data);
              const propertyArray = [];
      
              for (let i = 0; i < trips.data.length; i++) {
                const trip = trips.data[i];
                const { propertyId, startDate, endDate, hostId, totalPrice } = trip;
      
                if (propertyId) {
                  
                  propertyArray.push({
                    ...propertyId, 
                    startDate,      
                    endDate,        
                    hostId,         
                    totalPrice      
                  });
                }
              }
      
              setProperties(propertyArray);
              console.log("Properties with trip details:", propertyArray);
            }
          } catch (error) {
            console.error("Error fetching trips:", error);
          }
        };
      
        if (user?.user?._id) {
          fetchTripList();
        }
      }, [user?.user?._id]);
    

    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 mx-11 my-7 px-11 font-roboto">Your Reservations List</h1>
            <div className='px-12 pb-32 lg:px-5 flex flex-wrap justify-center gap-1'>
                {properties.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-64 bg-proper rounded-lg shadow-md p-6 text-center">
                        <h2 className="text-2xl font-bold text-gray-700 mb-2">No Reservations yet</h2>
                        <p className="text-gray-500">Host some more properties ?</p>
                    </div>
                )}

                {properties.map(({ _id, creator, photos, city, state, country, category, type, totalPrice, startDate , endDate,booking= false }) => (
                    <div className='flex flex-col'>
                    <PropertyCard
                        key={_id}
                        id={_id}
                        creator={creator}
                        photos={photos}
                        city={city}
                        state={state}
                        country={country}
                        category={category}
                        type={type}
                        price={totalPrice}
                        booking={booking}
                        startDate={startDate}
                        endDate={endDate}
                    />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reservations
