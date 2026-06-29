import React from 'react'
import './CurriesItems.css'


const CurriesItems = ({
    description,
    image
}) => { 
  return (
    <div className='curries-items'>
      <img src={image} alt={description}/>
      <p>{description}</p>
    </div>
  )
}

export default CurriesItems