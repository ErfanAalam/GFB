import React from 'react'

const ServicesCards = ({title,src}) => {
  return (
    <div className='h-[735px] w-[100%] md:w-[300px]  text-center '>
      <button className=' w-[200px]  md:w-[180px] py-2 shadow-md shadow-white p-1` text-[24px] md:text-[24px] mb-0 relative md:top-0 top-6 md:mb-14 tracking-wide leading-8 rounded-lg bg-[rgb(29,30,36)]  '>{title}</button>
      <div className='h-[602px] w-[337px] md:w-[300px] flex flex-col items-center justify-end bg-cover bg-center rounded-[60px]' style={{backgroundImage:`url(${src})`}}>
            <a href="/" > <img src='Assets/Home/btn.png' alt='' className='w-[100%]'/></a>
      </div>
    </div>
  )
}

export default ServicesCards
