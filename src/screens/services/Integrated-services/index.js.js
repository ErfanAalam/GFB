import React from 'react'
import colors from '../../../utils/color'


const Integrated = () => {
  return (

    <div id='integrated' className='relative bg-center bg-cover bg-black text-white pb-10 overflow-hidden md:overflow-visible' style={{ backgroundImage: "url('Assets/Services/blur0.jpg')" }}>
      <img src='Assets/Services/Group 3620.png' className='absolute top-[25%] right-[-200px] md:left-2 z-20 md:z-0 h-[600px] md:h-fit '/>
      <div className='flex md:flex-row flex-col relative items-center gap-10 md:gap-4 2xl:gap-40 md:p-4 lg:p-4 2xl:p-20 p-6 md:pt-0 pt-32'>

        <div>
          <img src='Assets/Services/intergrated_services.png' className='w-[400px] md:w-[800px] md:h-[600px] lg:h-full 2xl:w-[500px]' ></img>
        </div>


        <div className='w-[100%] md:w-[95%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] md:py-20 py-0  px-0 md:px-0 lg:px-2 xl:px-18 2xl:px-24'>
          <div className='flex justify-center md:justify-start'>
            <h1 className={`text-[28px] lg:text-3xl xl:text-4xl 2xl:text-5xl md:static  text-[${colors.mainTextColor}] absolute  top-10`}>Integrated Services</h1>
          </div>

          <p className='text-[20px] md:text-[22px] 2xl:text-[28px] relative z-50'>Our in-house Architects, Electricians, and Engineers help provide a seamless experience for you and your project.
            <br /> <br />
            While also allowing us to take on large electrical and utility-specific jobs without looking elsewhere.
            <br /> <br />
            See how our skilled professionals can help with your next project!</p>

          <div className='mt-10 md:block flex gap-4'>

            <div className='flex flex-row items-center md:gap-10 gap-0'>
              <img src='Assets/Services/Architects.png' className='md:w-[100px] w-[40px]'></img>
              <p className='md:text-2xl text-[16px]'>Architects</p>
            </div>

            <div className='flex flex-row items-center md:ml-10 lg:ml-20 ml-0 md:gap-10 gap-0' >
              <img src='Assets/Services/Electricians.png' className='md:w-[100px] w-[40px]'></img>
              <p className='md:text-2xl text-[16px]'>Electricians</p>
            </div>

            <div className='flex flex-row  items-center md:gap-10 gap-0'>
              <img src='Assets/Services/Engineers.png' className='md:w-[100px] w-[40px]'></img>
              <p className='md:text-2xl text-[16px]'>Engineers</p>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Integrated
