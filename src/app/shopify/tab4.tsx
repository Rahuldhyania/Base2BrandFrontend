
import React, { useRef, useState, useEffect } from 'react';
  
import Slider from 'react-slick';

import tab4Icon1 from "../../../public/shopify/tab4-icon1.png";
import tab4Icon2 from "../../../public/shopify/tab4-icon2.png";
import tab4Icon3 from "../../../public/shopify/tab1-icon2.png";
import tab4Icon4 from "../../../public/shopify/tab4-icon3.png";


export default function Tab4() {
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
                const tabbtns = document.querySelectorAll(".slider_right_main4");

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
                      const stepSection = document.querySelector(`.tab4-step-${stepcount}`);
                      if(stepSection !== null)
                      stepSection.classList.add('tab-active');
                    }
                   
                  }else{
                    
                    stepcount = parseInt(tabbtn.getAttribute("data-step"));
                    stepcount --;
                    if(stepcount > 0){
                      const stepSection = document.querySelector(`.tab4-step-${stepcount}`);
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
                   
                      <a id="tab4-1" className='slider_icon firstTab b2b_tab_vissible'><img src={tab4Icon1.src} alt="" /></a>
                      <a id="tab4-2" className='slider_icon'><img src={tab4Icon2.src} alt="" /></a>
                      <a id="tab4-3" className='slider_icon'><img src={tab4Icon3.src} alt="" /></a>
                      <a id="tab4-4" className='slider_icon'><img src={tab4Icon4.src} alt="" /></a> 
                    
                  </div> */}
                  <div className="right_sliders">
                          
                        <div className='slider_right_main slider_right_main4 tab4-step-1' data-step="1" data-tab-id="tab4-1">
                     
                          <div className="row  align-items-center">
                          <div className="col-md-2 p-3">
                            <a id="tab4-1" className='slider_icon'><img src={tab4Icon1.src} alt="" /></a>
                            </div>
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                               
                                <h2>Special Optimization</h2>
                                <p>Special optimization involves fine-tuning various aspects of a Shopify store to enhance performance and user experience. This may include optimizing images, minimizing code, improving page load times, and ensuring mobile responsiveness. Our experts implement tailored optimizations to boost speed, SEO ranking, and conversions, maximizing your store&apos;s success.</p>
                                <div className="mt-4">
                                  <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                              </div>
                          </div>
                        </div>
                        

                        <div className='slider_right_main slider_right_main4 tab4-step-2' data-step="2" data-tab-id="tab4-2">
                        {/* <div className="left_thumnails">
                          
                          <a id="tab4-2" className='slider_icon'><img src={tab4Icon2.src} alt="" /></a>
                        </div> */}
                          <div className="row  align-items-center">
                          <div className="col-md-2 p-3">
                            <a id="tab4-2" className='slider_icon'><img src={tab4Icon2.src} alt="" /></a>
                            </div>
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>UI/UX Improvement</h2>
                                <p>UI/UX improvement in Shopify focuses on enhancing the design and usability of your online store. Our experts analyze user behavior, streamline navigation, optimize product presentation, and refine checkout processes. By prioritizing user satisfaction and engagement, we elevate your Shopify store&apos;s performance and drive conversions.</p>
                                <div className="mt-4">
                                  <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                       
                        
                        <div className='slider_right_main slider_right_main4 tab4-step-3' data-step="3" data-tab-id="tab4-3">
                        
                          <div className="row   align-items-center">
                          <div className="col-md-2 p-3">
                            <a id="tab4-3" className='slider_icon'><img src={tab4Icon3.src} alt="" /></a>
                            </div>
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Up Sell</h2>
                                <p>Upselling involves suggesting additional or upgraded products to customers to increase their purchase value. Our strategy includes personalized recommendations during checkout or product pages, enticing offers, and seamless integration to enhance user experience and maximize revenue in your Shopify store.</p>
                                <div className="mt-4">
                                  <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className='slider_right_main slider_right_main4 tab4-step-4' data-step="4" data-tab-id="tab4-4">
                        
                          <div className="row align-items-center">
                          <div className="col-md-2 p-3">
                            <a id="tab4-4" className='slider_icon'><img src={tab4Icon4.src} alt="" /></a>
                            </div>
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Cash Flow</h2>
                                <p>Cash flow refers to the movement of money into and out of a business. In a Shopify store, optimizing cash flow involves managing inventory, sales, and expenses efficiently. Our experts implement strategies like inventory management tools, sales forecasting, and payment gateway optimization to ensure consistent cash flow and business stability.</p>
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