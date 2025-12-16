'use client'
import React, { useState } from "react";
import Brand from '../brand';
import Request from '../request-quote';
import RequestForm from "../request-form";
import PlaningProcess from "./planing-process";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
export default function Servicetwo() {

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="container py-0 py-md-5 pb-5 overflow-hidden">


        <div className="row process text-white align-items-center mb-md-5 mb-0 justify-content-center pt-5 px-md-5 px-0">

          <div className="ser-digital col-12 col-md-6 pb-md-5 pb-3 justify-content-end d-flex flex-wrap" data-aos="fade-right">
            {/* <img src={Service1.src} alt=""/> */}
            <Player
              src='/json\service\service - web development.json'
              loop
              autoplay
              className="animated-imgs animated-banner-img"
            />
          </div>
          <div className="ser-digital-col col-12 col-md-6 pb-5" data-aos="fade-left">
            <div className="d-flex flex-wrap justify-content-start align-items-center">
              <h2 className="b2b-sub-heading-bold text-uppercase mb-4">Web Development</h2>
              <p className="b2b-sub-text">We offer comprehensive Web Development services. From responsive website design to seamless functionality, we build tailored solutions that elevate your online presence and drive results for your business. With a keen eye for detail and a focus on user experience, our team ensures that your website not only looks great but also performs flawlessly across all devices.</p>
              <a className="service_link" href="/web-application"> <button className="b2b-btn b2b-btn-sm m-0">Read More</button></a>
            </div>
          </div>

        </div>

        <div className="row tab-btn">
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

          </ul>
          <div className="tab-content" id="pills-tabContent" data-aos="fade-up" data-aos-delay="300">
            <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
              <div className="container">
                <div className="row appIcons row-cols-2 row-cols-lg-5 row-cols-md-3  row-cols-sm-2  row-cols-xs-2 text-white mt-4 justify-content-center align-items-center">
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Android-studio_k228wp_1.png" alt="" />
                    <span>Android Studio</span>
                  </div>
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/kotlin_v2gcxk_1.png" alt="" />
                    <span>Kotlin</span>
                  </div>
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/ios-sdk_iuy6f4_1.png" alt="" />
                    <span>iOS SDK</span>
                  </div>
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/xcode_g7khnu_1.png" alt="" />
                    <span>XCode</span>
                  </div>
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/React-Native_bcww0r_1.png" alt="" />
                    <span>React Native</span>
                  </div>
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/ionic_xalgyd_1.png" alt="" />
                    <span>Ionic</span>
                  </div>
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/flutter_vibwhp_2.png" alt="" />
                    <span>Flutter</span>
                  </div>

                </div>
              </div>
            </div>

            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
              <div className="container">
                <div className="row appIcons row-cols-2 row-cols-lg-5 row-cols-md-3  row-cols-sm-2  row-cols-xs-2 text-white mt-4 justify-content-center align-items-center">
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/codenator_uv1d2u.svg" alt="" />
                    <span>Codeigniter</span>
                  </div>
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/laraval_wh9eo2.svg" alt="" />
                    <span>Laravel</span>
                  </div>
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/developer_d8fhrm.svg" alt="" />
                    <span>NodeJS</span>
                  </div>
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/python_kvp9vj.svg" alt="" />
                    <span>Python</span>
                  </div>
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/web_y4ii9w.svg" alt="" />
                    <span>PHP</span>
                  </div>


                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
              <div className="container">
                <div className="row appIcons row-cols-2 row-cols-lg-4 row-cols-md-3 row-cols-sm-2  row-cols-xs-2 text-white mt-4 justify-content-center align-items-center">
                  {/* <div className="col mb-5">
                                <img className="service_tab_icon" src={c1.src} alt="" />
                                <span>Firebase</span>
                            </div> */}
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/flutter_vibwhp_3.png" alt="" />
                    <span>Flutter</span>
                  </div>
                  <div className="col mb-5">
                    <Image
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/b3_mgrw6k_2.svg"
                      width="100"
                      height="100"
                      alt="" />
                    <span>AWS</span>
                  </div>
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/b1_pt8nu0_4.svg" alt="" />
                    <span>Firebase</span>
                  </div>
                  <div className="col mb-5">
                    <Image
                      width="100"
                      height="100"
                      className="service_tab_icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/c2_naj297_1.svg" alt="" />
                    <span>Heroku</span>
                  </div>


                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="row process text-white mb-md-5 mb-0 align-items-center justify-content-center px-md-5 px-0 pb-5">


          <div className="ser-digital-col col-12 col-md-6 pb-md-5 pb-3" data-aos="fade-right">
            <div className="d-flex flex-wrap   align-items-center">
              <h2 className="b2b-sub-heading-bold text-uppercase mb-4">Mobile App Development</h2>
              <p className="b2b-sub-text">Tap into the mobile market with our expert Mobile Application Development service. With mobile app usage accounting for 92% of total digital time spent, we craft innovative apps tailored to your needs, enhancing user engagement and expanding your reach.</p>
              <a className="service_link" href="/e-commerce"><button className="b2b-btn b2b-btn-sm m-0">Read More</button></a>
            </div>
          </div>
          <div className="ser-digital col-12 col-md-6 pb-md-5 pb-3 justify-content-start d-flex flex-wrap" data-aos="fade-left">
            {/* <img src={Service2.src} alt=""/> */}

            <Player
              src='/json\service\Service - app development.json'
              loop
              autoplay
              className="animated-imgs animated-banner-img"
            />
          </div>

        </div>
        <div className="row mb-5">
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon1_wcjjct.svg" alt="IOS App Development" width="100" height="100" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">IOS App<br />Development</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon2_uj405a.svg" width="100" height="100" alt="Android App Development" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">Android App<br />Development</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon3_eoeijp.svg" width="100" height="100" alt="React Native App Development" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">React Native App<br />Development</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon4_g7wwhm.svg" width="100" height="100" alt="Flutter App Development" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">Flutter App<br />Development</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row process text-white align-items-center mb-md-5 mb-0 justify-content-center px-md-5 px-0">

          <div className="ser-digital col-12 col-sm-6 col-md-6 pb-md-5 pb-3 justify-content-end d-flex flex-wrap" data-aos="fade-right">
            {/* <img src={Service3.src} alt="" /> */}

            <Player
              src='/json\service\service - graphic & desgin.json'
              loop
              autoplay
              className="animated-imgs animated-banner-img"
            />
          </div>
          <div className="ser-digital-col col-12 col-sm-6 col-md-6 pb-md-5 pb-3" data-aos="fade-left">
            <div className="d-flex flex-wrap justify-content-start align-items-center">
              <h2 className="b2b-sub-heading-bold text-uppercase mb-4">Graphic &amp; UI/UX Design</h2>
              <p className="b2b-sub-text">Did you know? 90% of information transmitted to the brain is visual. Harness the power of visuals with our Graphic Design services. From captivating logos to stunning marketing materials, we craft designs that leave a lasting impression, helping your brand stand out in a crowded marketplace.</p>
              <a className="service_link" href="/graphic"> <button className="b2b-btn b2b-btn-sm m-0">Read More</button></a>
            </div>
          </div>

        </div>
        <div className="row mb-5">
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon5_mba4nj_1.svg" alt="Illustrator" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">Illustrator</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon6_tiqsf7_2.svg" alt="Photoshop" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">Photoshop</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon7_zvtlfy_2.svg" alt="Figma" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">Figma</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon8_oeip7l.svg" alt="After Effect" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">After Effect</h3>
              </div>
            </div>
          </div>

        </div>

        <div className="row process text-white mb-md-5 mb-0 align-items-center justify-content-center px-md-5 px-0 pb-5">


          <div className="ser-digital-col col-12 col-md-6 pb-md-5 pb-3 " data-aos="fade-right">
            <div className="d-flex flex-wrap   align-items-center">
              <h2 className="b2b-sub-heading-bold text-uppercase mb-4">Digital Marketing</h2>
              <p className="b2b-sub-text">We offer expert Digital Marketing services to boost your brand&apos;s online visibility and reach. Did you know? 81% of shoppers research online before buying. Let us optimize your digital strategy for success. Harnessing the power of data-driven insights and cutting-edge techniques, we tailor digital marketing campaigns that resonate with your target audience and drive conversions effectively.</p>
              <a className="service_link" href="/digital-marketing"><button className="b2b-btn b2b-btn-sm m-0">Read More</button></a>
            </div>
          </div>
          <div className="ser-digital col-12 col-md-6 pb-md-5 pb-3  justify-content-start d-flex flex-wrap" data-aos="fade-left">
            {/* <img src={Service4.src} alt=""/> */}

            <Player
              src='/json\service\service - digital marketing.json'
              loop
              autoplay
              className="animated-imgs animated-banner-img"
            />
          </div>

        </div>
        <div className="row justify-content-center">
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon9_k1nfko.svg" alt="Search Engine Optimization" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">Search Engine<br />Optimization</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon10_cjtoza.svg" alt="Media Buyer" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">Media Buyer</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon11_k75pde.svg" alt="Social Media Optimization" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">Social Media<br />Optimization</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon12_k11ozn.svg" alt="YouTube Marketing" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">YouTube Marketing</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon13_qpegkb.svg" alt="Online Reputation Management" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">Online Reputation<br />Management</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon14_fitvri.svg" alt="Content Writing" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">Content Writing</h3>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="hoverGradient blueGD">
              <div className="d-flex h-100 align-items-center b2b-black-bg b2b-achievements-wrap  mobile-w">
                <div className="me-3">
                  <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon15_p9fjxh.svg" alt="Google ads (PPC)" /></div>
                <h3 className="b2b-sub-text ml-3 mb-0">Google ads (PPC)</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-0 pb-2 overflow-hidden" style={{ backgroundImage: `url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial-right_ozqeha_1.svg")`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom right' }}>
        <div className="row">

          <Brand heading={"The brand we have worked with"} bgcolor="" color="text-white" />
        </div>
        <PlaningProcess />
        <div className="row">
          <Request />
        </div>
      </div>

      {showModal &&
        <RequestForm
          onCloseModal={toggleModal}
        />
      }
    </>
  )
}
