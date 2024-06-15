import React from 'react'

const ChooseGfb = () => {
  return (
    <div className='bg-cover flex md:flex-row flex-col md:pt-20 pt-10 justify-around p-4 relative' style={{ backgroundImage: "url('Assets/Services/blur2.png')" }}>

      <div className='w-[100%] md:w-[40%] xl:w-[30%] relative z-30'>
        <img src='Assets/About us/3.png' className='w-[600px] md:h-[700px] lg:h-[700px] xl:h-[700px]'></img>
      </div>

      <div className='text-center flex flex-col w-[100%] md:w-[70%] md:ml-4 xl:ml-20 gap-10  xl:gap-20 justify-center '>
        <div className='flex flex-col items-center md:static absolute top-0 pt-4 right-32'>
          <h1 className='text-[24px] md:text-3xl lg:text-4xl xl:text-5xl tracking-normal md:tracking-[6px] text-orange-500'>Why Choose GFB Construction?</h1>
          <hr className='w-[85%]' />
        </div>
        <p className='text-white text-[16px] md:text-[24px] lg:text-[30px] xl:text-2xl tracking-[4px] '>
          Our focus is on delivering nothing but the best.
          <br /><br />
          We handpick our projects to guarantee each client receives our full attention and the highest standard of work.
          <br /><br />
          With a team seasoned by decades in the industry and armed with cutting-edge technology, we are more than just builders.
          <br /><br />
          We are your partners! Our goal is not only to create enduring structures but also to forge long lasting relationships with our clients.

        </p>
      </div>
    </div>
  )
}

export default ChooseGfb
