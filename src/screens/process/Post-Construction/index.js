import React from 'react'

const PostConstruction = () => {
  return (
    <div className='bg-gray-200 flex '>

      <div className='overflow-hidden flex w-[64px] relative mx-2 md:mx-20 justify-between  ' >
        <img src='Assets/Contact us/2.png' className='absolute z-30 top-80 right-[-10px] w-[40px]'/>
        <img src='Assets/Contact us/2.png' className='absolute z-30 bottom-40 right-[-10px] w-[40px]'/>
        <span className='w-[4px] h-[100%] bg-black '>
          <hr className='rotate-90 h-fit' />
        </span>
        <span className='w-[4px] h-[100%] bg-black'>
          <hr className='rotate-90 h-fit' />
        </span>
        <span className='w-[4px] h-[100%] bg-orange-500'>
          <hr className='rotate-90 h-fit' />
        </span>
      </div>

      <div className='p-2 md:p-4 lg::p-20 w-[80%] mt-4'>

        <div className='text-2xl md:text-4xl '>
          <h1 className='md:text-left text-center'>POST-CONSTRUCTION</h1>
        </div>

        <div className='flex ml-2 md:ml-4 lg:ml-20 md:flex-row flex-col-reverse justify-between items-center relative md:pt-0 pt-16'>
          <div className='w-[100%] md:w-[90%] lg::w-[70%]'>
            <h1 className='text-[20px] md:text-[24px] lg:text-3xl text-orange-500 md:static absolute top-6'>5. Quality Control & Inspection</h1>
            <p className=' text-[16px] md:text-[20px] lg:text-2xl tracking-[2px]'>Following construction, our team conducts comprehensive inspections to ensure every aspect of the project meets our high-quality standards.
              <br /> <br />
              Utilizing advanced tools and proven techniques, we meticulously verify the integrity of every component of your project.</p>
          </div>

          <div className='w-[100%] md:w-[40%] lg:w-[50%]'>
            <img src='Assets/Process/6.png' />
          </div>
        </div>




        <div className='flex ml-2 md:ml-4 mt-0 md:mt-8 lg:ml-20 md:flex-row flex-col justify-between items-center relative md:pt-0 pt-16'>

          <div className='w-[100%] md:w-[60%] lg:w-[30%]'>
            <img src='Assets/Process/7.png' />
          </div>

          <div className='w-[100%] md:w-[100%] lg:w-[70%]'>
            <h1 className='text-[20px] md:text-[24px] lg:text-3xl text-orange-500 md:static absolute top-6'>6. Project Handover & Post-Construction Care</h1>
            <p className=' text-[16px] md:text-[20px] lg:text-2xl tracking-[2px]'>Your new space is ready! We hand over all essential documents and detailed maintenance guidelines.
              <br /> <br />
              But our service doesn’t stop there! We remain readily available for any post-construction questions or support you may need.
              <br /> <br />
              Our commitment extends beyond project completion. We're here to ensure your space remains exceptional for years to come.</p>
          </div>

        </div>



      </div>

    </div>
  )
}

export default PostConstruction
