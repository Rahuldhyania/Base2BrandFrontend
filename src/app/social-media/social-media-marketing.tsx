'use client'

import React from "react";  
import Revenue1 from "../../../public/googlePPC-img/revenue1.png";
import Revenue2 from "../../../public/googlePPC-img/revenue2.png";
import Revenue3 from "../../../public/googlePPC-img/revenue3.png";
import Revenue4 from "../../../public/googlePPC-img/revenue4.png";
import "../../app/seo/seo.css"

export default function Socialmarketing() {
   
  return (
    <>  
      <div className="container-fluid p-5 mt-5"> 
        <div className="row text-white mb-5"> 
          <div className="col-12 pb-5 text-center" data-aos="fade-up">
            <h1 className=" mb-3">Target  exact audience through Social media management <br /> and marketing Services</h1>
            <p className=" text-center  ">Having a perfect product or service but unable to get sales? Save your hard earned money from getting <br /> exhausted at wrong places, reach out to people who are interested in products and services that you offer <br /> through social media management and marketing.</p>
          </div>
          
          <div className="col-md-3" data-aos="fade-down">
            <div className="revenue_bg">
                <img className="mb-4" src={Revenue1.src} alt="" />
                <h1 className="web-head">57%</h1>
                <p className="font-light">of total global population use social media</p>
          </div>
          </div>

          <div className="col-md-3" data-aos="fade-down">
            <div className="revenue_bg">
                <img className="mb-4" src={Revenue2.src} alt="" />
                <h1 className="web-head">25%</h1>
                <p className="font-light">of increase in customer advocacy</p>
          </div>
          </div>

          <div className="col-md-3" data-aos="fade-down">
            <div className="revenue_bg">
                <img className="mb-4" src={Revenue3.src} alt="" />
                <h1 className="web-head">37%</h1>
                <p className="font-light">people search for a brand on social media</p>
          </div>
          </div>

          <div className="col-md-3" data-aos="fade-down">
            <div className="revenue_bg">
                <img className="mb-4" src={Revenue4.src} alt="" />
                <h1 className="web-head">24%</h1>
                <p className="font-light">people click on a sponsored post</p>
          </div>
          </div>
            
        </div>

     
      </div> 
    </>
  )
}
