'use client'
import { useEffect } from 'react'; 
import React ,{useState } from "react";  
import Servicetab1 from '../../../public/img/ui_ux.png'; 

import graphic1 from '../../../public/services-img/g1.svg';  
import graphic2 from '../../../public/services-img/s2.svg';  
import graphic3 from '../../../public/services-img/g3.svg';  
import graphic4 from '../../../public/services-img/g4.svg';  
import graphic5 from '../../../public/services-img/g5.svg'; 
import { Player } from "@lottiefiles/react-lottie-player";
 
import '../project.css'; 
 

export default function home() {
  return (
    <>   
      <div className="b2b-gray-bg section-padding-hm-serv w-100"> 
        <div className="b2b-container-lg"> 
          <div className="row w-100 d-flex flex-wrap align-items-center row-reverse-mb">
                

                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" id='GRAPHIC' data-aos="fade-down">
                  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      <li className="nav-item" role="presentation">
                      <a className='remove_under_line' href='/graphic'> 
                          <h1 className="b2b-sub-heading">Graphic &amp; UI/UX Designing</h1>
                            <p className='col-12 b2b-sub-text'>Transform your brand with our captivating graphic design services. With attention-grabbing visuals, we&apos;ll help you make a lasting impression. Did you know? Consistent branding can increase revenue by up to 23%!</p>
                            <div className="d-flex justify-content-between flex-wrap">
                              <div className="tabs_link b2b-text"><img src={graphic1.src} className='social_icons mr-3' alt="" /> Branding &amp; Identity</div>
                              <div className="tabs_link b2b-text"><img src={graphic3.src} className='social_icons mr-3' alt="" /> Website &amp; App Design</div>

                              <div className="tabs_link b2b-text"><img src={graphic5.src} className='social_icons mr-3' alt="" /> Motion Graphics</div>
                              <div className="tabs_link b2b-text"><img src={graphic2.src} className='social_icons mr-3' alt="" /> Social Media Design</div>

                              
                              <div className="tabs_link b2b-text"><img src={graphic4.src} className='social_icons mr-3' alt="" /> 2D &amp; infographic Design</div> 
                
                              
                            </div>
                            <button className="b2b-btn b2b-btn-sm mt-4 m-0"> Know More </button>
                          </a>
                      </li>
                  </div> 
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-up">
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fades show active d-flex flex-wrap align-items-center justify-content-center" id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab">
                      {/* <img className="active_img w-75" src={Servicetab1.src} alt="Search Engine Optimization" /> */}
                      <Player
                          src='/json/home-page/UI UX JSON.json'
                          loop
                          autoplay
                          className="animated-imgs"
                        />
                    </div>
                  </div>
                </div>
          </div> 
        </div> 
      </div> 

    </>
  )
}