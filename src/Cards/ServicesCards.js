import React from 'react'

const ServicesCards = ({title,src}) => {
  return (
    <div className='h-[735px] w-[100%] md:w-[300px]  text-center '>
      <button className='h-[70px] md:h-[80px] w-[200px]  md:w-[180px] shadow-md shadow-white p-1` text-[24px] md:text-[28px] mb-0 relative md:top-0 top-6 md:mb-14 tracking-wide leading-8 rounded-lg bg-[rgb(29,30,36)] font-bold '>{title}</button>
      <div className='h-[602px] w-[337px] md:w-[300px] flex flex-col items-center justify-end bg-cover bg-center rounded-[60px]' style={{backgroundImage:`url(${src})`}}>
            <a href="/" > <img src='Assets/Home/btn.png' alt=''/></a>
      </div>
    </div>
  )
}

export default ServicesCards
