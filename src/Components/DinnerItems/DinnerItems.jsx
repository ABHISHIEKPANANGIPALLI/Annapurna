import React from 'react'
import './DinnerItems.css'


const DinnerItems = ({
    description,
    image
}) => { 
  return (
    <div className='Dinner-items'>
      <img src={image} alt={description}/>
      <p>{description}</p>
    </div>
  )
}

export default DinnerItems