import React, { useState } from 'react'

const ContactForm = () => {

  const [userInfo, setUserInfo] = useState({})
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [serviceType, setServiceType] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [hearAbout, setHearAbout] = useState("")


  function handleSubmit(e) {
    e.preventDefault()
    let obj = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      address: address,
      serviceType: serviceType,
      subject: subject,
      message: message,
      hearAbout: hearAbout
    }

    setUserInfo(obj)
    console.log(userInfo);
  }


  return (
    <div id='Contactform' className='bg-[rgb(29,30,36)] flex gap-0 md:gap-10 xl:gap-40 font-orelaga'>

      <div className='w-[20%] md:w-[9%] xl:w-[5%] ml-2 xl:ml-10 flex flex-col'>
        <div className='h-[90%] bg-no-repeat' style={{ backgroundImage: "url('Assets/Contact us/Lines/3.png')" }}></div>
        <div className='h-[100%] bg-no-repeat' style={{ backgroundImage: "url('Assets/Contact us/Lines/2.png')" }}></div>
      </div>

      <div className='text-white w-[65%] md:w-[80%] lg:w-[80%] xl:w-[70%] md:ml-0 ml-4 md:mr-0 mr-4 py-10 p-4 pr-0 xl:p-20'>

        <div className='flex flex-col items-center mb-20 gap-2'>
          <h1 className='text-center text-3xl md:text-5xl '>Contact Us</h1>
          <hr className='w-[60%] md:w-[30%] border-t-4 border-[#EF6E16]' />
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <div className='flex md:flex-row flex-col md:gap-20 xl:gap-0 gap-8 p-0 md:p-6 justify-between md:mb-0 mb-10'>
            <div className='flex flex-col gap-6'>
              <label htmlFor='name' className='text-[20px] md:text-2xl text-center'>First Name</label>
              <input onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                type='text'
                placeholder='Enter your first name here '
                className='border-none  bg-[rgb(29,30,36)]' />
              <hr className=' border-t-4 border-[#EF6E16] md:w-[200%]' />
            </div>
            <div className='flex flex-col gap-6 px-0 md:px-20'>
              <label htmlFor='name' className='text-[20px] md:text-2xl text-center'>Last Name</label>
              <input onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                type='text'
                placeholder='Enter your last name here '
                className='border-none  bg-[rgb(29,30,36)]' />
              <hr className=' border-t-4 border-[#EF6E16] md:w-[200%]' />
            </div>
          </div>


          <div className='flex md:flex-row flex-col gap-8  md:gap-20 xl:gap-0 p-0 md:p-6 justify-between md:mb-0 mb-10'>
            <div className='flex flex-col gap-6'>
              <label htmlFor='name' className='text-[20px] md:text-2xl text-center'>Email</label>
              <input onChange={(e) => setEmail(e.target.value)}
                type='email'
                value={email}
                placeholder='Enter your email here'
                className='border-none bg-[rgb(29,30,36)]' />
              <hr className=' border-t-4 border-[#EF6E16] md:w-[200%]' />
            </div>
            <div className='flex flex-col gap-6 px-0 md:px-20'>
              <label htmlFor='name' className='text-[20px] md:text-2xl text-center'>Phone Number</label>
              <input onChange={(e) => setPhone(e.target.value)}
                value={phone}
                type='number'
                placeholder='Enter your phone number here'
                className='border-none bg-[rgb(29,30,36)]' />
              <hr className=' border-t-4 border-[#EF6E16] md:w-[200%]' />
            </div>
          </div>


          <div className='flex md:flex-row flex-col  md:gap-20 gap-8 p-0 md:p-6  justify-between'>
            <div className='flex flex-col gap-6'>
              <label htmlFor='name' className='text-[20px] md:text-2xl text-center'>Project Address </label>
              <input onChange={(e) => setAddress(e.target.value)}
                value={address}
                type='text'
                placeholder='(optiional)'
                className='border-none bg-[rgb(29,30,36)]' />
              <hr className=' border-t-4 border-[#EF6E16] md:w-[200%]' />
            </div>
            <div className='flex flex-col gap-6'>
              <h1 className='text-[20px] md:text-[28px] text-center'>Type of service needed</h1>

              <div className='flex justify-between md:gap-0 gap-4'>
                <button
                  type="button"
                  onClick={(e) => { setServiceType(e.target.value) }}
                  value={"Residental"}
                  className='cursor-pointer px-4 py-2 border-4 border-[#EF6E16] active:bg-[#EF6E16]'>Residental
                </button>

                <button
                  type="button"
                  onClick={(e) => { setServiceType(e.target.value) }}
                  value={"Commercial"}
                  className='cursor-pointer px-4 py-2 border-4 border-[#EF6E16] active:bg-[#EF6E16]'>Commercial
                </button>

              </div>
            </div>
          </div>

          <div className='flex flex-col text-white w-[100%]  py-10 md:p-6 gap-10'>
            <h1 className='text-3xl md:text-5xl text-center'>Subject</h1>

            <div className='flex md:flex-row flex-col items-center md:gap-20 xl:gap-0 gap-10 justify-between'>
              <button
                type="button"
                onClick={(e) => { setSubject(e.target.value) }}
                value={"General Inquiry"}
                className='cursor-pointer w-[200px] py-1 border-4 border-[#EF6E16]'>General Inquiry
              </button>

              <button
                type="button"
                onClick={(e) => { setSubject(e.target.value) }}
                value={"Project Quote"}
                className='cursor-pointer w-[200px] py-1 border-4 border-[#EF6E16]'>Project Quote
              </button>

              <button
                type="button"
                onClick={(e) => { setSubject(e.target.value) }}
                value={"other"}
                className='cursor-pointer w-[200px] md:w-[180px] py-1 border-4 border-[#EF6E16] '>Other
              </button>

            </div>

            <div className='flex flex-col gap-6'>
              <label className='text-[24px] md:text-3xl text-center'>Message</label>
              <input type='text'
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Type your message here'
                className='border-none bg-[rgb(29,30,36)]' />
              < hr className=' border-t-4 border-[#EF6E16]' />
            </div>

            <div className='flex flex-col gap-6 '>
              <label className='text-[18px] md:text-[26px]'>How Did You Hear About Us?</label>
              <input type='text'
                onChange={(e) => setHearAbout(e.target.value)}
                placeholder='(optional)'
                className='border-none bg-[rgb(29,30,36)]' />
              <hr className=' border-t-4 border-[#EF6E16] w-[100%] md:w-[55%] lg:w-[55%] xl:w-[55%] 2xl:w-[45%] 3xl:w-[40%]' />
            </div>

            <div className='flex justify-center mt-10'>
              <button type='submit' className='w-[200px] py-2 text-2xl rounded-lg bg-[#EF6E16] '>Submit</button>
            </div>

          </div>
        </form>

      </div>
    </div>
  )
}

export default ContactForm
