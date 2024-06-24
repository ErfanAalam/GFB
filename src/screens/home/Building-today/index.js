import React from 'react'
import colors from '../../../utils/color'

const Building = () => {

  function handleLearnMore() {

  }

  return (
    <div id='building' className=' bg-[rgb(29,30,36)] text-white py-10' >
      <h2 className='text-[26px] md:text-[40px] text-center  pb-2 tracking-normal md:tracking-[6px]'>Building Today, for Tomorrow</h2>
      <hr className={`border-t-4 border-[${colors.mainTextColor}] w-[95%] md:w-[68%] lg:w-[65%] xl:w-[63%] 2xl:w-[59%]`} />

      <div className=' flex md:flex-row flex-col justify-between relative' >

        <div className='relative p-6 md:p-0 md:w-[40%] pt-10 ' >
          <img src='Assets/Home/more_about_us.png' className='w-[592px] md:w-[529px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px] 2xl:w-[792px]  relative z-30 bg-black md:bg-transparent  md:pt-10' alt=''></img>
          <a href='/about'>
            <button className={`text-[${colors.textWhite}] hidden md:block absolute z-30 top-[200px]  border-r-0 right-[-60px] text-[24px] p-2 bg-black bg-opacity-70  h-[72px] leading-[31.35px] border-2`}>MORE ABOUT US</button>
          </a>
        </div>

        <div className='overflow-hidden flex w-[64px] h-[98%] md:h-[300%] justify-between absolute right-[50px] md:left-[48.4%] z-20 md:z-10' >
          <span className={`w-[4px]  bg-[${colors.mainTextColor}]`}> </span>
          <span className='w-[4px]  bg-black'> </span>
          <span className='w-[4px]  bg-white'></span>
        </div>

        <div className='left w-[100%] md:w-[45%]  p-6 md:p-6 pt-0 md:pt-20 mt-8 md:mt-0 text-[25px] md:text-[16px] lg:text-[20px] xl:text-[30px] 2xl:text-[35px]  z-30  bg-[rgb(29,30,36)] md:bg-transparent mb-20'>
          <div >
            <p>
              At GFB Construction, We recognize that today's structures lay the foundation for tomorrow's communities. <br /> <br /> We actively construct each new project with up to date technology and building methods in mind. <br /> <br /> Our projects don't just meet current demands, they anticipate the needs of future generations. Making GFB, the right choice.
            </p>

          </div>
          <div className='flex justify-center mr-10'>
            <a href='/about' className='md:static absolute bottom-0  flex justify-center items-center z-[100]'>
              <button onClick={handleLearnMore()} className={`text-[${colors.mainTextColor}] rounded-md text-[24px] mt-10 w-[225px]  p-2 bg-black bg-opacity-100 md:bg-opacity-70  h-[48px] leading-[31.35px] border-4 flex items-center justify-center`}>Learn More  </button>
              <hr className='w-[15%] xsm:w-[30%] 2xsm:w-[45%] block md:hidden border-t-4 absolute right-[-35px] xsm:right-[-70px] 2xsm:right-[-105px] bottom-[22px]' />
            </a>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Building
