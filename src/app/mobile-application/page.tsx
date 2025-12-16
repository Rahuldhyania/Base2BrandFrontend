"use client";

import React, { useState } from "react";  
import Header from "../../../component/header";
import Appdevelopment from "../../../src/app/mobile-application/app-development";
import OurService from "../../../src/app/mobile-application/our-service";
import Technologystack from "../../../src/app/mobile-application/technologystack";
import Feedback from "../feedback"; 
import Faq from "../../../src/app/faq";
import Quote from "../request-quote"; 
import Footer from "../../../component/footer";
import banner from '../../../public/mobile/banner.png';   
import Typewriter from 'typewriter-effect';
import "../mobile-application/mobile.css";
import Request from "../request-form"; 


export default function Mobile() {
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
      <Header />
      <div className="bg-black pt-0 pb-5">
        <div className="mobilebanner pt-5"  style={{
      backgroundImage: `url(${banner.src})`,
      width: '100%',
      height: '900px',  
      backgroundSize: 'cover',
      position: 'relative',
      backgroundColor:' #000',
    }}>
         <div className="row w-100 pl-5"> 
         <div className="col-md-6 pl-5 text-white" data-aos="fade-left">
         <Typewriter 
                options={{
                  strings: ['App Development'],
                  autoStart: true,
                  loop: true,
                }}
              /> 
            <p className="mb-5 mt-4 army">Our app development services encompass the creation and maintenance <br /> of mobile applications across various platforms like iOS and Android. <br /> These services typically include design, coding, testing, and deployment. <br /> Our effective collaboration between developers and clients ensures tailored, high-quality solutions.</p>
            <button className="btn btn-outline-primary m-0" onClick={toggleModal}> 
            {/* <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i>  */}
            Request a Quote </button>
         </div>  
        </div>
        </div>
        <Appdevelopment />
        <OurService />
        <Technologystack />
        <Feedback/>
        <Faq/>
        <Quote/>
      
        <Footer />
       
      </div>
      {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
    </>
  );
}

