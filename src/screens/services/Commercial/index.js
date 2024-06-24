import React from 'react'
import colors from '../../../utils/color'
import '../../../App.css'


const Commercial = () => {
  return (
    <div id='commercial' className='text-white md:py-20 py-16 md:pl-6 relative  2xl:pl-40 pl-4 pt-10 md:pt-48'>
            <div className='absolute bg-black h-[20vh] w-[90%] blur-3xl opacity-100 top-[-50px] '></div>

      <div className='flex md:flex-row relative flex-col-reverse justify-between gap-10 md:gap-10 xl:gap-20 2xl:gap-40  md:p-0 p-0 pt-20'>

        <div className=' w-[100%] md:w-[95%] 2xl:w-[70%] md:px-4 xl::px-20 px-4 mt-20'>
          <div className='flex justify-center md:justify-start'>
            <h1 className={`text-3xl md:text-[24px] lg:text-[30px] 2xl:text-5xl md:static  text-[${colors.mainTextColor}] absolute top-0 `}>Commercial</h1>
          </div>

          <p className='text-[20px] md:text-[20px] 2xl:text-2xl text-white'>GFB excels in developing commercial spaces that are both practical and visually appealing.
            <br /> <br />
            Our expertise extends to offices, warehouses, retail stores, restaurants, and more. Focusing on providing solutions that are efficient and cost-effective.
            <br /><br />
            We work closely with you to ensure that the final space reflects your brand and needs.
            <br /><br />
            Count on us for quality work, on-schedule completion, and designed to exceed your expectations.
          </p>

          <div className='mt-10 md:block flex md:flex-row flex-col gap-8'>

            <div className='flex flex-row items-center md:gap-10 gap-0'>
              <img src='Assets/Services/new_commercial_builds.png' className='md:w-[100px] w-[50px]'></img>
              <p className='md:text-2xl text-[16px]'>New Commercial Builds</p>
            </div>

            <div className='flex flex-row items-center ml-8 md:ml-20  md:gap-10 gap-0' >
              <img src='Assets/Services/tenant_improvement.png' className='md:w-[100px] w-[50px]'></img>
              <p className='md:text-2xl text-[16px]'>Tenant Improvement</p>
            </div>

            <div className='flex flex-row  items-center ml-20 md:ml-40 md:gap-10 gap-0'>
              <img src='Assets/Services/retail_construction.png' className='md:w-[100px] w-[50px]'></img>
              <p className='md:text-2xl text-[16px]'>Retail Construction</p>
            </div>

          </div>
        </div>

        <div className='flex justify-end relative overflow-hidden pt-10'>
          <img src='Assets/Services/Group 3620.png' className='absolute top-[-160px] 3xsm:top-[-200px] 4xsm:top-[-210px] right-[140px] 4xsm:right-[150px] w-[100%] 2xsm:w-[100%] h-[270px] 3xsm:h-[340px] 4xsm:h-[360px] block md:hidden'/>
          <img src='Assets/Services/commercial.png' className='w-[200px] 2xl:w-[600px] md:w-[400px] md:h-[500px] lg:h-[500px] 2xl:h-[700px] relative z-20 ' ></img>
        </div>
      </div>
    </div>
  )
}

export default Commercial
