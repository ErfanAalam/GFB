import React from 'react'

const PreConstruction = () => {
  return (
    <div className='bg-gray-200 flex '>

      <div className='overflow-hidden flex w-[64px] mx-2 md:mx-20 justify-between  ' >
        <span className='w-[4px] h-[100%] bg-black'>
          <hr className='rotate-90 h-fit' />
        </span>
        <span className='w-[4px] h-[100%] bg-white'>
          <hr className='rotate-90 h-fit' />
        </span>
        <span className='w-[4px] h-[100%] bg-white'>
          <hr className='rotate-90 h-fit' />
        </span>
      </div>

      <div className='p-2 md:p-20 w-[80%] mt-4'>

        <div className='text-[24px] md:text-4xl '>
          <h1 className='md:text-left text-center'>PRE-CONSTRUCTION</h1>
        </div>

        <div className='flex m-2 md:ml-20 md:flex-row flex-col-reverse justify-between items-center relative md:pt-0 pt-16'>
          <div className='w-[100%] md:w-[70%]'>
            <h1 className='text-[20px] md:text-3xl text-orange-600  absolute top-6 '>1. Consultation & Discovery</h1>
            <p className=' text-[16px] md:text-2xl tracking-[2px]'>We begin with a thorough assessment of your job site, project scope, and feasibility.
              <br /> <br />
              Our goal is to meticulously understand your vision, ensuring a solid, informed start to every project.</p>
          </div>

          <div className='w-[100%] md:w-[30%]'>
            <img src='Assets/Process/2.png' />
          </div>
        </div>

        <div className='flex m-2 md:ml-20 md:flex-row flex-col justify-between items-center relative md:pt-0 pt-16'>

          <div className='w-[100%] md:w-[30%]'>
            <img src='Assets/Process/3.png' />
          </div>

          <div className='w-[100%] md:w-[70%]'>
            <h1 className='text-[20px] md:text-3xl text-orange-600 absolute top-6'>2. Design & Planning</h1>
            <p className=' text-[16px] md:text-2xl tracking-[2px] pr-2 md:pr-40'>At this stage, our in-house architects and engineers take the lead, transforming your ideas into actionable blueprints.
              <br /> <br />
              We ensure every design is efficient, innovative, and tailored to your needs.</p>
          </div>

        </div>

        <div className='flex m-2 md:ml-20 md:flex-row flex-col-reverse justify-between items-center relative md:pt-0 pt-16'>
          <div className='w-[100%] md:w-[70%]'>
            <h1 className='text-[20px] md:text-3xl text-orange-600 absolute top-6'>3. Permitting & Approvals</h1>
            <p className=' text-[16px] md:text-2xl tracking-[2px]'>Navigating regulatory requirements can be tricky, but we've got you covered.
              <br /> <br />
              We ensure all plans adhere to local building codes, obtaining the necessary permits to kickstart construction.</p>
          </div>
          <div className='w-[100%] md:w-[30%]'>
            <img src='Assets/Process/4.png' />
          </div>
        </div>

      </div>

    </div>
  )
}

export default PreConstruction
