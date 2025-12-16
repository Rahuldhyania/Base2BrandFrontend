'use client'
import { useEffect } from 'react';
import "./graphic.css"
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
                      What is the difference between UI and UX design?
                      </button>
                    </h2>
                    <div id="flush-collapse1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>UI (User Interface) design focuses on the visual elements of an interface, while UX (User Experience) design is about the overall feel and functionality, emphasizing user satisfaction and usability.</p></div>
                    </div>
                  </div>
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                      Why is UI/UX design important for my business?
                      </button>
                    </h2>
                    <div id="flush-collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"> <p>Effective UI/UX design can enhance user satisfaction, increase customer loyalty, boost conversion rates, and ultimately drive business growth by providing seamless and engaging digital experiences.</p></div>
                    </div>
                  </div>
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                      What tools do you use for UI/UX design?
                      </button>
                    </h2>
                    <div id="flush-collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>We utilize industry-standard tools such as Figma, Adobe XD, Sketch, and Adobe Photoshop to create wireframes, prototypes, and design mockups, ensuring efficient collaboration and high-quality deliverables.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                      What is the typical process for UI/UX design projects?
                      </button>
                    </h2>
                    <div id="flush-collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Our process typically involves research and analysis, wireframing and prototyping, visual design, user testing, and iteration to create user-centered designs that meet your objectives and resonate with your target audience.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                      How do you ensure consistency across different devices and platforms?
                      </button>
                    </h2>
                    <div id="flush-collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>We follow responsive design principles and conduct thorough testing across various devices, screen sizes, and browsers to ensure consistent user experiences, maintaining brand identity and usability regardless of the platform.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                      Can you work with our existing brand guidelines?
                      </button>
                    </h2>
                    <div id="flush-collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Absolutely! We can incorporate your existing brand guidelines into the design process to ensure consistency with your brand identity, maintaining visual cohesion across all touchpoints and digital assets.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                      How do you handle feedback and revisions during the design process?
                      </button>
                    </h2>
                    <div id="flush-collapse7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>We welcome client feedback at every stage of the design process and provide multiple rounds of revisions to ensure that the final product aligns with your vision and objectives, fostering collaboration and transparency throughout the project.</p>
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