import React from 'react'
import Logo from './assets/hfcl.png'
import bgB from './assets/plainb.jpg'
import camera from './assets/camera.png'


function Film() {
  return (
    <div className='w-screen '>
      <div className="relative w-full h-[600px]">
    
    <img 
      src={bgB} 
      alt="Background" 
      className="w-full h-auto object-cover bg-black/50"
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
      <h2 className='text-5xl p-2 font-secondary'>FILM PRODUCTIONS /</h2>
      <h1 className='text-5xl p-2 font-secondary pb-8'>TV PRODUCTIONS</h1>
      <h4 className='text-xl p-4 font-light font-fourth max-w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.</h4>
      <h4 className='text-xl p-4 font-light font-fourth max-w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.</h4>
      <h4 className='text-xl p-4 font-light font-fourth max-w-[600px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.</h4>
      
    </div>
    
  </div>
   
        
          </div>
        
      
    
  );
}

export default Film;
