'use client'

import React from "react";  
import Revenue1 from "../../../public/googlePPC-img/revenue1.png";
import Revenue2 from "../../../public/googlePPC-img/revenue2.png";
import Revenue3 from "../../../public/googlePPC-img/revenue3.png";
import Revenue4 from "../../../public/googlePPC-img/revenue4.png";
import "../../app/seo/seo.css"

export default function revenue() {
   
  return (
    <>  
      <div className="container-fluid p-5 mt-md-5 mt-0"> 
        <div className="row text-white mb-5" data-aos="zoom-in"> 
          <div className="col-12 pb-5 text-center" data-aos="fade-up">
            <h1 className=" mb-3">Revenue growth through SEO</h1>
            <p className="col-12 col-sm-12 col-lg-7 ppc-para text-center m-auto d-flex flex-wrap">Assuming you are hoping to develop your business, a powerful Search Engine Optimization (SEO) strategy is one of the strongestROI driving inbound advanced techniques. Most of clients currently start the process by discovering items and administrations through the significant web search tools like Google, Yahoo, and Bing.</p>
          </div>
          
          <div className="col-md-3" >
            <div className="revenue_bg">
                <img className="mb-4" src={Revenue1.src} alt="" />
                <h1 className="web-head">95%</h1>
                <p className="font-light">Of online experiences begin with a search engine</p>
          </div>
          </div>

          <div className="col-md-3">
            <div className="revenue_bg">
                <img className="mb-4" src={Revenue2.src} alt="" />
                <h1 className="web-head">60%</h1>
                <p className="font-light">Of people never scroll past the first search page</p>
          </div>
          </div>

          <div className="col-md-3">
            <div className="revenue_bg">
                <img className="mb-4" src={Revenue3.src} alt="" />
                <h1 className="web-head">75%</h1>
                <p className="font-light">Of clicks go to the first organic link on the page</p>
          </div>
          </div>

          <div className="col-md-3">
            <div className="revenue_bg">
                <img className="mb-4" src={Revenue4.src} alt="" />
                <h1 className="web-head">80%</h1>
                <p className="font-light">Of people with smartphones use a search engine daily</p>
          </div>
          </div>
            
        </div>

     
      </div> 
    </>
  )
}
