import React from 'react'

const Builder = () => {
  return (
    <div className='bg-[rgb(29,30,36)] bg-contain ' >
         <div className='overflow-hidden flex w-[100%] gap-4 justify-center ' >
          <span className='w-[4px] h-[200px] bg-orange-400'>
            <hr className='rotate-90 h-fit' />
          </span>
          <span className='w-[4px] h-[200px] bg-black'>
            <hr className='rotate-90 h-fit' />
          </span>
          <span className='w-[4px] h-[200px] bg-white'>
            <hr className='rotate-90 h-fit' />
          </span>
        </div>
        
        <div  className='w-[100%]  '>
            <hr className='h-fit border-t-4 border-orange-400 ml-[40%]' />
        </div>

        <div className='flex justify-center '>
          <p className='text-white [text-16px] md:text-[20px] text-center w-[100%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%] mt-20  leading-12 md:leading-10 tracking-[4px]'>
          We’re not just builders; we’re visionaries. GFB specializes in new Commercial and Residential construction, allowing us to build for the future. Let us see how we can help you with your Tenant Improvement, Paving, Custom Homes, Residential Complexes. and more.   
          </p>
        </div>

        <div  className='w-[60%]  '>
            <hr className='h-fit border-t-4 border-orange-400 ' />
        </div>

        <div className='overflow-hidden flex w-[100%] gap-4 justify-center ' >
          <span className='w-[4px] h-[200px] bg-orange-400'>
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

export default Builder
