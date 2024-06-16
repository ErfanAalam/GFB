import React from 'react'
import colors from '../../../utils/color'


const Homebanner = () => {
  return (
    <div className="bg-cover  flex flex-col pt-56 gap-0  bg-gray-700" style={{backgroundImage:"url('Assets/Process/1.png')"}}>
   <hr className={`w-[60%] ml-[40%] border-t-4 border-[${colors.mainTextColor}]`} />
      <div className='flex justify-center my-10'>
        <button className={`text-[${colors.mainTextColor}] md:w-[350px] text-6xl  md:h-[100px]`}>Process</button>
      </div>
      <hr className='w-[60%] border-t-4 border-orange-500' />
      <div className='overflow-hidden flex w-[100%] gap-4 justify-center ' >
          <span className={`w-[4px] h-[200px] bg-[${colors.mainTextColor}]`}>
            <hr className='rotate-90 h-fit' />
          </span>
          <span className='w-[4px] h-[200px] bg-black'>
            <hr className='rotate-90 h-fit' />
          </span>
          <span className='w-[4px] h-[200px] bg-white'>
            <hr className='rotate-90 h-fit' />
          </span>
        </div>
  </div>
  )
}

export default Homebanner
