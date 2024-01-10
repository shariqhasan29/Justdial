import React from 'react'
import data from '../data'
import ServiceIcon from './ServiceIcon'
import './service.css'

const Services = () => {
  
  return data.map(
    (data)=>(
      <ServiceIcon key={Math.random()} img = {data.img} tittle = {data.tittle}/>

    )

   
  )
  
  
}

export default Services