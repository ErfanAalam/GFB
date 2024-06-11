import React from 'react'

const Subject = () => {
  return (
    <div className='bg-[rgb(29,30,36)] flex'>

      <div className='w-[15%] md:w-[20%] ml-9  bg-no-repeat' style={{ backgroundImage: "url('Assets/Contact us/Lines/2.png')" }}></div>


      <div className='flex flex-col text-white w-[60%] ml-10 md:ml-8 py-10 md:p-20 gap-10'>
        <h1 className='text-5xl font-[700]'>Subject</h1>

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
          <input type='text' placeholder='(optional)' className='border-none bg-[rgb(29,30,36)]'/>
          <hr className=' border-t-4 border-[#EF6E16]' />
        </div>

        <div className='flex justify-center'>
          <button className='w-[200px] py-2 rounded-lg bg-[#EF6E16] '>Submit</button>
        </div>

      </div>


    </div>
  )
}

export default Subject
