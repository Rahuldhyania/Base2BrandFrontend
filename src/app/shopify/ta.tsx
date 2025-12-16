import React, { useRef, useState, useEffect } from 'react';
  
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

import tab1Icon1 from "../../../public/shopify/tab1-icon1.png";
import tab1Icon2 from "../../../public/shopify/tab1-icon2.png";
import tab1Icon3 from "../../../public/shopify/tab1-icon3.png";
import tab1Icon4 from "../../../public/shopify/tab1-icon4.png";
import tab1Icon5 from "../../../public/shopify/tab1-icon5.png";

const MyComponent = () => {
  // const [nav1, setNav1] = useState(null);
  //   const [nav2, setNav2] = useState(null);
  //   let sliderRef1 = useRef(null);
  //   let sliderRef2 = useRef(null);
  
  //   useEffect(() => {
  //     setNav1(sliderRef1);
  //     setNav2(sliderRef2);
  //   }, []);

  const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);

  // useEffect(() => {
  //   const slider = $(sliderRef1.current); // main slider 
  //   const slider2 = $(sliderRef2.current);
  //   slider2.slick({
  //     slidesToShow: 1,
  //     slidesToScroll: 0,
  //     asNavFor: '.right_slider1',
  //     dots: false,
  //     centerMode: false,
  //     focusOnSelect: true,
  //     swipeToSlide: false,
  //     autoplay: false,
  //     arrows: false,
  //     focusOnSelect: true,
  //     speed: 500,
  //     infinite: false,
  //   });
  //   const memoriesSection = document.querySelector(".tabMainWrap");
  //   console.log('test');
  //   if (slider.length > 0) {
  //     console.log('test1');
  //     slider.slick({
  //       slidesToShow: 1,
  //       slidesToScroll: 1,
  //       arrows: false,
  //       fade: true,
  //       asNavFor: '.left_slider1'
  //     });
     
      
      
  //       $('body').on('wheel', function (e) {
  //         const memoriesSectionY = memoriesSection.getBoundingClientRect().y;
          
  //         console.log('tab:'+memoriesSectionY);
  //         if(memoriesSectionY == $('header').height()){

  //           console.log('header:'+$('header').height());

  //           e.preventDefault();
  //           $("body").css("overflow", "hidden");
  //           if (e.originalEvent.deltaY < 0) {
  //             slider.slick('slickNext');
  //           } else {
  //             slider.slick('slickPrev');
  //           }
            
  //         }
          
  //       });
      
  //   }

  //   // Cleanup function to destroy Slick instance if component unmounts
  //   return () => {
  //     if (slider.length > 0 && slider.hasClass('slick-initialized')) {
  //       slider.slick('unslick');
  //     }
  //   };
  // }, []);

  return (
    <>
    <div className="gallery_slider">
                  <div className="left_thumnails">
                  <div className="left_slider1" ref={sliderRef2}>
                    
                      
                      <a><img src={tab1Icon1.src} alt="" /></a>
                      <a><img src={tab1Icon2.src} alt="" /></a>
                      <a><img src={tab1Icon3.src} alt="" /></a>
                      <a><img src={tab1Icon4.src} alt="" /></a> 
                      <a><img src={tab1Icon5.src} alt="" /></a> 
                    
                      </div>
                  </div>
                  <div className="right_slider">
                    <div className="right_slider1" ref={sliderRef1}>
                        <div className='slider_right_main'>
                          <div className="row gap-5 align-items-center">
                            
                            <div className="col-md-8 m-auto">
                              <div className="social_ads text-white text-center">
                               
                                <h2>Checkout UI Extension</h2>
                                <p>A Checkout UI Extension enhances the user experience during the checkout process on Shopify. Our Shopify experts can tailor this extension to streamline checkout, optimize form fields, implement guest checkout options, and integrate secure payment gateways, ensuring seamless transactions and higher conversion rates for your online store.</p>
                                <div className="mt-4">
                                  <a href="" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                              </div>
                          </div>
                        </div>


                        <div className='slider_right_main'>
                          <div className="row gap-5 align-items-center">
                            
                            <div className="col-md-8 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Up Sell</h2>
                                <p>Upselling is a strategic technique to increase average order value by offering complementary or upgraded products during the checkout process. Our Shopify experts can implement upsell features, suggest related items, and design compelling offers to maximize revenue and enhance customer satisfaction.</p>
                                <div className="mt-4">
                                  <a href="" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        
                        <div className='slider_right_main'>
                          <div className="row gap-5 align-items-center">
                            
                            <div className="col-md-8 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Discount Formula</h2>
                                <p>The Discount Formula in Shopify allows you to apply discounts to products based on fixed amounts or percentages. Our Shopify experts can configure discount codes, automatic discounts, or bulk discounts tailored to your promotional strategies, encouraging sales and customer engagement in your online store.</p>
                                <div className="mt-4">
                                  <a href="" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='slider_right_main'>
                          <div className="row gap-5 align-items-center">
                            
                            <div className="col-md-8 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Custom Filters</h2>
                                <p>Custom Filters enable personalized product searches on Shopify, enhancing user experience. Our experts can implement filters based on attributes like size, color, or price, empowering customers to find products quickly. With tailored filters, you can boost conversion rates and improve customer satisfaction in your Shopify store.</p>
                                <div className="mt-4">
                                  <a href="" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='slider_right_main'>
                          <div className="row gap-5 align-items-center">
                            
                            <div className="col-md-8 m-auto">
                              <div className="social_ads text-white text-center">
                                
                                <h2>Custom Search</h2>
                                <p>Custom Search functionality allows users to find specific products or information on a Shopify store with ease. Our experts can integrate advanced search features, such as autocomplete suggestions, filters, and synonyms, optimizing the search experience and helping customers discover relevant items efficiently, ultimately increasing sales.</p>
                                <div className="mt-4">
                                  <a href="" className="b2b-btn b2b-btn-sm m-0">Read More</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        

                      </div>
                  </div>
                </div>
    </>
  );
};

export default MyComponent;