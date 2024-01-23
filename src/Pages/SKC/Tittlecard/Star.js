import React, { useState } from "react";
import {FaStar} from 'react-icons/fa'

export default function Star(){

    const [rating , setRating] = useState(null)
    const [hover , setHover ] = useState(null)
    

    return(
        <>
            {[...Array(5)].map((star, index) =>{

                const currentRate = index + 1
                

                return(
                    <div>
                        <label>
                        <input type="radio" name="rate" value={currentRate} onClick={()=>{setRating(currentRate)}}/>
                        <FaStar 
                         className="star"
                         size={25}
                         color={currentRate <= (hover || rating) ? 'yellow' : "grey"}
                         onMouseEnter={()=>setHover(currentRate)}
                         onMouseLeave={()=>setHover(null)} 
                         
                        />

                        </label>

                        
                        

                    </div>
                    
                )
            })}
        
        
        
        </>
    )
}