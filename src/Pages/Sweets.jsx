import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Sweets.css'
import Sweets from '../Data/SweetsData'
import SweetsItems from '../Components/SweetsItems/SweetsItems'
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useNavigate } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger)

const Sweet = () => {
const SweetsRef = useRef()
const navigate = useNavigate()

useEffect(() => {

  if(window.innerWidth <= 768) return;

  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:SweetsRef.current,
      start:"top top",
      end:"10",
      scrub:5,
      pin:true,
    }
  });

  tl.fromTo(
    ".Sweets-track",
    {
      x:50
    },
    {
      x:"-74%",
      ease:"none"
    }
  );

},[]);

  return (

    <div className='Sweets' ref={SweetsRef}>
          <Navbar />
          <button className="back-btn" onClick={() => navigate('/lunch')}>
             ← Back
          </button>

        <div className="Sweets-heading">
            <h1>Our Signature Sweets</h1>
        </div>
        
        <div className="Sweets-track" >
            {Sweets.map((item,index)=>(
            <SweetsItems
            key={index}
            image={item.image}
            description={item.description}
            />
         ))}
        </div>

    </div>

  )
}

export default Sweet