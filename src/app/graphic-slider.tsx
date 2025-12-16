'use client'
import { useEffect } from 'react';

import React from "react";   

import sliderImages1 from '../../public/slider-img/slider1.png';
import sliderImages2 from '../../public/slider-img/slider2.png';
import arrow from '../../public/img/arrow.png';  
import sliderImages4 from '../../public/slider-img/slider4.png';

import Slider from "react-slick";
export default function Graphicservices() {
 
const Sliders = {
        dots: true,
        arrows : false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

  return (
    <>  

<div className="container-fluid p-5 pb-5">
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <h2 className="heading font-light m-0">PORTFOLIO</h2>
          </div>
          
          <div className="row"> 
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist"  >
         
          <li className="nav-item portfolio_b2b" role="presentation">
    <button className="nav-link p-0 pb-1 active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> Web & App Design</button>
  </li>
  <li className="nav-item portfolio_b2b" role="presentation">
    <button className="nav-link p-0 pb-1" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="false">Brand Identity</button>
  </li>
  <li className="nav-item portfolio_b2b" role="presentation">
    <button className="nav-link p-0 pb-1" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Motion Graphic</button>
  </li>
  <li className="nav-item portfolio_b2b" role="presentation">
    <button className="nav-link p-0 pb-1" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Social Media</button>
  </li>
  <li className="nav-item portfolio_b2b" role="presentation">
    <button className="nav-link p-0 pb-1" id="pills-sec-tab" data-bs-toggle="pill" data-bs-target="#pills-sec" type="button" role="tab" aria-controls="pills-sec" aria-selected="false">2D & Infographic Design</button>
  </li>
</ul>
<div className="tab-content pillPadding" id="pills-tabContent">
  <div className="tab-pane fades show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
  <Slider {...Sliders} className="w-100 pt-0 pb-5 pe-0">
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages4.src} className='slider-img' /> 
            </div> 
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages2.src} className='slider-img' /> 
            </div> 
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages4.src} className='slider-img' /> 
            </div> 
        </Slider>
  </div>
  <div className="tab-pane fades" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
  <Slider {...Sliders} className="w-100 pt-0 pb-5 pe-0">
            <div className="slider-img">
                <img src={sliderImages4.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages2.src} className='slider-img' /> 
            </div> 
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages2.src} className='slider-img' /> 
            </div> 
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages2.src} className='slider-img' /> 
            </div> 
        </Slider>
  </div>
  <div className="tab-pane fades" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
  <Slider {...Sliders} className="w-100 pt-0 pb-5 pe-0">
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages4.src} className='slider-img' /> 
            </div> 
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages2.src} className='slider-img' /> 
            </div> 
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages2.src} className='slider-img' /> 
            </div> 
        </Slider>
  </div>
  <div className="tab-pane fades" id="pills-sec" role="tabpanel" aria-labelledby="pills-sec-tab">
  <Slider {...Sliders} className="w-100 pt-0 pb-5 pe-0">
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages4.src} className='slider-img' /> 
            </div> 
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages2.src} className='slider-img' /> 
            </div> 
            <div className="slider-img">
                <img src={sliderImages1.src} className='slider-img' /> 
            </div>
            <div className="slider-img">
                <img src={sliderImages2.src} className='slider-img' /> 
            </div> 
        </Slider>
  </div>
</div>
         
        </div>
        </div>
      </div> 

 

 
</>
)
}