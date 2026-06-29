import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Pachadis.css'
import PachadisData from '../Data/PachadisData'
import PachadisItems from '../Components/PachadisItems/PachadisItems'
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useNavigate } from "react-router-dom";


gsap.registerPlugin(ScrollTrigger)

const Pachadis = () => {
const PachadisRef = useRef()
const navigate = useNavigate()

  useEffect(() => {

  if(window.innerWidth <= 768) return;

  const tl = gsap.timeline({
    scrollTrigger:{
      trigger: PachadisRef.current,
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
      x: "-125%",
      ease: "none"
    }
  )

},[])


  return (

    <div className='Pachadis' ref={PachadisRef}>
          <Navbar />
          <button className="back-btn" onClick={() => navigate('/lunch')}>
             ← Back
          </button>

        <div className="Pachadis-heading">
            <h1>Our Signature Pachadis</h1>
        </div>
        
        <div className="Pachadis-track" >
          <div className="container">
            {PachadisData.map((item,index)=>(
            <PachadisItems
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

export default Pachadis