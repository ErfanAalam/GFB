import React from 'react'
import colors from '../../../utils/color'


const Homebanner = () => {
  return (
    <div id='homebanner' className="bg-cover bg-right md:bg-center flex flex-col py-28 md:py-0 md:pt-56 gap-0  bg-gray-700" style={{backgroundImage:"url('Assets/Process/1.png')"}}>
   <hr className={`w-[60%] ml-[40%] border-t-4 border-[${colors.mainTextColor}] hidden md:block`} />
      <div className='flex justify-center my-10'>
        <button className={`text-white md:w-[350px] text-6xl  md:h-[100px]`}>Process</button>
      </div>
      <hr className='w-[60%] border-t-4 border-orange-500 hidden md:block' />
      <div className='overflow-hidden md:flex w-[100%] gap-4 justify-center hidden ' >
          <span className={`w-[4px] h-[160px] md:h-[200px] bg-[${colors.mainTextColor}]`}> </span>
          <span className='w-[4px]  h-[160px] md:h-[200px] bg-black'> </span>
          <span className='w-[4px]  h-[160px] md:h-[200px] bg-white'></span>
        </div>
  </div>
  )
}

export default Homebanner
