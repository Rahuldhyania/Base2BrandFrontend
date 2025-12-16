'use client'
import { useEffect } from 'react'; 
import React ,{useState } from "react";  
import Servicetab from '../../../public/services-img/eco.png';   
import ecommerce1 from '../../../public/services-img/e1.png';  
import ecommerce2 from '../../../public/services-img/e2.png';  
import ecommerce3 from '../../../public/services-img/e3.png';  
import ecommerce4 from '../../../public/services-img/e4.svg';  
import ecommerce5 from '../../../public/services-img/e5.png'; 
import { Player } from "@lottiefiles/react-lottie-player";

import '../project.css'; 
 

export default function home() {
  return (
    <>   
      <div className='w-100 section-padding-hm-serv'>
        <div className='b2b-container-lg'>
          <div className="row w-100 d-flex flex-wrap align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-up"> 
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fades show active d-flex flex-wrap align-items-center justify-content-center" id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab">
                {/* <img className="w-70 active_img m-auto" src={Servicetab.src} alt="Search Engine Optimization" /> */}
                
                
                <Player
              src='/json/home-page/E Commerce JSON.json'
              loop
              autoplay
              className="animated-imgs"
            />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" id="ECOMMERCE" data-aos="fade-down">
              <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <li className="nav-item" role="presentation">
                  <a className='remove_under_line' href='/e-commerce'>     
                      <h1 className="b2b-sub-heading">E-commerce</h1>
                        <p className='col-12  b2b-sub-text'>Make a successive path for your online business with our expert e-commerce development services. From eye-catching storefront designs to seamless checkout experiences, we&apos;ll improve your brand and boost your sales. Let&apos;s build your success together!</p>
                        <div className="d-flex justify-content-between flex-wrap">
                          <div className="tabs_link b2b-text"><img src={ecommerce1.src} className='social_icons mr-3' alt="" />  Shopify Theme Development</div>
                          <div className="tabs_link b2b-text"><img src={ecommerce4.src} className='social_icons mr-3' alt="" />  Woo Commerce Development</div>

                          <div className="tabs_link b2b-text"><img src={ecommerce2.src} className='social_icons mr-3' alt="" />  Open cart Development</div>
                          <div className="tabs_link b2b-text"><img src={ecommerce1.src} className='social_icons mr-3' alt="" />  Shopify App Development</div>
                          
                          <div className="tabs_link b2b-text"><img src={ecommerce3.src} className='social_icons mr-3' alt="" />  Big Commerce Development</div>
                          <div className="tabs_link b2b-text"><img src={ecommerce5.src} className='social_icons mr-3' alt="" />   Magneto Development</div> 
            
                          
                        </div>
                        <button className="b2b-btn b2b-btn-sm  mt-4 m-0"> Read More </button>
                      </a>
                  </li>
              </div> 
            </div>

            
            </div>
        </div>
      </div>
    </>
  )
}