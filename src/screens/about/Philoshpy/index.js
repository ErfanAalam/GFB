import React from 'react'

const Philoshphy = () => {
  return (
    <div className='bg-cover p-10 md:p-40 bg-black text-center relative text-white pb-32' style={{ backgroundImage: "url('Assets/Services/blur0.jpg')" }}>
      <img src='Assets/About us/Assets/1.png' className='absolute top-[25%] right-[360px] z-10'/>
      <div>
        <h1 className='text-2xl md:text-5xl text-orange-600 font-[900] tracking-normal md:tracking-[4px]'>Our Philosophy & Mindset</h1>
        <hr className='w-[35%] ml-[33%] border-top-8 border-t-white' />
      </div>
      <div className='flex justify-center'>
        <img src='Assets/About us/1.png' className='relative z-20'></img>
      </div>
      <div>
        <p className='text-white text-2xl tracking-normal md:pt-0 pt-4 md:tracking-[4px] font-[700]  md:px-48'>GFB, short for “Go for Broke”, is more than just our name - it's the principle that guides us.
          <br /><br />
          Inspired by the relentless determination of the 442nd Regimental Combat Team in WWII, we commit wholeheartedly to each and every project.
          <br /><br />
          Embracing the “all or nothing” spirit in everything we do. </p>
      </div>

    </div>
  )
}

export default Philoshphy
