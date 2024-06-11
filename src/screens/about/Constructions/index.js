import React from 'react'

const Constructions = () => {
  return (
    <div className='bg-cover flex md:flex-row flex-col-reverse  relative justify-between p-8 md:p-10' style={{ backgroundImage: "url('Assets/Services/blur2.png')" }}>

      <div className='text-center flex flex-col w-[100%] md:w-[40%]  md:ml-20 gap-20 justify-center '>
        <div className='flex flex-col items-center md:static absolute top-0 right-[25%] pt-8'>
          <h1 className='text-3xl md:text-5xl tracking-[6px]  font-[700] text-orange-700'>Who We Are</h1>
          <hr className='md:w-[40%] w-[90%]' />
        </div>
        <p className='text-white text-2xl tracking-[4px] font-[700]'>
          GFB Construction is your trusted, licensed, and bonded contractor headquartered in Central California.
          <br /><br />
          We offer top-tier commercial and residential services with quality put first.
          <br /><br />
          The GFB team embodies a rich legacy of over 30+ years in the industry, ensuring that every project benefits from decades of accumulated expertise and insights.
        </p>
      </div>

      <div className='md:w-[40%] w-[100%] md:pt-0 pt-20'>
        <img src='Assets/About us/2.png' className='w-[500px]'></img>
      </div>
    </div>
  )
}

export default Constructions
