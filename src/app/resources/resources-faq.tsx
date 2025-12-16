'use client'
import { useEffect } from 'react';

import React from "react";   
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
      What is outsourcing web development?
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Outsourcing web development involves hiring external experts or agencies to design, develop, and maintain websites or web applications instead of relying solely on in-house resources.</div>
    </div>
  </div>
  <div className="accordion-item" data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
      Why should I outsource web development? 
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Outsourcing web development offers access to specialized skills, cost savings, faster time-to-market, scalability, and the ability to focus on core business activities.</div>
    </div>
  </div>
  <div className="accordion-item"  data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
      How do I choose the right outsourcing partner?
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body">Choose a partner with relevant experience, a strong portfolio, positive client testimonials, transparent communication, adherence to deadlines, and a flexible approach.
    </div>
    </div>
  </div> 
  <div className="accordion-item"  data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew" aria-expanded="false" aria-controls="flush-collapseNew">
      What factors should I consider before outsourcing?
      </button>
    </h2>
    <div id="flush-collapseNew" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Consider factors such as project scope, budget, timeline, desired technology stack, communication preferences, cultural fit, and intellectual property protection.
    </div>
    </div>
  </div> 
  <div className="accordion-item"  data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew1" aria-expanded="false" aria-controls="flush-collapseNew1">
      How do I ensure the security of my data and project?
      </button>
    </h2>
    <div id="flush-collapseNew1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body"> Ensure your outsourcing partner signs a non-disclosure agreement (NDA), complies with data protection regulations, implements secure coding practices, and follows industry best practices for security.
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
      What is the typical process for outsourcing web development?
      </button>
    </h2>
    <div id="flush-collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">The process typically involves project discovery, requirement gathering, design mockups, development, testing, deployment, and ongoing maintenance and support.</div>
    </div>
  </div> 

  <div className="accordion-item"  data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
      How can I track the progress of my project?
      </button>
    </h2>
    <div id="flush-collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">Choose a partner that provides regular progress updates, conducts status meetings, uses project management tools, and maintains open communication channels for real-time collaboration.</div>
    </div>
  </div>

  <div className="accordion-item" data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
      What if I am not satisfied with the delivered work?
      </button>
    </h2>
    <div id="flush-collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">Ensure your contract includes provisions for revisions and guarantees satisfaction. Discuss concerns openly with your outsourcing partner and collaborate on finding solutions to address them.</div>
    </div>
  </div>
  <div className="accordion-item" data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew4" aria-expanded="false" aria-controls="flush-collapseNew4">
      How do I handle changes or additions to the project scope?
      </button>
    </h2>
    <div id="flush-collapseNew4" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">Discuss potential changes upfront, document them in a change request, evaluate their impact on the timeline and budget, and obtain mutual agreement before proceeding with implementation.</div>
    </div>
  </div>

  <div className="accordion-item" data-aos-easing="linear" data-aos-duration="1500">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNew4" aria-expanded="false" aria-controls="flush-collapseNew4">
      What ongoing support and maintenance services are offered?
      </button>
    </h2>
    <div id="flush-collapseNew4" className="accordion-collapse collapse" data-bs-parent="#accordion">
      <div className="accordion-body">Inquire about post-launch support, bug fixes, software updates, security patches, performance optimization, and scalability options to ensure the long-term success of your web project.
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