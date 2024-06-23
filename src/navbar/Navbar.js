import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Navbar = () => {

    const [open, setOpen] = useState(false)

    return (
        <div className='font-orelaga'>
            <div className=' md:absolute md:top-4 hidden md:w-[100%] md:bg-black md:bg-opacity-60 md:flex md:justify-evenly md:items-center md:text-white md:py-6    md:text-[22px] '>
                <a href="/services"> Services</a>
                <a href="/process"> Process</a>
                <a href='/'><img src='/Assets/logo.png' className='w-[100px] h-[44px]' alt="" /></a>
                <a href="/about">About us</a>
                <a href="/contact"> Contact</a>
            </div>

            <div className='absolute top-0 md:hidden text-white w-[100%] flex justify-between '>
                <a href='/'><img src='/Assets/logo.png' className='w-[100px] h-[44px] ml-10 mt-4' alt=""  /></a>
                {
                    open ?
                        <div className='bg-black flex flex-col p-8 w-[100%] gap-32 justify-between top-[-1rem] absolute z-[100]'>
                            <div className='flex justify-between '>
                               <a href='/'> <img src='/Assets/logo.png' className='w-[100px] h-[44px]' alt="" /></a>
                                <button onClick={() => setOpen(!open)}> <CloseIcon  fontSize='large'/> </button>
                            </div>

                            <div className='flex flex-col px-4 gap-8 '>
                                <a href="/services"> Services</a>
                                <hr className='w-[95%] ' />
                                <a href="/process"> Process</a>
                                <hr className='w-[95%] ' />
                                <a href="/about">About us</a>
                                <hr className='w-[95%] ' />
                                <a href="/Contact"> Contact</a>
                                <hr className='w-[95%] ' />
                            </div>
                            <div className='flex justify-center'>
                                <button className='w-[380px] p-6 text-[24px] bg-[#EF6E16] rounded-lg'>Free Consultation</button>
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
