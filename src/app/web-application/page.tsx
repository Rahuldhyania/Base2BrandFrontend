"use client";
import radialBg from "../../../public/img/radial_bg.svg";
import React, { useState } from "react";
import Header from "../../../component/header";
import DesignWork from "./design-work";
import DesignTabs from "./design-tabs";
import Faq from "./faq";
import ServicesFooterLinks from "../services/services-footer-links";
import Footer from "../../../component/footer";
import "./web.css";
import "../service-mb-style.css";
import radialRight from "../../../public/img/radial-right.svg";
import Bg from "../../../public/services2-img/service-mask.svg";

import Request from "../request-form";
import { Player } from "@lottiefiles/react-lottie-player";
import PageHead from "../../../component/PageHead";
export default function WebApplication() {

  const baseURL = "https://base2brand.com/web-application";
  const wwwURL = "https://www.base2brand.com/web-application";
  let canonical = '';
  if (typeof window !== "undefined") {
    // Check if the current URL includes 'www'
    const isUsingWWW = window.location.href.includes("www.");

    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Web Application Development Services India by Base2brand",
    description: "Develop cutting-edge web applications with Base2brand. Tailor solutions to your business needs. Start your project with us today!",
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
      <div className="b2b-black-bg" style={{ backgroundImage: `https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh.svg`, backgroundRepeat: 'no-repeat', backgroundColor: "#111616" }}>
        <div className="service-banner">
          <div className="container mx-auto">
            <div className="row d-flex flex-wrap align-items-center m-auto">
              <div className="col-12 col-sm-12 col-md-6 " data-aos="fade-up">
                <h1 className=" mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">
                  WEBSITE DEVELOPMENT SERVICES
                </h1>
                <p className="text-white col-12 col-sm-12 col-md-12 m-auto">
                  Our web development service offers tailored digital solutions
                  through a collaborative team approach. We align our strategies
                  with your project goals to create innovative websites that
                  engage your audience effectively.
                </p>
                <div className="service-btn d-flex flex-wrap mt-3 w-100">
                  <button
                    onClick={toggleModal}
                    className="b2b-btn b2b-btn-sm  m-0"
                  >
                    Request a Quote
                  </button>
                </div>
              </div>
              <div
                className="col-12 col-sm-12 col-md-6 d-flex flex-wrap align-items-center justify-content-center"
                data-aos="fade-up"
              >
                <Player
                  src="/json/banner/Web development.json"
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 b2b-gray-bg" data-aos="fade-up">
          <div className="b2b-container-lg">
            <div className="row">
              <div className="col-md-8 text-center m-auto">
                <h3
                  className="b2b-partners-heading"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Process of Delivering Website Development Services
                </h3>
                <p
                  className="text-white b2b-text-sm letterSpacing-1"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Our web development process, from discovery to deployment, ensures your site meets goals, engages audiences, and delivers exceptional results.

                </p>
              </div>
            </div>
          </div>
        </div>
        <DesignTabs />
        <DesignWork />

        <div
          className="b2b-black-bg pt-5 pb-3"
          style={{
            backgroundImage: `url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial-right_ozqeha.svg")`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom right",
          }}
        >
          <Faq />
          <ServicesFooterLinks />
        </div>
        <Footer />
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </>
  );
}
