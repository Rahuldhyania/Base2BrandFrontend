'use client'

import React from "react"; 
import Process from "../../../public/seo/seoprocess.png" 
import Process1 from "../../../public/seo/seoprocess1.png" 
import Process2 from "../../../public/seo/seoprocess2.png" 
import Process3 from "../../../public/seo/seoprocess3.png" 
import Process4 from "../../../public/seo/seoprocess4.png" 
import "../../app/seo/seo.css"

export default function Seoprocess() {
   
  return (
    <>  
      <div className="container-fluid p-5 mt-5"> 
       
        <div className="row"> 
            <div className="col-md-12">
                <div className="borderBox" >
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src={Process.src} className="w-100" alt="" />
                        </div>
                        <div className="col-md-9 pl-5">
                            <h2 className="text_primary mb-4">Understand Your Market</h2>
                            <p className="text-white">Our clients and new customers are not just a commodity. <br />
                            We set aside the effort to comprehend your uniquetargeting market and how to drive the best outcomes inside it.</p>
                        </div>
                    </div>
                </div>

                <div className="borderBox">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src={Process1.src} className="w-100" alt="" />
                        </div>
                        <div className="col-md-9 pl-5">
                            <h2 className="text_primary mb-4">Data Driven Process</h2>
                            <p className="text-white">We do not guess. We use industry standard SEO analytics and proven SEO strategies to drive your campaign with complete facts.</p>
                        </div>
                    </div>
                </div>

                <div className="borderBox">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src={Process2.src} className="w-100" alt="" />
                        </div>
                        <div className="col-md-9 pl-5">
                            <h2 className="text_primary mb-4">Growth Obsessed</h2>
                            <p className="text-white">Digital Marketing is not an expense, it is an investment in growth. We are not satisfied unless your campaign is delivering a significant ROI.</p>
                        </div>
                    </div>
                </div>
                <div className="borderBox">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src={Process3.src} className="w-100" alt="" />
                        </div>
                        <div className="col-md-9 pl-5">
                            <h2 className="text_primary mb-4">Transparent Reporting</h2>
                            <p className="text-white">We value all out straightforwardness with no deliberate misdirection. We are proud of our work and want our clients to see what we are doing first-hand.</p>
                        </div>
                    </div>
                </div>
                <div className="borderBox">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src={Process4.src} className="w-100" alt="" />
                        </div>
                        <div className="col-md-9 pl-5">
                            <h2 className="text_primary mb-4">Ongoing Optimization</h2>
                            <p className="text-white">Effective digital marketing strategies are not “set it and forget it”. Search algorithms & your competition are always changing.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
      </div> 
    </>
  )
}
