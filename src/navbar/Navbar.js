import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import colors from '../utils/color'

const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div c>
            <div className=' md:absolute md:top-4 hidden md:w-[100%] md:bg-black md:bg-opacity-60 md:flex md:justify-evenly md:items-center md:text-white md:py-6 md:gap-[120px] md:font-bold md:text-[22px] '>
                <a href="/services"> SERVICES</a>
                <a href="/process"> PROCESS</a>
                <a href='/'><img src='/Assets/logo.png' className='w-[100px] h-[44px]' alt="" ></img></a>
                <a href="/about">ABOUT US</a>
                <a href="/contact"> CONTACT</a>
            </div>

            <div className='absolute top-4 md:hidden text-white w-[100%]  flex justify-between '>
                <img src='/Assets/logo.png' className='w-[100px] h-[44px] ml-10 mt-4' alt=""  />
                {
                    open ?
                        <div className='bg-black flex flex-col p-8 w-[100%] h-[100vh]  top-[-1rem] absolute '>
                            <div className='flex justify-between '>
                                <img src='/Assets/logo.png' className='w-[100px] h-[44px]' alt="" ></img>
                                <button onClick={() => setOpen(!open)}> <CloseIcon  fontSize='large'/> </button>
                            </div>

                            <div className='flex flex-col  mt-[150px] px-4 gap-8 '>
                                <a href="/services"> SERVICES</a>
                                <hr className='w-[95%] ' />
                                <a href="/process"> PROCESS</a>
                                <hr className='w-[95%] ' />
                                <a href="/about">ABOUT US</a>
                                <hr className='w-[95%] ' />
                                <a href="/Contact"> CONTACT</a>
                                <hr className='w-[95%] ' />
                            </div>
                            <div>
                                <button className={`w-[380px] mt-[230px] p-6 border-2 text-[24px] bg-[#EF6E16] rounded-lg`}>Free Consultation</button>
                            </div>
                        </div>
                        :
                        <button onClick={() => setOpen(!open)} className='mr-10 mt-4'><MenuIcon fontSize='large' /></button>
                }


            </div>

        </div>
    )
}

export default Navbar
