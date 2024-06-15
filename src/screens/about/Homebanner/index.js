import React from 'react'

const Homebanner = () => {
  return (
    <div className="bg-cover  flex flex-col pt-56 gap-0  bg-black" style={{backgroundImage:"url('Assets/About us/about_usbg.jpeg')"}}>
     <hr className='w-[60%] ml-[40%] border-t-4 border-orange-500' />
      <div className='flex justify-center my-10'>
        <button className='text-orange-500 shadow-md shadow-orange-400 bg-none bg-blend-multiply md:bg-white md:w-[350px] text-6xl  md:h-[100px]'>About Us</button>
      </div>
      <hr className='w-[60%] border-t-4 border-orange-500' />
      <div className='overflow-hidden flex w-[100%] gap-4 justify-center ' >
          <span className='w-[4px] h-[200px] bg-orange-500'>
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
