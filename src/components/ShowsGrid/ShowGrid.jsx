import React from 'react';

function ShowGrid(props) {
    const placeimg = (showProps) => {
        if (showProps.show && showProps.show.image) {
            return showProps.show.image.medium;
        } else {
            return "https://via.placeholder.com/150";
        }
    };

    let data;

    try {
        if (props.length === 0) {
            return <div>No data on shows found</div>;
        }

        data = props.map((item) => (
            <div key={item.show.id} className="w-1/5 bg-cyan m-2 text-white">
                <div className="flex flex-col text-white">
                    <img className="w-full m-2" src={placeimg(item)} alt="Show Poster" />
                    <div className="flex justify-center">
                        {item.show && item.show.name && (
                            <p className="text-lg">
                                {item.show.name}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        ));
    } catch (err) {
        console.error(err);
    }

    return <div className='flex flex-wrap justify-center bg-slate-800'>{data}</div>;
}

export default ShowGrid;
