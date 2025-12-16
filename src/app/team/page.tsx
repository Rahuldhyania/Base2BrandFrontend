"use client";

import React, { useEffect, useState, useRef } from 'react';
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import "../team/about.css";
import Request from "../request-form";
import radialBg from '../../../public/img/radial_bg.svg';
import Img1 from '../../../public/team-img/img1.png';
import Img2 from '../../../public/team-img/img2.png';
import Img3 from '../../../public/team-img/img3.png';
import Img4 from '../../../public/team-img/img4.png';
import Img5 from '../../../public/team-img/img5.png';
import Img6 from '../../../public/team-img/img6.png';
// import Img7 from "../../../public/img/christmas2024.png"
import Slider from "react-slick";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import radialRight from '../../../public/img/radial-right.svg';

import { Player } from "@lottiefiles/react-lottie-player";

import PageHead from "../../../component/PageHead";

import teamdata from "../teams.json"
import Image from 'next/image';

export default function Team() {
  const baseURL = "https://base2brand.com/team";
  const wwwURL = "https://www.base2brand.com/team";
  let canonical = '';
  // Check if the current URL includes 'www'
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }

  const PageMeta = {
    title: "Meet Our Team | Our Experts | Get to Know Us",
    description: "Meet the experts behind Base2Brand! Our dedicated team drives your digital success. Get to know us and see how we can help your business grow.",
    canonical: canonical, // Replace with your page's canonical URL
    image: "/img/portfolio/b1.png", // Replace with your image URL for sharing
  };
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function () {
      const ModalBody = document.querySelector(".request-form");
      if (ModalBody) {
        ModalBody.classList.add("transformAnim");
      }

    }, 200);
  };
  return (
    <>
      <head>
        <meta property="og:title" content='Meet Our Team | Our Experts | Get to Know Us' />
        <meta property="og:description" content={PageMeta.description} />
      </head>
      <PageHead PageMeta={PageMeta} />
      <Header />
      <div className="pt-0 pb-0 b2b-black-bg">
        <div className="about-mask pt-5" style={{ backgroundImage: `url(${radialBg.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
          <div className="row m-0 position-relative text-white pt-md-5 pt-0">

            <div className="col-12 col-sm-12 col-md-7 m-auto text-center" data-aos="fade-up">
              <h1 className='b2b-sub-heading-bold text-capitalize'>Our Cherished Team</h1>
              <p className='b2b-sub-text'>Each member in our team of Shopify experts, digital marketers and graphic designers experienced and well efficient to deliver the assigned projects before the deadline.
              </p>
              <div className="mt-md-5 mt-3 text-center    pb-0">
                <button onClick={toggleModal} className="b2b-btn b2b-btn-lg">Request a Quote </button>
              </div>
              {/* <div className='text-center'>
                <Player
                  src='/json/about-us/Our Cherished Teams.json'
                  loop
                  autoplay
                  className="team-animated-img"
                />
              </div> */}
            </div>
          </div>
          <div className="crew-wrap mt-5">
            <div className="row justify-content-center higher-officials">
              <div className="col-md-12 mx-auto text-center text-white mb-5">
                <div className="text-center">
                  <h1 className='b2b-sub-heading-bold text-uppercase' data-aos="fade-up">Higher Officials</h1>

                </div>
              </div>
              {teamdata.slice(0, 2).map((data, index) => (
                <>
                  <div className='col-md-3 col-sm-4 col-5 mb-md-5 mb-4' key={index} data-aos="zoom-in-up" data-aos-delay="100">
                    <Image src={data.eimage} alt={data.ename} width={1000} height={500} />
                    <div className='team-details'>
                      <h3>{data.ename}</h3>
                      <p>{data.edesignation}</p>
                    </div>
                  </div>
                </>
              ))}

            </div>
            {/*<div className="employeesWrap row row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-2 justify-content-center mt-5">
              <div className="w-100 col-md-12 mx-auto text-center text-white mb-5">
                <div className="text-center">
                  <h1 className='b2b-sub-heading-bold text-uppercase' data-aos="fade-up">Team</h1>

                </div>
              </div>
              {teamdata.slice(2,teamdata.length).map((data,index)=>(
                 <div className='col mb-5' data-aos="zoom-in-up" data-aos-delay="300">
                 <Image src={data.eimage} alt={data.ename} width={1000} height={500} />
                 <div className='team-details'>
                   <h3>{data.ename}</h3>
                   <p>{data.edesignation}</p>
                 </div>
               </div>
              ))}
            </div>*/}
          </div>
        </div>
        <div className="b2b-black-bg pb-3" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right' }}>
          <div className="crew-wrap work-with-us mt-5">
            <div className="row justify-content-center higher-officials">
              <div className="col-md-12 mx-auto text-center text-white mb-md-5 mb-3">
                <h1 className='b2b-sub-heading-bold text-uppercase' data-aos="fade-up" data-aos-delay="100">We Believe In Ourselves <br />You&apos;ll Love Working With Us</h1>
              </div>
              <div className='col-md-12 mb-4' data-aos="zoom-in-up" data-aos-delay="200">
                <img src={Img1.src} alt='' />
              </div>
              <div className='col-12 col-md-6  mb-4' data-aos="zoom-in-up" data-aos-delay="300">
                <img src={Img2.src} alt='' />
              </div>
              <div className='col-12 col-md-6  mb-4' data-aos="zoom-in-up" data-aos-delay="400">
                <img src={Img3.src} alt='' />
              </div>
              <div className='col-md-12  mb-4' data-aos="zoom-in-up" data-aos-delay="500">
                <img src={Img4.src} alt='' />
              </div>
              <div className='col-12 col-md-6  mb-4' data-aos="zoom-in-up" data-aos-delay="600">
                <img src={Img5.src} alt='' />
              </div>
              <div className='col-12 col-md-6  mb-4' data-aos="zoom-in-up" data-aos-delay="700">
                <img src={Img6.src} alt='' />
              </div>
            </div>
          </div>

          <div className='container mb-5 pt-5'>
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <h2 className='b2b-main-heading text-center mb-5 text-uppercase' data-aos="fade-up">More about us</h2>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-3" data-aos="zoom-in-up" data-aos-delay="300">
                <a className="menuLink" href="/about">
                  <div className="menuInner b2b-lightBlue-bg">
                    <h3 className='b2b-title-text text-black'>About Us</h3>
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='menuText mb-0'>We are super efficient and humble to serve you.</p>
                      <span className='menuIcon pl-3'></span>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-3" data-aos="zoom-in-up" data-aos-delay="300">
                <a className="menuLink" href="/career">
                  <div className="menuInner b2b-pink-bg">
                    <h3 className='b2b-title-text text-black'>Career</h3>
                    <div className='d-flex align-items-center justify-content-between'>
                      <p className='menuText mb-0'>Know the latest openings
                        <br /> in our organization.</p>
                      <span className='menuIcon pl-3'></span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {showModal &&
        <Request
          onCloseModal={toggleModal}
        />
      }
    </>
  );
}

