import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[rgb(29,30,36)] flex'>

      <div className='w-[10%] md:w-[15%] ml-10 bg-contain bg-repeat md:bg-no-repeat' style={{backgroundImage:"url('Assets/Contact us/Lines/1.png')"}}></div>



      <div className='text-white w-[60%] md:ml-0 ml-14 py-10 md:p-20'>

        <div className='flex flex-col items-center mb-20'>
          <h1 className='text-center text-3xl md:text-5xl font-[700]'>Contact Us</h1>
          <hr className='w-[100%] md:w-[30%] border-t-4 border-[#EF6E16]' />
        </div>

        <div className='flex md:flex-row flex-col md:gap-0 gap-8 p-0 md:p-6 justify-between md:mb-0 mb-10'>
          <div className='flex flex-col gap-6'>
            <label htmlFor='name' className='text-2xl font-[700]'>First Name</label>
            <input type='text' placeholder='Enter your first name here' className='border-none  bg-[rgb(29,30,36)]' />
            <hr className=' border-t-4 border-[#EF6E16]' />
          </div>
          <div className='flex flex-col gap-6'>
            <label htmlFor='name' className='text-2xl font-[700]'>Last Name</label>
            <input type='text' placeholder='Enter your last name here' className='border-none  bg-[rgb(29,30,36)]' />
            <hr className=' border-t-4 border-[#EF6E16]' />
          </div>
        </div>


        <div className='flex md:flex-row flex-col gap-8 md:gap-0 p-0 md:p-6 justify-between md:mb-0 mb-10'>
          <div className='flex flex-col gap-6'>
            <label htmlFor='name' className='text-2xl font-[700]'>Email</label>
            <input type='email' placeholder='Enter your email here' className='border-none bg-[rgb(29,30,36)]' />
            <hr className=' border-t-4 border-[#EF6E16]' />
          </div>
          <div className='flex flex-col gap-6'>
            <label htmlFor='name' className='text-2xl font-[700]'>Phone Number</label>
            <input type='number' placeholder='Enter your phone number here' className='border-none bg-[rgb(29,30,36)]' />
            <hr className=' border-t-4 border-[#EF6E16]' />
          </div>
        </div>


        <div className='flex md:flex-row flex-col md:gap-0 gap-8 p-0 md:p-6  justify-between'>
          <div className='flex flex-col gap-6'>
            <label htmlFor='name' className='text-2xl font-[700]'>Project Address </label>
            <input type='email' placeholder='(optiional)' className='border-none bg-[rgb(29,30,36)]' />
            <hr className=' border-t-4 border-[#EF6E16]' />
          </div>
          <div className='flex flex-col gap-6'>
            <h1 className='text-[28px]'>Type of service needed</h1>

            <div className='flex justify-between'>
              <button className='px-4 py-2 border-4 border-[#EF6E16] '>Residental</button>
              <button className='px-4 py-2 border-4 border-[#EF6E16]'>Commercial</button>
            </div>
            {/* <hr className=' border-t-4 border-[#EF6E16]'/> */}
          </div>
        </div>


      </div>
    </div>
  )
}

export default ContactForm
