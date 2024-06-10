import React from 'react'
import colors from '../../../utils/color'
import ProcessCards from '../../../Cards/ProcessCards'

const Process = () => {
  return (
    <div>
      <section className='bg-[rgb(29,30,36)] text-white text-center'>
        <button className={`text-[${colors.textWhite}] text-[30px] md:text-[34px] font-[700] relative w-[300px]  md:w-[300px]  my-8 p-3 bg-black  h-[100px] md:h-[78px] leading-[31.35px] border-2`}>Process</button>

        <div className='bg-cover bg-blend-darken z-10 relative flex flex-wrap md:flex-row flex-col items-center justify-evenly md:p-20 ' style={{ backgroundImage: "url('/Assets/Home/bg/process.png')" }}>
          <div className='mt-20 md:mb-0 mb-20'>
            <ProcessCards title="Pre-Construction" src="Assets/Home/pre_onstruction.png" count={"01"} heading="Planning Your Vision" desc="From initial consultations to detailed blueprints, we set the foundation by understanding your needs, aligning with architects, and ensuring every detail is planned meticulously." />
          </div>

          <div>
            <ProcessCards title="Construction" src="Assets/Home/construction.png" count={"02"} heading="Crafting Your Dream" desc="Our team breathes life into your vision. 
            With best-in-class tools, materials, and expertise, we ensure timely execution and unmatched quality in every build." />
          </div>

          <div className='mt-20'>
            <ProcessCards title="Post-Construction" src="Assets/Home/post_onstruction.png" count={"03"} heading={"Ensuring Perfection"} desc="After the build, our commitment continues. We inspect, refine, and guarantee our work, ensuring your space stands the test of time and resonates with perfection." />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Process
