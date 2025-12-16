"use client";

import React, { useState } from "react";
// import { useEffect } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import Services2 from "./service2-section";
import './services2.css'
import "../service-mb-style.css";
import Request from "../request-form";
import { Player } from "@lottiefiles/react-lottie-player";
import PageHead from "../../../component/PageHead";

export default function Service() {

  const baseURL = "https://base2brand.com/services";
  const wwwURL = "https://www.base2brand.com/services";
  let canonical = '';
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");

    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Our Services | Request a Quote | Base2Brand India",
    description: "Explore Base2Brand India's comprehensive digital services. Get customized solutions for your business needs. Request a quote today!",
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
      <div className="bg_home p-0">

        <div className="service-banner" style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh.svg")`, backgroundRepeat: 'no-repeat' }}>
          <div className="container mx-auto">
            <div className="row flex-wrap align-items-center m-auto">
              <div className="col-12 col-sm-12 col-md-7 " data-aos="fade-up" >
                <h1 className=" mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">Innovative Solutions, Exceptional Services, Unmatched Results</h1>
                <p className="text-white col-12 col-sm-12 col-md-10">
                  Cutting-edge services, solutions for any problem: Your trusted IT partner for seamless innovation and success</p>
                <div className="service-btn d-flex flex-wrap mt-3 w-100">
                  <button className="b2b-btn b2b-btn-sm" onClick={toggleModal}>Request a Quote</button>
                  {/* b2b-btn b2b-btn-lg m-0 */}
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-5 d-flex flex-wrap align-items-center justify-content-center" data-aos="fade-up" >
                <Player
                  src='/json\service\Service page banner.json'
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
              </div>
            </div>
          </div>
        </div>




        <Services2 />
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
