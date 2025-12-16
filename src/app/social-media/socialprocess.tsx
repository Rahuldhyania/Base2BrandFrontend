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
      <div className="container-fluid p-3 mt-5"> 
       
        <div className="row"> 
        <div className="col-md-12 text-center text-white mt-5 mb-5 pt-5">
                <h2>Social media marketing process that drive results</h2>
            </div> 
            <div className="col-md-12">
                <div className="borderBox">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src={Process.src} className="w-100" alt="" />
                        </div>
                        <div className="col-md-9 pe-4 ps-4">
                            <h2 className="text_primary mb-4">Choose your service</h2>
                            <p className="text-white">For lead generation, choose a social media strategy and schedule a call to one of our digital marketing specialists.</p>
                        </div>
                    </div>
                </div>

                <div className="borderBox">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src={Process1.src} className="w-100" alt="" />
                        </div>
                        <div className="col-md-9 ps-4 pe-4">
                            <h2 className="text_primary mb-4">Service questionnaire</h2>
                            <p className="text-white">Once you have become a Base2Brand client, you will need to complete a service setup form. This allows us to ask you questions about your business.</p>
                        </div>
                    </div>
                </div>

                <div className="borderBox">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                            <img src={Process2.src} className="w-100" alt="" />
                        </div>
                        <div className="col-md-9 ps-4 pe-4">
                            <h2 className="text_primary mb-4">Preparing for launch</h2>
                            <p className="text-white">We conduct research on your company, create marketing strategies, design your creative, and dial in to your target customers.</p>
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
                        <div className="col-md-9 ps-4 pe-4">
                            <h2 className="text_primary mb-4">Ongoing Social Strategy Optimization</h2>
                            <p className="text-white">Social media marketing is not a onetime thing. After implementing a strategy we look whether it is performing well or changes that we need to implement to make it perfect.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       
      </div> 
    </>
  )
}
