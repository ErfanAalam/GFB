import React from 'react'
import colors from '../../../utils/color'

const Homebanner = () => {

  function handleFreeConsultation (){
    
  }


  return (
    <main id='homebanner' className='md:bg-cover bg-cover pb-24 bg-gray-800 flex flex-col items-center gap-8' style={{ backgroundImage: "url('/Assets/Home/Hero.png')" }}>
      <h1 className={`text-[${colors.mainTextColor}] text-[38px] md:text-[46px] lg:text-[76px]  w-[100%]  text-center  px-2 md:w-[90%] lg:w-[100%] xl:w-[80%] 2xl:w-[45%] pt-[140px] leading-[44px] md:leading-[104px] tracking-[2px]  md:tracking-[6px]`}><span className='text-white' >G</span>uided by expertise <span className='text-white' >F</span>ueled by passion <span className='text-white' >B</span>uilt on trust</h1>

      <h3 className='text-white text-[23px] md:text-[30px] lg:text-[36px] w-[100%] md:w-[90%] lg:w-[60%] xl:w-[50%] 2xl:w-[30%] text-center  md:leading-[60px] tracking-[2px]'>California's Commercial and Residential Specialists. </h3>

      <a href='/contact'>
      <button onClick={handleFreeConsultation()} className={`text-[${colors.mainTextColor}] cursor-pointer text-[20px] rounded-lg text-center md:text-[24px] md:mt-[50px]  w-[190px] md:w-[235px]  p-2 bg-black bg-opacity-70 md:tracking-[1px] tracking-normal  border-2 `}>Free Consultation</button>
      </a>

    </main>
  )
}

export default Homebanner

