import React from 'react';
import './Home.css';
import logo from '../assets/Annapoorna-devi.png';
import left from '../assets/left.png';
import pure from '../assets/pure-logo.png';
import decor from '../assets/decor.png';
import right from '../assets/right.png';
import FeatureCard from '../Components/FeatureCard/FeatureCard';
import Navbar from '../Components/Navbar/Navbar';
import Lunch from '../Components/Lunch/Lunch';

import { useEffect } from "react"
import gsap from "gsap"

const Home = () => {

  useEffect(()=>{
    
    if(window.innerWidth <= 768){
      const t2 = gsap.timeline()

    t2.fromTo(".annapurna-big",
      {
        y:-140,
        opacity: 0
      },
      {
        y:0,
        opacity: 1,
        duration: 2.5,
        ease: "power4.out"
      })


  t2.fromTo(".image-container",
  {
    opacity:0,
    scale:0.8,
    y:-500,
  },
  {
    opacity:1,
    scale:1,
    y:0,

    filter:"blur(0px)",
    duration:2,
  },"<")
}

    const t1 = gsap.timeline()

    t1.fromTo(".annapurna-big",
      {
        y:-140,
        opacity: 0
      },
      {
        y:0,
        opacity: 1,
        duration: 2.5,
        ease: "power4.out"
      })


  t1.fromTo(".image-container",
  {
    opacity:0,
    scale:0.8,
    y:100,
    x:50,
    filter:"blur(10px)"
  },
  {
    opacity:1,
    scale:1,
    y:0,
    x:0,
    filter:"blur(0px)",
    duration:1.6,
  },"<")

  


  })

  return (
    <div className="home">

      <div className="hero-section">

        <div className="image-container">
          <img
            src={logo}
            alt="Annapurna Logo"
            className="background-icon"
          />
        </div>

        <div className="home-text">

          <img
            src={pure}
            className='pure'
            height="100"
            width="400"
            alt=""
          />

          <div className="annapurna-big">

            <h1 className="home-name-big">
              అన్నపూర్ణ
            </h1>

            <div className="subname-row">

              <img
                src={left}
                className='left'
                alt="left"
              />

              <p className="home-subname-big">
                బ్రాహ్మణ భోజనశాల
              </p>

              <img
                src={right}
                className='right'
                alt="right"
              />

            </div>

          </div>

          <p className="home-quote">
            Authentic Brahmin Meals made with
            <br />
            Pure Ingredients & Divine Blessings
          </p>

        </div>

      </div>
      <Navbar />

      <FeatureCard />

      <img src={decor} width="200" className='decor'/>

    </div>
  )
}

export default Home