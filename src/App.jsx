import { useState } from 'react'
import './App.css'
import './Nav.jsx'
import Film from './Film.jsx'
import Com from './Com.jsx'
import People from './People.jsx'
import Nav from './Nav.jsx'
import Bg from './assets/dunee.jpg'
import Black from './assets/black.jpg'
import Blue from './assets/blue.jpg'
import Green from './assets/green.jpg'

function App() {
  return (
    <>
      {/* Full-width container */}
      <div className='w-full relative'>
        
        {/* Image container: Set to full viewport height */}
        <div className='w-full h-[550px]'>
          <img 
            src={Bg}
            alt="Hetki logo"
            className='w-full h-full object-cover' // Image will cover the area and preserve aspect ratio
          />
          {/* Overlay the navigation on top of the image */}
          <div className='absolute top-0 left-0 w-full'>
            <Nav />
          </div>
        </div>

        {/* Content after the image */}
        <div className='flex items-center justify-between w-full p-8'>
          <div className=' pl-5'>
          <h1 className='text-4xl font-secondary pt-5' >HETKI COMPANY</h1>
          {/* <h1 className='text-4xl font-secondary ' >HETKI FILM COMPANY</h1> */}
          </div>
          <div className='p-5 pt-5 flex space-x-6 font-fourth '>
          <h3 className='max-w-[400px] p-5 pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.</h3>
          <h3 className='max-w-[400px] p-5 pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.</h3>
          </div>
        </div> 
            {/* Old image grid system!!!!
        <div className="grid-container flex w-screen ">
        
              <img
                class={`h-[25rem] w-1/3 object-cover xsm:h-96`}
                src={Black}
                alt="image"
              />
               <img
                class={`h-[25rem] w-1/3 object-cover xsm:h-96`}
                src={Blue}
                alt="image"
              />
             <img
                class={`h-[25rem] w-1/3 object-cover xsm:h-96`}
                src={Green}
                alt="image"
              />
        </div>
        */}
        <Film/>
        
        <People/>
        
    
      </div>
    </>
  )
}

export default App
