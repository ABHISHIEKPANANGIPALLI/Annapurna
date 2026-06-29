import React from 'react'
import './FeatureCard.css';
import { FaLeaf } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { FaMotorcycle } from "react-icons/fa";

const FeatureCard = () => {
  return (

    <div className="features">

      <div className="feature-box">

        <div className="feature-icon">
          <FaLeaf />
        </div>

        <h3 className="feature-title">
          Hygienic
        </h3>

      </div>

      <div className="feature-box">

        <div className="feature-icon">
          <GiCookingPot />
        </div>

        <h3 className="feature-title">
          Safe
        </h3>

      </div>

      <div className="feature-box">

        <div className="feature-icon">
          <FaMotorcycle />
        </div>

        <h3 className="feature-title">
          Fast Delivery
        </h3>

      </div>

    </div>

  )
}

export default FeatureCard