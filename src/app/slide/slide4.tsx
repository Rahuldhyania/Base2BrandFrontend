'use client'
import { useEffect } from 'react'; 
import React ,{useState } from "react";    
import Servicetab3 from '../../../public/img/web_dev.png'; 

import web1 from '../../../public/services-img/w1.png';  
import web2 from '../../../public/services-img/w2.svg';  
import web3 from '../../../public/services-img/w3.svg';  
import web4 from '../../../public/services-img/w4.png';  
import web5 from '../../../public/services-img/w5.svg';    
import { Player } from "@lottiefiles/react-lottie-player";



import down from '../../../public/services-img/scroll.png';   
  
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
                {/* <img className="w-70 active_img m-auto" src={Servicetab3.src} alt="Search Engine Optimization" /> */}
                <Player
              src='/json/home-page/Web Development JSON.json'
              loop
              autoplay
              className="animated-imgs"
            />
                
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6" id='WEB' data-aos="fade-down">
              <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <li className="nav-item" role="presentation">
                  <a className='remove_under_line' href='/web-application'>  
                      <h1 className="b2b-sub-heading">Web Development</h1>
                        <p className='col-12 b2b-sub-text'>Our web development service creates customized websites that reflect your unique goals. From user-friendly layouts to seamless navigation, we ensure your online presence stands out. Let&apos;s build a website that speaks for you!</p>
                        <div className="d-flex justify-content-between flex-wrap">
                          <div className="tabs_link b2b-text"><img src={web1.src} className='social_icons mr-3' alt="" /> Remix Framework</div>
                          <div className="tabs_link b2b-text"><img src={web5.src} className='social_icons mr-3' alt="" /> MERN Stack Development</div>

                          <div className="tabs_link b2b-text"><img src={web3.src} className='social_icons mr-3' alt="" /> Laravel Development</div>
                          <div className="tabs_link b2b-text"><img src={web4.src} className='social_icons mr-3' alt="" /> ASP.NET Development</div> 
            
                          <div className="tabs_link b2b-text"><img src={web2.src} className='social_icons mr-3' alt="" /> MEAN Stack Development</div>
                        </div>
                        <button className="b2b-btn b2b-btn-sm mt-4 m-0"> Read More </button>
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