"use client";

import React, { useRef, useState, useEffect } from 'react';
// import { useEffect } from "react";
import Header from "../../../component/header";
import Footer from "../../../component/footer";
import ServicesFooterLinks from "../services/services-footer-links";
import Bg from '../../../public/services2-img/service-mask.svg';
import '../../app/services/services2.css';
import './digital.css';
import "../service-mb-style.css";
import Request from "../request-form";
// blur problem when use cdn link
import Digital0 from "../../../public/digital/digital.png";
import Digital1 from "../../../public/digital/digital1.png";
import Digital2 from "../../../public/digital/digital2.png";
//

import growBusiness from "../../../public/digital/grow-business.png";

import whyChoose from "../../../public/digital/img1.png";
import checkCircle from "../../../public/digital/check-circle.svg";

import radialRight from '../../../public/img/radial-right.svg';
import Faq from "./faq";

import Slider from 'react-slick';
import { Player } from "@lottiefiles/react-lottie-player";
import Image from 'next/image';


// gif changes 
import MetaAds from "../../../public/img/Digitalmarketingigif/metasdds.gif"
import googleadd from "../../../public/img/Digitalmarketingigif/googleadd.gif"
import seo from "../../../public/img/Digitalmarketingigif/SEO.gif"

import cro from "../../../public/img/Digitalmarketingigif/cro.gif"

import EmailMarketing from "../../../public/img/Digitalmarketingigif/emailmarketing.gif"
import Ecommerce from "../../../public/img/Digitalmarketingigif/ecommerse.gif"
import Link from 'next/link';
import PageHead from "../../../component/PageHead";
import radialBg from '../../../public/img/radial_bg.svg';


// import MetaAds from "../../../public/img/Digitalmarketingigif/SEO.gif"
export default function Digital() {

  const baseURL = "https://base2brand.com/digital-marketing";
  const wwwURL = "https://www.base2brand.com/digital-marketing";

  // // Check if the current URL includes 'www'
  let canonical = '';
  if (typeof window !== "undefined") {
    const isUsingWWW = window.location.href.includes("www.");

    canonical = isUsingWWW ? wwwURL : baseURL;
  }
  const PageMeta = {
    title: "Choose Digital Marketing Agency Mohali With Proven Results",
    description: "Boost your brand with proven digital marketing strategies from our Mohali agency. See real results. Choose us and elevate your online presence today!",
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

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);


  useEffect(() => {
    const memoriesSection = document.querySelector(".gallery_slider");
    const headerSection = document.querySelector("header");
    const headerHeight = headerSection.offsetHeight;

    if (!memoriesSection) {
      console.error("Element with class 'gallery slider' not found");
      return;
    }

    const handleScroll = () => {
      const clientHeight = document.documentElement.clientHeight;
      const memoriesSectionY = memoriesSection.getBoundingClientRect().y;
      if (clientHeight > memoriesSectionY) {

        if (memoriesSectionY <= (headerHeight + 10)) {

          // const tabs = document.querySelectorAll(".slider_icon");
          const tabbtns = document.querySelectorAll(".slider_right_main");

          let stepcount = 0;
          tabbtns.forEach(tabbtn => {
            const tabSectionY = tabbtn.getBoundingClientRect().y;

            if (tabSectionY <= (headerHeight + 10)) {


              const btnID = tabbtn.getAttribute("data-tab-id");
              // console.log(btnID);

              // if(btnID !== null){
              //   const btnSection = document.querySelector(`#${btnID}`);
              //   btnSection.classList.add("b2b_tab_vissible");
              // }

            } else {

              const btnID = tabbtn.getAttribute("data-tab-id");
              // console.log(btnID);

              // if(btnID !== null){
              //   const btnSection = document.querySelector(`#${btnID}`);
              //   btnSection.classList.remove("b2b_tab_vissible");
              // }

            }
            if (tabSectionY < clientHeight && tabSectionY > 272) {

              stepcount = parseInt(tabbtn.getAttribute("data-step"));
              stepcount--;
              if (stepcount > 0) {
                console.log(`.tab1-step-${stepcount}`);
                const stepSection1 = document.querySelector(`.tab1-step-${stepcount}`);
                console.log(stepSection1, 'sadasda');

                stepSection1.classList.add('tab-active');

              }

            } else {

              stepcount = parseInt(tabbtn.getAttribute("data-step"));
              stepcount--;
              if (stepcount > 0) {
                const stepSection1 = document.querySelector(`.tab1-step-${stepcount}`);
                stepSection1.classList.remove('tab-active');
              }
            }

          });
        }
      }

    };

    document.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <PageHead PageMeta={PageMeta} />
      <head>
        <meta property="og:title" content={PageMeta.title} />
        <meta property="og:description" content={PageMeta.description} />
      </head>
      <Header />
      <div className="bg_home p-0">
        <div className="service-banner" style={{ backgroundImage: `url(${radialBg.src})`, backgroundRepeat: 'no-repeat' }}>
          <div className="container mx-auto">
            <div className="row flex-wrap align-items-center m-auto">
              <div className="col-12 col-sm-12 col-md-7 " data-aos="fade-up" >
                <h1 className=" mb-md-3 mb-2 b2b-sub-heading-bold text-uppercase">Digital Marketing Services To Drive Business Growth</h1>
                <p className="text-white col-12 col-sm-12 col-md-10">
                  Digital marketing services are essential for driving business growth by boosting online visibility, attracting targeted audiences, and increasing conversions. We craft tailored strategies to help your brand achieve lasting success.
                </p>
                <div className="service-btn d-flex flex-wrap mt-3 w-100">
                  <button className="b2b-btn b2b-btn-sm" onClick={toggleModal}>Request a Quote</button>
                  {/* b2b-btn b2b-btn-lg m-0 */}
                </div>
              </div>
              <div className="col-12 col-sm-12 col-md-5 d-flex flex-wrap align-items-center justify-content-center" data-aos="fade-up" >
                <Player
                  src='/json/banner/digital marketing.json'
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4 mb-md-0 mb-4" data-aos="fade-up">
              <div className="hoverGradient blueGD">
                <div className="digital_box">
                  <img className="digital_img" src={Digital0.src} alt="" />
                  <Image width="100" height="100" className="digital_icon"
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon2_tptwwc.svg" alt="" />

                  <div className="leader_box">
                    <a>Leader in digital marketing <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-md-0 mb-4" data-aos="fade-up">
              <div className="hoverGradient blueGD">
                <div className="digital_box">
                  <img className="digital_img" src={Digital2.src} alt="" />
                  <Image width="100" height="100" className="digital_icon"
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon1_xjzuqj.svg" alt="" />
                  <div className="leader_box">
                    <a>Highest Success rates <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-md-0 mb-4" data-aos="fade-up">
              <div className="hoverGradient blueGD">
                <div className="digital_box">
                  <img className="digital_img" src={Digital1.src} alt="" />
                  <Image width="100" height="100" className="digital_icon"
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon_ohmkkv.svg" alt="" />
                  <div className="leader_box">
                    <a>Quality Marketing Solutions <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <DemoPage /> */}
        <div className="main_gallery" data-aos="fade-up">
          <div className="b2b-container-lg">
            <div className="gallery_slider">
              <div className="right_slider m-auto">

                <div className='slider_right_main tab1-step-1' data-step="1" data-tab-id="tab1-1">
                  <div className="row gap-5 align-items-center">
                    <div className="col-md-5">
                      <div className='image-meta'>

                        {/* <Image className='MetaAds_img' src={MetaAds}  alt=''/> */}
                        <Player
                          src='/json\Meta Ads.json'
                          loop
                          autoplay
                          className="animated-imgs"
                        />
                      </div>

                      {/* <Player
                                src='/json/Digital Marketing/Meta ads JSON.json'
                                loop
                                autoplay
                                className="animated-imgs"
                              /> */}
                    </div>
                    <div className="col-md-6">
                      <div className="social_ads">
                        <small>PAID ADS + SOCIAL</small>
                        <h2>Meta Ads</h2>
                        <p>We provide comprehensive social media marketing and advertising services, crafting tailored strategies to elevate your brand's online presence and drive results.</p>
                        <div className="mt-4">
                          <Link href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">See All Services</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className='slider_right_main tab1-step-2' data-step="2" data-tab-id="tab1-2">
                  <div className="row gap-5 align-items-center">
                    <div className="col-md-5">
                      <div className='image-meta'>

                        {/* <Image className='MetaAds_img' src={googleadd}  alt=''/> */}
                        <Player
                          src='/json\Google Ads.json'
                          loop
                          autoplay
                          className="animated-imgs"
                        />
                      </div>
                      {/* <Player
                                src='/json/Digital Marketing/Google Ads JSON.json'
                                loop
                                autoplay
                                className="animated-imgs"
                              /> */}
                    </div>
                    <div className="col-md-6">
                      <div className="social_ads">
                        <small>PAID ADS + Sales</small>
                        <h2>Google Ads</h2>
                        <p>Maximize your online visibility with our expert Google Ads management, driving targeted traffic and delivering measurable results for your business growth.</p>
                        <div className="mt-4">
                          <Link href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">See All Services</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='slider_right_main tab1-step-3' data-step="3" data-tab-id="tab1-3">
                  <div className="row gap-5 align-items-center">
                    <div className="col-md-5">
                      <div className='image-meta'>
                        <Player
                          src='/json\SEO.json'
                          loop
                          autoplay
                          className="animated-imgs"
                        />
                        {/* <Image className='MetaAds_img' src={seo}  alt=''/> */}
                      </div>
                      {/* <Player
                                src='/json\SEO.json'
                                loop
                                autoplay
                                className="animated-imgs"
                              /> */}
                    </div>
                    <div className="col-md-6">
                      <div className="social_ads">
                        <small>ON PAGE + off page +Technical SEO</small>
                        <h2>SEO (Search Engine Optimization)</h2>
                        <p>Boost your website's search engine rankings and organic traffic with our customized SEO strategies, tailored to enhance your online visibility and drive conversions.</p>
                        <div className="mt-4">
                          <Link href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">See All Services</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='slider_right_main tab1-step-4' data-step="4" data-tab-id="tab1-4">
                  <div className="row gap-5 align-items-center">
                    <div className="col-md-5">
                      <div className='image-meta'>
                        <Player
                          src='/json\CRO.json'
                          loop
                          autoplay
                          className="animated-imgs"
                        />
                        {/* <Image className='MetaAds_img' src={cro}  alt=''/> */}
                      </div>
                      {/* <Player
                                src='/json/Digital Marketing/CRO JSON.json'
                                loop
                                autoplay
                                className="animated-imgs"
                              /> */}
                    </div>
                    <div className="col-md-6">
                      <div className="social_ads">
                        <small>OPTIMIZATION + UX+ CONVERT + SELL</small>
                        <h2>CRO (Conversion Rate Optimization)</h2>
                        <p>Maximize conversions with our CRO. Elevate sales, engage customers, and amplify ROI. Let your brand thrive through data-driven optimization</p>
                        <div className="mt-4">
                          <Link href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">See All Services</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='slider_right_main tab1-step-5' data-step="5" data-tab-id="tab1-5">
                  <div className="row gap-5 align-items-center">
                    <div className="col-md-5">
                      <div className='image-meta'>
                        <Player
                          src='/json\Email Marketing.json'
                          loop
                          autoplay
                          className="animated-imgs"
                        />
                        {/* <Image className='MetaAds_img' src={EmailMarketing}  alt=''/> */}
                      </div>
                      {/* <Player
                                src='/json/Digital Marketing/Email Marketing JSON.json'
                                loop
                                autoplay
                                className="animated-imgs"
                              /> */}
                    </div>
                    <div className="col-md-6">
                      <div className="social_ads">
                        <small>CONVERSION + SALES</small>
                        <h2>Email Marketing</h2>
                        <p>Engage your audience and drive conversions with our effective email marketing campaigns, delivering personalized messages and valuable content to nurture customer relationships.</p>
                        <div className="mt-4">
                          <Link href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">See All Services</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='slider_right_main tab1-step-6' data-step="6" data-tab-id="tab1-6">
                  <div className="row gap-5 align-items-center">
                    <div className="col-md-5">
                      <div className='image-meta'>
                        <Player
                          src='/json\E-commerce.json'
                          loop
                          autoplay
                          className="animated-imgs"
                        />
                        {/* <Image className='MetaAds_img' src={Ecommerce}  alt=''/> */}
                      </div>
                      {/* <Player
                                src='/json/Digital Marketing/E Commerce JSON.json'
                                loop
                                autoplay
                                className="animated-imgs"
                              /> */}
                    </div>
                    <div className="col-md-6">
                      <div className="social_ads">
                        <small>OPTIMIZATION + Sales</small>
                        <h2>E-commerce</h2>
                        <p>Expand your reach and increase sales with our Amazon marketing solutions, leveraging optimization strategies to enhance product visibility and drive conversions on the platform.</p>
                        <div className="mt-4">
                          <Link href="/underconstrution" className="b2b-btn b2b-btn-sm m-0">See All Services</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="py-5" data-aos="fade-up" >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 mb-md-0 mb-4" data-aos="fade-up" data-aos-delay="300">
                <img className='w-100' src={growBusiness.src} alt="" />
              </div>
              <div className="col-md-5" >
                <h3 className='b2b-heading mb-4' data-aos="fade-up" data-aos-delay="300">More than a Decade of Experience <br />in Digital Marketing </h3>
                <p className="b2b-text mb-4" data-aos="fade-up" data-aos-delay="300">Over a decade of digital marketing experience fuels our strategies, ensuring maximum impact for your brand. Trust our expertise to navigate the complexities of the online landscape and drive tangible results for your business.</p>
                <div className="row growBusinessType">
                  <div className="col-lg-6 col-md-6 col-6 d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <Image width="100" height="100"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/i1_g3ly83.svg" alt="" />
                    <p className="mb-0">Notable Business Growth</p>
                  </div>
                  <div className="col-lg-6 col-md-6 col-6 d-flex align-items-center" data-aos="fade-up" data-aos-delay="300">
                    <Image width="100" height="100"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/i2_no7d6l.svg" alt="" />
                    <p className="mb-0">Bespoke Marketing Solution</p>
                  </div>
                </div>
                <ul className="checkListing">
                  <li data-aos="fade-up" data-aos-delay="300">Collaborated with businesses from various sectors</li>
                  <li data-aos="fade-up" data-aos-delay="300">Small and new businesses are well-served</li>
                  <li data-aos="fade-up" data-aos-delay="300">Define valuable content and marketing channels</li>
                  <li data-aos="fade-up" data-aos-delay="300">Convert the funds you have invested into a priceless asset.</li>
                </ul>
                <div className='mt-5' data-aos="fade-up" data-aos-delay="300">
                  <a className='b2b-btn b2b-btn-sm' onClick={toggleModal}>Request a Quote</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 b2b-gray-bg" data-aos="fade-up" >
          <div className="b2b-container-lg">
            <div className="row">
              <div className="col-md-12" >
                <h3 className='b2b-heading mb-4 text-center' data-aos="fade-up" data-aos-delay="300">Our Digital Marketing Services for Your <br />   Business Growth</h3>
              </div>
            </div>
            <div className="row counterWrap mt-5">
              <div className="col-md-6 mb-5 counterInnerWrap" data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD">
                  <div className=" w-100 h-100 border-bottom" >

                    <div className='counter'>
                      <span>01</span>
                      <Link href="/underconstrution" className='box-nav'><span></span></Link>
                    </div>
                    <h3>Search Engine Optimization (SEO)</h3>
                    <p className="b2b-text mb-4">Enhance online visibility with Base2Brand's SEO expertise. 93% of online experiences begin with a search engine. Let our strategies elevate your rankings and boost organic traffic.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5 counterInnerWrap" data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD">
                  <div className=" w-100 h-100 border-bottom" >

                    <div className='counter'>
                      <span>02</span>
                      <Link href="/underconstrution" className='box-nav'><span></span></Link>

                    </div>
                    <h3>Google/Meta Ads</h3>
                    <p className="b2b-text mb-4">Generate $2 for every $1 spent with optimized Google and Meta Ads—boost reach, drive traffic, and maximize ROI with our expert team.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5 counterInnerWrap" data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD">
                  <div className=" w-100 h-100 border-bottom" >

                    <div className='counter'>
                      <span>03</span>
                      <Link href="/underconstrution" className='box-nav'><span></span></Link>

                    </div>
                    <h3>Social Media Optimization (SMO)</h3>
                    <p className="b2b-text mb-4">We specializes in SMO, optimizing social platforms to enhance brand visibility and engagement, tailored to your business goals.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5 counterInnerWrap" data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD">
                  <div className=" w-100 h-100 border-bottom" >

                    <div className='counter'>
                      <span>04</span>
                      <Link href="/underconstrution" className='box-nav'><span></span></Link>

                    </div>
                    <h3>YouTube Marketing</h3>
                    <p className="b2b-text mb-4">Base2Brand excels in YouTube Marketing, leveraging engaging video content to drive business profits from its vast audience</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5 counterInnerWrap" data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD">
                  <div className=" w-100 h-100 border-bottom" >

                    <div className='counter'>
                      <span>05</span>
                      <Link href="/underconstrution" className='box-nav'><span></span></Link>

                    </div>
                    <h3>Online Reputation Management</h3>
                    <p className="b2b-text mb-4">Base2Brand is your expert in ORM, safeguarding your brand's reputation, addressing negative feedback, and fostering positive sentiments for online success.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5 counterInnerWrap" data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD">
                  <div className=" w-100 h-100 border-bottom" >

                    <div className='counter'>
                      <span>06</span>
                      <Link href="/underconstrution" className='box-nav'><span></span></Link>

                    </div>
                    <h3>Content Writing</h3>
                    <p className="b2b-text mb-4">Our Content Writing service crafts engaging, SEO-friendly content, tailored to your brand across blog posts, website copy, and social media.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 whyChoosewrap" data-aos="fade-up">
          <div className="b2b-container-lg">
            <div className="row gap-5">
              <div className="col-lg-6 col-md-7 order-md-1 order-2" >
                <div className="hoverGradient blueGD mb-4 w-100" data-aos="fade-up" data-aos-delay="300">
                  <div className='b2b-gray-bg p-3 w-100'>
                    <h4>Customized Solutions</h4>
                    <p className='b2b-text'>We understand that every business is unique, so we craft personalized strategies that align with your goals and objectives, delivering tailored solutions for maximum impact.</p>
                  </div>
                </div>
                <div className="hoverGradient blueGD mb-4 w-100" data-aos="fade-up" data-aos-delay="300">
                  <div className='b2b-gray-bg p-3 w-100'>
                    <h4>Transparency</h4>
                    <p className='b2b-text'>We believe in open communication and transparency throughout our partnership, providing regular updates, performance reports, and insights to keep you informed every step of the way.</p>
                  </div>
                </div>
                <div className="hoverGradient blueGD mb-4 w-100" data-aos="fade-up" data-aos-delay="300">
                  <div className='b2b-gray-bg p-3 w-100'>
                    <h4>Proven Results</h4>
                    <p className='b2b-text'>With a track record of success and satisfied clients, we deliver tangible results that drive business growth, whether it's increased website traffic, higher conversion rates, or improved brand visibility.</p>
                  </div>
                </div>
                <div className="hoverGradient blueGD mb-4 w-100" data-aos="fade-up" data-aos-delay="300">
                  <div className='b2b-gray-bg p-3 w-100'>
                    <h4>Innovative Approach</h4>
                    <p className='b2b-text'>We stay ahead of the curve with cutting-edge tools, techniques, and trends in digital marketing, ensuring our strategies are always fresh, relevant, and effective in today's ever-evolving landscape.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-5 order-md-2 order-1 mb-md-0 mb-5" >
                <h3 className='b2b-heading mb-4' data-aos="fade-up" data-aos-delay="300">What Makes Us the Smartest Choice  <br />to Market Your Business  and <br />Services?</h3>
                <p className="b2b-text mb-4" data-aos="fade-up" data-aos-delay="300">Our team comprises seasoned professionals with years of experience in digital marketing.</p>
                <img className="mt-4" src={whyChoose.src} alt="" data-aos="fade-up" data-aos-delay="300" />

              </div>
            </div>
            <div className='row mt-5'>
              <div className="col-lg-9 m-auto">
                <h2 className="b2b-heading text-center mb-3" data-aos="fade-up" data-aos-delay="300">
                  Feature-rich Digital Marketing Services That Drive Results</h2>

              </div>
            </div>
            <div className="row row-cols-md-6 row-cols-3 gap-3 mt-md-5 mt-3 whyChoosewrap-row">
              <div className='col mb-4' data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD withGray">
                  <div className='dmWrap'>
                    <Image width="100" height="100" className="icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/dm1_ht42km.svg" alt="" />
                    <p>Precision Targeting</p>
                    <img className="checkicon" src={checkCircle.src} alt="" />
                  </div>
                </div>
              </div>
              <div className='col mb-4' data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD withGray">
                  <div className='dmWrap'>
                    <Image width="100" height="100" className="icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/dm2_toxlrf.svg" alt="" />
                    <p>Engaging Content</p>
                    <img className="checkicon" src={checkCircle.src} alt="" />
                  </div>
                </div>
              </div>
              <div className='col mb-4' data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD withGray">
                  <div className='dmWrap'>
                    <Image width="100" height="100" className="icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/dm3_dblsjv.svg" alt="" />
                    <p>Personalized Campaigns</p>
                    <img className="checkicon" src={checkCircle.src} alt="" />
                  </div>
                </div>
              </div>
              <div className='col mb-4' data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD withGray">
                  <div className='dmWrap'>
                    <Image width="100" height="100" className="icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/dm4_ipmmx4.svg" alt="" />
                    <p>Enhanced Conversions</p>
                    <img className="checkicon" src={checkCircle.src} alt="" />
                  </div>
                </div>
              </div>
              <div className='col mb-4' data-aos="fade-up" data-aos-delay="300">
                <div className="hoverGradient blueGD withGray">
                  <div className='dmWrap'>
                    <Image width="100" height="100" className="icon"
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/dm5_cohibd.svg" alt="" />
                    <p>Enhanced Visibility</p>
                    <img className="checkicon" src={checkCircle.src} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 b2b-gray-bg businessNeed" data-aos="fade-up">
          <div className="b2b-container-lg">
            <div className="row">
              <div className="col-md-12" >
                <h3 className='b2b-heading mb-4 text-center' data-aos="fade-up" data-aos-delay="300">Why Does Your Business Need <br />Digital Marketing Service?</h3>
              </div>

              <div className='col-lg-9 m-auto'>
                <div className="row counterWrap mt-5">
                  <div className="col-md-6 mb-4 counterInnerWrap" data-aos="fade-up" data-aos-delay="300">
                    <div className="hoverGradient blueGD">
                      <div className=" w-100 h-100 " >
                        <ul className='counter-checklist'>
                          <li>
                            <h4>Increased Reach</h4>
                            <p className="b2b-text mb-0">Digital marketing broadens audience reach beyond traditional methods, engaging online communities and potential customers actively, ensuring brand visibility across diverse platforms.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 counterInnerWrap" data-aos="fade-up" data-aos-delay="300">
                    <div className="hoverGradient blueGD">
                      <div className=" w-100 h-100 " >
                        <ul className='counter-checklist'>
                          <li>
                            <h4>Cost-Effectiveness</h4>
                            <p className="b2b-text mb-0">Digital marketing is more cost-effective than traditional channels, enabling strategic budget allocation for higher ROI via targeted campaigns.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 counterInnerWrap" data-aos="fade-up" data-aos-delay="300">
                    <div className="hoverGradient blueGD">
                      <div className=" w-100 h-100 " >
                        <ul className='counter-checklist'>
                          <li>
                            <h4>Improved Targeting</h4>
                            <p className="b2b-text mb-0">Digital marketing offers precise targeting, tailoring messaging to specific demographics, interests, ensuring resonant content for higher engagement and conversions.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 counterInnerWrap" data-aos="fade-up" data-aos-delay="300">
                    <div className="hoverGradient blueGD">
                      <div className=" w-100 h-100 " >
                        <ul className='counter-checklist'>
                          <li>
                            <h4>Enhanced Brand Awareness</h4>
                            <p className="b2b-text mb-0">Digital marketing boosts brand visibility and recognition through consistent online presence and strategic branding efforts, fostering trust and loyalty.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 counterInnerWrap" data-aos="fade-up" data-aos-delay="300">
                    <div className="hoverGradient blueGD">
                      <div className=" w-100 h-100 " >
                        <ul className='counter-checklist'>
                          <li>
                            <h4>Real-Time Analytics</h4>
                            <p className="b2b-text mb-0">Digital marketing provides real-time analytics, tracking campaign effectiveness, identifying improvement areas, and making data-driven decisions for optimized results.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 counterInnerWrap" data-aos="fade-up" data-aos-delay="300">
                    <div className="hoverGradient blueGD">
                      <div className=" w-100 h-100 " >
                        <ul className='counter-checklist'>
                          <li>
                            <h4>Adaptability and Flexibility</h4>
                            <p className="b2b-text mb-0">Digital marketing offers flexibility to adjust strategies to changing market trends, consumer preferences, ensuring business agility in dynamic digital environments</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-3 text-center" data-aos="fade-up" data-aos-delay="300">
                    <button onClick={toggleModal} className='b2b-btn b2b-btn-sm'>Get In Touch</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
  );
}
