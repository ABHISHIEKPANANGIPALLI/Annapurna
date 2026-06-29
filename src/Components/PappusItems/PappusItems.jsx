import React from 'react'
import './PappusItems.css'


const PappusItems = ({
    description,
    image
}) => { 
  return (
    <div className='Pappus-items'>
      <img src={image} alt={description}/>
      <p>{description}</p>
    </div>
  )
}

export default PappusItems