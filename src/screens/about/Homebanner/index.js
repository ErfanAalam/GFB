import React from 'react'

const Homebanner = () => {
  return (
    <div className="bg-cover  flex justify-center items-center bg-black" style={{backgroundImage:"url('Assets/About us/about_usbg.jpeg')"}}>
    <button className='text-orange-500 my-72 shadow-md shadow-orange-400 bg-none bg-blend-multiply md:bg-white md:w-[350px] text-6xl font-[700] md:h-[100px]'>About Us</button>
  </div>
  )
}

export default Homebanner
