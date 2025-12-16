'use client'
import React, { useRef, useState, useEffect } from "react";
import design1 from '../../../public/web-app/design1.svg';
import design2 from '../../../public/web-app/design2.svg';
import design3 from '../../../public/web-app/design3.svg';
import design4 from '../../../public/web-app/design4.svg';
import design5 from '../../../public/web-app/design5.svg';
import design6 from '../../../public/web-app/design6.svg';
import Image from "next/image";


// import WEB_STRATEGY from '../../../public/web-app/WEB_STRATEGY.svg'; 
// import PLANNING_INFORMATION from '../../../public/web-app/PLANNING_INFORMATION.svg'; 
// import CREATIVE_DESIGN from '../../../public/web-app/CREATIVE_DESIGN.svg'; 
// import RESPONSIVE_DEVELOPMENT from '../../../public/web-app/RESPONSIVE_DEVELOPMENT.svg'; 
// import QUALITY_ASSURANCE from '../../../public/web-app/QUALITY_ASSURANCE.svg'; 
// import LAUNCH_OPTIMIZATION from '../../../public/web-app/LAUNCH_OPTIMIZATION.svg';
import { Player } from "@lottiefiles/react-lottie-player";




export default function DesktopTabs() {
    const [activeTab, setActiveTab] = useState('pill1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <div className="designTabsWrap b2b-gray-bg" >
                <div className="b2b-container-lg">
                    <div className="row">
                        <div className="col-lg-12 m-auto">
                            <ul className="designTabsWrap b2b-gray-bg">
                                <div className="b2b-container-lg">
                                    <div className="row">
                                        <div className="col-lg-12 m-auto">
                                            <ul className="nav nav-pills mb-3 designTabs" id="pills-tab" role="tablist" data-aos="fade-up" data-aos-delay="300">
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className={`btn_design ${activeTab === 'pill1' ? 'active' : ''}`}
                                                        onClick={() => handleTabClick('pill1')}
                                                    >
                                                        Understand client<br /> goals
                                                        <span><Image src={design1} alt="" /></span>
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className={`btn_design ${activeTab === 'pill2' ? 'active' : ''}`}
                                                        onClick={() => handleTabClick('pill2')}
                                                    >
                                                        Develop a <br />roadmap
                                                        <span><Image src={design2} alt="" /></span>
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className={`btn_design ${activeTab === 'pill3' ? 'active' : ''}`}
                                                        onClick={() => handleTabClick('pill3')}
                                                    >
                                                        Design & <br />Prototyping
                                                        <span><Image src={design3} alt="" /></span>
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className={`btn_design ${activeTab === 'pill4' ? 'active' : ''}`}
                                                        onClick={() => handleTabClick('pill4')}
                                                    >
                                                        Code the <br />website
                                                        <span><Image src={design4} alt="" /></span>
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className={`btn_design ${activeTab === 'pill5' ? 'active' : ''}`}
                                                        onClick={() => handleTabClick('pill5')}
                                                    >
                                                        Testing & Quality <br />Assurance
                                                        <span><Image src={design5} alt="" /></span>
                                                    </button>
                                                </li>
                                                <li className="nav-item" role="presentation">
                                                    <button
                                                        className={`btn_design ${activeTab === 'pill6' ? 'active' : ''}`}
                                                        onClick={() => handleTabClick('pill6')}
                                                    >
                                                        Launch &amp;<br />Optimization
                                                        <span><Image src={design6} alt="" /></span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="designTabsContentWrap" data-aos="fade-up" data-aos-delay="300">
                <div className="b2b-container-lg">
                    <div className="row">
                        <div className="col-lg-12 m-auto">
                            <div className="tab-content" id="pills-tabContent">
                                {activeTab === 'pill1' && (
                                    <div className="tab-pane active" id="pill1" role="tabpanel">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 text-white">
                                                <h2 className="b2b-sub-heading mb-3">We Will Help You Build a High-Converting Website </h2>
                                                <p className="b2b-text-sm letterSpacing-1">To create a website that not only brings in traffic but also turns visitors into loyal customers, we start with a strategic foundation. Our process involves in-depth research into your industry, competitors, and audience to shape a results-driven digital approach.</p>
                                                <p className="b2b-text-sm fw-semibold">In this phase, we</p>
                                                <ul className="arrowListing">
                                                    <li>Define your brand’s unique value to stand out online</li>
                                                    <li>Understand your ideal customers and build tailored user personas</li>
                                                    <li>Plan content and features designed to engage and convert</li>
                                                    <li> Establish performance goals (KPIs) to track traffic and sales conversions</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <Player
                                                    src="/json/web developement/Web Strategy.json"
                                                    loop autoplay
                                                    className="animated-imgs animated-banner-img small_json"
                                                />
                                            </div>
                                        </div>

                                    </div>
                                )}
                                {activeTab === 'pill2' && (
                                    <div className="tab-pane active" id="pill2" role="tabpanel">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 text-white">
                                                <h2 className="b2b-sub-heading mb-3">Planning &amp; Information Architecture</h2>
                                                <p className="b2b-text-sm letterSpacing-1">Next, we map out your unique landing pages and define your site map and navigation. We create a plan for your URL structure, along with redirects and a search engine optirnization strategy, careful to maintain any existing SEO value from your current site, if applicable</p>
                                                <p className="b2b-text-sm fw-semibold">In this phase, we</p>
                                                <ul className="arrowListing">
                                                    <li>Design your site structure, navigation and page hierarchy</li>
                                                    <li>Map out the conversion funnel for each unique landing page</li>
                                                    <li>Create black and white wireframes to show you the bones of your new site</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <Player src="/json/web developement/Planning.json" loop autoplay className="animated-imgs animated-banner-img small_json" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 'pill3' && (
                                    <div className="tab-pane active" id="pill2" role="tabpanel">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 text-white">
                                                <h2 className="b2b-sub-heading mb-3">Creative Design</h2>
                                                <p className="b2b-text-sm letterSpacing-1">Here&apos;s where your website begins to come to life, as ow award-winning designers step in Your design is filled with color and custom elements as we incorporate your brand&apos;s personality and tailor the user journey to your target market.</p>
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
                                                    className="animated-imgs  animated-banner-img small_json"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 'pill4' && (
                                    <div className="tab-pane active" id="pill2" role="tabpanel">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 text-white">
                                                <h2 className="b2b-sub-heading mb-3">Responsive Development</h2>
                                                <p className="b2b-text-sm letterSpacing-1">In the development phase, our expert development team works behind the scenes to build a custoin, secure and scalable solution for your brand, on your chosen platform From B2B to eCommerce, we ensure clean code and a website that&apos;s fully optimized.</p>
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
                                                    className="animated-imgs  animated-banner-img small_json"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {activeTab === 'pill5' && (
                                    <div className="tab-pane active" id="pill2" role="tabpanel">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 text-white">
                                                <h2 className="b2b-sub-heading mb-3">Quality Assurance (QA)</h2>
                                                <p className="b2b-text-sm letterSpacing-1">Before we push your custom solution live for the world to see, we follow a stringent quality assurance process, leaving no stone unturned We continuously test your site&apos;s speed, functionality and other key elements to make sure it&apos;s ready for Launch</p>
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
                                )}
                                {activeTab === 'pill6' && (
                                    <div className="tab-pane active" id="pill2" role="tabpanel">
                                        <div className="row align-items-center">
                                            <div className="col-md-6 text-white">
                                                <h2 className="b2b-sub-heading mb-3">Launch &amp; Optimization</h2>
                                                <p className="b2b-text-sm letterSpacing-1">When our QA is complete, it&apos;s time for launch! Our team will set up your server, carry out the DNS configuration and make sure all updates are finalized We&apos;ll provide Cloudflare security protection, along with both internal and external monitoring.</p>
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
                                                    className="animated-imgs  animated-banner-img small_json"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                {/* Repeat for other tabs */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="designTabsContentWrap" data-aos="fade-up" data-aos-delay="300"> 
            <div className="b2b-container-lg"> 
                <div className="row">
                    <div className="col-lg-12 m-auto">                
                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pill1" role="tabpanel" aria-labelledby="pill1-tab">
                                <div>
                                    <div className="row align-items-center"> 
                                        <div className="col-md-6 text-white"> 
                                            <h2 className="b2b-sub-heading mb-3">Web Strategy</h2>
                                            <p className="b2b-text-sm letterSpacing-1">Before we put pen to paper (or start on your digital design, rather), we conduct thorough research into your industry, competitors and target market to gather insights that will inform your custom digital strategy</p>
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
                            <div className="tab-pane fade" id="pill2" role="tabpanel" aria-labelledby="pill2-tab">
                            <div>
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h2 className="b2b-sub-heading mb-3">Planning &amp; Information Architecture</h2>
                                            <p className="b2b-text-sm letterSpacing-1">Next, we map out your unique landing pages and define your site map and navigation. We create a plan for your URL structure, along with redirects and a search engine optirnization strategy, careful to maintain any existing SEO value from your current site, if applicable</p>
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
                            <div className="tab-pane fade" id="pill3" role="tabpanel" aria-labelledby="pill3-tab">
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h2 className="b2b-sub-heading mb-3">Creative Design</h2>
                                            <p className="b2b-text-sm letterSpacing-1">Here's where your website begins to come to life, as ow award-winning designers step in Your design is filled with color and custom elements as we incorporate your brand's personality and tailor the user journey to your target market.</p>
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
                            <div className="tab-pane fade" id="pill4" role="tabpanel" aria-labelledby="pill4-tab">
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h2 className="b2b-sub-heading mb-3">Responsive Development</h2>
                                            <p className="b2b-text-sm letterSpacing-1">In the development phase, our expert development team works behind the scenes to build a custoin, secure and scalable solution for your brand, on your chosen platform From B2B to eCommerce, we ensure clean code and a website that's fully optimized.</p>
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
                            <div className="tab-pane fade" id="pill5" role="tabpanel" aria-labelledby="pill5-tab">
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h2 className="b2b-sub-heading mb-3">Quality Assurance (QA)</h2>
                                            <p className="b2b-text-sm letterSpacing-1">Before we push your custom solution live for the world to see, we follow a stringent quality assurance process, leaving no stone unturned We continuously test your site's speed, functionality and other key elements to make sure it's ready for Launch</p>
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
                            <div className="tab-pane fade" id="pill6" role="tabpanel" aria-labelledby="pill6-tab">
                                    <div className="row align-items-center"> 
                                        
                                        <div className="col-md-6 text-white"> 
                                            <h2 className="b2b-sub-heading mb-3">Launch &amp; Optimization</h2>
                                            <p className="b2b-text-sm letterSpacing-1">When our QA is complete, it's time for launch! Our team will set up your server, carry out the DNS configuration and make sure all updates are finalized We'll provide Cloudflare security protection, along with both internal and external monitoring.</p>
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

                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        </>
    )
}