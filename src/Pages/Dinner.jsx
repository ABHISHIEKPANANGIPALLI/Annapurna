import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Dinner.css'
import DinnerData from '../Data/DinnerData'
import DinnerItems from '../Components/DinnerItems/DinnerItems'
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useNavigate } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger)

const Dinner = () => {
const DinnerRef = useRef()
const navigate = useNavigate();


  useEffect(() => {

  if(window.innerWidth <= 768) return;

  const tl = gsap.timeline({
    scrollTrigger:{
      trigger: DinnerRef.current,
      start:"top top",
      end:"10",
      scrub:5,
      pin:true,
    }
  })

  tl.fromTo(
    ".container",
    {
      x: 50
    },
    {
      x: "-135%",
      ease: "none"
    }
  )

},[])


  return (

    <div className='Dinner' ref={DinnerRef}>
          <Navbar />
          <button className="back-btn" onClick={() => navigate('/lunch')}>
             ← Back
          </button>

        <div className="Dinner-heading">
            <h1>Our Signature Dinners</h1>
        </div>
        
        <div className="Dinner-track" >
          <div className='container'>
            {DinnerData.map((item,index)=>(
            <DinnerItems
            key={index}
            image={item.image}
            description={item.description}
            />
           ))}
          </div>
        </div>

        <div class="scroll-indicator">
            <span class="line"></span>

            <p>Scroll to explore more</p>
            <div class="scroll-icon">
                   →
             </div>

        </div>


    </div>

  )
}

export default Dinner