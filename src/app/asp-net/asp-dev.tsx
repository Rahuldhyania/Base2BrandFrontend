'use client'
import { useEffect } from 'react';

import React from "react"; 
import AspNet from '../../../public/net/data.png';     
import shopify from '../../../public/services-img/2.png';     
import '../shopify/service.css'
import Quote from "../../../public/services2-img/quote-ico.png";

export default function AspDev() {
 
  

  return (
    <>  
        <div className="p-5  bgLight"> 
    <div className="container pt-5">
<div className="row text-white">
    <div className="col-md-6">
        <img src={AspNet.src} className='w-75 m-auto mb-3' alt="" />
     </div>
    <div className="col-md-6">
         <h1>End-to-end ASP.NET Development <br />
         Services by Base<span className='text_primary'>2</span>Brand</h1>
         <p className='lineHeight'>Microsoft ASP.NET is an open-source server-side web application framework that is used by Dot NET developers to make dynamic websites and web applications. </p>
        <p className='lineHeight mb-5'>Having dedicated resources of expert ASP.NET developers, we provide cutting edge ASP.NET development services to meet your desired goals expeditiously, with a competitive price. We are a leading ASP.NET Web Development Company in India that creates modern, secure, scalable and feature-rich applications.</p>
        <button className="btn btn-outline-primary m-0"> Request a Quote <img className="ico" src={Quote.src} alt="" /></button>
  
    </div>
    </div> 




    <div className="row mt-5 pt-5">
        <div className="col-md-12 text-center text-white">
            <h1>ASP.NET Development Services</h1>
        </div>
    <div className="col-md-4 mt-5">
        <div className="needBox text-white">
            <div className="p-4">
            <div className='bgBlack'>1</div> 
                <h4 className='mt-3 mb-3 text_primary'>ASP.NET <br /> Integration</h4>
                <p className='font-weight-normal'>In certain instances, you may need advanced features and functionalities to enhance your store performance. Fortunately, Shopline app store offers seamless integration with numerous third-party apps and services, providing the boost you need.</p>
                 
            </div>
        </div>
      </div>
      <div className="col-md-4 mt-5">
        <div className="needBox text-white">
            <div className="p-4">
            <div className='bgBlack'>2</div> 
                <h4 className='mt-3 mb-3 text_primary'>ASP.NET <br /> Migration</h4>
                <p className='font-weight-normal'>In certain instances, you may need advanced features and functionalities to enhance your store performance. Fortunately, Shopline app store offers seamless integration with numerous third-party apps and services, providing the boost you need.</p>
                 
            </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
        <div className="needBox text-white">
            <div className="p-4">
            <div className='bgBlack'>3</div> 
                <h4 className='mt-3 mb-3 text_primary'>ASP.NET Ecommerce Development</h4>
                <p className='font-weight-normal'>In certain instances, you may need advanced features and functionalities to enhance your store performance. Fortunately, Shopline app store offers seamless integration with numerous third-party apps and services, providing the boost you need.</p>
                 
            </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
        <div className="needBox text-white">
            <div className="p-4">
            <div className='bgBlack'>4</div> 
                <h4 className='mt-3 mb-3 text_primary'>ASP.NET Website <br /> Development</h4>
                <p className='font-weight-normal'>In certain instances, you may need advanced features and functionalities to enhance your store performance. Fortunately, Shopline app store offers seamless integration with numerous third-party apps and services, providing the boost you need.</p>
                 
            </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
        <div className="needBox text-white">
            <div className="p-4">
            <div className='bgBlack'>5</div> 
                <h4 className='mt-3 mb-3 text_primary'>ASP.NET Web Application Development</h4>
                <p className='font-weight-normal'>In certain instances, you may need advanced features and functionalities to enhance your store performance. Fortunately, Shopline app store offers seamless integration with numerous third-party apps and services, providing the boost you need.</p>
                 
            </div>
        </div>
      </div>

      <div className="col-md-4 mt-5">
        <div className="needBox text-white">
            <div className="p-4">
            <div className='bgBlack'>6</div> 
                <h4 className='mt-3 mb-3 text_primary'>Desktop Application Development</h4>
                <p className='font-weight-normal'>In certain instances, you may need advanced features and functionalities to enhance your store performance. Fortunately, Shopline app store offers seamless integration with numerous third-party apps and services, providing the boost you need.</p>
                 
            </div>
        </div>
      </div>
    </div>
</div>
</div>
</>
)
}