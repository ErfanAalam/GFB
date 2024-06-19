import React from 'react'
import colors from '../../../utils/color'
import ServicesCards from '../../../Cards/ServicesCards'

const Services = () => {
    return (
        <section id='services' className='  bg-[rgb(29,30,36)] text-white pb-0  text-center'>
            <button className={`text-[${colors.textWhite}] border-y-0 text-[30px] w-[250px] my-8 p-4 bg-black relative z-20 md:top-0 top-[120px] leading-[31.35px] border-2`}>SERVICES</button>

            <div className='bg-cover z-10 w-[100%] relative flex md:flex-row flex-col flex-wrap items-center justify-evenly p-6 md:p-20 sm:bg-none' style={{ backgroundImage: "url('/Assets/Home/bg/services.png')" }}>
                <div className='mt-20'> <ServicesCards title="Integrated Services" src="Assets/Home/integrated_services.png"     /></div>
                <div><ServicesCards title="Commercial" src="Assets/Home/commercial.png" /></div>
                <div className='mt-0 md:mt-20'> <ServicesCards title="Residental" src="Assets/Home/residential.png" /> </div>
            </div>
        </section>
    )
}

export default Services
