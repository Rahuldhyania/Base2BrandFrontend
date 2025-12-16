'use client'
import { useEffect } from 'react';

import React from "react"; 
import auto from '../../../public/services-img/1.png';     
import shopify from '../../../public/services-img/2.png';     
import '../shopify/service.css'

export default function DevCompany() {
 
  

  return (
    <>  
        <div className="p-5  bgLight"> 
    <div className="container pt-5">
<div className="row text-white">
    <div className="col-md-6">
        <h1 className='agency_heading'>Why Choose ASP.Net for Web Application Development?</h1>
     </div>
    <div className="col-md-6">
        <div className="overFlow">
        <div className="d-flex company_data">
      <img className='company' src={auto.src} alt="" />
        <div className="ml-3">
            <div className="section_data">
        <h3 className='primary'>Excellent Community Support</h3>
        <p>Our Shopify developers excel in industry standards while embracing innovation. We pride ourselves on delivering solutions tailored to your unique business requirements, ensuring your store remains ahead of the curve with cutting-edge features and trend-focused optimization.</p>
        </div>
        <div className="section_data">
        <h3 className='primary'>Availability of Tools</h3>
        <p>In the dynamic e-commerce landscape, adaptability is key. At Base2Brand, we embrace change, staying updated on Shopify&apos;s latest and adapting to evolving industry trends and technologies. This dedication ensures your store not only meets current standards but is well-prepared for future challenges. Partnering with us means having a shopify website development company proactive in adapting to the digital marketplace&apos;s ever-evolving needs.</p>
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
</div>
</div>
</>
)
}