"use client";

import React, { useState } from "react"; 
import Header from "../../../component/header";
import Footer from "../../../component/footer"; 
import Resource from "../../../src/app/resource-columns";
import ResourceTabs from "../../../src/app/resource-tab"
import Feedback from "./resources-feedback"; 
import Faq from "./resources-faq";   
import Quote from "../request-quote";   
import "../resources/resoures.css";
import Typewriter from 'typewriter-effect';
import Icons from '../../../public/resources/icons.png';
import Globe from '../../../public/resources/lan.png';
import Phone from '../../../public/resources/ph.png';
import Request from "../request-form";
import ApplyJobs from "../apply-jobs";

export default function Resources() { 
  const [showModal, setShowModal] = useState(false);
  const [showApplyModal, setShowApplyModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const ApplyJobsModal =() =>{
    setShowApplyModal(!showApplyModal);

  }
  return (
    <>
      <Header />
      <div className="bg-black pt-5 pb-0">
         <div className="graphic-banner">
          <div className="text-center recorses_heading">
            <h1>Hire a Web Development Resource</h1>
            <p>Outsource Your Web Development to Build a Great and Engaging Website</p>
            <button type="button" className="btn btn-outline-primary" onClick={toggleModal}>Request a Quote</button>
          </div>
          <img src={Icons.src} className="Icon_lines" alt="" /> 
        </div> 

        <div className="out_source mt-5 p-4">
          <div className="row w-100 resource text-white mb-5 justify-content-center pt-5 px-3 px-md-5 align-items-center">
            <div className="col-md-6 out_heading">
                <h1>Why Choose Base2Brand for Outsourcing Web Development?</h1>
                <p>At Base2Brand, we specialize in providing comprehensive web development services tailored to your business needs and objectives. With a team of skilled developers, designers, and project managers, we leverage cutting-edge technologies, agile methodologies, and industry best practices to deliver exceptional digital solutions that elevate your online presence and drive tangible results.</p>
                <p> Our approach is rooted in collaboration, transparency, and client-centricity, ensuring seamless communication, timely delivery, and unparalleled quality throughout the development lifecycle. </p>
                <p>Partner with Base2Brand to unlock the full potential of outsourcing web development and embark on a journey of innovation, growth, and success. Contact us today to learn more about our services and how we can help you achieve your digital objectives.</p>
                <button type="button" className="btn btn-outline-primary m-0" onClick={toggleModal}>Request a Quote</button>
            
            </div>
            <div className="col-md-6">
              <div className="source_box">
                <div className="source_list d-flex flex-wrap gap-4">
                  <div className="language_list">
                      <h4>Angular Developer</h4>
                      <div className="d-flex gap-3">
                      <span className="d-flex align-items-center"> <img className="lan_icon mr-2" src={Globe.src} alt="" /> Any Where</span>
                      <span className="d-flex align-items-center"><img className="lan_icon mr-2" src={Phone.src} alt="" /> Remote</span>
                  </div>
                  </div>
                <button type="button" className="btn btn-outline-primary m-0" onClick={ApplyJobsModal}>Hire A Resource</button>
                </div>

                <div className="source_list d-flex flex-wrap gap-4">
                  <div className="language_list">
                      <h4>Nodejs. Developer </h4>
                      <div className="d-flex gap-3">
                      <span className="d-flex align-items-center"> <img className="lan_icon mr-2" src={Globe.src} alt="" /> Any Where</span>
                      <span className="d-flex align-items-center"><img className="lan_icon mr-2" src={Phone.src} alt="" /> Remote</span>
                  </div>
                  </div>
                <button type="button" className="btn btn-outline-primary m-0" onClick={ApplyJobsModal}>Hire A Resource</button>
                </div>
                <div className="source_list d-flex flex-wrap gap-4">
                  <div className="language_list">
                      <h4>Shopify App Developer</h4>
                      <div className="d-flex gap-3">
                      <span className="d-flex align-items-center"> <img className="lan_icon mr-2" src={Globe.src} alt="" /> Any Where</span>
                      <span className="d-flex align-items-center"><img className="lan_icon mr-2" src={Phone.src} alt="" /> Remote</span>
                  </div>
                  </div>
                <button type="button" className="btn btn-outline-primary m-0" onClick={ApplyJobsModal}>Hire A Resource</button>
                </div>
                <div className="source_list d-flex flex-wrap gap-4">
                  <div className="language_list">
                      <h4>WordPress Developer</h4>
                      <div className="d-flex gap-3">
                      <span className="d-flex align-items-center"> <img className="lan_icon mr-2" src={Globe.src} alt="" /> Any Where</span>
                      <span className="d-flex align-items-center"><img className="lan_icon mr-2" src={Phone.src} alt="" /> Remote</span>
                  </div>
                  </div>
                <button type="button" className="btn btn-outline-primary m-0" onClick={ApplyJobsModal}>Hire A Resource</button>
                </div>
                <div className="source_list d-flex flex-wrap gap-4">
                  <div className="language_list">
                      <h4>Graphic Designer</h4>
                      <div className="d-flex gap-3">
                      <span className="d-flex align-items-center"> <img className="lan_icon mr-2" src={Globe.src} alt="" /> Any Where</span>
                      <span className="d-flex align-items-center"><img className="lan_icon mr-2" src={Phone.src} alt="" /> Remote</span>
                  </div>
                  </div>
                <button type="button" className="btn btn-outline-primary m-0" onClick={ApplyJobsModal}>Hire A Resource</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Resource/>
        <ResourceTabs/>
        <Feedback />
        <Faq />
        <Quote/>
        <Footer />
       
      </div>
      {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
       {showApplyModal && 
        <ApplyJobs 
          onCloseModal={ApplyJobsModal} 
        />
      }
       
    </>
  );
}
