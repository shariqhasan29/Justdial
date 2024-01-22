import React from 'react'
import './tittlecard.css'

const Tittlecard = () => {
  return (
    <div className='tittlecard'>

        <div className='heading' >
         <h3>S K Engineering Works</h3>
         <div className='button'>
            <button>Meachine Tools Dealer</button>
            <button>Industrial Machinery Dealer</button>
         </div>        

        </div>
        <div className='rating'>
            <button>1.0</button>
        </div>
        <div className='location'>
            <b>Avarampalayam, Coimbatore</b>
            <ul className='list'>
                <li>Opens at 08:00 AM</li>
                <li style={{color:"black"}}>12 Years in Business</li>

            </ul>

        </div>
        <div className='buttons'>
            <button className='number'>Show Number</button>
            <button className='other'>Tap to rate</button>
            <button className='other'>Add photo</button>
            <button className='other'>share</button>
            <button className='other'>Edit</button> 
            
        </div>
        
    </div>
  )
}

export default Tittlecard