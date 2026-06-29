import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom";
import icon from '../../assets/food-logo.png';



const Navbar = () => {

  return (
    <div className="navbar">
             <div className="main-top">
                <img
                  src={icon}
                  alt="Annapurna Icon"
                  className="home-icon"
                  width=" 60"
                />
      
                <div className="annapurna">
                  <h1 className="home-name">
                    అన్నపూర్ణ
                  </h1>
      
                  <p className="home-subname">
                    బ్రాహ్మణ భోజనశాల
                  </p>
                </div>
              </div>
      <div className='links'>
        <Link  className="nav-item " to="/">Home</Link>
        <Link className="nav-item" to= "/menu">Menu</Link>
        <Link className = "nav-item" to="/contact">Contact</Link>
      </div>
    </div>
  ) 
}

export default Navbar