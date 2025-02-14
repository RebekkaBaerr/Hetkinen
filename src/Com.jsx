import React from 'react'
import Logo from './assets/hfcl.png'
import Black from './assets/black.jpg'

function Com() {
  return (
       <div className='w-screen'>
         <div className='justify-center bg-green-400 w-screen'>
           <div className='pt-20 pb-20 h-[1200px]'>
             {/* Titles */}
             <div className='text-center'>
               <h2 className='text-7xl p-2 font-secondary'>HETKI CREATIVE</h2>
               
               <h3 className='text-5xl p-4 font-light font-secondary pb-[100px]'>2024-2025</h3>
             </div>
   
             {/* Image Container */}
             <div className="relative w-screen flex justify-center index-[-1]">
               {/* Black Image 
               <img
                 className="h-auto w-3/4 "
                 src={Black}
                 alt="image"
               />*/}
   
               {/* Logo positioned at bottom center */}
              
             </div>
           </div>
         </div>
       </div>
  )
}

export default Com