
import React, { useRef, useState, useEffect } from 'react';
  
import Slider from 'react-slick';

import tab3Icon1 from "../../../public/shopify/tab3-icon1.png";
import tab3Icon2 from "../../../public/shopify/tab3-icon2.png";
import tab3Icon3 from "../../../public/shopify/tab3-icon3.png";


export default function Tab3() {
  useEffect(() => {
    const memoriesSection = document.querySelector(".gallery_slider");
    const headerSection = document.querySelector("header");
    const headerHeight = headerSection.offsetHeight;

    if (!memoriesSection) {
      console.error("Element with class 'gallery slider' not found");
      return;
    }

    const handleScroll = () => {
      const clientHeight = document.documentElement.clientHeight;
      const memoriesSectionY = memoriesSection.getBoundingClientRect().y;
      if (clientHeight > memoriesSectionY) {
            
            if(memoriesSectionY <= (headerHeight + 100)){

                const tabs = document.querySelectorAll(".slider_icon");
                const tabbtns = document.querySelectorAll(".slider_right_main3");

                let stepcount = 0;
                tabbtns.forEach(tabbtn => {
                  const tabSectionY = tabbtn.getBoundingClientRect().y;

                  if(tabSectionY <= (headerHeight + 180)){
                    
                      const btnID = tabbtn.getAttribute("data-tab-id");
                      // console.log(btnID);
                      
                      if(btnID !== null){
                        const btnSection = document.querySelector(`#${btnID}`);
                        btnSection.classList.add("b2b_tab_vissible");
                      }
                      
                  }else{
                      const btnID = tabbtn.getAttribute("data-tab-id");
                      // console.log(btnID);
                      
                      if(btnID !== null){
                        const btnSection = document.querySelector(`#${btnID}`);
                        btnSection.classList.remove("b2b_tab_vissible");
                      }
                      
                  }
                  if(tabSectionY < (clientHeight - 50) && tabSectionY > 272){
                      
                    stepcount = parseInt(tabbtn.getAttribute("data-step"));
                    stepcount --;
                    if(stepcount > 0){
                      const stepSection = document.querySelector(`.tab3-step-${stepcount}`);
                      if(stepSection !== null)
                      stepSection.classList.add('tab-active');
                    }
                   
                  }else{
                    
                    stepcount = parseInt(tabbtn.getAttribute("data-step"));
                    stepcount --;
                    if(stepcount > 0){
                      const stepSection = document.querySelector(`.tab3-step-${stepcount}`);
                      if(stepSection !== null)
                      stepSection.classList.remove('tab-active');
                    }
                  }

                });


                
                
          }
      }
     
    };

    document.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
     <>  
        <div className="gallery_slider container">
                  {/* <div className="left_thumnails">
                  
                      <a id="tab3-1" className='slider_icon firstTab b2b_tab_vissible'><img src={tab3Icon1.src} alt="" /></a>
                      <a id="tab3-2" className='slider_icon'><img src={tab3Icon2.src} alt="" /></a>
                      <a id="tab3-3" className='slider_icon'><img src={tab3Icon3.src} alt="" /></a>
                    
                  </div> */}
                  <div className="right_sliders">
                      
                        <div className='slider_right_main slider_right_main3 tab3-step-1' data-step="1" data-tab-id="tab3-1">
                        
                          <div className="row align-items-center">
                          <div className="col-md-2 p-3">
                            <a id="tab3-1" className='slider_icon'><img src={tab3Icon1.src} alt="" /></a>
                            </div>
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                               
                                <h2>Hydrogen</h2>
                                <p>Hydrogen in Shopify refers to a versatile framework for building custom storefronts and progressive web apps (PWAs). Leveraging modern web technologies like React and GraphQL, Hydrogen enables developers to create fast, engaging, and tailored shopping experiences, enhancing brand identity and customer satisfaction on Shopify platforms.</p>
                                <div className="mt-4">
                                  <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                              </div>
                          </div>
                        </div>
                        

                        <div className='slider_right_main slider_right_main3 tab3-step-2' data-step="2" data-tab-id="tab3-2">
                        
                          <div className="row  align-items-center">
                          <div className="col-md-2 p-3">
                            <a id="tab3-2" className='slider_icon'><img src={tab3Icon2.src} alt="" /></a>
                            </div>
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Node JS</h2>
                                <p>Node.js offers a lightweight, efficient, and scalable runtime environment for server-side JavaScript applications. Our developers harness its non-blocking I/O model and event-driven architecture to build fast, real-time applications. With expertise in Node.js, we ensure optimized performance and seamless scalability for your projects</p>
                                <div className="mt-4">
                                  <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        
                        <div className='slider_right_main slider_right_main3 tab3-step-3' data-step="3" data-tab-id="tab3-3">
                         
                          <div className="row   align-items-center">
                          <div className="col-md-2 p-3">
                            <a id="tab3-3" className='slider_icon'><img src={tab3Icon3.src} alt="" /></a>
                            </div>
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>React JS</h2>
                                <p>React.js is a powerful JavaScript library for building dynamic user interfaces. Its component-based architecture and virtual DOM enable developers to create reusable, interactive UI components efficiently. Our team specializes in React.js development, crafting responsive, high-performance web applications that engage users and drive business growth.</p>
                                <div className="mt-4">
                                  <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                       
                  </div>
                </div>
     </>
)
}