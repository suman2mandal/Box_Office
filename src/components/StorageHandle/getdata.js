const getdata = () => {
    return JSON.parse(`[${localStorage.getItem('Stars')}]`)
    // return localStorage.getItem('Stars')
}

export default getdata;