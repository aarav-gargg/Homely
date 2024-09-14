import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
const Property = () => {

  const {propertyId} = useParams();
  const [fetchedProperty , setFetchedProperty] = useState();

  useEffect(()=>{
    const fetchProperty = async ()=>{
      const resp = await axios.get(`http://localhost:3000/api/host/${propertyId}`)
      setFetchedProperty(resp.data);
    }
    fetchProperty();
  },[propertyId])

  useEffect(()=>{
    console.log(fetchedProperty);
  },[fetchedProperty])

  return (
    <div>
      
    </div>
  )
}

export default Property
