import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import './Menu.css';
import Lunch from '../Components/Lunch/Lunch';
import { useEffect } from "react"
import { Link } from 'react-router-dom'
import vessel from '../assets/vessel.png'
import gsap from "gsap"


const Menu = () => {
  useEffect(()=>{
    const t1 = gsap.timeline()

    t1.fromTo(".lunch-link",
      {
        x:-5,
        y:70,
        scale:0,
      },
      {
        y:-8,
        duration: 1.5,
        scale:1,
        
      }
    )

    t1.fromTo(".dinner-link",
      {
        x:-5,
        y:70,
        scale:0,
      },
      {
        y:-6,
        duration: 1.5,
        scale:1,
      },"<"
    )


  })
  return (
    <div className='our-menu'>
      <Navbar/>
        <div className='heading-lunch'>
          <h1>Our Menu</h1>
        </div>

        <div className='menu-links'>
           <Link className='lunch-link' to="/lunch"  >Lunch</Link>
           <img src={vessel} className='vessel' />

           <Link className='dinner-link' to="/dinner">Dinner</Link>
            <img src={vessel} className='vessel' /> 
           
        </div>
    </div>
  )
}

export default Menu