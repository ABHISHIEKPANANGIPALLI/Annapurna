import React from 'react'
import './LunchItems.css'
import { Link, useNavigate } from 'react-router-dom'


const LunchItems = ({
  title,
  description,
  image,
  color,
  varieties
}) => {

  return (

    <div
      className="lunch-item"
      style={{ background: color }}
    >

      <div className="lunch-left">

        <h1>{title}</h1>

        <p>{description}</p>

        <Link to={`/${title.toLowerCase()}`}className="view-btn">
            VIEW {title}
        </Link>

      </div>

      <div className="lunch-center">
        <img src={image} alt="" />
      </div>

      <div className="lunch-right">

        <span>{varieties}+</span>

        <p>VARIETIES</p>

      </div>

    </div>

  )
}

export default LunchItems