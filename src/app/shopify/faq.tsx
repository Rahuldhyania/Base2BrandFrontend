'use client'
import { useEffect } from 'react';

import React from "react"; 
import circle from '../../../public/services-img/circle.png';     
import lines from '../../../public/services-img/lines.png';     
import '../shopify/service.css'

export default function FAQ() {
 
  

  return (
    <>  
        <div className="p-5  bg_patner"> 
    <div className="container-fluid pb-5 position-relative">
      <div className="row">
        <div className="col-md-12 text-center mt-5">
            <h2 className='text-white'>FAQs</h2>
        </div>
        <div className="col-md-6">
        <div className="accordion accordion-flush" id="accordionFlushExample">
  <div className="accordion-item" data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header fs-4">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      What is Search Engine Optimization (SEO)?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">SEO improves your website&apos;s visibility on search engines like Google, driving organic traffic and enhancing online presence.</div>
    </div>
  </div>
  <div className="accordion-item" data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      How long does it take to see results with SEO? 
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> SEO results vary, but significant improvements often take 3-6 months, with ongoing optimizations for sustained success.</div>
    </div>
  </div>
  <div className="accordion-item"  data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      What are Google Ads (PPC) and how do they work?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Google Ads are paid advertisements that appear on Google search results. They work on a pay-per-click basis, where advertisers bid on keywords to display their ads to relevant users.
    </div>
    </div>
  </div> 
  <div className="accordion-item"  data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew" aria-expanded="false" aria-controls="flush-collapseNew">
      What is the typical turnaround time for setting up Google Ads campaigns?
      </button>
    </h2>
    <div id="flush-collapseNew" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Google Ads campaigns can be set up within a few days, depending on factors like campaign complexity and ad approval processes.
    </div>
    </div>
  </div> 
  <div className="accordion-item"  data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew1" aria-expanded="false" aria-controls="flush-collapseNew1">
      What is Social Media Optimization (SMO)?
      </button>
    </h2>
    <div id="flush-collapseNew1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> SMO involves optimizing social media platforms to increase brand visibility, engagement, and reach.
    </div>
    </div>
  </div> 
</div>
        </div>
        <div className="col-md-6" >
        <div className="accordion accordion-flush" id="accordion">
        <div className="accordion-item" data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
      How does Social Media Optimization benefit my business?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">SMO helps in building brand awareness, driving website traffic, fostering customer engagement, and enhancing brand reputation</div>
    </div>
  </div> 

  <div className="accordion-item"  data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      What is Online Reputation Management (ORM)?
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">ORM involves monitoring, addressing, and influencing online conversations and reviews about your brand to maintain a positive reputation.</div>
    </div>
  </div>

  <div className="accordion-item" data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      What kind of ongoing support do you offer for ORM?
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">We provide ongoing monitoring of your online presence, prompt response to reviews and comments, and proactive strategies to enhance your brand reputation continuously.</div>
    </div>
  </div>
  <div className="accordion-item" data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew4" aria-expanded="false" aria-controls="flush-collapseNew4">
      What is YouTube Marketing?
      </button>
    </h2>
    <div id="flush-collapseNew4" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">YouTube Marketing involves leveraging the platform for promoting your brand, products, or services through engaging video content.</div>
    </div>
  </div>

  <div className="accordion-item" data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew4" aria-expanded="false" aria-controls="flush-collapseNew4">
      How do you ensure success with YouTube Marketing?
      </button>
    </h2>
    <div id="flush-collapseNew4" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">We create compelling video content, optimize it for search visibility, promote it across relevant channels, and analyze performance metrics to refine strategies for maximum impact.
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