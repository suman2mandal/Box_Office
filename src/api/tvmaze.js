import axios from 'axios';
const base = "http://api.tvmaze.com";

const apiget = async (queryString) => {
    const res = await axios.get(base+queryString)
    // console.log("here am i",res.data)
    return (res.data);
    // return "hi";
}

export const searchForShows = (query) => apiget('/search/shows?q='+query)
export const SearchForPeople = (query) => apiget('/search/people?q='+query)