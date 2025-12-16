"use client";

import React, { useEffect, useState, useRef } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import "./about.css";
import radialBg from "../../../public/img/radial_bg.svg";
import Img1 from "../../../public/career-img/img1.svg";
import Img3 from "../../../public/career-img/img3.svg";
import Img4 from "../../../public/career-img/img4.svg";
import Img12 from "../../../public/career-img/img12.svg";
import Img14 from "../../../public/career-img/img14.svg";
import PageHead from "../../../component/PageHead";

import { Player } from "@lottiefiles/react-lottie-player";

import Slider from "react-slick";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import radialRight from "../../../public/img/radial-bg-right1.svg";

export default function Team() {
  const baseURL = "https://base2brand.com/career";
  const wwwURL = "https://www.base2brand.com/career";
  let canonical = '';
  // Check if the current URL includes 'www'
  if (typeof window !== "undefined") {
  // Check if the current URL includes 'www'
  const isUsingWWW = window.location.href.includes("www.");
  canonical = isUsingWWW ? wwwURL : baseURL;
}
  
  const PageMeta = {
    title: "Join Our Team | Career | Apply Now | Base2Brand India",
    description: "Embark on a career with Base2Brand India! Explore exciting opportunities and apply now to join our innovative team committed to excellence.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  return (
    <>
    <PageHead PageMeta={PageMeta}/>
    <head>
    <meta property="og:title" content={PageMeta.title} />
    <meta property="og:description" content={PageMeta.description} />
    </head>
      <Header />
      <div className="pt-0 pb-0 b2b-black-bg">
        <div
          className="about-mask pt-5"
          style={{
            backgroundImage: `url(${radialBg.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
    {/* <div className="crew-wrap"> */}
    <div className="container mx-auto">
            <div className="row m-0 position-relative align-items-center text-white pt-md-5 pt-0">
              <div
                className="col-12 col-sm-12 col-md-5 bannerContent"
                data-aos="fade-up"
              >
                <h1 className="b2b-sub-heading-bold text-uppercase">
                  Would you like to join Base2Brand ?
                </h1>
                <p className="b2b-sub-text">
                  Check the current openings below!
                </p>
              </div>
              <div
                className="col-12 col-sm-12 col-md-6"
                data-aos="zoom-in-up"
                data-aos-delay="300"
              >
                  <Player
                src="/json/careerbanner.json"
                loop
                autoplay
                className="animated-imgs  animated-banner-img"
              />
                {/* <img className="rounded" src={About1.src} alt="" /> */}
               
              </div>
            </div>
          </div>

          <div className="crew-wrap mt-5">
            <div className="row justify-content-center mt-5">
              <div className="col-md-12 mx-auto text-center text-white mb-5">
               <div className="text-center">
               <h1
                  className="b2b-sub-heading-bold text-uppercase"
                  data-aos="fade-up"
                >
                  Current Openings 
                </h1>
                {/* <Image src={underline} alt="" width="200"/> */}
              
               </div>
              </div>
              <div className='col-md-3 col-6 mb-5 text-center' data-aos="zoom-in-up" data-aos-delay="100">
              <a href="mailto:hr@base2brand.com" >
                    <img src={Img12.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Technical team lead </h3>
                      <p>Experience: 4 years</p>
                    </div>
                  </a>
                  </div>
              <div
                className="col-md-3 col-6 mb-5 text-center"
                data-aos="zoom-in-up"
                data-aos-delay="200"
              >
                <a href="mailto:hr@base2brand.com">
                  <img src={Img1.src} alt="" />
                  <div className="team-details">
                    <h3 className="mb-0">Quality Assurance</h3>
                    <p>Experience: 1 to 2 years</p>
                  </div>
                </a>
              </div>
              {/* <div
                className="col-md-3 col-6 mb-5 text-center"
                data-aos="zoom-in-up"
                data-aos-delay="300"
              >
                 <a href="mailto:hr@base2brand.com">
                <img src={Img2.src} alt="" />
                <div className="team-details">
                  <h3 className="mb-0">Graphic  Designer</h3>
                  <p>Experience: 6 months to 1 year</p>
                </div>
                </a>
              </div> */}
              <div
                className="col-md-3 col-6 mb-5 text-center"
                data-aos="zoom-in-up"
                data-aos-delay="400"
              >
                 <a href="mailto:hr@base2brand.com text-center">
                <img src={Img3.src} alt="" />
                <div className="team-details">
                  <h3 className="mb-0">Content Writer</h3>
                  <p>Experience: Fresher to 0.6 months</p>
                </div>
                </a>
              </div>
              <div
                className="col-md-3 col-6 mb-5 text-center"
                data-aos="zoom-in-up"
                data-aos-delay="500"
              >
                 <a href="mailto:hr@base2brand.com">
                <img src={Img4.src} alt="" />
                <div className="team-details">
                  <h3 className="mb-0">Project manager</h3>
                  <p>Experience: 4 to 5 year</p>
                </div>
                </a>
              </div>
              {/* <div className='col-md-3 col-6 mb-5' data-aos="zoom-in-up" data-aos-delay="500">
                    <img src={Img5.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Content writer</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5' data-aos="zoom-in-up" data-aos-delay="600">
                    <img src={Img6.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>marketing executive</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5' data-aos="zoom-in-up" data-aos-delay="700">
                    <img src={Img7.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Shopify developer</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5' data-aos="zoom-in-up" data-aos-delay="800">
                    <img src={Img8.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Project coordinator</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5' data-aos="zoom-in-up" data-aos-delay="900">
                    <img src={Img9.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>React Native</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5' data-aos="zoom-in-up" data-aos-delay="1000">
                    <img src={Img10.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Human resources</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5' data-aos="zoom-in-up" data-aos-delay="1100">
                    <img src={Img11.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Full Stack developer</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  <div className='col-md-3 col-6 mb-5' data-aos="zoom-in-up" data-aos-delay="1200">
                    <img src={Img12.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Digital marketing</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  
                  <div className='col-md-3 col-6 mb-5' data-aos="zoom-in-up" data-aos-delay="1300">
                    <img src={Img13.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>BDE</h3>
                      <p>Experience: 2 years</p>
                    </div>
                  </div>
                  */}
                 
                 
                  <div className='col-md-3 col-6 mb-5 text-center' data-aos="zoom-in-up" data-aos-delay="600">
                  <a href="mailto:hr@base2brand.com">
                    <img src={Img14.src} alt='' />
                    <div className='team-details'>
                      <h3 className='mb-0'>Graphic  Designer</h3>
                      <p>Experience :  1 to 1.6 year</p>
                    </div>
                    </a>
                  </div> 
            </div>
          </div>
        </div>

        <div
          className="b2b-black-bg pb-3"
          style={{
            backgroundImage: `url(${radialRight.src})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
          }}
        >
          <div className="container mb-5 pt-5">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="text-center">
                <h2
                  className="b2b-main-heading text-center mb-5 text-uppercase"
                  data-aos="fade-up"
                >
                  More about us
                </h2>
               
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 mb-3"
                data-aos="zoom-in-up"
                data-aos-delay="500"
              >
                <a className="menuLink" href="/about">
                  <div className="menuInner b2b-lightBlue-bg">
                    <h3 className="b2b-title-text text-black">About Us</h3>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="menuText mb-0">
                        We are super efficient and humble to serve you.
                      </p>
                      <span className="menuIcon pl-3"></span>
                    </div>
                  </div>
                </a>
              </div>
              <div
                className="col-xl-4 col-lg-4 col-md-6 mb-3"
                data-aos="zoom-in-up"
                data-aos-delay="800"
              >
                <a className="menuLink" href="/team">
                  <div className="menuInner b2b-pink-bg">
                    <h3 className="b2b-title-text text-black">Team</h3>
                    <div className="d-flex align-items-center justify-content-between">
                      <p className="menuText mb-0">
                      We are proud of our experienced and accomplished team.
                      </p>
                      <span className="menuIcon pl-3"></span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
