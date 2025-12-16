'use client'
import { useEffect } from 'react';

import React from "react"; 
import icon from '../../../public/big/b-icon.png';            
import Big from '../../../public/big/big.png';            


export default function Big_Commerce() {
 
  

  return (
    <>  
        <div className="p-4 p-md-5 bg_light_green"> 
    <div className="container"> 
<div className="row text-white align-items-center">
      <div className="col-md-12 mx-auto text-center" data-aos="fade-up">
        <h2>BigCommence Services <br /> by Base<span className='text_primary'>2</span>Brand</h2>
        
      </div>
      <div className="col-md-4 mt-5" data-aos="fade-left">
        <div className="needBox">
            <img src={icon.src} alt="" />
            <div className="p-3 pb-3">
                <h4 className='mt-3 mb-3 text_primary'>Migration to BigCommerce</h4>
                <p className='font-weight-normal'>We ensure a smooth migration of your store, to BigCommerce, with full SEO, performance optimization, and technical fine-tuning.</p>
                 
            </div>
        </div>
      </div>

      <div className="col-md-4 mt-5" data-aos="zoom-in">
        <div className="needBox">
            <img src={icon.src} alt="" />
            <div className="p-3 pb-3">
                <h4 className='mt-3 mb-3 text_primary'>Performance Optimisation </h4>
                <p className='font-weight-normal'>With our performance tuning, your store will load faster, rank higher on search engines, and provide a frictionless shopping experience.</p>
           
            </div>
        </div>
      </div>

      <div className="col-md-4 mt-5" data-aos="fade-right">
        <div className="needBox">
            <img src={icon.src} alt="" />
            <div className="p-3 pb-3">
                <h4 className='mt-3 mb-3 text_primary'>Ongoing Maintenance & Support</h4>
                <p className='font-weight-normal'>We ensure a smooth migration of your store, to BigCommerce, with full SEO, performance optimization, and technical fine-tuning.</p>
 
            </div>
        </div>
      </div>


      <div className="col-md-4 mt-5" data-aos="fade-left">
        <div className="needBox">
            <img src={icon.src} alt="" />
            <div className="p-3 pb-3">
                <h4 className='mt-3 mb-3 text_primary'>eCommerce ecosystem enhancements</h4>
                <p className='font-weight-normal'>We deploy and upscale ERP, CRM, OMS, PIM systems, custom payment gateways, and other integrations for any BigCommerce store.</p>
            </div>
        </div>
      </div>

      <div className="col-md-4 mt-5" data-aos="zoom-in">
        <div className="needBox">
            <img src={icon.src} alt="" />
            <div className="p-3 pb-3">
                <h4 className='mt-3 mb-3 text_primary'>Checkout optimization</h4>
                <p className='font-weight-normal'>Increase revenue with a BigCommerce checkout optimization program fully customized to your business revenue grow</p>
            </div>
        </div>
      </div>
      <div className="col-md-4 mt-5" data-aos="fade-right">
        <div className="needBox">
            <img src={icon.src} alt="" />
            <div className="p-3 pb-3">
                <h4 className='mt-3 mb-3 text_primary'>Customised Storefront</h4>
                <p className='font-weight-normal'>Stand out from the crowd with a fully customised BigCommerce storefront designed to match your brand and impress your customers.</p>
            </div>
        </div>
      </div>
      <div className="col-md-12 mt-5 pt-5" data-aos="zoom-in">
      <button className="btn btn-outline-primary"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>

      </div>
     </div> 
</div>


<div className="bg-black mt-5 p-4 p-md-5" data-aos="fade-left">
    <div className="conatiner">
    <div className="row align-items-center">
        <div className="col-md-7 mb-md-0 mb-5">
            <h1 className='text_primary'>BigCommence Theme & App Development</h1>
            <p className='text-white mb-5 desc_big'>BigCommerce is a leading cloud-based eCommerce platform designed for both budding and established businesses.  With its user-friendly interface, it empowers merchants to create captivating online stores, streamline product listings,  and manage sales efficiently.</p>
            <button className="btn btn-outline-primary m-0">Read More</button>
        </div>
        <div className="col-md-5">
            <img src={Big.src} className='bigImg' alt="" />
        </div>
        </div>
    </div>
</div>
</div>
</>
)
}