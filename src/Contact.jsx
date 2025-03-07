import React from 'react'
import Logo from './assets/hfcl.png'
import HLogo from './/assets/hetki.png'
import person from './assets/person.png'


function Contact() {
  return (
    <div>  
     <div className='w-full relative justify-center'>
          
           <div className='flex items-center justify-between w-full p-8'>
              <div className=' pl-4'>
              <h1 className='text-4xl font-secondary pt-2' >CONTACT INFORMATION</h1>
              </div>
              <div className='p-5 pt-2 flex space-x-6 font-fourth '>
              <h3 className='max-w-[450px] p-5 pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.</h3>
              <h3 className='max-w-[450px] p-5 pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.</h3>
              </div>
            </div> 
           
            <div className='w-full h-[screen]'>
              <img 
                src={Logo}
                alt="photo of hetki company staff"
                className='w-full h-auto object-cover' // Image will cover the area and preserve aspect ratio
              />
           </div>
           <div className='w-full h-[screen]'>
              <img 
                src={HLogo}
                alt="photo of hetki company staff"
                className='w-full h-auto object-cover' // Image will cover the area and preserve aspect ratio
              />
           </div>
  
     
    
    </div>
    
    
    
    
        
       
    
            </div>
          
  )
}

export default Contact