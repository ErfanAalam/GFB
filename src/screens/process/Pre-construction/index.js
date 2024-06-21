import React from 'react'
import colors from '../../../utils/color'


const PreConstruction = () => {
  return (
    <div className='bg-gray-200 flex relative '>

      <img src='Assets/Contact us/2.png' className='w-[50px] absolute md:top-[200px]  top-14       left-[-10px] md:left-14 border-black' />
      <img src='Assets/Contact us/2.png' className='w-[50px] absolute md:top-[600px]  top-[700px]  left-[-10px] md:left-14 border-black' />
      <img src='Assets/Contact us/2.png' className='w-[50px] absolute md:top-[1000px] top-[1350px] left-[-10px] md:left-14 border-black' />

      <div id='preconstruction' className='overflow-hidden flex w-[64px] mx-4 md:mx-20 relative z-50 justify-between  ' >
        <div className='absolute top-4 flex left-5 gap-3'>
          <span className='text-3xl'>0</span>
          <span className='text-3xl'>1</span>
        </div>

        <span className='w-[4px] h-[100%] bg-black'>


        </span>
        <span className='w-[4px] h-[100%] bg-white'></span>
        <span className='w-[4px] h-[100%] bg-white'></span>
      </div>

      <div className='p-2 md:p-4 xl:p-20 w-[80%] mt-4 flex flex-col gap-4 md:gap-8 relative z-10'>

        <div className='text-[24px] md:text-[28px] lg:text-3xl xl:text-4xl '>
          <h1 className=' '>PRE-CONSTRUCTION</h1>
        </div>

        <div className='flex m-0 md:ml-4 lg:ml-20 md:flex-row md:pt-0 pt-20 flex-col-reverse gap-0 md:gap-20 items-center relative '>
          <div className='w-[100%] md:w-[90%] xl:w-[90%]'>
            <h1 className={`text-[20px] md:text-[30px] xl:text-3xl text-[${colors.mainTextColor}] md:static absolute top-10`}>1. Consultation & Discovery</h1>
            <p className=' text-[16px] md:text-2xl tracking-[2px]'>We begin with a thorough assessment of your job site, project scope, and feasibility.
              <br /> <br />
              Our goal is to meticulously understand your vision, ensuring a solid, informed start to every project.</p>
          </div>

          <div className='w-[100%] md:w-[70%] lg:w-[30%]'>
            <img src='Assets/Process/2.png' />
          </div>
        </div>

        <div className='flex m-2 md:ml-0 lg:ml-2 md:pt-0 pt-20 md:flex-row flex-col gap-0 md:gap-20  items-center relative'>

          <div className='w-[100%]  md:w-[70%] lg:w-[30%] xl:w-[30%]'>
            <img src='Assets/Process/3.png' />
          </div>

          <div className='w-[100%] md:w-[90%] lg:w-[70%] xl:w-[80%]'>
            <h1 className={`text-[20px] md:text-3xl text-[${colors.mainTextColor}] md:static absolute top-10`}>2. Design & Planning</h1>
            <p className=' text-[16px] md:text-2xl tracking-[2px]  xl:pr-40'>At this stage, our in-house architects and engineers take the lead, transforming your ideas into actionable blueprints.
              <br /> <br />
              We ensure every design is efficient, innovative, and tailored to your needs.</p>
          </div>

        </div>

        <div className='flex m-2 md:ml-4 lg:ml-20 md:pt-0 pt-20 md:flex-row flex-col-reverse gap-0 md:gap-20 mb-20 items-center relative '>
          <div className='w-[100%] md:w-[70%] xl:w-[90%]'>
            <h1 className={`text-[20px] md:text-3xl text-[${colors.mainTextColor}] md:static absolute top-10`}>3. Permitting & Approvals</h1>
            <p className=' text-[16px] md:text-2xl tracking-[2px]'>Navigating regulatory requirements can be tricky, but we've got you covered.
              <br /> <br />
              We ensure all plans adhere to local building codes, obtaining the necessary permits to kickstart construction.</p>
          </div>
          <div className='md:w-[50%] lg:w-[30%]'>
            <img src='Assets/Process/4.png' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default PreConstruction
