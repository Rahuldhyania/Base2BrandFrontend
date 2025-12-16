"use client";

import React, { useState } from "react";
import Header from "../../../component/header";
import Technologystack from "./technologystack";
import EcommerceFunctionality from "./ecommerce-functionality";
import Services from "./services";
import Quote from "../request-quote";
import Footer from "../../../component/footer";
import ServicesFooterLinks from "../services/services-footer-links";
import "../mobile-application/mobile.css";
import "../e-commerce/commerce.css";
import "../service-mb-style.css";
import Request from "../request-form";

import Link from "next/link";
import Bg from '../../../public/services2-img/service-mask.svg';
import nextGeneration from '../../../public/ecommerce/e-commerce.png';
import { Player } from "@lottiefiles/react-lottie-player";
import PageHead from "../../../component/PageHead";

export default function Ecommerce() {

  const baseURL = "https://base2brand.com/e-commerce";
  const wwwURL = "https://www.base2brand.com/e-commerce";

  // Check if the current URL includes 'www'
  let canonical = '';
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");
    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "E-commerce Website Development Services India by Base2brand",
    description: "Scale your business with our e-commerce development services. Trust Base2brand to build a robust online store. Start your success story today!",
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
        <div className="service-banner " style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh.svg")`, backgroundRepeat: 'no-repeat' }}>
          <div className="container mx-auto">
            <div className="row d-flex flex-wrap align-items-center m-auto">
              <div className="col-12 col-sm-12 col-md-6" data-aos="fade-up" >
                <h1 className="mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">E-Commerce Website Design & Development Services</h1>
                <p className="text-white col-12 col-sm-12 col-md-12 m-auto">
                  We specialize in E-commerce theme and app development, providing customized solutions to enhance your web store</p>
                <div className="service-btn d-flex flex-wrap mt-3 w-100">
                  <button onClick={toggleModal} className="b2b-btn b2b-btn-lg m-0" >Request a Quote</button>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 d-flex flex-wrap align-items-center justify-content-center" data-aos="fade-up" >
                <Player
                  src='/json/banner/e-commerce.json'
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
              <div className="col-md-5 mb-md-0 mb-4">
                <img className="w-100" src={nextGeneration.src} alt="" data-aos="fade-up" data-aos-delay="300" />
              </div>
              <div className="col-md-7 text-white">
                <h1 className="b2b-main-heading mb-3" data-aos="fade-up" data-aos-delay="300">E-Commerce Store That<br />Match Your Needs</h1>
                <p className="b2b-text-sm" data-aos="fade-up" data-aos-delay="300">Base2Brand offers bespoke eCommerce solutions tailored to your specific requirements. From design to development, our team ensures your online store reflects your brand identity while providing a seamless shopping experience for your customers. With our expertise, we'll bring your vision to life and create an eCommerce platform that meets your needs and exceeds your expectations.</p>
                {/* <Link href="/underconstrution">
                      <button className="b2b-btn b2b-btn-sm m-0"  data-aos="fade-up" data-aos-delay="300">Read More</button>
                      </Link> */}
              </div>

            </div>
          </div>
        </div>
        <EcommerceFunctionality />
        <Services />
        <Technologystack />


        <div className="b2b-black-bg pt-5 pb-3" style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial-right_ozqeha.svg")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right' }}>

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

