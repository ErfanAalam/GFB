import React from 'react'

const ServicesCards = ({title,src, mdstyle, smstyle}) => {
  return (
    <div className='h-[685px] w-[100%] md:w-[300px] text-center '>
      <button className={`w-[170px]  md:w-[200px] ${smstyle} md:${mdstyle, smstyle} shadow-inner shadow-gray-600 p-1 text-[20px] md:text-[24px] mb-0 relative md:top-0 top-6 md:mb-14 tracking-tight leading-8 rounded-[15px] bg-[rgb(29,30,36)]`}>{title}</button>
      <div className='h-[602px] w-[310px] md:w-[300px] flex flex-col items-center justify-end bg-cover bg-center rounded-[60px]' style={{backgroundImage:`url(${src})`}}>
            <a href="/services" > <img src='Assets/Home/btn.png' alt='' className=''/></a>
      </div>
    </div>
  )
}

export default ServicesCards
