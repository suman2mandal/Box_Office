import React from 'react'
import { useState } from 'react';
// import axios from 'axios';z
import { Link } from 'react-router-dom';
import {SearchShows,SearchActors} from '../api/tvmaze.js';
import ActorsGrid from '../components/ActorsGrid/ActorsGrid';
import ShowGrid from '../components/ShowsGrid/ShowGrid';

function Home() {
  const [searchTerm, setSearchTerm] = useState([]);
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");
  
  const handleSubmit = async (params) => {
    params.preventDefault();
    try{
      let res;
      if(searchOption === "shows"){
        res = await SearchShows(searchTerm);
      }else{
        res = await SearchActors(searchTerm);
      }
      console.log(res);
      setApiData(res);
      
    }catch(err){
      setError(err);
      console.log("error occured because:"+err);
      return error;
    }
  }

      // "name": "Val Lauren",
    // "country": {
    //     "name": "United States",
    //     "code": "US",
    //     "timezone": "America/New_York"
    // },
    // "birthday": null,
    // "deathday": null,
    // "gender": "Male",
    // "image": {
  const displya = () => {
    let data;

    try{
      if(searchOption === "shows"){
        data=ShowGrid(apiData)
      }else{
        data=ActorsGrid(apiData)
      }
    }catch(err){
      console.log(err);
      return false
    }
  return data;
}

  const handleText = (params) => {
    setSearchTerm(params.target.value);
  }
  return (
    <>
      <Link to="/Stars">Stars</Link>
        <form action="" onSubmit={handleSubmit}>
          <input type="text" onChange={handleText} placeholder="Search here " />
          <input type="radio" name="search_option" value="actors" onChange={(e) => setSearchOption(e.target.value)} />Actors
          <input type="radio" name="search_option" value="shows" onChange={(e) => setSearchOption(e.target.value)} />Shows
          <button type="submit">Search</button>
        </form>
        {displya()}

    </>
  )
}

export default Home
