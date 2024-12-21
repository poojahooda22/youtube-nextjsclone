import React from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";


const data = [
    {
        id: 1,
        icon: <FaArrowAltCircleRight />, 
        name: 'John Doe',
        age: 32,
        
    },
    {
        id: 1,
        icon: <FaArrowAltCircleLeft />, 
        name: 'John Doe',
        age: 32,
        
    },

]

const Testing = () => {
  return (
    <div>
      {data.map((item, index) => {
        return (
            <div key={index}>
                <h4>{item.icon}</h4>
                <h4>{item.name}</h4>
                <h4>{item.age}</h4>
            </div>
        )
      })}
    </div>
  )
}

export default Testing
