import React from 'react'

const ChooseGfb = () => {
  return (
    <div className='bg-cover flex md:flex-row flex-col justify-around p-10' style={{ backgroundImage: "url('Assets/Services/blur2.png')" }}>

      <div className='w-[100%] md:w-[30%]'>
        <img src='Assets/About us/3.png' className='w-[500px]'></img>
      </div>

      <div className='text-center flex flex-col w-[100%] md:w-[50%] md:ml-20 gap-20 justify-center '>
        <div className='flex flex-col items-center'>
          <h1 className='text-[24px] md:text-5xl tracking-normal md:tracking-[6px] font-[700] text-orange-700'>Why Choose GFB Construction?</h1>
          <hr className='w-[85%]' />
        </div>
        <p className='text-white text-2xl tracking-[4px] font-[700]'>
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
