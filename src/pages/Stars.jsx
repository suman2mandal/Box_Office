import React from 'react';
import { Link } from 'react-router-dom';
import ActorsGrid from '../components/ActorsGrid/ActorsGrid';
import getdata from '../components/StorageHandle/getdata';

const data = (OldItems) => {
    console.log(OldItems[0], 'all stars');
    return ActorsGrid(OldItems[0]);
};

export default function Stars() {
    const OldItems = getdata();

    const placeimg = (person) => {
        console.log('here is the c', person);
        if (person.image === true) {
            return person.image;
        } else {
            return 'https://via.placeholder.com/150';
        }
    };

    if (OldItems === null || OldItems.length === 0) {
        return <div>No data on actors found</div>;
    }

    if (OldItems[0] === null) {
        console.log(OldItems, 'the problem');
        OldItems.shift();
    }

    const test = (item) => {
        if (!item) {
            return;
        }
    };

    const display = (OldItems) => {
        return (
            <>
                {OldItems.map((item) => (
                    <div key={item.id} className='flex w-4/5 sm:w-4/6 md:w-3/12 m-2 p-1'>
                        <img
                            className='rounded-2xl w-28 h-36'
                            src={placeimg(item)}
                            alt="Person's Face"
                        />
                        <div className='w-full flex flex flex-col justify-center'>
                            <div className='ml-2'>
                                <div className='font-semibold flex justify-between items-center'>
                                    Name: {item.name}
                                    {/*<Star item={item.person}/>*/}
                                </div>
                                <div>Country: {item.country ? item.country.name : 'Not Found'}</div>
                                <div>DOB: {item.birthday ? item.birthday : 'Not Found'}</div>
                                <div>DOD: {item.deathday ? item.deathday : 'Not Found'}</div>
                            </div>
                            <div className='flex justify-center'>
                                <button className='rounded-2xl ring border-cyan mx-2 mt-2 hover:bg-cyan w-3/5'>
                                    <Link to={`/person/${item.id}`}>View Profile</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    return (
        <>
            <div className='flex justify-center space-x-4'>
                <Link to={'/'}>Home</Link>
                <Link to={'/Stars'}>Stars</Link>
            </div>
            <div>
                <div className='flex flex-wrap justify-center w-full bg-slate-800'>
                    {display(OldItems)}
                </div>
                <div className='text-white'>hi</div>
            </div>
        </>
    );
}
