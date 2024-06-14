import React from 'react'

const Integrated = () => {
  return (

    <div className='bg-cover bg-black text-white pb-32' style={{ backgroundImage: "url('Assets/Services/blur0.jpg')" }}>

      <div className='flex md:flex-row flex-col relative justify-between items-center md:gap-40 gap-20 md:p-20 p-6 md:pt-0 pt-32'>

        <div>
          <img src='Assets/Services/intergrated_services.png' className='w-[400px] md:w-[500px]' ></img>
        </div>


        <div className='w-[100%] md:w-[70%] md:py-20 py-0  md:px-24 px-0'>
          <h1 className='text-3xl md:text-5xl md:static  text-orange-600 absolute md:ml-0 ml-10 top-10'>Integrated Services</h1>

          <p className='text-[20px] md:text-[28px]'>Our in-house Architects, Electricians, and Engineers help provide a seamless experience for you and your project.
            <br /> <br />
            While also allowing us to take on large electrical and utility-specific jobs without looking elsewhere.
            <br /> <br />
            See how our skilled professionals can help with your next project!</p>

          <div className='mt-10 md:block flex  flex-wrap gap-14'>

            <div className='flex flex-row items-center md:gap-10 gap-0'>
              <img src='Assets/Services/Architects.png' className='md:w-[100px] w-[50px]'></img>
              <p className='md:text-2xl text-[16px]'>Architects</p>
            </div>

            <div className='flex flex-row items-center md:ml-20 ml-0 md:gap-10 gap-0' >
              <img src='Assets/Services/Electricians.png' className='md:w-[100px] w-[50px]'></img>
              <p className='md:text-2xl text-[16px]'>Electricians</p>
            </div>

            <div className='flex flex-row  items-center md:gap-10 gap-0'>
              <img src='Assets/Services/Engineers.png' className='md:w-[100px] w-[50px]'></img>
              <p className='md:text-2xl text-[16px]'>Engineers</p>
            </div>

          </div>
        </div>
      </div>
    </div>

  )
}

export default Integrated
