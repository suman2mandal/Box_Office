import {React} from "react";
import {useState} from "react";
import {SearchForPeople, searchForShows} from "./../api/tvmaze";
import ActorsGrid from "../components/ActorsGrid/ActorsGrid";
import ShowGrid from "../components/ShowsGrid/ShowGrid";
import {Link} from "react-router-dom";


const Home = ()=>{
  const [searchStr, setSearchStr] = useState("");
  const [apiData,setApiData] = useState([]);
  const [apiDataError,setApiDataError] = useState(null);
  const [searchOption,setSearchOption] = useState("shows");

  const onSearchInputChange = (ev) =>{
    setSearchStr(ev.target.value);
  };

  const onSearch = async (ev)=>{
    ev.preventDefault();

    try{
      setApiDataError(null);

      if(searchOption==='shows'){
        const result = await searchForShows(searchStr);
        setApiData(result);
      }else{
        const result = await SearchForPeople(searchStr);
        setApiData(result);
      }

    }catch(error){
      setApiDataError(error);
    }
  };

  const onRadioChange=(ev)=>{
    setSearchOption(ev.target.value);
  }


  const renderApiData=()=>{
    if(apiDataError){
      return <div>Error occured:{apiDataError.message}</div>
    }

    if(apiData[0]){

      let data=[];
      if(apiData[0].show) {
          return ShowGrid(apiData);
      }else{
          return ActorsGrid(apiData);
      }
      return data;
    }else{
      return "No data to show";
    }
  }

  return (
      <>
        <div className="flex justify-between p-8">
          <div className="flex space-x-4">
            <Link to={"/"} >Home</Link>
            <Link to={"/Stars"} >Start</Link>
          </div>

            <form onSubmit={onSearch} className="space-x-2">
              <input className="w-96 text-black rounded-xl px-2 py-1 bg-slate-200 focus:outline-none" type="text" value={searchStr}  onChange={onSearchInputChange}/>
              <button className="rounded-full bg-slate-600 px-2" type="submit">Search</button>

              <div className="flex flex-row justify-center space-x-2.5">
                <label>
                  Actors
                  <input type="radio" name="search-option" value="actors" checked={searchOption==="actors"} onChange={onRadioChange}/>
                </label>

                <label>
                  Shows
                  <input type="radio" name="search-option" value="shows" checked={searchOption==="shows"} onChange={onRadioChange}/>
                </label>
              </div>

            </form>
        </div>
      <div>
        {renderApiData()}
      </div>
      </>
  )
};

export default Home;