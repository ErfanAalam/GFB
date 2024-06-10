import React from 'react'

const ProcessCards = ({count, title, src, heading,desc  }) => {
  return (
    <div>
      <div className='-[735px] w-[100%] md:w-[300px]  text-center  text-black '>
        <div className='h-[602px] w-[337px] md:w-[300px] relative flex flex-col items-center justify-end bg-cover bg-center rounded-[60px] ' style={{ backgroundImage: `url(${src})` }}>
          <span className='absolute top-0 text-[34px] font-[900] text-orange-700'>{count}</span>
          <button className='h-[70px] md:h-[70px] w-[200px]  md:w-[240px] shadow-md shadow-white p-1 text-white text-[24px] md:text-[24px] mb-0 absolute  md:top-10 top-20 md:mb-14 tracking-wide leading-8 rounded-lg bg-[rgb(29,30,36)] font-bold '>{title}</button>
          <h3 className='text-orange-700 font-[700]'>{heading}</h3>
          <p>{desc}</p>
          <a href="/"> <img src='Assets/Home/btn.png' alt='' /></a>
        </div>
      </div>
    </div>
  )
}

export default ProcessCards
