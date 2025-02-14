import React from 'react'
import photo from './assets/people.png'
import person from './assets/person.png'

function People () {
  return (
    
    <div className='w-full relative justify-center'>
       <div className='w-full h-[550px]'>
          <img 
            src={photo}
            alt="photo of hetki company staff"
            className='w-full h-full object-cover' // Image will cover the area and preserve aspect ratio
          />
       </div>
       <div className='flex items-center justify-between w-full p-8'>
          <div className=' pl-4'>
          <h1 className='text-5xl font-secondary pt-2' >CREATIVES</h1>
          </div>
          <div className='p-5 pt-2 flex space-x-6 font-fourth '>
          <h3 className='max-w-[450px] p-5 pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.</h3>
          <h3 className='max-w-[450px] p-5 pt-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.</h3>
          </div>
        </div> 
        <div className='flex items-stretch w-full p-6'>
  {/* Person Card */}
  <div className='p-8 flex-shrink-0'>
    <img 
      src={person}
      alt="Hetki logo"
      className='min-h-[200px] h-[500px] w-full' 
    />
  </div>

  {/* Text Container */}
  <div className='p-4 flex flex-col justify-between h-full'>
    <div>
      <h1 className='text-7xl font-secondary'>ETUNIMI</h1>
      <h2 className='text-7xl font-secondary'>SUKUNIMI</h2>
      <h3 className='text-4xl font-secondary pt-4'>DIRECTOR</h3>
    </div>
    
    <div className='max-w-[600px] pt-[30px]'>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.
      </h4>
    </div>
  </div>
  <div className='p-8 flex-shrink-0'>
    <img 
      src={person}
      alt="Hetki logo"
      className='min-h-[200px] h-[500px] w-full' 
    />
  </div>

  {/* Text Container */}
  <div className='p-4 flex flex-col justify-between h-full'>
    <div>
      <h1 className='text-7xl font-secondary'>ETUNIMI</h1>
      <h2 className='text-7xl font-secondary'>SUKUNIMI</h2>
      <h3 className='text-4xl font-secondary pt-4'>DIRECTOR</h3>
    </div>
    
    <div className='max-w-[600px] pt-[30px]'>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.
      </h4>
    </div>
  </div>
  <div className='p-8 flex-shrink-0'>
    <img 
      src={person}
      alt="Hetki logo"
      className='min-h-[200px] h-[500px] w-full' 
    />
  </div>

  {/* Text Container */}
  <div className='p-4 flex flex-col justify-between h-full'>
    <div>
      <h1 className='text-7xl font-secondary'>ETUNIMI</h1>
      <h2 className='text-7xl font-secondary'>SUKUNIMI</h2>
      <h3 className='text-4xl font-secondary pt-4'>DIRECTOR</h3>
    </div>
    
    <div className='max-w-[600px] pt-[30px]'>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.
      </h4>
    </div>
  </div>
  <div className='p-8 flex-shrink-0'>
    <img 
      src={person}
      alt="Hetki logo"
      className='min-h-[200px] h-[500px] w-full' 
    />
  </div>

  {/* Text Container */}
  <div className='p-4 flex flex-col justify-between h-full'>
    <div>
      <h1 className='text-7xl font-secondary'>ETUNIMI</h1>
      <h2 className='text-7xl font-secondary'>SUKUNIMI</h2>
      <h3 className='text-4xl font-secondary pt-4'>DIRECTOR</h3>
    </div>
    
    <div className='max-w-[600px] pt-[30px]'>
      <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices auctor risus, commodo lacinia odio laoreet sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Quisque fringilla erat id felis mattis, id vestibulum lorem maximus.
      </h4>
    </div>
  </div>
</div>




    
   

        </div>
    

  )
}

export default People