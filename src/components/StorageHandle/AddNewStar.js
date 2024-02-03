import React from 'react';
import putdata from "./putdata";
import getdata from "./getdata";


function AddNewStar(item) {
    const OldItems = getdata();
    let currentData;

    if (!OldItems || OldItems.length === 0) {
        currentData = [item];
    } else {
        currentData = [...OldItems, item];
    }

    const flattenedData = currentData.reduce((acc, value) => {
        return acc.concat(value);
    }, []);

    putdata(flattenedData);

}

export default AddNewStar;



