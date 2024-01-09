import React from 'react'
import './Search.css'
import { MdKeyboardVoice } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className='search-inputs'>
        <h2>Search across ‘4 Crore+‘ Businesses ‘3.3 Crore+’ Products & Services </h2>
        <div className='inputs'>

            <div className='input-field'>

                <input 
                
                     className='input'
                     placeholder='Enter location'                
            
                />
            </div>
                        
            
            <div className='input-field1'>
                <input 
                    className='input'
                    placeholder='Search for hotels'
                />
                <div className='icons'>
                    <MdKeyboardVoice/>
                    <FaSearch />
                </div>
                

            </div>
            
        </div>
        
    </div>
  )
}

export default Search