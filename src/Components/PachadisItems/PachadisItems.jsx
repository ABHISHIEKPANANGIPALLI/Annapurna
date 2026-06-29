import React from 'react'
import './PachadisItems.css'


const PachadisItems = ({
    description,
    image
}) => { 
  return (
    <div className='Pachadis-items'>
      <img src={image} alt={description}/>
      <p>{description}</p>
    </div>
  )
}

export default PachadisItems