import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useSelector } from 'react-redux';
import PropertyCard from './PropertyCard';

const TripList = () => {
    // Get user from the Redux store
    const user = useSelector((state) => state.user);

    const tripList = user?.user?.tripList || [];  // Safe access in case user or tripList is not defined

    const [properties, setProperties] = useState([]);

    const fetchProperty = async (propertyId) => {
        try {
            const property = await axios.get(`http://localhost:3000/api/user/property/${propertyId}`);
            if (property.status === 200) {
                return property.data;
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const fetchAllProperties = async () => {
            const propertyArray = [];
            for (let i = 0; i < tripList.length; i++) {
                const property = await fetchProperty(tripList[i].propertyId);
                if (property) {
                    const propertyWithTripData = {
                        ...property,
                        ...tripList[i],
                    };
                    propertyArray.push(propertyWithTripData);
                }
            }
            setProperties(propertyArray);
        };

        if (tripList.length > 0) {
            fetchAllProperties();
        }
    }, [tripList]);

    console.log(properties);

    return (
        <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 mx-11 my-7 px-11 font-roboto">Your TripList</h1>
            <div className='px-12 pb-32 lg:px-5 flex flex-wrap justify-center gap-1'>
                {properties.length === 0 && (
                    <div className="flex flex-col items-center justify-center h-64 bg-proper rounded-lg shadow-md p-6 text-center">
                        <h2 className="text-2xl font-bold text-gray-700 mb-2">No Trips Planned</h2>
                        <p className="text-gray-500">Start planning your next adventure!</p>
                    </div>
                )}

                {properties.map(({ _id, creator, photos, city, state, country, category, type, totalPrice, startDate , endDate,booking= false }) => (
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
                ))}
            </div>
        </div>
    );
};

export default TripList;
