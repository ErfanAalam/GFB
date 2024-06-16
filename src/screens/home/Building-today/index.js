import React from 'react'
import colors from '../../../utils/color'

const Building = () => {

  function handleLearnMore(){
    
  }

  return (
    <div id='building' className=' bg-[rgb(29,30,36)] text-white pt-10' >
      <h2 className='text-[26px] md:text-[40px] text-center  pb-2 '>Building Today, for Tomorrow</h2>
      <hr className={`border-t-2 border-[${colors.mainTextColor}] w-[90%] md:w-[55%] ` }/>

      <div className=' flex md:flex-row flex-col justify-between relative' >

        <div className='relative p-6 md:p-0 md:w-[40%] pt-10 ' >
          <img src='Assets/Home/more_about_us.png' className='w-[592px] md:w-[529px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] 2xl:w-[792px]  relative z-10 bg-black md:bg-transparent  md:pt-10' alt=''></img>
          <button className={`text-[${colors.textWhite}] hidden md:block absolute z-20 top-[100px]  border-r-0 right-[-60px] text-[24px] p-2 bg-black bg-opacity-70  h-[52px] leading-[31.35px] border-2`}>MORE ABOUT US</button>
        </div>

        <div className='overflow-hidden flex w-[64px] justify-between absolute right-[40%] md:left-[48.4%] ' >
          <span className={`w-[4px] 2xl:h-[2920px] md:h-[2420px]   bg-[${colors.mainTextColor}]`}>
            <hr className='rotate-90 h-fit' />
          </span>
          <span className='w-[4px] 2xl:h-[2920px] md:h-[2420px] bg-black'>
            <hr className='rotate-90 h-fit' />
          </span>
          <span className='w-[4px] 2xl:h-[2920px] md:h-[2420px] bg-white'>
            <hr className='rotate-90 h-fit' />
          </span>
        </div>

        <div className='left w-[100%] md:w-[45%]  p-6 md:p-6 pt-0 md:pt-20 mt-8 md:mt-0 text-[25px] md:text-[16px] lg:text-[20px] xl:text-[30px] 2xl:text-[35px] relative z-10  bg-[rgb(29,30,36)] md:bg-transparent '>
          <p>
            At GFB Construction, We recognize that today's structures lay the foundation for tomorrow's communities. <br /> <br /> We actively construct each new project with up to date technology and building methods in mind. <br /> <br /> Our projects don't just meet current demands, they anticipate the needs of future generations. Making GFB, the right choice.
          </p>
         <div className='flex justify-center'>
         <button onClick={handleLearnMore()} className={`text-[${colors.mainTextColor}] rounded-md text-[24px]   relative top-20 md:top-0 left-6 md:left-0 w-[225px]  p-2 bg-black bg-opacity-100 md:bg-opacity-70  h-[48px] leading-[31.35px] border-2`}>Learn More  </button>
         </div>

        </div>


      </div>
    </div>
  )
}

export default Building
