import React from 'react'
import './category.css'

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

const spa = [
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PGFqJHer2rqltDa8lGMeofqEuyVZLTiF0A&usqp=CAU',
      tittle: 'spa & massages'
    },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoy7ri2z-RShmNwlwApF8k5Xxw9Grx2D8IA&usqp=CAU',
      tittle: 'Beauty Parlours'
    },
    { img: 'https://www.ritzmagazine.in/wp-content/uploads/2019/08/1-229.jpg',
      tittle: 'Saloon'
    },
]

const repair = [
    { img: 'https://www.nobroker.in/blog/wp-content/uploads/2023/01/Onida-AC-service-in-Chennai.jpg',
      tittle: 'AC Service'
    },
    { img: 'https://repairs24.in/assets/img/home/bike1.jpg',
      tittle: 'Bike Services'
    },
    { img: 'https://www.welcomemotors.in/owner-img/banner-1.jpg',
      tittle: 'Car Services'
    },
]

const daily = [
    { img: 'https://happy-families.s3.ap-southeast-2.amazonaws.com/s3fs-public/styles/max_1300x1300/public/2022-10/AdobeStock_312349880%20%281%29.jpeg?itok=7BxOIvWX',
      tittle: 'Movies'
    },
    { img: 'https://cityfurnish.com/blog/wp-content/uploads/2023/08/healthy-positive-happy-woman-holding-paper-shopping-bag-full-fruit-vegetables-min-1200x806.jpg',
      tittle: 'grosery'
    },
    { img: 'https://porterchester.edu/sites/default/files/field/image/What-Can-I-Do-as-an-Electrician.jpg',
      tittle: 'Electrician'
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
            <h4>Spa & Beauty</h4>
            
            <div className='img-box-container'>
                {spa.map((data)=>{
            
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
            <h4>Repairs & Services</h4>
            
            <div className='img-box-container'>
                {repair.map((data)=>{
            
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
            <h4>Daily Needs</h4>
            
            <div className='img-box-container'>
                {daily.map((data)=>{
            
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