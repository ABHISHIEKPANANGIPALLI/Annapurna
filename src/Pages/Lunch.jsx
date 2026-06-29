import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import './Lunch.css'
import plate from '../assets/meals-full-plate.png';
import LunchItems from '../Components/LunchItems/LunchItems'
import menuData from '../Data/menuData'


const Lunch = () => {
  return (
    <div className="lunch-page">
    <Navbar/>

    <div className="top-note">
        <h3>Lunch Menu</h3>
        <h1>Traditional </h1>
        <p>Brahmin Bhojanam</p>
        <h5>Freshly prepared meals that feel just like home.</h5>
    </div>

    <img src ={plate} className='full-plate' />
    
    <div className="lunch-items">

        {
            menuData.map((item,index)=>(
                <LunchItems
                    key={index}
                    title={item.title}
                    description={item.description}
                    image={item.image}
                    color={item.color}
                    varieties={item.varieties}
                />
            ))
        }
    </div>




    </div>
    
    
  )
}

export default Lunch