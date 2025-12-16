
import React, { useRef, useState, useEffect } from 'react';
  
import Slider from 'react-slick';

import tab2Icon1 from "../../../public/shopify/tab2-icon1.png";
import tab2Icon2 from "../../../public/shopify/tab2-icon2.png";
import tab2Icon3 from "../../../public/shopify/tab2-icon3.png";
import tab2Icon4 from "../../../public/shopify/tab2-icon4.png";
import tab2Icon5 from "../../../public/shopify/tab2-icon5.png";
import tab2Icon6 from "../../../public/shopify/tab2-icon6.png";


export default function Tab2() {
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
                const tabbtns = document.querySelectorAll(".slider_right_main2");

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
                      const stepSection = document.querySelector(`.tab2-step-${stepcount}`);
                      if(stepSection !== null)
                      stepSection.classList.add('tab-active');
                    }
                   
                  }else{
                    
                    stepcount = parseInt(tabbtn.getAttribute("data-step"));
                    stepcount --;
                    if(stepcount > 0){
                      const stepSection = document.querySelector(`.tab2-step-${stepcount}`);
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
                  
                      <a id="tab2-1" className='slider_icon firstTab b2b_tab_vissible'><img src={tab2Icon1.src} alt="" /></a>
                      <a id="tab2-2" className='slider_icon'><img src={tab2Icon2.src} alt="" /></a>
                      <a id="tab2-3" className='slider_icon'><img src={tab2Icon3.src} alt="" /></a>
                      <a id="tab2-4" className='slider_icon'><img src={tab2Icon4.src} alt="" /></a> 
                      <a id="tab2-5" className='slider_icon'><img src={tab2Icon5.src} alt="" /></a> 
                      <a id="tab2-6" className='slider_icon'><img src={tab2Icon6.src} alt="" /></a> 
                    
                     
                  </div> */}
                  <div className="right_sliders">
                    
                        <div className='slider_right_main slider_right_main2 tab2-step-1' data-step="1" data-tab-id="tab2-1">
                       
                          <div className="row  align-items-center">
                          <div className="col-md-2 p-3">
                            <a id="tab2-1" className='slider_icon'><img src={tab2Icon1.src} alt="" /></a>
                            </div>
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                               
                                <h2>Uni-Commerce</h2>
                                <p>We provide seamless integration services for Unicommerce and Shopify, streamlining your e-commerce operations. With this integration, you can efficiently manage orders, inventory, and warehouse operations across multiple channels, enhancing your business scalability and customer satisfaction. Let us optimize your workflow for maximum efficiency and growth.</p>
                                <div className="mt-4">
                                  <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                              </div>
                          </div>
                        </div>
                        

                        <div className='slider_right_main slider_right_main2 tab2-step-2' data-step="2" data-tab-id="tab2-2">
                         
                          <div className="row  align-items-center">
                          <div className="col-md-2 p-3">
                            <a id="tab2-2" className='slider_icon'><img src={tab2Icon2.src} alt="" /></a>
                            </div>
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Odoo</h2>
                                <p>Our Shopify experts are skilled in using Odoo for enhancing Shopify stores. With Odoo&apos;s robust suite of business management tools, we optimize inventory, sales, and customer relations seamlessly. Our expertise ensures smooth integration, empowering your Shopify store with efficient backend operations, driving growth and customer satisfaction.</p>
                                <div className="mt-4">
                                  <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                       
                        
                        <div className='slider_right_main slider_right_main2 tab2-step-3' data-step="3" data-tab-id="tab2-3">
                         
                        <div className="row  align-items-center">
                        <div className="col-md-2 p-3">
                            <a id="tab2-3" className='slider_icon'><img src={tab2Icon3.src} alt="" /></a>
                            </div>
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Easy Ecom</h2>
                                <p>EasyEcom&apos;s intuitive features streamline inventory management, order processing, and multichannel selling. Our proficiency ensures seamless integration, empowering your Shopify Store with efficient operations, enabling scalability and customer satisfaction.</p>
                                <div className="mt-4">
                                  <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                       
                        <div className='slider_right_main slider_right_main2 tab2-step-4' data-step="4" data-tab-id="tab2-4">
                       
                        <div className="row align-items-center">
                        <div className="col-md-2 p-3">
                            <a id="tab2-4" className='slider_icon'><img src={tab2Icon4.src} alt="" /></a>
                            </div>
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Increff</h2>
                                <p>We specialize in integrating Increff with your Shopify store, enhancing inventory management and order fulfillment. Increff&apos;s advanced algorithms optimize inventory levels and streamline operations, ensuring efficient supply chain management. Trust us to seamlessly integrate Increff into your Shopify platform for enhanced productivity and customer satisfaction.</p>
                                <div className="mt-4">
                                  <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className='slider_right_main slider_right_main2 tab2-step-5' data-step="5" data-tab-id="tab2-5">
                          
                        <div className="row  align-items-center">
                        <div className="col-md-2 p-3">
                            <a id="tab2-5" className='slider_icon'><img src={tab2Icon5.src} alt="" /></a>
                            </div>
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Custom Recharge Integration</h2>
                                <p>Expertly integrate Custom Recharge into your Shopify store for streamlined subscription billing and management. Seamlessly handle recurring payments, subscription plans, and customer preferences. Enhance revenue streams and customer retention with tailored Recharge integration, optimizing your store for growth and sustainability.</p>
                                <div className="mt-4">
                                  <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className='slider_right_main slider_right_main2 tab2-step-6' data-step="6" data-tab-id="tab2-6">
                        
                        <div className="row align-items-center">
                        <div className="col-md-2 p-3">
                            <a id="tab2-6" className='slider_icon'><img src={tab2Icon6.src} alt="" /></a>
                            </div>
                            <div className="col-md-10 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Custom Loop Integration</h2>
                                <p>Efficiently integrate Custom Loop into your Shopify store for enhanced customer engagement and retention. Seamlessly manage loyalty programs, rewards, and referrals. Tailor promotions to individual customer preferences, driving sales and loyalty. With Custom Loop integration, optimize your Shopify store for sustained growth and customer satisfaction.</p>
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