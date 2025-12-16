'use client'

import React, { useState } from "react";   
import Seo from '../../../public/seo/seo.png';    
import Tags from '../../../public/seo/tags.png';    
import Header from '../../../component/header';    
import "../../app/seo/seo.css";
import Request from "../request-form";


export default function SeoAccordion() { 
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>   
      <div className="container mt-5 pb-5"> 
          <div className="row"> 
          <div className="text-center text-white mb-5"  >
        <h2>Professional SEO  agency services</h2>
      </div>

          <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <div className="row">
        <div className="col-md-4 orderOne"  >
        <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      PPC Audits (SEM)
      </button>
    </h2>
        </div>
    <div className="col-md-8 desc orderTwo"  >
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">  
            <div className="row"> 
                    <div className="seoBox p-4">
                        <h2>PPC Channels We Work With</h2>
                        <p>If you are looking to improve your business SEO rankings, look no further. Base 2 Brand SEO services will help you rank on the first page for local search and ensure your potential customers can find you on Google maps.</p>
                        <div className="row">
                            <div className="col-md-6">
                            <ul className="tagsSeo mb-4">
                        <li>Bing Places for Business</li> 
                        <li>Google Maps</li>   
                        <li>Mobile SEO</li>
                        <li>Name, Address, Phone Number</li>
                        <li>Citation Building</li>
                        <li>Review Generation</li>
                    </ul> 
                    <button className="btn btn-outline-primary m-0" onClick={toggleModal}> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
                            </div>
                            <div className="col-md-6">
                            <img className='marketing w-75' src={Tags.src} alt="" /> 

                            </div>
                        </div>
                        
                    </div> 
            </div>
       
      </div>
    </div>

      </div>
    </div>
  </div>
  <div className="accordion-item">
  <div className="row">
        <div className="col-md-4 orderOne"  >
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Social Advertising
      </button>
    </h2>
    </div>
    <div className="col-md-8 desc orderTwo"  >
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="row"> 
                    <div className="seoBox p-4">
                        <h2>PPC Channels We Work With</h2>
                        <p>If you are looking to improve your business SEO rankings, look no further. Base 2 Brand SEO services will help you rank on the first page for local search and ensure your potential customers can find you on Google maps.</p>
                        <div className="row">
                            <div className="col-md-6">
                            <ul className="tagsSeo mb-4">
                        <li>Bing Places for Business</li> 
                        <li>Google Maps</li>   
                        <li>Mobile SEO</li>
                        <li>Name, Address, Phone Number</li>
                        <li>Citation Building</li>
                        <li>Review Generation</li>
                    </ul> 
                    <button className="btn btn-outline-primary m-0" onClick={toggleModal}> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
                            </div>
                            <div className="col-md-6"  >
                            <img className='marketing w-75' src={Tags.src} alt="" /> 

                            </div>
                        </div>
                        
                    </div> 
            </div>
      </div>
    </div>
    </div> 
  </div>
  </div>

  <div className="accordion-item">
  <div className="row">
        <div className="col-md-4 orderOne"  >
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Google AdWords
      </button>
    </h2>
    </div>
    <div className="col-md-8 desc orderTwo"  >
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <div className="row"> 
                    <div className="seoBox p-4">
                        <h2>PPC Channels We Work With</h2>
                        <p>If you are looking to improve your business SEO rankings, look no further. Base 2 Brand SEO services will help you rank on the first page for local search and ensure your potential customers can find you on Google maps.</p>
                        <div className="row">
                            <div className="col-md-6">
                            <ul className="tagsSeo mb-4">
                        <li>Bing Places for Business</li> 
                        <li>Google Maps</li>   
                        <li>Mobile SEO</li>
                        <li>Name, Address, Phone Number</li>
                        <li>Citation Building</li>
                        <li>Review Generation</li>
                    </ul> 
                    <button className="btn btn-outline-primary m-0" onClick={toggleModal}> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
                            </div>
                            <div className="col-md-6"  >
                            <img className='marketing w-75' src={Tags.src} alt="" /> 

                            </div>
                        </div>
                        
                    </div> 
            </div>
            </div>
            </div>
      </div>
    </div>
  </div>
</div>



           
        </div>
      </div>  

      {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
    </>
  )
}
