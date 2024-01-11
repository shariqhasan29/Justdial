import React from 'react'
import './box.css'

const Box = () => {

    const wedding = [
        { img: 'https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3312/x_0,y_250,w_5000,h_2812,r_0,c_crop,q_80,fl_progressive/w_400,f_auto,c_fit/jenneys-residency-coimbatore/fron_t_view_of_a_banquet_hall4_xl5gmo',
          tittle: 'Banquet Halls'
        },
        { img: 'https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hkim_bridalrequisites.png',
          tittle: 'Bridel Requisite'
        },
        { img: 'https://content.jdmagicbox.com/comp/trichy/z4/0431px431.x431.190917132857.i3z4/catalogue/jas-wedding-planner-subramaniapuram-trichy-caterers-03mwabbwoo.jpg?clr=',
          tittle: 'Caterers'
        },
]

  return (
    <div className='contain'>

        <div className='container-box'>
            <h4>Wedding Requisites</h4>
            
            <div className='img-box-container'>
                {wedding.map((data)=>{
            
                return(     
                    <div className='img-box'>
                        <img src={data.img} alt=''/>
                        <p>{data.tittle}</p>
                    </div>        
                )
                })}
            </div>
        </div>

        <div className='container-box'>
            <h4>Wedding Requisites</h4>
            
            <div className='img-box-container'>
                {wedding.map((data)=>{
            
                return(     
                    <div className='img-box'>
                        <img src={data.img} alt=''/>
                        <p>{data.tittle}</p>
                    </div>        
                )
                })}
            </div>
        </div>

        <div className='container-box'>
            <h4>Wedding Requisites</h4>
            
            <div className='img-box-container'>
                {wedding.map((data)=>{
            
                return(     
                    <div className='img-box'>
                        <img src={data.img} alt=''/>
                        <p>{data.tittle}</p>
                    </div>        
                )
                })}
            </div>
        </div>
        <div className='container-box'>
            <h4>Wedding Requisites</h4>
            
            <div className='img-box-container'>
                {wedding.map((data)=>{
            
                return(     
                    <div className='img-box'>
                        <img src={data.img} alt=''/>
                        <p>{data.tittle}</p>
                    </div>        
                )
                })}
            </div>
        </div>



    </div>
        
    
  )
}

export default Box