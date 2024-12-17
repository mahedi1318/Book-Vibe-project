import React from 'react'
import { FaStar } from "react-icons/fa";

const Rating = ({rating}) => {   
    const stars = Array(rating).fill("1");  
  return (
    <>
    <div className="flex items-center space-x-1 text-yellow-600">
        {stars?.map((star, index)=>(
            <FaStar key={index} />
        ))}
     
    </div>
    </>
  )
}

export default Rating
