'use client'

import React from "react";
import Header from '../../component/header'
import Footer from '../../component/footer'
import OurServices from './our-services'
import Projects from './project'
import OurProject from './our-project'
import About from './about'
import Ourpurpose from './our-purpose'
import Brand from './brand'
import HomeBlog from './homeblog'
import Feedback from './feedback'
import Career from './career'

import b2b1 from '../../public/img/b2b1.png'; 
import b2b2 from '../../public/img/b2b2.png'; 
import b2b3 from '../../public/img/b2b3.png'; 
import b2b4 from '../../public/img/b2b4.png'; 
import logo1 from '../../public/img/logo1.png'; 
import logo2 from '../../public/img/logo2.png'; 
import logo3 from '../../public/img/logo3.png'; 
import logo4 from '../../public/img/logo4.png'; 
import logo5 from '../../public/img/logo5.png'; 
import logo6 from '../../public/img/logo6.png'; 
import logo7 from '../../public/img/logo7.png';  
import logo9 from '../../public/img/logo9.png'; 

import polygon from '../../public/img/polygon.png'; 
import Slider from "react-slick";
import Typewriter from 'typewriter-effect';
export default function home() {
  const settings = {
    dots: false,
    arrows : false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    
      <Header />
      <div className="bg_home">
      <div className="container mx-auto pt-4 pb-5"> 
      <div className="row align-items-center">
        <div className="col-md-2">  
              <img src={b2b1.src} className='banner_icon_section'/>
              <img src={b2b2.src} /> 
        </div>
        <div className="col-md-8 text-center heading_lable pt-5 mt-5"> 
          <h2>Design, Transform, Accelerate</h2> 
          <Typewriter 
  options={{
    strings: ['Web Development', 'Digital Marketing'],
    autoStart: true,
    loop: true,
  }}
/>
          <p className='text-white mt-5'>Let’s Build something Digital together Web Mobile Marketing Leading Innovative Partner for Start-ups and Enterprises</p>
          <div className="mt-5 text-center">
          <button className='btn btn-outline-primary'> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>
        </div>
        </div>
        <div className="col-md-2"> 
             <img src={b2b3.src} className='icon_three' />
              <img src={b2b4.src} className='icon_four ml-4' />
        </div>


          <div className="col-md-12 mt-5 text-center pt-5">
            <h3 className='text_primary mt-5'>TRUSTED BY STARTUPS & SAAS COMPANIES BIG & SMALL</h3> 
          </div>
        </div>
        </div>
        <div className="p-3"  data-aos="flip-left">
        <Slider {...settings} className="w-100">
        <div>
        <img src={logo1.src} className='social_logo' /> 
        </div>
        <div>
        <img src={logo2.src} className='social_logo' /> 
        </div> 
        <div>
        <img src={logo3.src} className='social_logo' /> 
        </div>
         <div>
        <img src={logo4.src} className='social_logo' /> 
        </div> 
        <div>
        <img src={logo5.src} className='social_logo' /> 
        </div>
         <div>
        <img src={logo6.src} className='social_logo' /> 
        </div>
         <div>
        <img src={logo7.src} className='social_logo' /> 
        </div>  
         <div>
        <img src={logo9.src} className='social_logo' /> 
        </div>
      </Slider>
      </div> 
      <Projects />
      <OurProject />
      <About />
      <Ourpurpose />
      <Brand />
      <HomeBlog />
      <Feedback />
      <Career />
      <Footer />
</div>
    </>
  )
}
