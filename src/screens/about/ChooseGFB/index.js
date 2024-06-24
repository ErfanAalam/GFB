import React from 'react'
import colors from '../../../utils/color'


const ChooseGfb = () => {
  return (
    <div id='Choose' className='bg-cover bg-center bg-black flex md:flex-row flex-col md:pt-20 justify-around p-4 py-10 md:py-32 pt-48 relative' style={{ backgroundImage: "url('Assets/Services/blur-3.png')" }}>

      <div className='absolute bg-black backdrop-blur-lg h-[10vh] md:h-[20vh] w-[90%] md:w-[100%] blur-[30px] opacity-40 bottom-[-80px] z-[100] '></div>

      <img src='Assets/About us/Assets/Group 66.png' className='block md:hidden h-[1000px] absolute top-[-580px] left-0 z-[100]' />

      <div className='w-[100%] md:w-[40%] xl:w-[30%] relative z-30 flex justify-center'>
        <img src='Assets/About us/3.png' className='w-[400px] md:h-[600px] lg:h-[600px] xl:h-[600px]'></img>
      </div>

      <div className='text-center flex flex-col w-[100%] md:w-[60%] md:ml-10 xl:ml-10 gap-10 xl:gap-20 items-center pr-0 md:pr-20'>
        <div className='flex flex-col items-center md:static absolute top-28 pt-4 gap-2'>
          <h1 className={`text-[24px] md:text-3xl lg:text-4xl xl:text-[40px] tracking-normal md:tracking-[6px] text-[${colors.mainTextColor}]`}>Why Choose GFB Construction?</h1>
          <hr className='w-[45%] md:w-[85%] border-t-4' />
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
