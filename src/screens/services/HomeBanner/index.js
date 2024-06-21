import React from 'react'
import colors from '../../../utils/color'


const Homebanner = () => {
  return (
    <div id='homebanner' className="bg-cover bg-center flex flex-col pt-40 md:pt-56 gap-0 bg-black" style={{ backgroundImage: "url('Assets/Services/hero.png')" }}>
      <hr className={`w-[60%] ml-[40%] border-t-4 border-[${colors.mainTextColor}]`} />
      <div className='flex justify-center my-4'>
        <button className={`text-[${colors.mainTextColor}]  md:w-[350px] text-5xl md:text-7xl  md:h-[100px]`}>Services</button>
      </div>
      <hr className={`w-[60%] border-t-4 border-[${colors.mainTextColor}]`} />
      <div className='overflow-hidden flex w-[100%] gap-4 justify-center ' >
        <span className={`w-[4px] h-[100px] bg-[${colors.mainTextColor}]`}></span>
        <span className='w-[4px]  h-[100px] bg-black'></span>
        <span className='w-[4px]  h-[100px] bg-white'></span>
      </div>
    </div>
  )
}

export default Homebanner
