import React from 'react'
import './SambarItems.css'


const SambarItems = ({
    description,
    image
}) => { 
  return (
    <div className='Sambar-items'>
      <img src={image} alt={description}/>
      <p>{description}</p>
    </div>
  )
}

export default SambarItems