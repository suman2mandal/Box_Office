import React from 'react'

function ShowGrid(props) {
    let data;
    try{
        data = props.map((item) => (
            <div className='card rounded-none' key={item.show.id}>
                {/* <img src={item.image.medium} alt={item.name} /> */}
                <div>
                    {item.show.name}
                </div>
            </div>
        ))
    }catch(err){
        console.log(err);
    }
    return data;
}

export default ShowGrid