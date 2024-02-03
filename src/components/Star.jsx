import React, {useState} from 'react';
import {AiFillStar} from "react-icons/ai";
import checkStar from "./StorageHandle/checkStar";
import AddNewStar from "./StorageHandle/AddNewStar";

function Star({item}) {
    const [clicked,setClick] = useState(false);

    return (
        <>
            <AiFillStar
                className={checkStar(item)===true || clicked===true ? 'mr-5 text-2xl text-yellow-300' : 'mr-5 text-2xl text-white'}
                onClick={() =>{
                    setClick(!clicked);
                    if(checkStar(item)===false){
                        AddNewStar(item)
                    }

                }
            }
            />
        </>
    );
}

export default Star;