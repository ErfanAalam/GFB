import React from 'react'

const ProcessCards = ({ src, heading, desc }) => {
  return (
    <div>
      <div className=' w-[100%] md:w-[300px]  text-center  text-black '>
        <div className='h-[702px] w-[337px] md:w-[300px] relative flex flex-col items-center justify-end bg-cover bg-center rounded-[60px] ' style={{ backgroundImage: `url(${src})` }}>
          
          <h3 className='text-orange-700 '>{heading}</h3>
          <p className='text-white px-4'>{desc}</p>
          <a href="/"> <img src='Assets/Home/btn.png' alt='' /></a>
        </div>
      </div>
    </div>
  )
}

export default ProcessCards
