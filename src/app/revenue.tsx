'use client'

import React from "react"; 
import Revenue1 from "../../public/googlePPC-img/revenue1.png";
import Revenue2 from "../../public/googlePPC-img/revenue2.png";
import Revenue3 from "../../public/googlePPC-img/revenue3.png";
import Revenue4 from "../../public/googlePPC-img/revenue4.png";

export default function home() {
   
  return (
    <>  
      <div className="container-fluid p-5 mt-5"> 
        <div className="row revenue text-white justify-content-center"> 
          <div className="col-12 pb-4">
            <h1 className="text-center font-light fs-3 col-12 col-sm-12 col-lg-5 m-auto d-flex flex-wrap mb-3">Why Choose Us for PPC Management Services?</h1>
            <p className="col-12 col-sm-12 col-lg-7 ppc-para text-center m-auto d-flex flex-wrap">PPC management requires extensive experience and a data-driven approach. Since we started our PPC agency over 7 years ago, the most important lesson has been the one that the numbers have taught us. This approach has allowed us to work with some of the worlds most recognizable brands and delivered exceptional results.</p>
          </div>
          
          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
            <div className="revenue-bg p-4">
                <img className="mb-4" src={Revenue1.src} alt="" />
                <h4 className="web-head">Cost-effective</h4>
                <p className="font-light">You&apos;re fully in control of your budget because you only pay for clicks.</p>
          </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
          <div className="revenue-bg p-4">

                <img className="mb-4" src={Revenue2.src} alt="" />
                <h4 className="web-head">Instant traffic</h4>
                <p className="font-light">PPC advertising slots are already at the top of search results, so why not use them?</p>
          </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
          <div className="revenue-bg p-4">

                <img className="mb-4" src={Revenue3.src} alt="" />
                <h4 className="web-head">Warm leads</h4>
                <p className="font-light">You reach the right people when they are searching for what you sell.</p>
          </div>
          </div>

          <div className="col-12 col-sm-6 col-md-3 col-lg-3">
          <div className="revenue-bg p-4"> 
                <img className="mb-4" src={Revenue4.src} alt="" />
                <h4 className="web-head">Positive ROI</h4>
                <p className="font-light">Everything that&apos;s measurable can be improved and monetized.</p>
          </div>
          </div>
            
        </div>
      </div> 
    </>
  )
}
