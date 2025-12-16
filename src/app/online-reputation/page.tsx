'use client'
import React, { useState } from "react";   
import Header from '../../../component/header';     
import Footer from '../../../component/footer';    
import Publicity from '../../app/online-reputation/publicity';   
import Revenue from '../../app/seo/revenue'; 
import Feedback from '../../app/feedback'; 
import Faq from '../../app/faq'; 
import Quote from '../../app/request-quote'; 
import Service from '../../app/online-reputation/service'; 
import banner from '../../../public/online/banner.png';  
import '../online-reputation/online.css';
import Request from "../request-form";

export default function Onlinereputation() {
 
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>  
    <Header />
    <div className="bg-black">
      <div className="banner-online-box position-relative">
        <img src={banner.src} className="banner_online" alt="" />
          <div className="overlap_button">
            <button className="btn btn-outline-primary m-0" onClick={toggleModal}> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
      </div>
     </div>
    <Publicity />
    <Revenue />
    <Service />
    <Feedback />
    <Faq />
    <Quote />
    <Footer />
      </div>
      {showModal && 
        <Request 
          onCloseModal={toggleModal} 
        />
      }
    </>
  )
}
