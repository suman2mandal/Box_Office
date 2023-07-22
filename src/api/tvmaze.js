import axios from 'axios';

const apiget = async (queryString) => {
    const base = "http://api.tvmaze.com/";
    const res = await axios.get(base+queryString)
    // console.log("here am i",res.data)
    return (res.data);
    // return "hi";
}

export const SearchShows = (query) => apiget('/search/shows?q='+query)
export const SearchActors = (query) => apiget('/search/people?q='+query)