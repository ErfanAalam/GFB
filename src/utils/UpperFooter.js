import React from 'react'
import colors from './color.js'

const UpperFooter = () => {
  return (
    <div className=' bg-center bg-cover md:bg-contain bg-no-repeat text-white flex justify-center items-center p-6  bg-[hsl(231,11%,13%)] leading-[20px] md:leading-[50px]' style={{ backgroundImage: "url('Assets/Home/bg/start your Bulding Journey.png')" }}>
      <div className='w-[100%] md:w-[770px] text-center flex flex-col items-center gap-4 mt-[150px] md:mt-[200px]'>
        <h1 className='text-[25px] md:text-[50px] font-[700] '>Start Your Build Journey</h1>
        <hr className='w-[350px] md:w-[650px] mb-10' />
        <p className='text-[20px] md:text-[32px] mb-2'>At GFB, we turn aspirations into architectural masterpieces. </p>
        <p className='text-[20px] md:text-[32px] mb-2'>Serving California, we're ready to bring your construction dreams to life. </p>
        <p className='text-[20px] md:text-[32px] mt-4'>Why wait?</p>
        <p className='text-[20px] md:text-[32px]'>Let’s begin your seamless construction journey the right way!</p>

        <button className={`text-[${colors.textWhite}] mt-18 md:mt-10 text-[30px]  font-[600] w-[325px] md:w-[625px]  p-2 bg-black bg-opacity-70  h-[58px] leading-[31.35px] border-2 border-[#EF6E16] `}>Start Your Project</button>
      </div>

    </div>
  )
}

export default UpperFooter
