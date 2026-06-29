import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Curries.css'
import magnifier from '../assets/magnifier.png'
import curriesData from '../Data/curriesData'
import CurriesItems from '../Components/CurriesItems/CurriesItems'
import { useEffect, useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger)

const Curries = () => {
const curriesRef = useRef()
const navigate = useNavigate();

  useEffect(() => {

  if(window.innerWidth <= 768) return;

  const tl = gsap.timeline({
    scrollTrigger:{
      trigger: curriesRef.current,
      start:"top top",
      end:"10",
      scrub:5,
      pin:true,
    }
  });

  tl.fromTo(
    ".container",
    {
      x:50
    },
    {
      x:"-140%",
      ease:"none"
    }
  );

},[]);



  return (

    <div className='curries' ref={curriesRef}>
          <Navbar />
          <button className="back-btn" onClick={() => navigate('/lunch')}>
             ← Back
          </button>

        <div className="curries-heading">
            <h1>Our Signature Curries</h1>
        </div>
        
        <div className="curries-track" >
          <div className="container">
            {curriesData.map((item,index)=>(
            <CurriesItems
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

export default Curries