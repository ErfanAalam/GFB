import React from 'react'
import colors from '../../../utils/color'

const Index = () => {


  return (
    <main className='bg-cover pb-10 bg-black flex flex-col items-center md:items-start' style={{ backgroundImage: "url('/Assets/Home/Hero.png')" }}>
      <h1 className={`text-[#EF6E16] text-[28px] md:text-[86px] mb-6 w-[100%] md:w-[1200px] text-center md:text-left px-6  md:px-[100px] font-[600]  pt-[190px] h-[342px] leading-[44px] md:leading-[104px] tracking-[2px]  md:tracking-[6px]`}><span className='text-white' >G</span>uided by expertise <span className='text-white' >F</span>ueled by passion <span className='text-white' >B</span>uilt on trust</h1>

      <h3 className='text-white text-[23px] md:text-[46px] w-[100%] md:w-[900px] text-center md:text-left mb-10 md:px-[100px] font-[600]  md:pt-[200px]  md:leading-[60px] tracking-[2px]'>California's Commercial and Residential Specialists. </h3>

      <p className={`text-[${colors.mainTextColor}] text-[20px] md:text-[24px] md:mt-[100px] font-[700] w-fit md:w-fit mx-0  md:mx-[100px] p-2 bg-black bg-opacity-70  h-[48px] leading-[31.35px] border-2 `}>Free Consultation</p>

    </main>
  )
}

export default Index

