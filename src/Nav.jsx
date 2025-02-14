import React from 'react'
import Logo from './assets/logo.png'


function Nav() {
  return (
    <div className='flex items-center justify-between w-full fixed'>
        <div className='flex justify-start w-64 h-auto pt-3 pl-5'>
                 <img src={Logo}
                 alt="Hetki logo"
                 srcset=""
                 className=' ' />
                </div>
       
    
        <ul  class='flex space-x-6 pt-3 p-5'>
            <li class='hover:bg-white ransition-colors duration-300 '>
                <a class='p-1 text-white hover:text-red-700 ransition-colors duration-300' href="">ABOUT</a>
            </li>
            <li class='hover:bg-white ransition-colors duration-300'>
                <a class='p-1 text-white hover:text-red-700 ransition-colors duration-300' href="">FILM</a>
            </li>
            <li class='hover:bg-white ransition-colors duration-300'>
                <a class='p-1 text-white hover:text-red-700 ransition-colors duration-300' href="">CREATIVE</a>
            </li>
            <li class='hover:bg-white ransition-colors duration-300 '>
                <a class='p-1  text-white hover:text-red-700 ransition-colors duration-300' href="">CONTACT</a>
            </li>

        </ul>
        
       
    </div>
  )
}

export default Nav