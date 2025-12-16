'use client'
import { useEffect } from 'react';
import "./base.css"
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
                      What is app development?
                      </button>
                    </h2>
                    <div id="flush-collapse1" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>App development refers to the process of creating software applications designed to run on mobile devices like smartphones and tablets.</p></div>
                    </div>
                  </div>
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse2" aria-expanded="false" aria-controls="flush-collapse2">
                      What platforms do you develop apps for?
                      </button>
                    </h2>
                    <div id="flush-collapse2" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"> <p>We specialize in developing apps for both iOS and Android platforms, ensuring compatibility with a wide range of devices.</p></div>
                    </div>
                  </div>
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse3" aria-expanded="false" aria-controls="flush-collapse3">
                      How long does it take to develop an app?
                      </button>
                    </h2>
                    <div id="flush-collapse3" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>The timeline for app development varies based on factors such as complexity, features, and client requirements. We provide detailed timelines during the planning phase.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse4" aria-expanded="false" aria-controls="flush-collapse4">
                      What technologies do you use for app development?
                      </button>
                    </h2>
                    <div id="flush-collapse4" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>We utilize a variety of technologies depending on project requirements. This may include programming languages like Swift, Java, Kotlin, and frameworks like React Native or Flutter.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse5" aria-expanded="false" aria-controls="flush-collapse5">
                      Do you provide ongoing maintenance and support after app launch?
                      </button>
                    </h2>
                    <div id="flush-collapse5" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Yes, we offer ongoing maintenance and support services to ensure your app remains up-to-date, secure, and optimized for performance.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse6" aria-expanded="false" aria-controls="flush-collapse6">
                      Can you help with app design?
                      </button>
                    </h2>
                    <div id="flush-collapse6" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Absolutely, we offer comprehensive app design services to create visually appealing, intuitive user interfaces that enhance user experience.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse7" aria-expanded="false" aria-controls="flush-collapse7">
                      Do you assist with app store submission?
                      </button>
                    </h2>
                    <div id="flush-collapse7" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Yes, we provide assistance with app store submission, ensuring that your app meets all guidelines and requirements for a successful launch.</p>
                    </div>
                    </div>
                  </div> 
                  <div className="accordion-item"  data-aos="fade-up" data-aos-delay="300">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse8" aria-expanded="false" aria-controls="flush-collapse8">
                      How do you ensure the security of the apps you develop?
                      </button>
                    </h2>
                    <div id="flush-collapse8" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                      <div className="accordion-body"><p>Security is a top priority for us. We implement industry best practices and security measures throughout the development process to safeguard your app and user data.</p>
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