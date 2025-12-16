
import React, { useRef, useState, useEffect } from 'react';

import Slider from 'react-slick';

import tab5Icon1 from "../../../public/shopify/tab5-icon1.png";
import tab5Icon2 from "../../../public/shopify/tab5-icon2.png";
import tab5Icon3 from "../../../public/shopify/tab5-icon3.png";
import tab5Icon4 from "../../../public/shopify/tab5-icon4.png";
import tab5Icon5 from "../../../public/shopify/tab5-icon5.png";


export default function Tab5() {
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

        if (memoriesSectionY <= (headerHeight + 100)) {

          const tabs = document.querySelectorAll(".slider_icon");
          const tabbtns = document.querySelectorAll(".slider_right_main5");

          let stepcount = 0;
          tabbtns.forEach(tabbtn => {
            const tabSectionY = tabbtn.getBoundingClientRect().y;

            if (tabSectionY <= (headerHeight + 180)) {

              const btnID = tabbtn.getAttribute("data-tab-id");
              // console.log(btnID);

              if (btnID !== null) {
                const btnSection = document.querySelector(`#${btnID}`);
                btnSection.classList.add("b2b_tab_vissible");
              }

            } else {
              const btnID = tabbtn.getAttribute("data-tab-id");
              // console.log(btnID);

              if (btnID !== null) {
                const btnSection = document.querySelector(`#${btnID}`);
                btnSection.classList.remove("b2b_tab_vissible");
              }

            }
            if (tabSectionY < (clientHeight - 50) && tabSectionY > 272) {

              stepcount = parseInt(tabbtn.getAttribute("data-step"));
              stepcount--;
              if (stepcount > 0) {
                const stepSection = document.querySelector(`.tab5-step-${stepcount}`);
                if (stepSection !== null)
                  stepSection.classList.add('tab-active');
              }

            } else {

              stepcount = parseInt(tabbtn.getAttribute("data-step"));
              stepcount--;
              if (stepcount > 0) {
                const stepSection = document.querySelector(`.tab5-step-${stepcount}`);
                if (stepSection !== null)
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
                    
                      <a id="tab5-1" className='slider_icon firstTab b2b_tab_vissible'><img src={tab5Icon1.src} alt="" /></a>
                      <a id="tab5-2" className='slider_icon'><img src={tab5Icon2.src} alt="" /></a>
                      <a id="tab5-3" className='slider_icon'><img src={tab5Icon3.src} alt="" /></a>
                      <a id="tab5-4" className='slider_icon'><img src={tab5Icon4.src} alt="" /></a> 
                      <a id="tab5-5" className='slider_icon'><img src={tab5Icon5.src} alt="" /></a> 
                    
                  </div> */}
        <div className="right_sliders">

          <div className='slider_right_main slider_right_main5 tab5-step-1' data-step="1" data-tab-id="tab5-1">
            {/* <div className="left_thumnails">
                          <a id="tab5-1" className='slider_icon'><img src={tab5Icon1.src} alt="" /></a>
                        </div> */}
            <div className="row align-items-center">
              <div className="col-md-2 p-3">
                <a id="tab5-1" className='slider_icon'><img src={tab5Icon1.src} alt="" /></a>
              </div>
              <div className="col-md-10 m-auto">
                <div className="social_ads text-white text-center">

                  <h2>Workflow</h2>
                  <p>Workflow in ecommerce design streamlines the process of managing tasks, content, and approvals within a team. Our experts integrate efficient workflow tools, automate repetitive tasks, and establish clear communication channels, ensuring smooth collaboration and timely project delivery, ultimately enhancing productivity and quality in ecommerce design.</p>
                  <div className="mt-4">
                    <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='slider_right_main slider_right_main5 tab5-step-2' data-step="2" data-tab-id="tab5-2">
            {/* <div className="left_thumnails">
                            <a id="tab5-2" className='slider_icon'><img src={tab5Icon2.src} alt="" /></a>
                          </div> */}
            <div className="row   align-items-center">
              <div className="col-md-2 p-3">
                <a id="tab5-2" className='slider_icon'><img src={tab5Icon2.src} alt="" /></a>
              </div>
              <div className="col-md-10 m-auto">
                <div className="social_ads text-white text-center">

                  <h2>Promotion Design</h2>
                  <p>Promotion design in Shopify stores involves creating visually appealing banners, pop-ups, and promotional graphics to highlight special offers, sales, and discounts. Our designers craft eye-catching designs that align with your brand, effectively grabbing attention and driving conversions, ultimately maximizing the impact of your promotions.</p>
                  <div className="mt-4">
                    <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='slider_right_main slider_right_main5 tab5-step-3' data-step="3" data-tab-id="tab5-3">
            {/* <div className="left_thumnails">
                          <a id="tab5-3" className='slider_icon'><img src={tab5Icon3.src} alt="" /></a>
                        </div> */}
            <div className="row   align-items-center">
              <div className="col-md-2 p-3">
                <a id="tab5-3" className='slider_icon'><img src={tab5Icon3.src} alt="" /></a>
              </div>
              <div className="col-md-10 m-auto">
                <div className="social_ads text-white text-center">

                  <h2>Development</h2>
                  <p>Shopify store development entails building a customized online storefront tailored to your brand and audience. Our developers leverage Shopify&apos;s robust platform to create responsive, user-friendly designs, implement essential features like product management and checkout, and optimize performance, ensuring a seamless and engaging shopping experience for your customers.</p>
                  <div className="mt-4">
                    <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='slider_right_main slider_right_main5 tab5-step-4' data-step="4" data-tab-id="tab5-4">
            {/* <div className="left_thumnails">
                            <a id="tab5-4" className='slider_icon'><img src={tab5Icon4.src} alt="" /></a>
                          </div> */}
            <div className="row   align-items-center">
              <div className="col-md-2 p-3">
                <a id="tab5-4" className='slider_icon'><img src={tab5Icon4.src} alt="" /></a>
              </div>
              <div className="col-md-10 m-auto">
                <div className="social_ads text-white text-center">

                  <h2>Klaviyo</h2>
                  <p>Klaviyo integration in Shopify store design enables personalized email marketing and automation. Our experts harness Klaviyo&apos;s powerful features to segment customers, send targeted campaigns, and analyze performance data. By leveraging Klaviyo&apos;s capabilities, we enhance customer engagement, drive sales, and optimize marketing strategies.</p>
                  <div className="mt-4">
                    <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='slider_right_main slider_right_main5 tab5-step-5' data-step="5" data-tab-id="tab5-5">
            {/* <div className="left_thumnails">
                            <a id="tab5-5" className='slider_icon'><img src={tab5Icon5.src} alt="" /></a>
                          </div> */}
            <div className="row   align-items-center">
              <div className="col-md-2 p-3">
                <a id="tab5-5" className='slider_icon'><img src={tab5Icon5.src} alt="" /></a>
              </div>
              <div className="col-md-10 m-auto">
                <div className="social_ads text-white text-center">

                  <h2>Launch</h2>
                  <p>Shopify store launch is the result of meticulous planning and execution. Our team ensures a seamless rollout by testing functionality, optimizing design, and configuring payment gateways. With strategic marketing support, we drive traffic to your store, maximizing visibility and setting the stage for successful sales growth.</p>
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