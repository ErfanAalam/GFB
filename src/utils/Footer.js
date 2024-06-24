import React from 'react'
import './color.js'
import colors from './color.js'

const Footer = ({ link1, link2, link3, link4, link5 }) => {
    return (
        <div className='bg-[rgb(0,0,0)] py-6 px-10 md:px-[120px] lg:px-[140px] xl:px-[170px] flex flex-col items-center md:items-stretch zzzzz text-white'>

            <div className='flex justify-center items-center gap-6'>
                <hr className='w-[45%] hidden md:block' />
                <img src='Assets/logo.png'></img>
                <hr className='w-[45%] hidden md:block' />
            </div>



            <div className='flex justify-between gap-4 md:gap-0  md:flex-row flex-col mt-14'>
                <div className='md:flex hidden  w-[350px] gap-10 '>
                    <p>Follow Us on Social Media</p>
                    <a href='/'> <img src='Assets/Linkedin.png' alt='linkedin icon' /> </a>
                    <a href='/'> <img src='Assets/facebook.png' alt='linkedin icon' /> </a>
                    <a href='/'> <img src='Assets/Insta.png' alt='linkedin icon' /> </a>
                </div>

                <div className=' w-[240px] text-center md:text-left md:w-[270px]'>
                    <p>License Number # #1114879 </p>
                    <p>Email (will Change) info@gfbconstruction.com</p>
                    <p>Phone Number - 559-389-3646</p>
                    <p>Location - Fresno California (edited)</p>
                </div>

                <div className='flex flex-col items-center gap-4 text-gray-400'>
                    <a href='/services' className={`text-[${colors.mainTextColor}]`}>Services</a>
                    <a href={`#${link1}`} >{link1}</a>
                    <a href={`#${link2}`}>{link2}</a>
                    <a href={`#${link3}`}>{link3}</a>
                    <a href={`#${link4}`}>{link4}</a>
                    <a href={`#${link5}`}>{link5}</a>
                </div>


                <div className='flex flex-col items-center gap-4 text-gray-400 '>
                    <a href='' className={`text-[${colors.mainTextColor}]`}>Quick Links</a>
                    <a href='/' >Home</a>
                    <a href='/services' >Services</a>
                    <a href='/process' >Process</a>
                    <a href='/about' >About Us</a>
                    <a href='/contact' >Contact</a>
                </div>

            </div>



            <div className='flex  flex-col items-center gap-6 mt-10'>
                <hr className='w-[100%] md:border-t-[1px] border-t-4' />
                <p className='font-[700] text-[15px] text-center'>© 2024 GFB Construction and Engineering. All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer
