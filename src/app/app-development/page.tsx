'use client'

import React, { useState } from "react";

// import { useEffect } from "react";
import Header from '../../../component/header';
import Footer from '../../../component/footer';
import ServicesFooterLinks from "../services/services-footer-links";
import BigCommerce from './bigCommerce';
import Angagement from '../app-development/engagement-model';
import Faq from '../faq';
import '../big-commerce/commerce.css';
import '../app-development/app.css';
import "../service-mb-style.css";
import Request from "../request-form";

import nextGeneration from '../../../public/app/next-generation.png';
import Icon1 from '../../../public/app/icon1.svg';
import Icon2 from '../../../public/app/icon2.svg';
import Icon3 from '../../../public/app/icon3.svg';
import Icon4 from '../../../public/app/icon4.svg';
import c1 from "../../../public/services2-img/c1.svg";

import radialBg from '../../../public/img/radial_bg.svg';

import radialRight from '../../../public/img/radial-right.svg';

import { Player } from "@lottiefiles/react-lottie-player";
import PageHead from "../../../component/PageHead";
import Image from "next/image";

export default function BigCommence() {

  const baseURL = "https://base2brand.com/app-development";
  const wwwURL = "https://www.base2brand.com/app-development";

  // Check if the current URL includes 'www'
  let canonical = '';
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");

    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Mobile App Development Services India by Base2brand",
    description: "Launch your mobile app with Base2brand's expert developers. Tailored app solutions that drive growth. Begin your development journey today!",
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
      <div className="bg-black tab-btn">
        <div className="service-banner" style={{ backgroundImage: `url(${radialBg.src})`, backgroundRepeat: 'no-repeat', backgroundColor: "#111616" }} >
          <div className="container mx-auto">
            <div className="row d-flex flex-wrap align-items-center  m-auto">
              <div className="col-12 col-sm-12 col-md-6 " data-aos="fade-up" >
                <h1 className="mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">Mobile App Development</h1>
                <p className="text-white col-12 col-sm-12 col-md-12 m-auto letterSpacing-1">
                  We offer comprehensive app development for iOS and Android, covering design, coding, testing, and deployment. Collaborative efforts ensure bespoke, top-tier solutions for clients.</p>
                <div className="service-btn d-flex flex-wrap mt-3 w-100">
                  <button onClick={toggleModal} className="b2b-btn b2b-btn-lg m-0">Request a Quote</button>
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-6 d-flex flex-wrap align-items-center justify-content-center" data-aos="fade-up" >
                <Player
                  src='/json/banner/app-dev.json'
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="b2b-gray-bg py-5 nextGenWrap" data-aos="fade-up">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 col-md-12 text-white order-lg-1 order-2">
                <h1 className="b2b-main-heading mb-3" data-aos="fade-up" data-aos-delay="300">Developing Custom, Scalable, And <br />Next-Generation Mobile Apps</h1>
                <p className="b2b-text-sm letterSpacing-1" data-aos="fade-up" data-aos-delay="300">Crafting innovative, scalable mobile apps demands a holistic approach. We delve into client needs, user expectations, and tech trends. Our process begins with thorough consultations, understanding your goals. Leveraging cutting-edge tech, our skilled team tailors solutions for optimal user experience and interface design.</p>
                <p className="b2b-text-sm letterSpacing-1" data-aos="fade-up" data-aos-delay="300">We prioritize scalability, ensuring seamless growth. From concept to deployment, maintenance, and updates, we offer comprehensive development services. Collaborate with us to realize your vision and redefine mobile excellence.</p>
              </div>
              <div className="col-lg-5 col-md-12 order-lg-2 order-1 mb-lg-0 mb-4">
                <img className="w-100" src={nextGeneration.src} alt="" data-aos="fade-up" data-aos-delay="300" />
              </div>
            </div>
          </div>
        </div>
        <BigCommerce />
        <div className="bg_light_green" data-aos="fade-up">
          <div className="container pt-md-5 pt-3 ">
            <div className="row mb-5">
              <div className="col-lg-3 col-md-3 mb-4" data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD">
                  <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                    <div className="me-lg-3 me-md-1 me-3"><img src={Icon1.src} alt="IOS App Development" /></div>
                    <h3 className="b2b-sub-text ml-3 mb-0">IOS App<br />Development</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 mb-4" data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD">
                  <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                    <div className="me-lg-3 me-md-1 me-3"><img src={Icon2.src} alt="Android App Development" /></div>
                    <h3 className="b2b-sub-text ml-3 mb-0">Android App<br />Development</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 mb-4" data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD">
                  <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                    <div className="me-lg-3 me-md-1 me-3"><img src={Icon3.src} alt="React Native App Development" /></div>
                    <h3 className="b2b-sub-text ml-3 mb-0">React Native App<br />Development</h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 mb-4" data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD">
                  <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                    <div className="me-lg-3 me-md-1 me-3"><img src={Icon4.src} alt="Flutter App Development" /></div>
                    <h3 className="b2b-sub-text ml-3 mb-0">Flutter App<br />Development</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-lg-8 m-auto">
                <h2 className="b2b-main-heading text-center" data-aos="fade-up" data-aos-delay="300">Technology Stacks We Use For Developing Mobile Apps</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-xl-12 col-xxl-10  m-auto">
                <ul className="nav nav-pills mb-3 service_tabs justify-content-center" id="pills-tab" role="tablist" data-aos="fade-up" data-aos-delay="300">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active btn_service" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">FRONT END</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link btn_service" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">BACK END</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link btn_service" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">CLOUD</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link btn_service" id="pills-design-tab" data-bs-toggle="pill" data-bs-target="#pills-design" type="button" role="tab" aria-controls="pills-design" aria-selected="false">DESIGN</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link btn_service" id="pills-testing-tab" data-bs-toggle="pill" data-bs-target="#pills-testing" type="button" role="tab" aria-controls="pills-testing" aria-selected="false">TESTING</button>
                  </li>

                </ul>
                <div className="tab-content" id="pills-tabContent" data-aos="fade-up" data-aos-delay="300">
                  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div className="container">
                      <div className="row appIcons row-cols-2 row-cols-lg-5 row-cols-md-3  row-cols-sm-2  row-cols-xs-2 text-white mt-4 justify-content-center align-items-center text-center">
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Android-studio_k228wp.png" alt="" />
                          <span>Android Studio</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/kotlin_v2gcxk.png" alt="" />
                          <span>Kotlin</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/ios-sdk_iuy6f4.png" alt="" />
                          <span>iOS SDK</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xcode_g7khnu.png" alt="" />
                          <span>XCode</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/React-Native_bcww0r.png" alt="" />
                          <span>React Native</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/ionic_xalgyd.png" alt="" />
                          <span>Ionic</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/flutter_vibwhp.png" alt="" />
                          <span>Flutter</span>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div className="container">
                      <div className="row appIcons row-cols-2 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-cols-xs-2 text-white mt-4 justify-content-center align-items-center text-center">
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/b1_pt8nu0.svg" alt="" />
                          <span>Firebase</span>
                        </div>

                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/b2_gepiwv.svg" alt="" />
                          <span>SQLite</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/b3_mgrw6k.svg" alt="" />
                          <span>AWS</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/b4_kntyba.svg" alt="" />
                          <span>MySQL</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/b5_ludaxk.svg" alt="" />
                          <span>NodeJS</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/b6_ruxfi0.svg" alt="" />
                          <span>MongoDB</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/b7_gzidgb.svg" alt="" />
                          <span>Django</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/b8_ie4ure.svg" alt="" />
                          <span>PHP</span>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div className="container">
                      <div className="row appIcons row-cols-2 row-cols-lg-4 row-cols-md-3 row-cols-sm-2  row-cols-xs-2 text-white mt-4 justify-content-center align-items-center text-center">
                        <div className="col mb-5">
                          <img className="service_tab_icon" src={c1.src} alt="" />
                          <span>Firebase</span>
                        </div>
                        <div className="col mb-5">
                          <Image width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/flutter_vibwhp.png" alt="" />
                          <span>Flutter</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/b3_mgrw6k.svg" alt="" />
                          <span>AWS</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/b1_pt8nu0.svg" alt="" />
                          <span>Firebase</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/c2_naj297.svg" alt="" />
                          <span>Heroku</span>
                        </div>


                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-design" role="tabpanel" aria-labelledby="pills-design-tab">
                    <div className="container">
                      <div className="row appIcons row-cols-2 row-cols-lg-4 row-cols-md-3 row-cols-sm-2  row-cols-xs-2 text-white mt-4 justify-content-center align-items-center text-center">
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon7_zvtlfy.svg" alt="" />
                          <span>Figma</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon16_g5rmqj.svg" alt="" />
                          <span>Adobe XD</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon6_tiqsf7.svg" alt="" />
                          <span>Adobe Photoshop</span>
                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon5_mba4nj.svg" alt="" />
                          <span>Adobe Illustrator</span>
                        </div>


                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="pills-testing" role="tabpanel" aria-labelledby="pills-testing-tab">
                    <div className="container">
                      <div className="row appIcons row-cols-2 row-cols-lg-4 row-cols-md-3 row-cols-sm-2  row-cols-xs-2 text-white mt-4 justify-content-center align-items-center text-center">
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/test1_yyxzlc.png" alt="" />

                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/test2_jtqxxu.png" alt="" />

                        </div>
                        <div className="col mb-5">
                          <Image
                            width="100"
                            height="100"
                            className="service_tab_icon"
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/test3_frfoiy.png?v=1761389673" alt="" />

                        </div>


                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <Angagement />
        <div className="b2b-black-bg pt-5 pb-3" style={{ backgroundImage: `url(${radialRight.src})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right' }}>
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
  )
}
