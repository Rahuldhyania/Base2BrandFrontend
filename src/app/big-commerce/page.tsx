'use client'

import React from "react";
// import { useEffect } from "react";
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import Feedback from '../../app/feedback';
import BigCommerce from '../../app/big-commerce/bigCommerce';  
import OurProject from '../shopify/project-slick';  
import AppCompany from '../../app/big-commerce/dev-company';  
import Faq from '../../app/faq';  
import Main from '../../../public/big/mockup.png';   
import Icon from '../../../public/big/icon.png';   
import Agency from '../../../public/big/agency.png';   
import AgencyIcon from '../../../public/big/bigIcon.png';   
import App from '../../../public/big/app.png';   
import Typewriter from 'typewriter-effect';
import '../big-commerce/commerce.css';
// import 'aos/dist/aos.css';
// import AOS from 'aos';

export default function BigCommence() {
//   useEffect(() => {
//     AOS.init({
//          duration: 800,
//          once: false,
//        })
//  }, [])
 
  return (
    <>
    
      <Header />
      <div className="bg-black">
        <div className="container-fluid mx-auto p-4"> 
          <div className="row align-items-center">
            <div className="col-md-7 Type_Writer text-white" data-aos="flip-left"> 
                <h1 className="big">BigCommerce    <img src={Icon.src} className="icon" alt="" /> </h1>
            <Typewriter 
                options={{
                  strings: ['The Development'],
                  autoStart: true,
                  loop: true,
                }}
              />
              <p className="mt-4 mb-5 desc_big" data-aos="flip-right">As a leading BigCommerce development company, we specialize in providing comprehensive BigCommerce development services.</p>
              <button className="btn btn-outline-primary m-0"> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
                </div>      
                    <div className="col-md-5" data-aos="fade-down">

                        <img src={Main.src} className="w-100" alt="" />
                    </div>
            </div>
          </div>
                <div className="bg_gray_commerce">
                    <div className="p-4">
                        <div className="row align-items-center">
                            <div className="col-md-6" data-aos="flip-left">
                                <img src={Agency.src} className="agency" alt="" />
                            </div>
                            <div className="col-md-6 text-white" data-aos="flip-right"> 
                                <h1 className="Agency_Heading d-flex align-items-center">We are   <img src={AgencyIcon.src} className="agencyIcon" alt="" /> Agency</h1>
                                <p className="mt-4 desc_big">As a leading BigCommerce development company, we specialize in providing comprehensive BigCommerce development services tailored to meet the unique needs of your business. Whether you are establishing a new online store or looking to enhance your existing Shopify website, our expert team is here to bring your vision to life.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <BigCommerce /> 
                <div className="bg_light_green pb-5"> 
                <OurProject />
                <AppCompany />
                <div className="text-center text-white mt-5" data-aos="zoom-in">
                  <h1 className="mb-5">Bigcommerce Project Completion Process</h1>
                <img className="app pb-5 m-auto" src={App.src} alt="" />

                </div>
                </div> 
               <Feedback /> 
               <Faq />
               <Footer />
</div>
    </>
  )
}
