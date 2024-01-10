import React from 'react'
import './ServicesIcon.css'

const ServiceIcon = ({img, tittle}) => {
  return (
    <div>
        <div className='container'>
            <div className='service'>
                 <div className='img'>
                    <img src={img} alt =''/>
                 </div>
                <p>{tittle}</p>
            </div>    
        </div>
 
    </div>
  )
}

export default ServiceIcon