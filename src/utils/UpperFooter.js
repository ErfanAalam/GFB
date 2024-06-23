import React from 'react'
import colors from './color.js'

const UpperFooter = () => {

  function handleStartYourProject() { }

  return (
    <div id='startjourney' className=' relative text-white flex flex-col items-center bg-[hsl(231,11%,13%)] leading-[20px] gap-10 md:leading-[50px] py-6' >
      <img src='Assets/Home/bg/start your Bulding Journey.png' className='absolute md:w-[100%] h-[73%] md:h-[80%]' />

      <div className='w-[80%] md:w-[80%] lg:w-[100%] xl:w-[60%]  text-center flex flex-col items-center justify-center md:gap-0 gap-2 mt-[10px] md:mt-[10px]'>
        <h1 className=' text-[20px] md:text-[50px] md:mt-32 mt-20 '>Start Your Build Journey</h1>
        <hr className='w-[250px] md:w-[550px] mb-10 border-t-4' />
        <div className='w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%]'>
          <p className='text-[16px] md:text-[28px] mb-2'>At GFB, we turn aspirations into architectural masterpieces. </p>
          <p className='text-[16px] md:text-[28px] mb-2'>Serving California, we're ready to bring your construction dreams to life. </p>
          <p className='text-[16px] md:text-[28px] mt-4'>Why wait?</p>
          <p className='text-[16px] md:text-[28px]'>Let’s begin your seamless construction journey the right way!</p>
        </div>
      </div>

      <a href='/contact' className='mt-16 md:mt-16'>
        <button onClick={handleStartYourProject()} className={`text-[${colors.textWhite}] cursor-pointer  text-[30px] w-[325px] md:w-[625px]  p-2 bg-black bg-opacity-70  h-[58px] leading-[31.35px] border-2 border-[${colors.mainTextColor}] `}>Start Your Project</button>
      </a>

    </div>
  )
}

export default UpperFooter
