import React from 'react'
import './color.js'
import colors from './color.js'

const Footer = () => {
    return (
        <div className='bg-[rgb(0,0,0)] py-6 px-10 md:px-[120px] lg:px-[140px] xl:px-[170px] flex flex-col items-start md:items-stretch  text-white'>


            <div className='flex justify-center items-center gap-6'>
                <hr className='w-[45%] hidden md:block' />
                <img src='Assets/logo.png'></img>
                <hr className='w-[45%] hidden md:block' />
            </div>



            <div className='flex justify-between items-start gap-4 md:gap-0 md:items-center md:flex-row flex-col mt-10'>
                <div className='md:flex hidden  w-[350px] gap-10 '>
                    <p>Follow Us on Social Media</p>
                    <a href='/'> <img src='Assets/Linkedin.png' alt='linkedin icon' /> </a>
                    <a href='/'> <img src='Assets/facebook.png' alt='linkedin icon' /> </a>
                    <a href='/'> <img src='Assets/Insta.png' alt='linkedin icon' /> </a>
                </div>

                <div className=' w-[240px]  md:w-[270px]'>
                    <p>icense Number # #1114879
                        Email (will Change) info@gfbconstruction.com
                        Phone Number - 559-389-3646
                        Location - Fresno California (edited)</p>
                </div>

                <div className='flex flex-col  gap-4'>
                    <a href='' className={`text-[${colors.mainTextColor}]`}>Services</a>
                    <a href='' >Integrated</a>
                    <a href='' >Commercial</a>
                    <a href='' >Residental</a>
                </div>


                <div className='flex flex-col gap-4'>
                    <a href='' className={`text-[${colors.mainTextColor}]`}>Quick Links</a>
                    <a href='' >Process</a>
                    <a href='' >About Us</a>
                    <a href='' >Contact</a>
                </div>

            </div>



            <div className='flex  flex-col items-center gap-6 mt-10'>
                <hr className='w-[100%]' />
                <p className='font-[700] text-[15px] text-center'>© 2024 GFB Construction and Engineering. All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer
