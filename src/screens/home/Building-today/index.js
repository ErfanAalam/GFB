import React from 'react'
import colors from '../../../utils/color'

const Building = () => {
  return (
    <div className=' bg-[rgb(29,30,36)] text-white pt-10' >
      <h2 className='text-[26px] md:text-[40px] text-center  pb-2 '>Building Today, for Tomorrow</h2>
      <hr className='border-t-2 border-orange-500 w-[90%] md:w-[55%] ' />

      <div className=' flex md:flex-row flex-col justify-between relative' >

        <div className='relative p-6 md:p-0 md:w-[40%] pt-10 ' >
          <img src='Assets/Home/more_about_us.png' className='w-[592] relative z-10 bg-black md:bg-transparent md:w-[792px] md:h-[600px] md:pt-10' alt=''></img>
          <button className={`text-[${colors.textWhite}] hidden md:block absolute z-20 top-[100px]  border-r-0 right-[-60px] text-[24px] p-2 bg-black bg-opacity-70  h-[52px] leading-[31.35px] border-2`}>MORE ABOUT US</button>
        </div>

        <div className='overflow-hidden flex w-[64px] justify-between absolute right-[40%] md:left-[48.4%] ' >
          <span className='w-[4px] h-[3020px] bg-orange-400'>
            <hr className='rotate-90 h-fit' />
          </span>
          <span className='w-[4px] h-[3020px] bg-black'>
            <hr className='rotate-90 h-fit' />
          </span>
          <span className='w-[4px] h-[3020px] bg-white'>
            <hr className='rotate-90 h-fit' />
          </span>
        </div>

        <div className='left w-[100%] md:w-[50%] p-6 md:p-10 pt-0 mt-8 md:mt-0 md:pt-20 text-[25px] relative z-10  bg-[rgb(29,30,36)] md:bg-transparent md:text-[35px]'>
          <p>
            At GFB Construction, We recognize that today's structures lay the foundation for tomorrow's communities. <br /> <br /> We actively construct each new project with up to date technology and building methods in mind. <br /> <br /> Our projects don't just meet current demands, they anticipate the needs of future generations. Making GFB, the right choice.
          </p>
          <button className={`text-[${colors.mainTextColor}] rounded-md text-[24px]  md:ml-52 relative top-20 md:top-0 left-6 md:left-0  w-[225px]  p-2 bg-black bg-opacity-100 md:bg-opacity-70  h-[48px] leading-[31.35px] border-2`}>Learn More  </button>
          
        </div>


      </div>
    </div>
  )
}

export default Building
