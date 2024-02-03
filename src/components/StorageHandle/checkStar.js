import getdata from "./getdata";

const checkStar = (item) => {
    const OldItems = getdata();
    console.log(OldItems, "check old");

    const found = OldItems.some((olds) => {
        console.log(olds,'--')
        if( olds !== null && olds.id === item.id){
            console.log(item,'found');
            return true;
        }else{
            console.log(item,'not found');
            return false;
        }
    });

    return found;
};

export default checkStar;
