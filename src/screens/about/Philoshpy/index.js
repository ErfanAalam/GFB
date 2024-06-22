import React from 'react'
import colors from '../../../utils/color'


const Philoshphy = () => {
  return (
    <div id='philosiphy' className='bg-cover p-4 2xl:p-20 pb-10 2xl:pb-[100px] bg-black text-center relative text-white md:py-0 py-10' style={{ backgroundImage: "url('Assets/Services/blur0.jpg')" }}>
      <img src='Assets/About us/Assets/1.png' className='absolute hidden md:block top-[20%] md:top-[50%] lg:top-[20%] 2xl:top-[20%] right-[80px] md:right-[150px] 2xl:right-[360px] z-10'/>
      <div className='flex flex-col items-center gap-2 mb-10'>
        <h1 className={`text-2xl md:text-5xl text-[${colors.mainTextColor}]  tracking-normal md:tracking-[4px]`}>Our Philosophy & Mindset</h1>
        <hr className='w-[60%] md:w-[40%] lg:w-[50%] 2xl:w-[30%] border-t-4 border-t-white' />
      </div>
      <div className='flex justify-center'>
        <img src='Assets/About us/1.png' className='relative z-20'></img>
      </div>
      <div>
        <p className='text-white text-[16px] md:text-2xl tracking-normal md:pt-0 pt-4 md:tracking-[4px] md:px-4 2xl:px-48 relative z-30'>GFB, short for “Go for Broke”, is more than just our name - it's the principle that guides us.
          <br /><br />
          Inspired by the relentless determination of the 442nd Regimental Combat Team in WWII, we commit wholeheartedly to each and every project.
          <br /><br />
          Embracing the “all or nothing” spirit in everything we do. </p>
      </div>

    </div>
  )
}

export default Philoshphy
