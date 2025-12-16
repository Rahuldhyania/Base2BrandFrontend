'use client' 
import React, { useRef, useState, useEffect } from "react";  
import design1 from '../../../public/web-app/design1.svg'; 
import design2 from '../../../public/web-app/design2.svg'; 
import design3 from '../../../public/web-app/design3.svg'; 
import design4 from '../../../public/web-app/design4.svg'; 
import design5 from '../../../public/web-app/design5.svg'; 
import design6 from '../../../public/web-app/design6.svg'; 
import Image from "next/image";
import { Player } from "@lottiefiles/react-lottie-player";
import Slider from 'react-slick';


export default function MobileTabs() {
 
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);
  
    useEffect(() => {
      setNav1(sliderRef1);
      setNav2(sliderRef2);
    }, []);

  return (
    <>  
        <div className="designTabsWrap b2b-gray-bg" > 
            <div className="b2b-container-lg"> 
                <div className="row">
                    <div className="col-lg-12 m-auto">
                        <div className="mb-3 designTabs mobile_block">
                        <Slider
                        asNavFor={nav1}
                        ref={(slider2) => setNav2(slider2)}
                        slidesToShow={1}
                        slidesToScroll={1}
                        swipeToSlide={false}
                        autoplay={false}
                        arrows={true}
                        focusOnSelect={true}
                        speed={800}
                      >
                            <a>
                                <button className=" active btn_design" id="pill1-tab" data-bs-toggle="pill" data-bs-target="#pill1" type="button" role="tab" aria-controls="pill1" aria-selected="true">
                                <span>  <Image src={design1} alt="" /></span>
                                </button>
                            </a>
                            <a>
                                <button className=" active btn_design" id="pill2-tab" data-bs-toggle="pill" data-bs-target="#pill2" type="button" role="tab" aria-controls="pill2" aria-selected="false">
                                <span>  <Image src={design2} alt="" /></span>
                                </button>
                            </a>
                            <a>
                                <button className="active btn_design" id="pill3-tab" data-bs-toggle="pill" data-bs-target="#pill3" type="button" role="tab" aria-controls="pill3" aria-selected="false">
                                <span>  <Image src={design3} alt="" /></span>
                                </button>
                            </a>
                            <a>
                                <button className="active btn_design" id="pill4-tab" data-bs-toggle="pill" data-bs-target="#pill4" type="button" role="tab" aria-controls="pill4" aria-selected="false">
                                <span>  <Image src={design4} alt="" /></span>
                                </button>
                            </a>
                            <a>
                                <button className="active btn_design" id="pill5-tab" data-bs-toggle="pill" data-bs-target="#pill5" type="button" role="tab" aria-controls="pill5" aria-selected="false">
                                <span>  <Image src={design5} alt="" /></span>
                                </button>
                            </a>
                            <a>
                                <button className="active btn_design" id="pill6-tab" data-bs-toggle="pill" data-bs-target="#pill6" type="button" role="tab" aria-controls="pill6" aria-selected="false">
                                <span>  <Image src={design6} alt="" /></span>
                                </button>
                            </a>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="designTabsContentWrap" data-aos="fade-up" data-aos-delay="300"> 
            <div className="b2b-container-lg"> 
                <div className="row">
                    <div className="col-lg-12 m-auto">                
                        <div className="tab-content" id="pills-tabContent">

                        <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}
                            autoplay={false}
                            arrows={false}
                            slidesToShow={1}
                            slidesToScroll={1}
                            speed={800}
                            fade= {true}
                            >
                            <div>
                                <div>
                                    <div className="row align-items-center"> 
                                        <div className="col-md-6 text-white"> 
                                            <h2 className="b2b-sub-heading mb-3">Web Strategy</h2>
                                            <p className="b2b-text-sm">Before we put pen to paper (or start on your digital design, rather), we conduct thorough research into your industry, competitors and target market to gather insights that will inform your custom digital strategy</p>
                                            <p className="b2b-text-sm fw-semibold">In this phase, we</p>
                                            <ul className="arrowListing">
                                                <li>Identify the ideal positioning for your brand</li>
                                                <li>Collect target audience data and create user personas</li>
                                                <li>Define valuable content and marketing channels</li>
                                                <li>Define KPIs to measure performance</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                        <Player
                                            src="/json/web developement/Web Strategy.json"
                                            loop
                                            autoplay
                                            className="animated-imgs  animated-banner-img"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                            <div>
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h2 className="b2b-sub-heading mb-3">Planning &amp; Information Architecture</h2>
                                            <p className="b2b-text-sm">Next, we map out your unique landing pages and define your site map and navigation. We create a plan for your URL structure, along with redirects and a search engine optirnization strategy, careful to maintain any existing SEO value from your current site, if applicable</p>
                                            <p className="b2b-text-sm fw-semibold">In this phase, we</p> 
                                            <ul className="arrowListing">
                                                <li>Design your site structure, navigation and page hierarchy</li>
                                                <li>Map out the conversion funnel for each unique landing page</li>
                                                <li>Create black and white wireframes to show you the bones of your new site</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                        <Player
                                            src="/json/web developement/Planning.json"
                                            loop
                                            autoplay
                                            className="animated-imgs  animated-banner-img"
                                            />
                                        </div>
                                    </div>
                                </div> 
                            </div>
                            <div>
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h2 className="b2b-sub-heading mb-3">Creative Design</h2>
                                            <p className="b2b-text-sm">Here&apos;s where your website begins to come to life, as ow award-winning designers step in Your design is filled with color and custom elements as we incorporate your brand&apos;s personality and tailor the user journey to your target market.</p>
                                            <p className="b2b-text-sm fw-semibold">In this phase, we</p> 
                                            <ul className="arrowListing">
                                                <li>Design your custom website</li>
                                                <li>Incorporate your unique branding elements</li>
                                                <li>Present you with Tull-scale designs in Figma</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                        <Player
                                            src="/json/web developement/Creative.json"
                                            loop
                                            autoplay
                                            className="animated-imgs  animated-banner-img"
                                            />
                                        </div>
                                    </div>
                            </div>
                            <div>
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h2 className="b2b-sub-heading mb-3">Responsive Development</h2>
                                            <p className="b2b-text-sm">In the development phase, our expert development team works behind the scenes to build a custoin, secure and scalable solution for your brand, on your chosen platform From B2B to eCommerce, we ensure clean code and a website that&apos;s fully optimized.</p>
                                            <p className="b2b-text-sm fw-semibold">In this phase, we</p> 
                                            <ul className="arrowListing">
                                                <li>Write and finalize coding for your website</li>
                                                <li>Bring your custom solution to life in a secure staging site</li>
                                                <li>Ensure a responsive solution for both desktop and mobile</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                        <Player
                                            src="/json/web developement/Responsive.json"
                                            loop
                                            autoplay
                                            className="animated-imgs  animated-banner-img"
                                            />
                                        </div>
                                    </div>
                            </div>
                            <div>
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h2 className="b2b-sub-heading mb-3">Quality Assurance (QA)</h2>
                                            <p className="b2b-text-sm">Before we push your custom solution live for the world to see, we follow a stringent quality assurance process, leaving no stone unturned We continuously test your site&apos;s speed, functionality and other key elements to make sure it&apos;s ready for Launch</p>
                                            <p className="b2b-text-sm fw-semibold">In this phase, we</p> 
                                            <ul className="arrowListing">
                                                <li>Perform meticulously testing across the frontend and backend</li>
                                                <li>Ensure all features and functionalities are working as intended</li>
                                                <li>Make changes as needed to ensure a superior user experience</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                        <Player
                                            src="/json/web developement/QualityAssurance.json"
                                            loop
                                            autoplay
                                            className="animated-imgs  animated-banner-img"
                                            />
                                        </div>
                                    </div>
                            </div>
                            <div>
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h2 className="b2b-sub-heading mb-3">Launch &amp; Optimization</h2>
                                            <p className="b2b-text-sm">When our QA is complete, it&apos;s time for launch! Our team will set up your server, carry out the DNS configuration and make sure all updates are finalized We&apos;ll provide Cloudflare security protection, along with both internal and external monitoring.</p>
                                            <p className="b2b-text-sm fw-semibold">In this phase, we</p> 
                                            <ul className="arrowListing">
                                                <li>Perform final QA testing</li>
                                                <li>Devise a marketing plan for launch</li>
                                                <li>Push your new digital solution live</li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                        
                                            <Player
                                            src="/json/web developement/Launch.json"
                                            loop
                                            autoplay
                                            className="animated-imgs  animated-banner-img"
                                            />
                                        </div>
                                    </div>
                            </div>
                        </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
</>
)
}