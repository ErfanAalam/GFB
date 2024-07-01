import React from 'react'
import colors from '../utils/color'

console.log(typeof(colors.mainTextColor));

const ProcessCards = ({ src, heading, desc }) => {
  return (
    <div>
      <div className=' w-[100%] md:w-[300px]  text-center  text-black md:shadow-none shadow-custom rounded-[60px] p-1'>
        <div className='h-[600px] md:h-[652px] w-[260px] md:w-[300px] relative flex flex-col items-center justify-end bg-cover bg-center gap-6 rounded-[60px] ' style={{ backgroundImage: `url(${src})` }}>
          <h3 className={`text-[${colors.mainTextColor}] text-2xl`}>{heading} </h3>
          <p className='text-white px-4'>{desc}</p>
          <a href="/process"> <img src='Assets/Home/btn.png' alt='' /></a>
        </div>
      </div>
    </div>
  )
}

export default ProcessCards
