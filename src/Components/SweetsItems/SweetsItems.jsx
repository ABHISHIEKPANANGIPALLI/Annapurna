import React from 'react'
import './SweetsItems.css'


const SweetsItems = ({
    description,
    image
}) => { 
  return (
    <div className='Sweets-items'>
      <img src={image} alt={description}/>
      <p>{description}</p>
    </div>
  )
}

export default SweetsItems