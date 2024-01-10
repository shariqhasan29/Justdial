import React from 'react'
import './ServicesIcon.css'


const ServiceIcon = () => {

  const data = [
      {
        img: 'https://png.pngtree.com/png-clipart/20200727/original/pngtree-restaurant-logo-design-vector-template-png-image_5441058.jpg',
        tittle: "Restaurent"
      },
      {
        img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/love-marriage-logo-design-template-acc66473ed59d6ef9968c9b02f5f09aa_screen.jpg?ts=1686918765',
        tittle: "Wedding"
      },
      {
        img: "https://logo.com/image-cdn/images/kts928pd/production/b00e2d30865932fc1c1d86658c7208810fe7911a-731x731.png?w=1080&q=72",
        tittle: "Hotel"
      },
      {
        img: 'https://bcassetcdn.com/public/blog/wp-content/uploads/2022/11/17143757/beauty-feminine-logo-by-airislogo-dribbble.png',
        tittle: "Spa"
      },
      {
        img: 'https://static.vecteezy.com/system/resources/previews/007/688/840/non_2x/education-logo-free-vector.jpg',
        tittle: "Education"
      },
      {
        img: 'https://static.vecteezy.com/system/resources/thumbnails/009/676/418/small/home-buy-sell-or-rent-logo-clean-and-simple-logo-template-suitable-for-a-real-estate-house-rent-mortgage-broker-etc-available-in-eps-file-format-vector.jpg',
        tittle: "Rent"
      },
      {
        img: 'https://static.vecteezy.com/system/resources/thumbnails/021/809/795/small/doctors-day-illustration-png.png',
        tittle: "Hospital"
      },
      {
        img: 'https://www.shutterstock.com/shutterstock/photos/1053368123/display_1500/stock-vector-pet-shop-logo-template-1053368123.jpg',
        tittle: "Pet"
      },
      {
        img: 'https://png.pngtree.com/png-vector/20191023/ourmid/pngtree-physical-fitness-sport-gym-logo-bodybuilder-with-big-muscles-posing-isolated-png-image_1857715.jpg',
        tittle: "Gym"
      },
      {
        img: 'https://static.vecteezy.com/system/resources/thumbnails/005/495/317/small/dental-clinic-logo-template-dental-care-logo-designs-tooth-teeth-smile-dentist-logo-vector.jpg',
        tittle: "Dentist"
      },
      {
        img: 'https://t4.ftcdn.net/jpg/04/13/20/97/360_F_413209771_ZA2YI8qDK721nma8N5erkn5OIzct6hPW.jpg',
        tittle: "Courier"
      },
      {
        img: 'https://www.codester.com/static/uploads/items/000/024/24213/preview-xl.jpg',
        tittle: "Driving"
      },
      {
        img: 'https://s.tmimgcdn.com/scr/1200x750/77400/agent-logo-template_77480-2-original.jpg',
        tittle: "Agent"
      },
      {
        img: 'https://img.freepik.com/premium-vector/alphabetical-letter-e-logo-collection_647881-448.jpg',
        tittle: "Event"
      },
      {
        img: 'https://st2.depositphotos.com/42546960/45538/v/450/depositphotos_455382696-stock-illustration-letter-logo-design-vector-template.jpg',
        tittle: "PG"
      },
      {
        img: 'https://t4.ftcdn.net/jpg/04/99/52/65/360_F_499526521_3o5PiBrnK7dp8BI1TqfgkksGIQQCurQw.jpg',
        tittle: "Contractor"
      },
      {
        img:'https://www.shutterstock.com/image-vector/interior-room-furniture-gallery-logo-260nw-1761705920.jpg',
        tittle: "Interior"
      },
      {
        img: 'https://png.pngtree.com/template/20190928/ourmid/pngtree-gold-furniture-lamp-chair-interior-logo-design-template-inspirat-image_312127.jpg',
        tittle: "furniture "
      },
      {
        img: 'https://img.freepik.com/free-vector/detailed-esports-gaming-logo_52683-63633.jpg?size=338&ext=jpg&ga=GA1.1.1412446893.1704844800&semt=ais',
        tittle: "Games"
      },
      {
        img: 'https://t3.ftcdn.net/jpg/02/99/14/34/360_F_299143456_lWWBunNVc5pfbw2uax1jm5Ltnu9Eg6MI.jpg',
        tittle: "Swimming"
      },
  
    ]
  

  return (
    <div>
        <div className='container'>

          {data.map((data)=>{
           return(
              <div className='service'>
                  <div className='img'>
                    <img src={data.img} alt =''/>
                  </div>
                  <p>{data.tittle}</p>
              </div>

            )
          })}
                
        </div>
 
    </div>
  )
}

export default ServiceIcon