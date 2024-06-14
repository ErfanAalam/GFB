import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-[rgb(29,30,36)] flex gap-0 md:gap-40'>

      <div className='w-[15%] md:w-[3.4%] ml-10 bg-repeat ' style={{ backgroundImage: "url('Assets/Contact us/Lines/1.png')" }}></div>

      <div className='text-white w-[60%] md:ml-0 ml-14 py-10 md:p-20'>

        <div className='flex flex-col items-center mb-20'>
          <h1 className='text-center text-3xl md:text-5xl '>Contact Us</h1>
          <hr className='w-[100%] md:w-[30%] border-t-4 border-[#EF6E16]' />
        </div>

        <div className='flex md:flex-row flex-col md:gap-0 gap-8 p-0 md:p-6 justify-between md:mb-0 mb-10'>
          <div className='flex flex-col gap-6'>
            <label htmlFor='name' className='text-2xl '>First Name</label>
            <input type='text' placeholder='Enter your first name here' className='border-none  bg-[rgb(29,30,36)]' />
            <hr className=' border-t-4 border-[#EF6E16]' />
          </div>
          <div className='flex flex-col gap-6'>
            <label htmlFor='name' className='text-2xl '>Last Name</label>
            <input type='text' placeholder='Enter your last name here' className='border-none  bg-[rgb(29,30,36)]' />
            <hr className=' border-t-4 border-[#EF6E16]' />
          </div>
        </div>


        <div className='flex md:flex-row flex-col gap-8 md:gap-0 p-0 md:p-6 justify-between md:mb-0 mb-10'>
          <div className='flex flex-col gap-6'>
            <label htmlFor='name' className='text-2xl '>Email</label>
            <input type='email' placeholder='Enter your email here' className='border-none bg-[rgb(29,30,36)]' />
            <hr className=' border-t-4 border-[#EF6E16]' />
          </div>
          <div className='flex flex-col gap-6'>
            <label htmlFor='name' className='text-2xl '>Phone Number</label>
            <input type='number' placeholder='Enter your phone number here' className='border-none bg-[rgb(29,30,36)]' />
            <hr className=' border-t-4 border-[#EF6E16]' />
          </div>
        </div>


        <div className='flex md:flex-row flex-col md:gap-0 gap-8 p-0 md:p-6  justify-between'>
          <div className='flex flex-col gap-6'>
            <label htmlFor='name' className='text-2xl '>Project Address </label>
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





        <div className='flex flex-col text-white w-[100%]  py-10 md:p-6 gap-10'>
          <h1 className='text-5xl'>Subject</h1>

          <div className='flex md:flex-row flex-col md:gap-0 gap-10 justify-between'>
            <button className='w-[200px] py-1 border-4 border-[#EF6E16] '>General Inquiry</button>
            <button className='w-[200px] py-1 border-4 border-[#EF6E16] '>Project Quote</button>
            <button className='w-[200px] md:w-[180px] py-1 border-4 border-[#EF6E16] '>Other</button>
          </div>

          <div className='flex flex-col gap-6'>
            <label className='text-3xl'>Message</label>
            <input type='text' placeholder='Type your message here' className='border-none bg-[rgb(29,30,36)]' />
            < hr className=' border-t-4 border-[#EF6E16]' />
          </div>

          <div className='flex flex-col gap-6 w-[100%] md:w-[40%]'>
            <label className='text-[20px] md:text-3xl'>How Did You Hear About Us?</label>
            <input type='text' placeholder='(optional)' className='border-none bg-[rgb(29,30,36)]' />
            <hr className=' border-t-4 border-[#EF6E16]' />
          </div>

          <div className='flex justify-center'>
            <button className='w-[200px] py-2 text-2xl rounded-lg bg-[#EF6E16] '>Submit</button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ContactForm
