'use client'
import { useEffect } from 'react';
import "./digital.css"
import React from "react";     


export default function FAQ() {
 
  

  return (
    <>  
        <div className="container">
            <div className="row">
              <div className="col-md-12">
              <div className="text-center">
                  <h2 className='text-white b2b-main-heading text-center' data-aos="fade-up" data-aos-delay="300">Frequently Asked Questions</h2>
                  </div>
              </div>
              <div className="col-xl-8 col-lg-9 col-md-12 m-auto mt-5">
                <div className="accordion accordion-flush b2b-accordion" id="accordionFlushExample">
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header fs-4">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse1" aria-expanded="false" aria-controls="flush-collapse1">
                      What is Search Engine Optimization (SEO)?
                      </button>
                    </h2>
                    <div id="flush-collapse1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>SEO improves your website's visibility on search engines like Google, driving organic traffic and enhancing online presence.</p></div>
                    </div>
                  </div>
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                      How long does it take to see results with SEO?
                      </button>
                    </h2>
                    <div id="flush-collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"> <p>SEO results vary, but significant improvements often take 3-6 months, with ongoing optimizations for sustained success.</p></div>
                    </div>
                  </div>
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                      What are Google Ads (PPC) and how do they work?
                      </button>
                    </h2>
                    <div id="flush-collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Google Ads are paid advertisements that appear on Google search results. They work on a pay-per-click basis, where advertisers bid on keywords to display their ads to relevant users.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                      What is the typical turnaround time for setting up Google Ads campaigns?
                      </button>
                    </h2>
                    <div id="flush-collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Google Ads campaigns can be set up within a few days, depending on factors like campaign complexity and ad approval processes.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                      What is Social Media Optimization (SMO)?
                      </button>
                    </h2>
                    <div id="flush-collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>SMO involves optimizing social media platforms to increase brand visibility, engagement, and reach.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                      How does Social Media Optimization benefit my business?
                      </button>
                    </h2>
                    <div id="flush-collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>SMO helps in building brand awareness, driving website traffic, fostering customer engagement, and enhancing brand reputation.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                      What is Online Reputation Management (ORM)?
                      </button>
                    </h2>
                    <div id="flush-collapse7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>ORM involves monitoring, addressing, and influencing online conversations and reviews about your brand to maintain a positive reputation.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
                      What kind of ongoing support do you offer for ORM?
                      </button>
                    </h2>
                    <div id="flush-collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>We provide ongoing monitoring of your online presence, prompt response to reviews and comments, and proactive strategies to enhance your brand's reputation continuously.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse9" aria-expanded="false" aria-controls="flush-collapse9">
                      What is YouTube Marketing?
                      </button>
                    </h2>
                    <div id="flush-collapse9" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>YouTube Marketing involves leveraging the platform for promoting your brand, products, or services through engaging video content.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse10" aria-expanded="false" aria-controls="flush-collapse10">
                      How do you ensure success with YouTube Marketing?
                      </button>
                    </h2>
                    <div id="flush-collapse10" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>We create compelling video content, optimize it for search visibility, promote it across relevant channels, and analyze performance metrics to refine strategies for maximum impact.</p>
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