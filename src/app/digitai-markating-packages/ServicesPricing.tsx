"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import appesect from "../../../public/img/logo/accept.svg";
import cross from "../../../public/img/logo/cancel.svg";

const ServicesPricing = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  useEffect(() => {
    // Button hover effect
    const buttons = document.querySelectorAll(".btn-free-trial");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        button.textContent = "Continue";
      });
      button.addEventListener("mouseleave", () => {
        button.textContent = "Free Trial";
      });
    });
  }, []);

  return (
    <>
      <section
        className="tabs b2b-brands-wrap"
        style={{
          backgroundImage:
            "url('./img/digitai-markating-packags/choosepackages.png')",
          backgroundSize: "cover",
          backgroundPosition: "98% 50%",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="b2b-container-lg">
          <h3 className="text-3xl font-bold text-center mx-auto max-w-lg titl-css text-uppercase ">
            pick your plan
          </h3>
          <p
            className="b2b-text text-center  pb-5 pt-2
           "
          >
            IMPROVE YOUR ENGAGEMENT
          </p>

          <div className="flex flex-col md:flex-row py-2 md:py-5">
            <div
              className="d-flex justify-content-center custom-tab-gk "
              role="tablist"
              aria-orientation="vertical"
            >
              <li className="nav-item-gk" role="presentation">
                <button
                  className={`nav-item-gk ${activeTab === "tab1" ? "active" : ""
                    }`}
                  onClick={() => handleTabClick("tab1")}
                >
                  Facebook ads
                </button>
              </li>
              <li className="nav-item-gk" role="presentation">
                <button
                  className={`nav-item-gk ${activeTab === "tab2" ? "active" : ""
                    }`}
                  onClick={() => handleTabClick("tab2")}
                >
                  Social media marketing
                </button>
              </li>
              <li className="nav-item-gk" role="presentation">
                <button
                  className={`nav-item-gk ${activeTab === "tab3" ? "active" : ""
                    }`}
                  onClick={() => handleTabClick("tab3")}
                >
                  Google ads
                </button>
              </li>
              <li className="nav-item-gk" role="presentation">
                <button
                  className={`nav-item-gk ${activeTab === "tab4" ? "active" : ""
                    }`}
                  onClick={() => handleTabClick("tab4")}
                >
                  email marketing
                </button>
              </li>
              <li className="nav-item-gk" role="presentation">
                <button
                  className={`nav-item-gk ${activeTab === "tab5" ? "active" : ""
                    }`}
                  onClick={() => handleTabClick("tab5")}
                >
                  search engine optimization
                </button>
              </li>
            </div>

            <div className=" pt-5 md:pt-4">
              <div className="tab-content">
                <div
                  className={`tab-pane fade ${activeTab === "tab1" ? "show active" : ""
                    }`}
                >
                  {/* fACEBOOK */}
                  <div className="">
                    <div className="row price-table">
                      {/* */}
                      <div className="col-md-6 col-lg-6 col-xl-4 ">
                        <div className="card">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              3 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                              10,000 INR / 150 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="fw-bold fs-5 d-flex gap-2 ">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Page Creation
                              </li>
                              <li className=" d-flex gap-2 ">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Cover And Profile Pic Creation
                              </li>
                              <li className=" d-flex gap-2 ">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Facebook Tabs Creation
                              </li>
                              <li className=" d-flex gap-2 ">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Facebook Page Optimization
                              </li>
                              <li className=" d-flex gap-2 ">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Post on Page (1 Per Week)
                              </li>
                              <li className=" d-flex gap-2 ">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Creation Of Facebook Polls/ Quiz
                              </li>
                              <li className=" d-flex gap-2 ">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Sharing Post In Groups
                              </li>
                              <li className=" d-flex gap-2 ">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Responding To Comments
                              </li>
                              <li className=" d-flex gap-2 ">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Call To Action Button Creation
                              </li>

                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Hashtag Research
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Influencer Research
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Video Posting
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Page Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Competitors Analysis
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Ads Management
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Suggested Ad Spend Monthly: Up to 10,000 Rs
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Business Manager Set Up
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Ads Campaign – 1
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ad Set – 1
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ads – 1
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Pixel Installation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Custom Conversion Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Remarketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Detailed Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Custom Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Creation Of Automated Rules
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Analytics Report Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ad Campaign Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Catalogue Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Dynamic Ads Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Instant Experience Ads Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Customization Of Ad Placements
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                A/B Testing Of Ad Set, Creative And Placement
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Carousel And Collection Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Traffic Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-4 ">
                        <div className="card card-highlight">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              6 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                              18,000 INR / 250 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Page Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Cover and Profile Pic Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Tabs Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Page Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Post on Page (2 Per Week)
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Creation of Facebook Polls/Quizzes
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Sharing Post in Groups
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Responding to Comments
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Call to Action Button Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Hashtag Research
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Influencer Research
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Video Posting – 1 Per Month (Only 30 Sec)
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Page Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Competitors Analysis
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Ads Management
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Suggested Ad Spend Monthly: Up to 25,000 Rs
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Business Manager Set Up
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Ads Campaign – 2
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ad Set – 3
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ads – 6
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Pixel Installation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Custom Conversion Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Remarketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Detailed Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Custom Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Creation of Automated Rules
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Analytics Report Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ad Campaign Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Catalogue Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Dynamic Ads Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Instant Experience Ads Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Customization of Ad Placements
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                A/B Testing of Ad Set, Creative, and Placement
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Carousel and Collection Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Traffic Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Plan: Growing Business */}
                      <div className="col-md-6 col-lg-6 col-xl-4 ">
                        <div className="card">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              12 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                              28,000 INR/400 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Page Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Cover and Profile Pic Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Tabs Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Page Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Post on Page (3 Per Week)
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Creation of Facebook Polls/Quizzes
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Sharing Post in Groups
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Responding to Comments
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Call to Action Button Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Hashtag Research
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Influencer Research
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Video Posting – 1 Per Month (Only 30 Sec)
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Page Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Competitors Analysis
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Ads Management
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Suggested Ad Spend Monthly: Up to 25,000+
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Business Manager Set Up
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Ads Campaign – 3
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ad Set – 6
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ads – 10
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Pixel Installation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Custom Conversion Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Remarketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Detailed Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Custom Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Creation of Automated Rules
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Analytics Report Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ad Campaign Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Catalogue Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Dynamic Ads Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Instant Experience Ads Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Customization of Ad Placements
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                A/B Testing of Ad Set, Creative, and Placement
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Carousel and Collection Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Traffic Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* social media markating */}
                <div
                  className={`tab-pane fade ${activeTab === "tab2" ? "show active" : ""
                    }`}
                >
                  <div className="">
                    <div className="row price-table">
                      {/* Plan: Essentials */}
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="card">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              3 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                              20,000 INR / 250 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ads Spend – Rs. 10,000 (It will be paid to ads
                                platform)
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Agency Ad Management Fee: 10K INR
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Account Management – 2
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Creation of Campaign – 1
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">
                                Facebook Marketing
                              </li>

                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Business Manager Set Up
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Pixel Installation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Custom Conversion Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Remarketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Custom Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Creation of Automated Rules
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Analytics Report Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ad Campaign Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Catalogue Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Dynamic Ads Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Instant Experience Ads Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Customization of Ad Placements
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                A/B Testing of Ad Set, Creative & Placement
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">
                                Placement
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Carousel and Collection Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Traffic Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">
                                Instagram Marketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Audience Research (Instagram Marketing)
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Instagram Ads Creative Creation & Design
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Instagram Ads Monitoring and Management
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">
                                LinkedIn Marketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Campaign Manager Account Set Up
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                LinkedIn Insight Tag Installation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Creation of Custom Conversion
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Ads Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                YouTube Marketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                YouTube Ad Account Set Up
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Skippable In-Stream Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Non-Skippable In-Stream Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Bumper Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Discovery Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                YouTube Video Sequence Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Detailed Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Custom Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                A/B Testing of Targeting
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Remarketing Video Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Video Ads with Promotion of Your Products
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                Twitter Marketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Tweet Engagement Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Video or GIF View Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Awareness Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Website Conversion Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                In-stream Video View Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Follower Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                App Install Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                App Reengagement
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="card card-highlight">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              6 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                              40,000 INR / 500 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ads Spend – Rs.25,000 (paid to platform)
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Agency Ad Management Fee: 10K INR
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Account Management – 2
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Creation of Campaign – 1
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">
                                Facebook Marketing
                              </li>

                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Business Manager Set Up
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Pixel Installation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Custom Conversion Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Remarketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Custom Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Creation of Automated Rules
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Analytics Report Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ad Campaign Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Catalogue Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Dynamic Ads Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Instant Experience Ads Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Customization of Ad Placements
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                A/B Testing of Ad Set, Creative & Placement
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">
                                Placement
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Carousel and Collection Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Traffic Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">
                                Instagram Marketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Audience Research (Instagram Marketing)
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Instagram Ads Creative Creation & Design
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Instagram Ads Monitoring and Management
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                LinkedIn Marketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Campaign Manager Account Set Up
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                LinkedIn Insight Tag Installation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Creation of Custom Conversion
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ads Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                YouTube Marketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                YouTube Ad Account Set Up
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Skippable In-Stream Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Non-Skippable In-Stream Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Bumper Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Discovery Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                YouTube Video Sequence Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Detailed Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Custom Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                A/B Testing of Targeting
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Remarketing Video Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Video Ads with Promotion of Your Products
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                Twitter Marketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Tweet Engagement Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Video or GIF View Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Awareness Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Website Conversion Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                In-stream Video View Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Follower Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                App Install Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                App Reengagement
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Plan: Growing Business */}
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="card">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              12 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                              75,000 INR / 900 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="d-flex gap-2 ">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ads Spend – Rs. 50,000
                              </li>
                              <li className="d-flex gap-2 ">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Our Management Fee – Rs. 25,000
                              </li>
                              <li className="d-flex gap-2 ">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Account Management – 5
                              </li>
                              <li className="d-flex gap-2 ">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Creation Of Campaign – 6
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                Facebook Marketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Business Manager Set Up
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Pixel Installation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Custom Conversion Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Remarketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Custom Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Creation Of Automated Rules
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Facebook Analytics Report Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ad Campaign Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Catalogue Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Dynamic Ads Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Instant Experience Ads Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Customization Of Ad Placements
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                A/B Testing Of Ad Set, Creative And Placement
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Carousel And Collection Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Traffic Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                Instagram Marketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Audience Research
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Instagram Ads Creative Creation & Design
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Instagram Ads Monitoring And Management
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                LinkedIn Marketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Campaign Manager Account Set Up
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                LinkedIn Insight Tag Installation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Creation Of Custom Conversion
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ads Monitoring
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                YouTube Marketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                YouTube Ad Account Set Up
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Skippable In-Stream Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Non-Skippable In-Stream Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Bumper Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Discovery Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                YouTube Video Sequence Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Detailed Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Custom Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                A/B Testing Of Targeting
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Remarketing Video Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Video Ads With Promotion Of Your Products
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                Twitter Marketing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Tweet Engagement Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Video Or GIF View Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Awareness Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Website Conversion Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                In-stream Video View Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Follower Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                App Install Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                App Reengagement
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Audience Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Monthly Report
                              </li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* google aDD */}
                <div
                  className={`tab-pane fade ${activeTab === "tab3" ? "show active" : ""
                    }`}
                >
                  <div className="">
                    <div className="row price-table">
                      {/* Plan: Essentials */}
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="card">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              3 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                              10,000 INR/140 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="d-flex gap-2 ">
                              <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Campaign – 1
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                AD Groups – 2
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                No. of Keywords – 50
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Search Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Display Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Video Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Shopping Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                App Promotion Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Remarketing List
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Conversion Tracking
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                PPC Campaign Management
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Competitor Analysis – Yes
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Keyword Optimization – Yes
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ad Copy Optimization – Yes
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                Value Adds
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                ROI Analysis
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Landing Page Optimization
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                Reporting
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Reports – Monthly
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Dedicated Account Manager
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Support – Email, Chat
                              </li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="card card-highlight">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              6 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                              18,000 INR/250 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="d-flex gap-2 ">
                              <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                
                                Campaign – 2
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                AD Groups – 6
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                No. of Keywords – 100
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Search Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Display Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Video Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Shopping Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                App Promotion Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Remarketing List
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Conversion Tracking
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                PPC Campaign Management
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Competitor Analysis – Yes
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Keyword Optimization – Yes
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ad Copy Optimization – Yes
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                Value Adds
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                ROI Analysis
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Landing Page Optimization
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                Reporting
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Reports – Monthly
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Dedicated Account Manager
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Support – Email, Chat
                              </li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Plan: Growing Business */}
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="card">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              12 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                              30,000 INR/415 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="d-flex gap-2 ">
                              <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Campaign – 5
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                AD Groups – 10
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                No. of Keywords – 150
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Search Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Display Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Video Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Shopping Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                App Promotion Ads
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Remarketing List
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Conversion Tracking
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                PPC Campaign Management
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Competitor Analysis – Yes
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Keyword Optimization – Yes
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Ad Copy Optimization – Yes
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                Value Adds
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                ROI Analysis
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Landing Page Optimization
                              </li>

                              <li className="d-flex gap-2 fw-bold fs-5">
                                Reporting
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Reports – Monthly
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Dedicated Account Manager
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Support – Email, Chat
                              </li>
                            </ul>

                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "tab4" ? "show active" : ""
                    }`}
                >
                  <div className="">
                    <div className="row price-table">
                      {/* Plan: Essentials */}
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="card">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              3 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                            11,999 INR / 149 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                2 Campaigns/Month
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Template Design
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Performance Tracking
                              </li>

                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Segmentation & Personalization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Automation
                              </li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="card card-highlight">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              6 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                            16,999 INR / 199 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="d-flex gap-2">
                                <span>
                                  {/*  */}
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                4 Campaigns/Month
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Template Design
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Performance Tracking
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Segmentation & Personalization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt=""
                                  />
                                </span>
                                Automation
                              </li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Plan: Growing Business */}
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="card">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              12 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                            
                              23,999 INR / 300 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                4 Campaigns/Month
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Template Design
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Performance Tracking
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Segmentation & Personalization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt=""
                                  />
                                </span>
                                Automation
                              </li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "tab5" ? "show active" : ""
                    }`}
                >
                  <div className="">
                    <div className="row price-table">
                      {/* Plan: Essentials */}
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="card">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              3 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                            20,000 INR/250 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">



                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Max 10 Keywords"
                                  />
                                </span>
                                Max 10 Keywords
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Website & Competitor Analysis"
                                  />
                                </span>
                                Website & Competitor Analysis
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Content Duplicity Check"
                                  />
                                </span>
                                Content Duplicity Check
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Initial Ranking Report"
                                  />
                                </span>
                                Initial Ranking Report
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Keywords Research"
                                  />
                                </span>
                                Keywords Research
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="ON PAGE SEO ANALYSIS"
                                  />
                                </span>
                                ON PAGE SEO ANALYSIS
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Meta Tags Creation"
                                  />
                                </span>
                                Meta Tags Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Canonicalization"
                                  />
                                </span>
                                Canonicalization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="URL Structure"
                                  />
                                </span>
                                URL Structure
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Content Optimization"
                                  />
                                </span>
                                Content Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Image Optimization"
                                  />
                                </span>
                                Image Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Heading Tag Optimization"
                                  />
                                </span>
                                Heading Tag Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Website Speed Optimization"
                                  />
                                </span>
                                Website Speed Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Robots.txt"
                                  />
                                </span>
                                Robots.txt
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Sitemap Creation"
                                  />
                                </span>
                                Sitemap Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Google Analytics & Search Console Setup"
                                  />
                                </span>
                                Google Analytics & Search Console Setup
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt="Blog Optimization"
                                  />
                                </span>
                                Blog Optimization
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">

                                LOCAL SEO SETUP
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Google Map Integration on website"
                                  />
                                </span>
                                Google Map Integration on website
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Google My Business Page Setup and Optimization"
                                  />
                                </span>
                                Google My Business Page Setup and Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Local Citations – 5"
                                  />
                                </span>
                                Local Citations – 5
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Local Classifieds – 2"
                                  />
                                </span>
                                Local Classifieds – 2
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">

                                CONTENT MARKETING
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Blog Posting (500 – 700 words) – 1"
                                  />
                                </span>
                                Blog Posting (500 – 700 words) – 1
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Article Writing (500 – 700 words) – 1"
                                  />
                                </span>
                                Article Writing (500 – 700 words) – 1
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Onsite Blog (1000 – 1500 words) – 1"
                                  />
                                </span>
                                Onsite Blog (1000 – 1500 words) – 1
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">

                                EMAIL OUTREACH
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt="Guest Blogging"
                                  />
                                </span>
                                Guest Blogging
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt="Broken Backlink Building"
                                  />
                                </span>
                                Broken Backlink Building
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt="Resource Link Building"
                                  />
                                </span>
                                Resource Link Building
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt="Alerts and Mention"
                                  />
                                </span>
                                Alerts and Mention
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt="Link Roundups"
                                  />
                                </span>
                                Link Roundups
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Competitor Backlink Research"
                                  />
                                </span>
                                Competitor Backlink Research
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">


                                OFF PAGE SEO
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Social Sharing – 30(Total)"
                                  />
                                </span>
                                Social Sharing – 30(Total)
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Blog Social Sharing"
                                  />
                                </span>
                                Blog Social Sharing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Slide Submissions – 1"
                                  />
                                </span>
                                Slide Submissions – 1
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Text Infographic Creation – 1"
                                  />
                                </span>
                                Text Infographic Creation – 1
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt="Video Creation"
                                  />
                                </span>
                                Video Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Q & A – 1"
                                  />
                                </span>
                                Q & A – 1
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">


                                MONTHLY REPORTING
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Keyword Ranking Report"
                                  />
                                </span>
                                Keyword Ranking Report
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Google Analytics Report"
                                  />
                                </span>
                                Google Analytics Report
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Acquired Links Report"
                                  />
                                </span>
                                Acquired Links Report
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">

                                CLIENT SUPPORT
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Email"
                                  />
                                </span>
                                Email
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Chat"
                                  />
                                </span>
                                Chat
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt="Call"
                                  />
                                </span>
                                Call
                              </li>




                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="card card-highlight">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              6 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                            30,000 INR/400 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                             

                            <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Max 10 Keywords"
                                  />
                                </span>
                                Max 20 Keywords
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Website & Competitor Analysis"
                                  />
                                </span>
                                Website & Competitor Analysis
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Content Duplicity Check"
                                  />
                                </span>
                                Content Duplicity Check
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Initial Ranking Report"
                                  />
                                </span>
                                Initial Ranking Report
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Keywords Research"
                                  />
                                </span>
                                Keywords Research
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="ON PAGE SEO ANALYSIS"
                                  />
                                </span>
                                ON PAGE SEO ANALYSIS
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Meta Tags Creation"
                                  />
                                </span>
                                Meta Tags Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Canonicalization"
                                  />
                                </span>
                                Canonicalization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="URL Structure"
                                  />
                                </span>
                                URL Structure
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Content Optimization"
                                  />
                                </span>
                                Content Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Image Optimization"
                                  />
                                </span>
                                Image Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Heading Tag Optimization"
                                  />
                                </span>
                                Heading Tag Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Website Speed Optimization"
                                  />
                                </span>
                                Website Speed Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Robots.txt"
                                  />
                                </span>
                                Robots.txt
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Sitemap Creation"
                                  />
                                </span>
                                Sitemap Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Google Analytics & Search Console Setup"
                                  />
                                </span>
                                Google Analytics & Search Console Setup
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt="Blog Optimization"
                                  />
                                </span>
                                Blog Optimization – 5 Posts
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">

                                LOCAL SEO SETUP
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Google Map Integration on website"
                                  />
                                </span>
                                Google Map Integration on website
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Google My Business Page Setup and Optimization"
                                  />
                                </span>
                                Google My Business Page Setup and Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Local Citations – 5"
                                  />
                                </span>
                                Local Citations – 5
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Local Classifieds – 2"
                                  />
                                </span>
                                Local Classifieds – 2
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">

                                CONTENT MARKETING
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Blog Posting (500 – 700 words) – 1"
                                  />
                                </span>
                                Blog Posting (500 – 700 words) – 3
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Article Writing (500 – 700 words) – 1"
                                  />
                                </span>
                                Article Writing (500 – 700 words) – 3
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Onsite Blog (1000 – 1500 words) – 1"
                                  />
                                </span>
                                Onsite Blog (1000 – 1500 words) – 3
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">

                                EMAIL OUTREACH
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Guest Blogging"
                                  />
                                </span>
                                Guest Blogging
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Broken Backlink Building"
                                  />
                                </span>
                                Broken Backlink Building
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt="Resource Link Building"
                                  />
                                </span>
                                Resource Link Building
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Alerts and Mention"
                                  />
                                </span>
                                Alerts and Mention
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt="Link Roundups"
                                  />
                                </span>
                                Link Roundups
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Competitor Backlink Research"
                                  />
                                </span>
                                Competitor Backlink Research
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">


                                OFF PAGE SEO
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Social Sharing – 30(Total)"
                                  />
                                </span>
                                Social Sharing – 40(Total)
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Blog Social Sharing"
                                  />
                                </span>
                                Blog Social Sharing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Slide Submissions – 1"
                                  />
                                </span>
                                Slide Submissions – 2
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Text Infographic Creation – 1"
                                  />
                                </span>
                                Text Infographic Creation – 2
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={cross}
                                    alt="Video Creation"
                                  />
                                </span>
                                Video Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Q & A – 1"
                                  />
                                </span>
                                Q & A – 3
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">


                                MONTHLY REPORTING
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Keyword Ranking Report"
                                  />
                                </span>
                                Keyword Ranking Report
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Google Analytics Report"
                                  />
                                </span>
                                Google Analytics Report
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Acquired Links Report"
                                  />
                                </span>
                                Acquired Links Report
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">

                                CLIENT SUPPORT
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Email"
                                  />
                                </span>
                                Email
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Chat"
                                  />
                                </span>
                                Chat
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Call"
                                  />
                                </span>
                                Call
                              </li>

                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Plan: Growing Business */}
                      <div className="col-md-6 col-lg-6 col-xl-4">
                        <div className="card">
                          <div className="card-body-gk ">
                            <h5 className="text-center gk-b2b-bold text-white">
                              12 Months Plan
                            </h5>
                            <hr />
                            <p className="card-text-gk  fontlinear text-center ">
                            45, 000 INR/600 USD
                            </p>
                            <p className="card-desc text-white text-center">
                              Monthly EXCLUSIVE OF ALL TAXES
                            </p>
                            <ul className="list-unstyled features-list text-white">
                            <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Max 40 Keywords"
                                  />
                                </span>
                                Max 40 Keywords
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Website & Competitor Analysis"
                                  />
                                </span>
                                Website & Competitor Analysis
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Content Duplicity Check"
                                  />
                                </span>
                                Content Duplicity Check
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Initial Ranking Report"
                                  />
                                </span>
                                Initial Ranking Report
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Keywords Research"
                                  />
                                </span>
                                Keywords Research
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="ON PAGE SEO ANALYSIS"
                                  />
                                </span>
                                ON PAGE SEO ANALYSIS
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Meta Tags Creation"
                                  />
                                </span>
                                Meta Tags Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Canonicalization"
                                  />
                                </span>
                                Canonicalization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="URL Structure"
                                  />
                                </span>
                                URL Structure
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Content Optimization"
                                  />
                                </span>
                                Content Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Image Optimization"
                                  />
                                </span>
                                Image Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Heading Tag Optimization"
                                  />
                                </span>
                                Heading Tag Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Website Speed Optimization"
                                  />
                                </span>
                                Website Speed Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Robots.txt"
                                  />
                                </span>
                                Robots.txt
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Sitemap Creation"
                                  />
                                </span>
                                Sitemap Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Google Analytics & Search Console Setup"
                                  />
                                </span>
                                Google Analytics & Search Console Setup
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Blog Optimization"
                                  />
                                </span>
                                Blog Optimization – 5 Posts
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">

                                LOCAL SEO SETUP
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Google Map Integration on website"
                                  />
                                </span>
                                Google Map Integration on website
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Google My Business Page Setup and Optimization"
                                  />
                                </span>
                                Google My Business Page Setup and Optimization
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Local Citations – 5"
                                  />
                                </span>
                                Local Citations – 5
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Local Classifieds – 2"
                                  />
                                </span>
                                Local Classifieds – 2
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">

                                CONTENT MARKETING
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Blog Posting (500 – 700 words) – 1"
                                  />
                                </span>
                                Blog Posting (500 – 700 words) – 3
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Article Writing (500 – 700 words) – 1"
                                  />
                                </span>
                                Article Writing (500 – 700 words) – 3
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Onsite Blog (1000 – 1500 words) – 1"
                                  />
                                </span>
                                Onsite Blog (1000 – 1500 words) – 3
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">

                                EMAIL OUTREACH
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Guest Blogging"
                                  />
                                </span>
                                Guest Blogging
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Broken Backlink Building"
                                  />
                                </span>
                                Broken Backlink Building
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Resource Link Building"
                                  />
                                </span>
                                Resource Link Building
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Alerts and Mention"
                                  />
                                </span>
                                Alerts and Mention
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Link Roundups"
                                  />
                                </span>
                                Link Roundups
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Competitor Backlink Research"
                                  />
                                </span>
                                Competitor Backlink Research
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">


                                OFF PAGE SEO
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Social Sharing – 30(Total)"
                                  />
                                </span>
                                Social Sharing – 40(Total)
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Blog Social Sharing"
                                  />
                                </span>
                                Blog Social Sharing
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Slide Submissions – 1"
                                  />
                                </span>
                                Slide Submissions – 2
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Text Infographic Creation – 1"
                                  />
                                </span>
                                Text Infographic Creation – 2
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Video Creation"
                                  />
                                </span>
                                Video Creation
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Q & A – 1"
                                  />
                                </span>
                                Q & A – 3
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">


                                MONTHLY REPORTING
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Keyword Ranking Report"
                                  />
                                </span>
                                Keyword Ranking Report
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Google Analytics Report"
                                  />
                                </span>
                                Google Analytics Report
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Acquired Links Report"
                                  />
                                </span>
                                Acquired Links Report
                              </li>
                              <li className="d-flex gap-2 fw-bold fs-5">

                                CLIENT SUPPORT
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Email"
                                  />
                                </span>
                                Email
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Chat"
                                  />
                                </span>
                                Chat
                              </li>
                              <li className="d-flex gap-2">
                                <span>
                                  <Image
                                    className="appesect-ico"
                                    src={appesect}
                                    alt="Call"
                                  />
                                </span>
                                Call
                              </li>
                            </ul>
                            <div className="parent-container">
                              <button className="custom-button" data-ico="￫">
                              <a
                          href="https://wa.me/+918360116967?text=Hello%20there!"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-custom"
                        >
                          <span className="text-black">Call Us</span>
                        </a>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`tab-pane fade ${activeTab === "tab6" ? "show active" : ""
                    }`}
                >
                  <h4 className="text-xl font-bold text-white">
                    Customer Support
                  </h4>
                  <p className="text-white">
                    Details about Customer Support...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPricing;
