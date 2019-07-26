import React, { useEffect, useState } from 'react';
import axios from "axios"
import CharacterCard from './CharacterCard'
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [persondata, setData] = useState([]);
  useEffect(() => {
    console.log("first render")
    axios.get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      console.log(res.data);
      setData(res.data.results);
    });
    }, [])
    console.log(persondata) 
    if(!persondata){  return <h1>Loading...</h1>
    }else{
      return (
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
   
   
   <section className='character-list grid-view'>

    {persondata && persondata.map((person) => <CharacterCard person={person}/>)};
     
    </section>
      
      );
    };
};
