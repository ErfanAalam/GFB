import React from 'react'

const Residental = () => {
  return (
    <div className='bg-cover bg-center text-white' style={{ backgroundImage: "url('Assets/Services/blur2.png')" }}>

      <div className='flex relative md:flex-row flex-col justify-between gap-46 pt-20 '>

        <div className=''>
          <img src='Assets/Services/residentaial.png' className='w-[500px] md:w-[800px] md:h-[600px] lg:h-full 2xl:w-[500px]'></img>
        </div>

        <div className='w-[100%] md:w-[95%] lg:w-[80%] 2xl:w-[70%]  py-6 2xl:px-60 px-6'>
        <h1 className='text-[32px] lg:text-3xl xl:text-4xl 2xl:text-5xl md:static text-center text-orange-600 absolute md:ml-0 ml-20 top-4'>Residental</h1>

          <p className='text-2xl'>
            Our services include custom home builds, multi-family complexes, versatile ADUs, and full-scale remodels.
            <br /> <br />
            We're dedicated to creating homes that are not just visually appealing, but also highly functional.
            <br /><br />
            Our approach? Unwavering attention to detail and a commitment to superior craftsmanship.
          </p>

          <div className='mt-10 md:mt-2 md:block flex md:flex-row flex-col'>

            <div className='flex flex-row items-center md:gap-10 gap-0'>
              <img src='Assets/Services/custom_builds_&_remodels.png' className='md:w-[100px] w-[50px]'></img>
              <p className='text-[16px] md:text-2xl'>Custom Builds & Remodels</p>
            </div>

            <div className='flex flex-row items-center md:gap-10 gap-0 ml-20' >
              <img src='Assets/Services/residential_complexes.png' className='md:w-[100px] w-[50px]'></img>
              <p className='text-[16px] md:text-2xl'>Residential Complexes </p>
            </div>

            <div className='flex flex-row items-center md:gap-10 gap-0'>
              <img src='Assets/Services/accessory_dwelling_units.png' className='md:w-[100px] w-[50px]'></img>
              <p className='text-[16px] md:text-2xl'>Accessory Dwelling Units </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Residental
