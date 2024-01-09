import React from 'react'
import "./Services.css"
import Restaurent from '../Assets/restaurant.png'

const Services = () => {
  return (
    <div className='container'>
        <div className='service'>
            <div className='img'>
                <img src={Restaurent}/>
            </div>
            <p>Restaurants</p>
        </div>
    </div>
  )
}

export default Services