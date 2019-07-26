import React, { useEffect, useState } from 'react';
import axios from "axios"

export default function EpisodeList() {
  // TODO: Add useState to track data from useEffect
  const [episodeData, setData] = useState();
  useEffect(() => {
    console.log("first render")
    axios.get('https://rickandmortyapi.com/api/episode/')
    .then(res => {
      console.log(res.data);
      //setData(res.data.results);
    });
    }, [])
    if(!episodeData){
     return <h1>Loading...</h1>
    }else{
      return (
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
   

   <section className='episode-list grid-view'>

      {episodeData.map((episode) =>  episode={episode})};
     
    </section>
      
      );
    };
};
