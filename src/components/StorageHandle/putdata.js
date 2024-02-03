const putdata = (data) => {
    localStorage.setItem('Stars',JSON.stringify(data))
    // localStorage.setItem('Stars',data)
}

export default putdata;