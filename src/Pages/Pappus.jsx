import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Pappus.css'
import PappusData from '../Data/PappusData'
import PappusItems from '../Components/PappusItems/PappusItems'
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useNavigate } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger)

const Pappus = () => {
const PappusRef = useRef()
const navigate = useNavigate()


  useEffect(() => {
   
  if(window.innerWidth <= 768) return;

  const tl = gsap.timeline({
    scrollTrigger:{
      trigger: PappusRef.current,
      start:"top top",
      end:"10",
      scrub:1,
      pin:true,
    }
  })

  tl.fromTo(
    ".container",
    {
      x: 50
    },
    {
      x: "-56%",
      ease: "none"
    }
  )

},[]);


  return (

    <div className='Pappus' ref={PappusRef}>
          <Navbar />
          <button className="back-btn" onClick={() => navigate('/lunch')}>
             ← Back
          </button>


        <div className="Pappus-heading">
            <h1>Our Signature Pappus</h1>
        </div>
        
        <div className="Pappus-track" >
          <div className="container">
            {PappusData.map((item,index)=>(
            <PappusItems
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

export default Pappus