'use client'
import React, { useState } from "react"; 
import "../../src/app/quote.css";
import Request from "./request-form";

export default function RequestQuote() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function() {
      const ModalBody = document.querySelector(".request-form");
      if(ModalBody){
        ModalBody.classList.add("transformAnim");
      }
                               
      }, 200);
  };
  

  return (
    <>  
    <div className="py-5 mb-5 b2b-black-bg" data-aos="fade-up" data-aos-delay="300">
                <div className="col-md-12 text-center" >
                    <h3 className='b2b-partners-heading' data-aos="fade-up" data-aos-delay="300">Let&apos;s Discuss Your Project, We&apos;ll Come Up<br />with the Best Solutions</h3> 
                    <p className="text-white" data-aos="fade-up" data-aos-delay="300">Ready to reach your business goals, faster? Drop us a line today.</p>
                    <div className="service-btn d-flex flex-wrap justify-content-center mt-3 w-100" data-aos="fade-up" data-aos-delay="300">
                      <button className="b2b-btn b2b-btn-lg m-0" onClick={toggleModal}>Request a Quote</button>
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