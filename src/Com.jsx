import React from 'react'
import Logo from './assets/hfcl.png'
import bgB from './assets/plainb.jpg'
import camera from './assets/camera.png'
import bgP from './assets/.black.jpg.icloud'


function Com() {
  return (
    <div className='w-screen flex '>
      <div className="relative w-full h-auto">
    
    <img 
      src={bgB} 
      alt="Background" 
      className="w-full h-auto object-cover"
    />
    {/* Background Image 
    <div className='justify-end flex absolute inset-0 p-8'>
      <img src={camera} alt="picture of people"
      className='p-6' />
    </div> 

   
     {/* <img 
              src={Logo}
              alt="Hetki logo"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4" 
            /> */}

    {/* Text Overlay */}
    <div className="absolute inset-0 flex flex-col p-8  justify-start text-white text-start z-10 ">
      <h2 className='text-4xl p-2 font-secondary'>CREATIVE PRODUCTIONS /</h2>
      <h1 className='text-4xl p-2 font-secondary pb-8'>COMMERCIAL PRODUCTIONS</h1>
      <h4 className='text-xl p-4 font-light font-secondary max-w-[900px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.</h4>
      <h4 className='text-xl p-4 font-light font-secondary max-w-[900px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.</h4>     
      
    </div>


  </div>
   
        
          </div>
        
  );  
    
}

export default Com