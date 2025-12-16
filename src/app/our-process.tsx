'use client'

import React from "react"; 
import Count from '../../public/services2-img/count-bg.png'
import GroupMask from "../../public/services2-img/group-mask.png"


export default function OurProcess() {
    const myStyle = {
        backgroundImage: `url(${ Count })`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };
  return (
    <>  
      <div className="container-fluid p-5 pb-5 mt-3 mask" style={{backgroundImage: `url(${GroupMask.src})`,width: '100%',height: '100%',}}> 
        <div className="row process text-white pb-0 mb-0 justify-content-center"> 
          <div className="col-md-12 pb-4" data-aos="fade-left">
            <h1 className="text-center font-light">OUR PROCESS</h1>
          </div>
          
            <div className="process-col text-center col-12 col-sm-6 col-md-4 pb-5" data-aos="fade-left">
                <h1 className="text-white"  style={{ backgroundImage:`url(${Count.src})` }}>01</h1>
                <h2 className="process-txt font-light">PLANNING</h2>
                <p>We learn your vision for effective implementation in your project.</p>
            </div>

            <div className="process-col text-center col-12 col-sm-6 col-md-4 pb-5" data-aos="fade-up">
                <h1 className="text-white"  style={{ backgroundImage:`url(${Count.src})` }}>03</h1>
                <h2 className="process-txt font-light">DEVELOPMENT</h2>
                <p>We employ the best in development strategies to be able to easily scale any project for the needs of the users.</p>
            </div>

            <div className="process-col text-center col-12 col-sm-6 col-md-4 pb-5" data-aos="fade-right">
                <h1 className="text-white"  style={{ backgroundImage:`url(${Count.src})` }}>05</h1>
                <h2 className="process-txt font-light">MAINTENANCE</h2>
                <p>To maintain product efficiency we keep up on any project ensuring continued success and improvement.</p>
            </div>

            <div className="process-col text-center col-12 col-sm-6 col-md-4 pb-2" data-aos="fade-left">
                <h1 className="text-white"  style={{ backgroundImage:`url(${Count.src})` }}>02</h1>
                <h2 className="process-txt font-light">DESIGN</h2>
                <p>We go through multiple iterations of design to make sure we create the perfect design for your project.</p>
            </div>

            <div className="process-col text-center col-12 col-sm-6 col-md-4 pb-2" data-aos="fade-right">
                <h1 className="text-white"  style={{ backgroundImage:`url(${Count.src})` }}>04</h1>
                <h2 className="process-txt font-light">LAUNCH</h2>
                <p>To ensure a seamless transition, we go through a rigorous product testing process before delivering your project for launch.</p>
            </div>
        </div>
      </div> 
    </>
  )
}
