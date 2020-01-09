import React, { useEffect, useState } from 'react';
import axios from "axios"
import LocationCard from './LocationCard'
export default function LocationList() {
  // TODO: Add useState to track data from useEffect
  const [locationdata, setData] = useState([]);
  useEffect(() => {
    console.log("first render")
    axios.get('https://rickandmortyapi.com/api/location/')
    .then(res => {
      console.log(res.data);
      setData(res.data.results);
    });
    }, [])
    console.log(locationdata) 
    if(!locationdata){  return <h1>Loading...</h1>
    }else{
      return (
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
   
   
   <section className='location-list grid-view'>

    {locationdata && locationdata.map((location) => <LocationCard location={location}/>)};
     
    </section>
      
      );
    };
};