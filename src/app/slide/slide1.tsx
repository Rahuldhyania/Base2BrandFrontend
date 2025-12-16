'use client'
import { useEffect } from 'react'; 
import React ,{useState } from "react";  

import icon1 from '../../../public/services-img/s1.svg';  
import icon2 from '../../../public/services-img/s2.svg';  
import icon3 from '../../../public/services-img/s3.png';  
import icon4 from '../../../public/services-img/s4.svg';  
import icon5 from '../../../public/services-img/s5.png';  
import icon6 from '../../../public/services-img/s6.svg';  
import icon7 from '../../../public/services-img/s7.png';  
import icon8 from '../../../public/img/meta-ads.svg';  
import '../project.css';
import { Player } from "@lottiefiles/react-lottie-player";
 

export default function home() {

  return (
    <>    
      <div className="b2b-gray-bg  section-padding-hm-serv w-100"> 
        <div className="b2b-container-lg"> 
          
          
            <div className="row w-100 d-flex flex-wrap align-items-center m-auto row-reverse-mb"> 
                

                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-down">
                  <div className="nav flex-column nav-pills me-3">
                      <li className="navitem" >
                        <a className='remove_under_line' href='/digital-marketing'>             
                          <h1 className="b2b-sub-heading">Digital Marketing</h1>
                            <p className='col-12 b2b-sub-text'>Boosting brand visibility and engagement, our digital marketing services use data-driven strategies for higher ROI. Fun fact: 80% of businesses plan to boost digital marketing spending this year!</p>
                            <div className="d-flex justify-content-between flex-wrap">
                              <div className="tabs_link b2b-text"> <img src={icon1.src} className='social_icons mr-3' alt="" />Search Engine Optimization   </div>
                              <div className="tabs_link b2b-text"><img src={icon4.src} className='social_icons mr-3' alt="" /> Online Reputation Management </div> 

                              <div className="tabs_link b2b-text"><img src={icon8.src} className='social_icons mr-3' alt="" /> Meta Ads   </div>
                              <div className="tabs_link b2b-text"><img src={icon2.src} className='social_icons mr-3' alt="" /> Social Media Optimization   </div>

                              <div className="tabs_link b2b-text"><img src={icon5.src} className='social_icons mr-3' alt="" /> Google Ads (PPC) </div>
                              <div className="tabs_link b2b-text"><img src={icon6.src} className='social_icons mr-3' alt="" /> Content Writing </div> 
                              
                              <div className="tabs_link b2b-text"><img src={icon7.src} className='social_icons mr-3' alt="" /> YouTube Marketing  </div>
                            </div>
                            <button className="b2b-btn b2b-btn-sm mt-4 m-0"> Read More  </button>
                            
                          </a>
                      </li>
                  </div> 
                </div> 
                <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" data-aos="fade-up">
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fades show active d-flex flex-wrap align-items-center justify-content-center" id="pills-digital" role="tabpanel" aria-labelledby="pills-digital-tab">
                      {/* <img className="active_img w-70" src={digital.src} alt="Search Engine Optimization" /> */}
                      <Player
                        src='/json/home-page/Digital Marketing JSON.json'
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