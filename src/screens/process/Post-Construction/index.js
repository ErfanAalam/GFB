import React from 'react'

const PostConstruction = () => {
  return (
    <div className='bg-gray-200 flex '>

      <div className='overflow-hidden flex w-[64px] relative mx-2 md:mx-20 justify-between  ' >
        <img src='Assets/Contact us/2.png' className='absolute  top-20 left-0'/>
        <span className='w-[4px] h-[100%] bg-black '>
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

        <div className='text-2xl md:text-4xl font-[700] '>
          <h1 className='md:text-left text-center'>POST-CONSTRUCTION</h1>
        </div>

        <div className='flex ml-2 md:ml-20 md:flex-row flex-col-reverse justify-between items-center relative md:pt-0 pt-16'>
          <div className='w-[100%] md:w-[60%]'>
            <h1 className='text-[20px] md:text-3xl text-orange-600 absolute top-6'>5. Quality Control & Inspection</h1>
            <p className='font-[900] tracking-[3px]'>Following construction, our team conducts comprehensive inspections to ensure every aspect of the project meets our high-quality standards.
              <br /> <br />
              Utilizing advanced tools and proven techniques, we meticulously verify the integrity of every component of your project.</p>
          </div>

          <div className='w-[100%] md:w-[30%]'>
            <img src='Assets/Process/6.png' />
          </div>
        </div>




        <div className='flex ml-2 md:ml-20 md:flex-row flex-col justify-between items-center relative md:pt-0 pt-16'>

          <div className='w-[100%] md:w-[30%]'>
            <img src='Assets/Process/7.png' />
          </div>

          <div className='w-[100%] md:w-[70%]'>
            <h1 className='text-[20px] md:text-3xl text-orange-600 absolute top-6npm run start'>6. Project Handover & Post-Construction Care</h1>
            <p className='font-[900] tracking-[3px]'>Your new space is ready! We hand over all essential documents and detailed maintenance guidelines.
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
