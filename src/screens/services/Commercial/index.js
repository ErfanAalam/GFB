import React from 'react'

const Commercial = () => {
  return (
    <div className='bg-cover bg-black text-white md:pt-32 pt-24' style={{ backgroundImage: "url('Assets/Services/blur0.jpg')" }}>

      <div className='flex md:flex-row  relative flex-col-reverse justify-between gap-40 md:p-20 p-3 pt-20'>

        <div className=' w-[100%] md:w-[70%] md:px-20 px-0'>
        <h1 className='text-3xl md:text-5xl md:static  text-orange-600 font-[700] absolute md:ml-0 ml-32 top-2 '>Commercial</h1>

          <p className='text-2xl text-white'>GFB excels in developing commercial spaces that are both practical and visually appealing.
            <br /> <br />

            Our expertise extends to offices, warehouses, retail stores, restaurants, and more. Focusing on providing solutions that are efficient and cost-effective.
            <br /><br />
            We work closely with you to ensure that the final space reflects your brand and needs.
            <br /><br />
            Count on us for quality work, on-schedule completion, and designed to exceed your expectations.
          </p>

          <div className='mt-10 md:block flex md:flex-row flex-col gap-14'>

            <div className='flex flex-row items-center md:gap-10 gap-0'>
              <img src='Assets/Services/Architects.png' className='md:w-[100px] w-[50px]'></img>
              <p className='md:text-2xl text-[16px]'>Architects</p>
            </div>

            <div className='flex flex-row items-center ml-20  md:gap-10 gap-0' >
              <img src='Assets/Services/Electricians.png' className='md:w-[100px] w-[50px]'></img>
              <p className='md:text-2xl text-[16px]'>Electricians</p>
            </div>

            <div className='flex flex-row  items-center ml-40 md:gap-10 gap-0'>
              <img src='Assets/Services/Engineers.png' className='md:w-[100px] w-[50px]'></img>
              <p className='md:text-2xl text-[16px]'>Engineers</p>
            </div>

          </div>
        </div>

        <div>
        <img src='Assets/Services/commercial.png' width={"600px"} height={"300px"} ></img>
        </div>
      </div>
    </div>
  )
}

export default Commercial
