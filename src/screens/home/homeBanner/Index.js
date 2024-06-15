import React from 'react'
import colors from '../../../utils/color'

const Homebanner = () => {


  return (
    <main className='bg-cover pb-10 bg-gray-800 flex flex-col items-center ' style={{ backgroundImage: "url('/Assets/Home/Hero.png')" }}>
      <h1 className={`text-[${colors.mainTextColor}] text-[38px] md:text-[46px] lg:text-[76px]  w-[100%]  text-center  px-2 md:w-[90%] lg:w-[100%] xl:w-[80%] 2xl:w-[45%] pt-[170px] h-[342px] leading-[44px] md:leading-[104px] tracking-[2px]  md:tracking-[6px]`}><span className='text-white' >G</span>uided by expertise <span className='text-white' >F</span>ueled by passion <span className='text-white' >B</span>uilt on trust</h1>

      <h3 className='text-white text-[23px] md:text-[30px] lg:text-[36px] w-[100%] md:w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[30%] text-center  mb-10  md:pt-[200px]  md:leading-[60px] tracking-[2px]'>California's Commercial and Residential Specialists. </h3>

      <p className={`text-[${colors.mainTextColor}] text-[20px] text-center md:text-[24px] md:mt-[50px]  w-[190px] md:w-[235px]  p-2 bg-black bg-opacity-70 md:tracking-[1px] tracking-normal  border-2 `}>Free Consultation</p>

    </main>
  )
}

export default Homebanner

