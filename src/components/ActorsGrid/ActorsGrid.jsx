import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import Star from "../Star"
function ActorsGrid(props) {
    const state = false;
    const placeimg = (person) => {
        if (person.image) {
            return person.image.medium;
        } else {
            return 'https://via.placeholder.com/150';
        }
    };

    if (props.length === 0) {
        return <div>No data on actors found</div>;
    }

    if(props[0]===null){
        console.log(props,"the problem")
        props.shift();
    }
    return (

        <div className='flex flex-wrap justify-center w-full bg-slate-800'>
            {props.map((item) => (
                <div key={item.person.id} className='flex w-4/5 sm:w-4/6 md:w-3/12 m-2 p-1'>
                    <img className='rounded-2xl w-28 h-36' src={placeimg(item.person)} alt="Person's Face" />
                    <div className='w-full flex flex flex-col justify-center'>
                        <div className='ml-2'>
                            <div className='font-semibold flex justify-between items-center'>
                                Name: {item.person.name}
                                <Star item={item.person}/>
                            </div>
                            <div>Country: {item.person.country ? item.person.country.name : 'Not Found'}</div>
                            <div>DOB: {item.person.birthday ? item.person.birthday : 'Not Found'}</div>
                            <div>DOD: {item.person.deathday ? item.person.deathday : 'Not Found'}</div>
                        </div>
                        <div className='flex justify-center'>
                            <button className='rounded-2xl ring border-cyan mx-2 mt-2 hover:bg-cyan w-3/5'>
                                <Link to={`/person/${item.person.id}`}>View Profile</Link>
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ActorsGrid;
