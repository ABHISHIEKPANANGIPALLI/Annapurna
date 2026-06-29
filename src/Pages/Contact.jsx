import React from 'react'
import './Contact.css'
import Navbar from '../Components/Navbar/Navbar'
import { useNavigate } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">

      <Navbar />

      <div className="contact-heading">
        <h1>Contact Annapurna</h1>

        <p>
          Experience the Taste of Home in Every Morsel
        </p>
      </div>

      <div className="conclusion">

        <div className="contact-card">
          <div className="phone-icon">
            📞
          </div>

          <h3>Call Us</h3>
          <h2>7989963455</h2>

        </div>

        <div className="contact-card">
          <div className="lunch-icon">
            🍽️
          </div>

          <h3>Lunch Order</h3>
          <h2>Before 10:00 AM</h2>

        </div>

        <div className="contact-card">
          <div className="dinner-icon">
            🥘
          </div>

          <h3>Dinner Order</h3>
          <h2>Before 5:00 PM</h2>

        </div>

      </div>

      <div className="footer-message">
        <h2>Thank You for Choosing Annapurna</h2>
        <p>Authentic Telugu Cuisine Made Fresh Every Day</p>
      </div>

    </div>
  )
}

export default Contact