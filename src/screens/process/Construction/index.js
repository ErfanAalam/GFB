import React from 'react'

const Construction = () => {
  return (
    <div className=' bg-[rgb(29,30,36)]  flex '>

      <div className='overflow-hidden flex w-[64px] mx-2 relative md:mx-20 justify-between  ' >
      <img src='Assets/Contact us/2.png' className='absolute  bottom-60 left-0'/>
        <span className='w-[4px] h-[100%] bg-black'>
          <hr className='rotate-90 h-fit' />
        </span>
        <span className='w-[4px] h-[100%] bg-orange-600'>
          <hr className='rotate-90 h-fit' />
        </span>
        <span className='w-[4px] h-[100%] bg-black'>
          <hr className='rotate-90 h-fit' />
        </span>
      </div>

      <div className='p-2 md:p-20 w-[80%] mt-4'>

        <div className='text-2xl md:text-4xl text-white font-[700]'>
          <h1 className='md:text-left text-center'>CONSTRUCTION</h1>
        </div>

        <div className='flex ml-2 md:ml-20 md:flex-row flex-col-reverse justify-between items-center p-2 relative md:pt-0 pt-16'>
          <div className='w-[100%] md:w-[50%]'>
            <h1 className='text-[20px] md:text-3xl text-orange-600 absolute top-6 text-center'>4. Construction Phase</h1>
            <p className='font-[600] md:font-[900] text-[16px] md:text-[20px] text-white tracking-normal md:tracking-[2px]'>We maintain transparent communication through regular updates and scheduled on-site meetings, keeping you closely connected to the project's progress.
              <br /> <br />
              Our commitment is to uphold safety, maximize efficiency, and ensure top-quality construction at every stage."</p>
          </div>

          <div className='w-[100%] md:w-[30%] flex justify-center'>
            <img src='Assets/Process/5.png' className='w-[220px] md:w-[180px]' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default Construction
