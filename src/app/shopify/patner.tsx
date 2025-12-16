'use client'
import { useEffect } from 'react';

import React from "react"; 
import patner from '../../../public/services-img/3.png';     
import shopify from '../../../public/services-img/2.png';     
import '../shopify/service.css'

export default function Patner() {
 
  

  return (
    <>  
        <div className="p-5 bg_patner"> 
    <div className="container">
<div className="row text-white align-items-center">
    <div className="col-md-6" data-aos="fade-right">
        <h1 className='agency_heading'>We are  <img className='shopify_img' src={shopify.src} alt="" /> Agency</h1>
        <p className='desc_service'>As a leading Shopify development company, we specialize in providing comprehensive Shopify development services tailored to meet the unique needs of your business. Whether you&apos;re establishing a new online store or looking to enhance your existing Shopify website, our expert team is here to bring your vision to life.</p>
    </div>
    <div className="col-md-6" data-aos="flip-right">
    <img className='patner_img w-100' src={patner.src} alt="" />
    </div>
    </div>
</div>
</div>
</>
)
}