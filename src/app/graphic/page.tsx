"use client";

import React, { useState } from "react";
// import { useEffect } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import ServicesFooterLinks from "../services/services-footer-links";
import Creative from "../creative";
import Graphicservices from "../graphic-services";
import UiUx from "../ui-ux";
import Faq from "../graphic/faq";
import '../graphic/graphic.css'
import "../service-mb-style.css";

import 'aos/dist/aos.css';
import Request from "../request-form";
import Bg from '../../../public/services2-img/service-mask.svg';
import nextGeneration from '../../../public/graphics/representations-ui-ux.png';

import { Player } from "@lottiefiles/react-lottie-player";
import PageHead from "../../../component/PageHead";

export default function Graphic() {
  const baseURL = "https://base2brand.com/graphic";
  const wwwURL = "https://www.base2brand.com/graphic";
  let canonical = '';
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Graphic Design Services (#1 Find a Graphic Designer Today)",
    description: "Transform your brand with top-rated graphic design services. Find a skilled designer today and bring your visual ideas to life. Start your project now!",
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
      <PageHead PageMeta={PageMeta} />
      <head>
        <meta property="og:title" content={PageMeta.title} />
        <meta property="og:description" content={PageMeta.description} />
      </head>
      <Header />
      <div className="b2b-black-bg">
        <div className="service-banner" style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh.svg")`, backgroundRepeat: 'no-repeat' }}>
          <div className="container mx-auto">
            <div className="row d-flex flex-wrap align-items-center m-auto">
              <div className="col-12 col-sm-12 col-md-7  " data-aos="fade-up" >
                <h1 className="mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">Engage Your Audience with Stunning <br /> UI/UX and Graphic Designs</h1>
                <p className="text-white col-12 col-sm-12 col-md-12 m-auto">
                  Let us improve your digital presence and fascinate your audience with captivating and visually stunning designs with our UI/UX and graphic design services</p>
                <div className="service-btn d-flex flex-wrap mt-3 w-100">
                  <button onClick={toggleModal} className="b2b-btn b2b-btn-lg m-0" >Request a Quote</button>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-5 d-flex flex-wrap align-items-center justify-content-center" data-aos="fade-up" >
                <Player
                  src='/json/banner/UX-UI.json'
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-5" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5 mb-md-0 mb-4" data-aos="fade-up" data-aos-delay="300">
                {/* <img className="w-100" src={nextGeneration.src} alt="" /> */}
                <Player
                  src='/json/service\service - graphic & desgin.json'
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
              </div>
              <div className="col-md-7 text-white">
                <h1 className="b2b-main-heading mb-3" data-aos="fade-up" data-aos-delay="300">
                  Engage Your Audience with Stunning
                  <br /> UI/UX and Graphic Designs</h1>
                <p className="b2b-text-sm" data-aos="fade-up" data-aos-delay="300">Studies show that 86% of visitors leave a website or app within two seconds if it does not have good visuals and graphics. So the performance of your online platform largely depends on how it presents itself to visitors. No matter how skillfully and sincerely your content describes your services or products, if it lacks quality graphics and the product images are pixelated and unenhanced, it is a waste of resources.</p>
                <button onClick={toggleModal} className="b2b-btn b2b-btn-sm m-0 d-none-md" data-aos="fade-up" data-aos-delay="300">Request a Quote</button>
              </div>

            </div>
          </div>
        </div>

        <Creative />
        <Graphicservices />
        <UiUx />
        <div className="b2b-black-bg pt-5 pb-3" style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial-right_ozqeha.svg")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right' }}>
          <Faq />
          <ServicesFooterLinks />
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
