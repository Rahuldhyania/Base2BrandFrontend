
import React, { useRef, useState, useEffect } from 'react';

import Slider from 'react-slick';

import tab1Icon1 from "../../../public/shopify/tab1-icon1.png";
import tab1Icon2 from "../../../public/shopify/tab1-icon2.png";
import tab1Icon3 from "../../../public/shopify/tab1-icon3.png";
import tab1Icon4 from "../../../public/shopify/tab1-icon4.png";
import tab1Icon5 from "../../../public/shopify/tab1-icon5.png";
import Image from 'next/image';


export default function Tab1() {


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

        if (memoriesSectionY <= (headerHeight + 10)) {

          const tabs = document.querySelectorAll(".slider_icon");
          const tabbtns = document.querySelectorAll(".slider_right_main1");

          let stepcount = 0;
          tabbtns.forEach(tabbtn => {
            const tabSectionY = tabbtn.getBoundingClientRect().y;

            if (tabSectionY <= (headerHeight + 10)) {


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
            if (tabSectionY < clientHeight && tabSectionY > 272) {

              stepcount = parseInt(tabbtn.getAttribute("data-step"));
              stepcount--;
              if (stepcount > 0) {
                console.log(`.tab1-step-${stepcount}`);
                const stepSection1 = document.querySelector(`.tab1-step-${stepcount}`);
                console.log(stepSection1);

                stepSection1.classList.add('tab-active');

              }

            } else {

              stepcount = parseInt(tabbtn.getAttribute("data-step"));
              stepcount--;
              if (stepcount > 0) {
                const stepSection1 = document.querySelector(`.tab1-step-${stepcount}`);
                stepSection1.classList.remove('tab-active');
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
                      <a id="tab1-1" className='slider_icon firstTab b2b_tab_vissible'>
                        <img src={tab1Icon1.src} alt="" /></a>
                      <a id="tab1-2" className='slider_icon'><img src={tab1Icon2.src} alt="" /></a>
                      <a id="tab1-3" className='slider_icon'><img src={tab1Icon3.src} alt="" /></a>
                      <a id="tab1-4" className='slider_icon'><img src={tab1Icon4.src} alt="" /></a> 
                      <a id="tab1-5" className='slider_icon'><img src={tab1Icon5.src} alt="" /></a> 
                    
                  </div> */}
        <div className="right_sliders w-100">

          <div className='slider_right_main slider_right_main1 tab1-step-1' data-step="1" data-tab-id="tab1-1">
            {/* <div className="left_thumnails">
                            <a id="tab1-1" className='slider_icon'><img src={tab1Icon1.src} alt="" /></a>
                          
                        </div> */}
            <div className="row align-items-center">
              <div className="col-md-2 p-3">
                <a id="tab1-1" className='slider_icon'>
                  <Image
                    width="100"
                    height="100"
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/tab1-icon1_kahvps.png" alt="" /></a>
              </div>
              <div className="col-md-10 m-auto">
                <div className="social_ads text-white text-center">

                  <h2>Checkout UI Extension</h2>
                  <p>A Checkout UI Extension enhances the user experience during the checkout process on Shopify. Our Shopify experts can tailor this extension to streamline checkout, optimize form fields, implement guest checkout options, and integrate secure payment gateways, ensuring seamless transactions and higher conversion rates for your online store.</p>
                  <div className="mt-4">
                    <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='slider_right_main slider_right_main1 tab1-step-2' data-step="2" data-tab-id="tab1-2">

            <div className="row   align-items-center">
              <div className="col-md-2 p-3">
                <a id="tab1-2" className='slider_icon'>
                  <Image
                    width="100"
                    height="100"
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/tab1-icon2_xrkypo.png" alt="" /></a>
              </div>
              <div className="col-md-10 m-auto">
                <div className="social_ads text-white text-center">

                  <h2>Up Sell</h2>
                  <p>Upselling is a strategic technique to increase average order value by offering complementary or upgraded products during the checkout process. Our Shopify experts can implement upsell features, suggest related items, and design compelling offers to maximize revenue and enhance customer satisfaction.</p>
                  <div className="mt-4">
                    <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>

                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='slider_right_main slider_right_main1 tab1-step-3' data-step="3" data-tab-id="tab1-3">

            <div className="row   align-items-center">
              <div className="col-md-2 p-3">
                <a id="tab1-3" className='slider_icon'>
                  <Image
                    width="100"
                    height="100"
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/tab1-icon2_xrkypo.png" alt="" /></a>
              </div>
              <div className="col-md-10 m-auto">
                <div className="social_ads text-white text-center">

                  <h2>Discount Formula&apos;s</h2>
                  <p>The Discount Formula in Shopify allows you to apply discounts to products based on fixed amounts or percentages. Our Shopify experts can configure discount codes, automatic discounts, or bulk discounts tailored to your promotional strategies, encouraging sales and customer engagement in your online store.</p>
                  <div className="mt-4">
                    <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='slider_right_main slider_right_main1 tab1-step-4' data-step="4" data-tab-id="tab1-4">

            <div className="row   align-items-center">
              <div className="col-md-2 p-3">
                <a id="tab1-4" className='slider_icon'>
                  <Image
                    width="100"
                    height="100"
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/tab1-icon4_fwlqe1.png" alt="" /></a>
              </div>
              <div className="col-md-10 m-auto">
                <div className="social_ads text-white text-center">

                  <h2>Custom Filters</h2>
                  <p>Custom Filters enable personalized product searches on Shopify, enhancing user experience. Our experts can implement filters based on attributes like size, color, or price, empowering customers to find products quickly. With tailored filters, you can boost conversion rates and improve customer satisfaction in your Shopify store.</p>
                  <div className="mt-4">
                    <a href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">Read More</a>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='slider_right_main slider_right_main1 tab1-step-5' data-step="5" data-tab-id="tab1-5">

            <div className="row   align-items-center">
              <div className="col-md-2 p-3">
                <a id="tab1-5" className='slider_icon'>
                  <Image
                    width="100"
                    height="100"
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/tab1-icon5_udb2ja.png" alt="" /></a>
              </div>
              <div className="col-md-10 m-auto">
                <div className="social_ads text-white text-center">

                  <h2>Custom Search</h2>
                  <p>Custom Search functionality allows users to find specific products or information on a Shopify store with ease. Our experts can integrate advanced search features, such as autocomplete suggestions, filters, and synonyms, optimizing the search experience and helping customers discover relevant items efficiently, ultimately increasing sales.</p>
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
  );
}