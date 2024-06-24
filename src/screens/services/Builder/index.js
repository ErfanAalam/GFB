import React from 'react'
import colors from '../../../utils/color'

const Builder = () => {
  return (
    <div id='builder' className='bg-[rgb(29,30,36)]  ' >
         <div className='overflow-hidden flex w-[100%] gap-4 justify-center ' >
          <span className={`w-[3px] h-[180px] bg-[${colors.mainTextColor}]`}></span>
          <span className='w-[3px]  h-[180px] bg-black'> </span>
          <span className='w-[3px]  h-[180px] bg-white'></span>
        </div>
        
        <div  className='w-[100%]  '>
            <hr className={`h-fit border-t-4 border-[${colors.mainTextColor}] ml-[40%]`} />
        </div>

        <div className='flex justify-center '>
          <p className='text-white [text-16px] md:text-[24px] text-center w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[60%] my-10 md:my-6 md:mt-14   leading-12 md:leading-10 tracking-[4px]'>
          We’re not just builders; we’re visionaries. GFB specializes in new Commercial and Residential construction, allowing us to build for the future. Let us see how we can help you with your Tenant Improvement, Paving, Custom Homes, Residential Complexes. and more.   
          </p>
        </div>

        <div  className='w-[60%]  '>
            <hr className={`h-fit border-t-4 border-[${colors.mainTextColor}] `} />
        </div>

        <div className='overflow-hidden flex w-[100%] gap-4 justify-center ' >
          <span className={`w-[3px] h-[180px] bg-[${colors.mainTextColor}]`}></span>
          <span className='w-[3px]  h-[180px] bg-black'></span>
          <span className='w-[3px]  h-[180px] bg-white'></span>
        </div>

    </div>
  )
}

export default Builder
