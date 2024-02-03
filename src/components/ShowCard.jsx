import React from 'react'
import { useParams } from 'react-router-dom';

function ShowCard() {
    const {showId} = useParams();
  return (
    <div>jump to 1-{showId}</div>
  )
}

export default ShowCard