"use client";

import React, { useState } from "react";   
import mobile1 from '../../../public/mobile/mobile1.png';   
import mobile2 from '../../../public/mobile/mobile2.png';   
import mobile3 from '../../../public/mobile/mobile3.png';   
import Item from '../../../public/mobile/item.png';   
import Project from '../../../public/mobile/project.png';   
import FlipSlider from '../mobile-application/flip-slider';   
import Request from "../request-form"; 

export default function Marketing() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };
  return (
    <> 
      <div className="container mt-5 mb-5">
         <div className="row text-white align-items-center">
            {/* <div className="col-md-12 text-center text-white mb-5 pt-5" data-aos="fade-up">
                <h2>Our Services</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy tex</p>
            </div> */}
            <div className="col-md-6 mt-5" >
                <img src={mobile1.src} className="w-75 m-auto m-md-0" alt="" />
            </div>
            <div className="col-md-6 mt-5"  >
                <h2 className="text_primary">Hybrid App Development</h2>
                <p className="mb-5">Hybrid app development combines elements of both native and web applications, utilizing web technologies like HTML, CSS, and JavaScript. This approach offers cross-platform compatibility, reducing development time and costs. Our hybrid app development service caters to your needs by leveraging our expertise in frameworks like React Native and Flutter. We ensure seamless integration, optimal performance, and cost-effective solutions to meet your business objectives.</p>
                <button className="btn btn-outline-primary m-0" onClick={toggleModal}> 
            <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> 
            Request a Quote </button>
            </div>

          

            <div className="col-md-6 mt-5"  >
                <h2 className="text_primary">ANDROID APP DEVELOPMENT</h2>
                <p className="mb-5">Our Android development service offers comprehensive solutions for creating cutting-edge mobile applications tailored to your business needs. With over 2.7 billion active Android devices worldwide as of 2023, tapping into this market is crucial. Our expert developers utilize Java or Kotlin to craft high-performance apps with sleek UI/UX designs, robust functionalities, and seamless integration. From concept to deployment, we ensure top-notch quality and efficiency, empowering your business to thrive in the mobile space.</p>
                <button className="btn btn-outline-primary m-0" onClick={toggleModal}> 
            <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> 
            Request a Quote </button>
            </div>
           
            <div className="col-md-6 mt-5" >
                <img src={mobile2.src}  className="w-75 m-auto m-md-0"  alt="" />
            </div>
            
            {/* <div className="col-md-6 mt-5" >
                <img src={mobile3.src}  className="w-50 m-auto m-md-0" alt="" />
            </div>
            <div className="col-md-6 mt-5">
                <h2 className="text_primary">HYBRID/HTML5 APP DEVELOPMENT</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, b</p>
            </div> */}
            {/* <div className="col-md-12 mt-5 mb-5"  >
            <button className="btn btn-outline-primary"> 
            <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> 
            Request a Quote </button>

            </div> */}

            <div className="col-md-12 text-center mt-5" >
                <h2 className="mb-5 mt-5">Mobile App Development Process</h2>
                <img src={Item.src} className="w-100 mt-5" alt="" />
            </div>
         </div>
      </div>
      <div className="ourProject text-center text-white mt-5">
        <h2 className="mt-5 pt-5">Our Cherished Projects</h2>
        <FlipSlider />
        {/* <img src={Project.src} className="w-100" alt="" /> */}
      </div>
      <div className="col-md-12 mt-5 mb-5">
            <button className="btn btn-outline-primary" onClick={toggleModal}> 
            {/* <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i>  */}
            Request a Quote </button>

            </div>

            {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
    </>
  );
}

