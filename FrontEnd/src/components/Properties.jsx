import React, { useEffect, useState } from 'react';
import items from "../Data/categories.js";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Properties = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [fetchedProperties, setFetchedProperties] = useState([]);
  const navigate = useNavigate();


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
        const resp = await axios.get(
          selectedCategory !== "All"
            ? `http://localhost:3000/api/host/?category=${selectedCategory}`
            : `http://localhost:3000/api/host/`
        );
        setFetchedProperties(resp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProperties();
  }, [selectedCategory]);

  useEffect(()=>{
    console.log(fetchedProperties)
  })

  return (
    <>
      <div className='px-10 py-6 md:px-5 flex justify-center flex-wrap gap-5'>
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-black cursor-pointer rounded-3xl px-2 py-2 hover:bg-slate-600`}
            onClick={() => handleCategoryClick(item.label)}
          >
            <item.icon className={`text-white text-3xl mb-2 ${item.label === selectedCategory ? 'text-amber-400' : ''}`} />
            <div className={`font-black ${item.label === selectedCategory ? 'text-white text-xl' : ''}`}>{item.label}</div>
          </div>
        ))}

      </div>

      <div className='w-10/11 p-10 flex-col m-auto justify-center'>
        {fetchedProperties.length === 0 && (
          <div className="text-center text-2xl font-semibold text-gray-700 py-10 bg-gray-100 rounded-xl shadow-md">
            NO PROPERTIES FOR THIS CATEGORY
          </div>
        )}

        {fetchedProperties.map((prop, index) => (
          <div key={index} className="bg-slate-400 rounded-3xl p-5 shadow-lg my-3">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-2xl text-gray-800">{prop.title}</h2>
              <div className="font-bold text-xl text-amber-400">Rs. {prop.price}</div>
            </div>

            <div className="overflow-x-scroll flex gap-3 my-3">
              {prop.photos.map((photo, idx) => (
                <img
                  key={idx}
                  src={`http://localhost:3000/${photo?.replace("public\\", "")}`}
                  alt="property"
                  className="w-48 h-32 rounded-lg object-cover"
                />
                
              ))}

              
            </div>

            <div className="text-slate-100">
              <p><strong className='text-black'>Location:</strong> {` ${prop.address} ,${prop.city}, ${prop.state}, ${prop.country}`}</p>
              <p><strong className='text-black'>Host:</strong> {prop.creator.name}</p>
              <p><strong className='text-black'>Category:</strong> {prop.category}</p>
              <p><strong className='text-black'>Type:</strong> {prop.type}</p>
              {/* <p><strong className='text-black'>Bedrooms:</strong> {prop.bedrooms}</p>
              <strong className='text-black'>Bathrooms:</strong> {prop.bathrooms}
              <p><strong className='text-black'>Guests:</strong> {prop.guests}</p>
              <p><strong className='text-black'>Facilities:</strong> {prop.facilities.join(', ')}</p>
              <p className="mt-2 text-md text-gray-100"><strong className='text-black'>Description:</strong> {prop.description}</p> */}
            </div>

            <div className="flex justify-center items-center">
              <button className='border-lg bg-white p-2 rounded-xl w-1/6 hover:bg-slate-200' onClick={() =>{
                navigate(`/listings/${prop._id}`)
              }}>View</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Properties;




