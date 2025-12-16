'use client'
import { useEffect } from 'react';

import React from "react"; 
import circle from '../../../public/services-img/circle.png';     
// import lines from '../../../public/services-img/lines.png';     
// import lines from '../../../public/services-img/lines_bg.png';     
  import lines from '../../../public/services-img/bg_line.png';     
import '../shopify/service.css'

export default function ShopifyProcess() {
 
  

  return (
    <>  
        <div className="p-5 mt-5 company_section"> 
    <div className="container-fluid position-relative">
        {/* <div className="line_bg" style={{
      backgroundImage: `url(${lines.src})`,
      width: '100%',
      height: '425px',  
      backgroundRepeat:'no-repeat',
      backgroundSize: 'contain',
      backgroundPosition:'center',
      position: 'absolute',
      top: '49%',
      left: '50%',
      transform:'translate(-50%, -50%)'
    }}> */}
      <div className="row text-white justify-content-center">
         <div className="col-md-12 text-center mb-5" data-aos="fade-up">
            <h2>Shopify Project Completion Process</h2>
         </div>

         <div className="main" data-aos="zoom-in">
            <img className='w-100' src={lines.src} alt="" />
         </div>
      </div>
{/* <div className="row text-white justify-content-center">
    <div className="col-md-12 text-center mb-5">
        <h2>Shopify Project Completion Process</h2>
    </div>
     <div className="col-md-4 text-center position-relative">
        <img src={circle.src} className='circle' alt="" />
        <span className='centerNumber'>01</span>
        <h3 className='bgBlack'>Discovery & <br /> Consultation</h3>
     </div>
     <div className="col-md-4 text-center position-relative">
        <img src={circle.src} className='circle' alt="" />
        <span className='centerNumber'>03</span>
        <h3 className='bgBlack'>Craft a unique design <br /> reflecting brand identity</h3>
     </div>
     <div className="col-md-4 text-center position-relative">
        <img src={circle.src} className='circle' alt="" />
        <span className='centerNumber'>05</span>
        <h3 className='bgBlack'>Launch and <br /> Deployment</h3>
     </div>
     <div className="col-md-4 text-center position-relative mtTop">
        <img src={circle.src} className='circle' alt="" />
        <span className='centerNumber'>02</span>
        <h3 className='bgBlack'>Planning and <br /> Strategy</h3>
     </div>
     <div className="col-md-4 text-center position-relative mtTop ">
        <img src={circle.src} className='circle' alt="" />
        <span className='centerNumber'>04</span>
        <h3 className='bgBlack'>Testing and Quality <br /> Assurance</h3>
     </div>
    </div> */}

</div>
</div>
</>
)
}