import React from 'react'
import { useState } from 'react';
// import axios from 'axios';z
import { Link } from 'react-router-dom';
import {SearchShows,SearchActors} from '../api/tvmaze.js';

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
    data = apiData.map((item) => {
    console.log("searchOption is:"+searchOption);

    try{
    if(searchOption === "shows"){
      return (
          <div key={item.show.id}>
            <h1>{item.show.name}</h1>
            <img src={item.show.image.medium} alt="" />
            <div dangerouslySetInnerHTML={{ __html: item.show.summary }}></div>
          </div> 
          )
      }else{
        return (
          <div key={item.person.id}>
            <h3>{item.person.name}</h3>
            <div>from: {item.person.birthday}</div>
            <div>to: {item.person.deathday}</div>
            <div>gender: {item.person.gender}</div>
          </div> 
        );
      }
    }catch(err){
      console.log(err);
      return false
    }
  })
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
