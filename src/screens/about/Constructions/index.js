import React from 'react'
import colors from '../../../utils/color'

const Constructions = () => {
  return (
    <div id='constructions' className='bg-cover bg-center flex md:flex-row flex-col-reverse  relative justify-between p-4 md:py-[150px] py-10 md:p-10' style={{ backgroundImage: "url('Assets/Services/blur2.png')" }}>
      <img src='Assets/About us/Assets/2.png' className=' absolute top-[75%] md:top-[80%] right-[380px] md:right-[80px] lg:right-[180px] xl:right-[450px] z-10' />
      <div className='text-center flex flex-col w-[100%] md:w-[90%] 2xl:w-[40%] md:ml-0 xl:ml-20 gap-20 items-center '>
        <div className='flex flex-col items-center md:static absolute top-0 pt-8 gap-2'>
          <h1 className={`text-3xl md:text-5xl tracking-[6px] text-[${colors.mainTextColor}]`}>Who We Are</h1>
          <hr className='w-[80%] md:w-[60%] xl:w-[70%] 2xl:w-[80%] border-t-4' />
        </div>
        <p className='text-white text-[16px] md:text-2xl tracking-[4px] '>
          GFB Construction is your trusted, licensed, and bonded contractor headquartered in Central California.
          <br /><br />
          We offer top-tier commercial and residential services with quality put first.
          <br /><br />
          The GFB team embodies a rich legacy of over 30+ years in the industry, ensuring that every project benefits from decades of accumulated expertise and insights.
        </p>
      </div>

      <div className='md:w-[60%] lg:w-[50%] 2xl:w-[40%] w-[100%] md:pt-0 pt-20 relative z-20'>
        <img src='Assets/About us/2.png' className='w-[600px] md:h-[700px] lg:h-[700px] xl:h-[700px]'></img>
      </div>
    </div>
  )
}

export default Constructions
