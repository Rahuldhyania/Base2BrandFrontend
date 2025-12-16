'use client'

import React from "react"; 
import Strategy from '../../public/img/Strategy.png';   
import Execution from '../../public/img/Execution.png';   
import Optimization from '../../public/img/Optimization.png';   
import CountUp from 'react-countup';
import './our-project.css'

export default function home() {
 
  return (
    <>  
      <div className="container-fluid p-5 pb-5 mt-md-5 mt-0"> 
          <div className="row text-white mb-5 pb-5"> 
          <div className="col-md-12 text-center mb-5">
            <h1 className="font-light fs-1 unique-head">What Sets Us Apart?</h1>
          </div>
          <div className="col mb-2"  data-aos="flip-left" >
            <div className="purpose">
            <img className="icon_our" src={Strategy.src} alt="Product" /> 
              <h4>Tailored Solutions</h4>
              <p>At Base2Brand, we understand that every business is unique. We offer customized website development and digital marketing solutions tailored to your specific goals and requirements.</p>
            </div>
          </div>

          <div className="col mb-2"  data-aos="flip-right"  > 
            <div className="purpose">
            <img className="icon_our" src={Execution.src} alt="Product" /> 
              <h4>Global Reach</h4>
              <p>With offices in India and Canada, we have a global presence, allowing us to serve businesses across the globe. Our diverse team brings a wealth of perspectives and expertise to every project.</p>
            </div>
          </div>

          <div className="col mb-2" data-aos="flip-left"   >
            <div className="purpose">
            <img className="icon_our" src={Optimization.src} alt="Product" /> 
              <h4>Results-Driven Approach</h4>
              <p>Our team is dedicated to delivering tangible results for our clients. We focus on achieving measurable outcomes, such as increased website traffic, leads, and conversions, to ensure the success of your online marketing efforts.</p>
            </div>
          </div>
          <div className="col mb-2" data-aos="flip-left"   >
            <div className="purpose">
            <img className="icon_our" src={Optimization.src} alt="Product" /> 
              <h4>Comprehensive Services</h4>
              <p>From website development to digital marketing, we offer a full suite of services to meet all your online needs under one roof. Whether you need a new website or a targeted marketing campaign, we&apos;ve got you covered</p>
            </div>
          </div>
          <div className="col mb-2" data-aos="flip-left"   >
            <div className="purpose">
            <img className="icon_our" src={Execution.src} alt="Product" /> 
              <h4>Expertise and Innovation</h4>
              <p>Our team comprises seasoned professionals who stay ahead of industry trends and employ cutting-edge techniques to deliver innovative solutions. With Base2Brand, you can trust that you&apos;re getting the latest strategies to propel your business forward.</p>
            </div>
          </div>
        </div>
        <div className="row text-white mt-0 pt-0 mt-md-5 pt-md-5"  >
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 text-left"  >
            <h1>Do not be wise in words</h1>
            <p className="mb-5 mt-4">Implementing the famous proverb “Do not be wise in words, be wise in deeds”, we believe that results speak for themselves!</p>
            <button className="btn btn-outline-primary m-0"> 
            {/* <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i>  */}
            Request a Quote </button>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 borderLeft">
            <div className="borderGradiant position-relative">
              <h1><CountUp end={85} />%</h1> 
              <p>INCREASE IN ORGANIC WEBSITE TRAFFIC</p>
            </div>
            </div> 
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 borderLeft">
            <div className="borderGradiant position-relative top-8"> 
              <h1><CountUp end={90} />%</h1> 

              <p>MORE LEADS ONE-COMMERCE WEBSITE</p>
            </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 borderLeft">
            <div className="borderGradiant position-relative top-20">
            <h1><CountUp end={96} />%</h1>  
              <p>INCREASE IN NO. OF VIEWS ON YOUTUBE</p>
            </div>
            </div> 
        </div>
      </div> 
    </>
  )
}
