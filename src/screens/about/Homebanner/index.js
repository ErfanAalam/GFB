import React from 'react'
import colors from '../../../utils/color'



const Homebanner = () => {
  return (
    <div id='homebanner' className="bg-cover bg-center md:bg-top flex flex-col py-24 md:py-0 md:pt-60 gap-0 bg-gray-800" style={{ backgroundImage: "url('Assets/About us/about_usbg.jpeg')" }}>
      <hr className={`w-[60%] ml-[40%] border-t-4 border-[${colors.mainTextColor}] hidden md:block`} />
      <div className='flex justify-center my-10'>
        <button className={`text-[${colors.mainTextColor}] md:w-[350px] text-4xl md:text-7xl  md:h-[100px]`}>About Us</button>
      </div>
      <hr className={`w-[60%] border-t-4 border-[${colors.mainTextColor}] hidden md:block`} />
      <div className='overflow-hidden md:flex w-[100%] gap-4 justify-center hidden' >
        <span className={`w-[4px] h-[140px] md:h-[240px]  bg-[${colors.mainTextColor}]`}></span>
        <span className='w-[4px] h-[140px]  md:h-[240px] bg-black'></span>
        <span className='w-[4px]  h-[140px] md:h-[240px]  bg-white'> </span>
      </div>
    </div>
  )
}

export default Homebanner
