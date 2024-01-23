import React from 'react'
import Navi from './Navi'
import Tittlecard from './SKC/Tittlecard/Tittlecard'
import Body from './SKC/Body/Body'
import Aside from './SKC/Aside/Aside'
import './sk.css'

const SK = () => {
  return (
   <>
    <Navi/>
    <Tittlecard/>
    <Body/>
    <div className='side'>
    <Aside/>

    </div>
    
   </>
  )
}

export default SK