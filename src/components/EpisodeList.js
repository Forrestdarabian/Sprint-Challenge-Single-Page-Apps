import React, { useEffect, useState } from 'react';
import axios from "axios"
import EpisodeCard from './EpisodeCard'
export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodedata, setData] = useState([]);
  useEffect(() => {
    console.log("first render")
    axios.get('https://rickandmortyapi.com/api/episode/')
    .then(res => {
      console.log(res.data);
      setData(res.data.results);
    });
    }, [])
    console.log(episodedata) 
    if(!episodedata){  return <h1>Loading...</h1>
    }else{
      return (
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
   
   
   <section className='episode-list grid-view'>

    {episodedata && episodedata.map((episode) => <EpisodeCard episode={episode}/>)};
     
    </section>
      
      );
    };
};
