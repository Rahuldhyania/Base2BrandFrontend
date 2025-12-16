'use client'
import { useEffect } from 'react';

import React from "react";     

import "./web.css"
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
                      What is web development?
                      </button>
                    </h2>
                    <div id="flush-collapse1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Web development refers to the process of building and maintaining websites. It involves tasks such as web design, content creation, client-side/server-side scripting, and network security configuration.</p></div>
                    </div>
                  </div>
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                      What services do web development include?
                      </button>
                    </h2>
                    <div id="flush-collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"> <p>Web development companies typically offer a range of services including website design, front-end and back-end development, e-commerce solutions, content management systems (CMS) development, website maintenance, and website optimization for performance and search engines</p></div>
                    </div>
                  </div>
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                      How long does it take to develop a website?
                      </button>
                    </h2>
                    <div id="flush-collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>The timeline for website development varies depending on factors such as the complexity of the project, the number of features required, client feedback and revisions, and the responsiveness of the development team.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                      Do I need to have technical knowledge to work with a web development company?
                      </button>
                    </h2>
                    <div id="flush-collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>No, you don&apos;t necessarily need technical knowledge to work with a web development company. Our web development company will guide you through the process and help you understand the technical aspects of your project.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                      Does your web development company provide ongoing support and maintenance?
                      </button>
                    </h2>
                    <div id="flush-collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Many web development companies offer ongoing support and maintenance services to ensure that your website remains up-to-date, secure, and functional. This may include software updates, security patches, content updates, and technical support.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                      Do you guarantee completion of the project on time?
                      </button>
                    </h2>
                    <div id="flush-collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Yes, we prioritize timely delivery through structured processes. However, timelines may vary based on project complexity, and we ensure clear communication throughout to meet agreed-upon deadlines.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                      Will the website be optimized for sales?
                      </button>
                    </h2>
                    <div id="flush-collapse7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Absolutely, our expertise in UX design and conversion optimization ensures your website is tailored to drive sales. We integrate e-commerce functionality and user-friendly features to maximize conversions.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
                      How can I trust your service?
                      </button>
                    </h2>
                    <div id="flush-collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Our proven track record, experienced team, transparent communication, and client testimonials affirm our reliability. We prioritize client satisfaction and deliver high-quality solutions, earning trust through every project.</p>
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