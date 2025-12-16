import React from "react";
import Image from "next/image";
import appesect from "../../../public/img/logo/accept.svg";
import cross from "../../../public/img/logo/cancel.svg";

import Perfect from "../../../public/img/PerfectPlan.svg";
const PerfectPlan = () => {
  return (
    <>
      <section
        className="bg-image b2b-brands-wrap  "
        style={{
          backgroundImage: "url('./img/PerfectPlan.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="perfectplane b2b-container-lg">
          <div className="">
            <h2 className="gk-heading-bold text-center text-uppercase text-cente m-auto gk-width-lg">
              Choose Your Perfect Plan: Shopify Web Development by Base
              <span
                style={{
                  color: "#EF6B19",
                }}
              >
                2
              </span>
              Brand
            </h2>
          </div>
          <div className=" pt-lg-5 pt-3">
            <div className="row price-table">
              {/* Plan: Essentials */}
              <div className="col-md-6 col-lg-6 col-xl-4 ">
                <div className="card">
                  <div className="card-body-gk ">
                    <h5 className="text-center gk-b2b-bold text-white">
                      Shopify Website (only)
                      <br />
                      Package
                    </h5>
                    <hr />
                    <p className="card-text-gk  fontlinear text-center ">
                      99,999 INR / 1119 USD
                    </p>
                    <p className="card-desc text-white text-center">
                      E-Commerce Website
                    </p>
                    <ul className="list-unstyled features-list text-white">
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Shopify Website Creation and Setup
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image className="appesect-ico" src={cross} alt="" />
                        </span>
                        iOS Web App
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Upto 200 Products Upload By Our Team
                      </li>

                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image className="appesect-ico" src={cross} alt="" />
                        </span>
                        Conversion Tracking & Pixel Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        SEO Ready Website
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        SSL Certificate
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Responsive Website
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Content 2000 Words
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Social Media Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Google Analytics Integration
                      </li>

                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Google Maps Embed
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        WhatsApp Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        High Speed Optimization
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Search Console Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Contact Form Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Custom Favicon
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Website Policies Drafting
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Shopify Portal Training Session
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Payment Gateway Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Shipping Gateway Setup & Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Assistance In Shopify Apps Setup
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image className="appesect-ico" src={cross} alt="" />
                        </span>
                        Android Hybrid App
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image className="appesect-ico" src={cross} alt="" />
                        </span>
                        Google Play Publishing
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image className="appesect-ico" src={cross} alt="" />
                        </span>
                        Referral Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image className="appesect-ico" src={cross} alt="" />
                        </span>
                        Abandoned Checkout
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
                      Shopify Website + Android App Package
                    </h5>
                    <hr />
                    <p className="card-text-gk  fontlinear text-center ">
                      149,000 INR / 1999 USD
                    </p>
                    <p className="card-desc text-white text-center">
                      Advanced E-Commerce Website + Android App
                    </p>
                    <ul className="list-unstyled features-list text-white">
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Shopify Website Creation and Setup
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image className="appesect-ico" src={cross} alt="" />
                        </span>
                        iOS Web App
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Upto 200 Products Upload By Our Team
                      </li>

                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Conversion Tracking & Pixel Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        SEO Ready Website
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        SSL Certificate
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Responsive Website
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Content 3000 Words
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Social Media Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Google Analytics Integration
                      </li>

                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Google Maps Embed
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        WhatsApp Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        High Speed Optimization
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Search Console Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Contact Form Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Custom Favicon
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Website Policies Drafting
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Shopify Portal Training Session
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Payment Gateway Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Shipping Gateway Setup & Integration
                      </li>

                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Assistance In Shopify Apps Setup
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Android Hybrid App
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Google Play Publishing
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Referral Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Abandoned Checkout
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
                      Shopify Website + Android & iOS App Package
                    </h5>
                    <hr />
                    <p className="card-text-gk  fontlinear text-center ">
                      199,000 INR / 2699 USD
                    </p>
                    <p className="card-desc text-white text-center">
                      Advanced E-Commerce Website + Android App + iOS Hybrid App
                    </p>
                    <ul className="list-unstyled features-list text-white">
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Shopify Website Creation and Setup
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        iOS Web App
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Upto 200 Products Upload By Our Team
                      </li>

                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Conversion Tracking & Pixel Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        SEO Ready Website
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        SSL Certificate
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Responsive Website
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Content 3000 Words
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Social Media Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Google Analytics Integration
                      </li>

                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Google Maps Embed
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        WhatsApp Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        High Speed Optimization
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Search Console Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Contact Form Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Custom Favicon
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Website Policies Drafting
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Shopify Portal Training Session
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Payment Gateway Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Shipping Gateway Setup & Integration
                      </li>

                      <li className="d-flex gap-2">
                        <span>
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Assistance In Shopify Apps Setup
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Android Hybrid App
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Google Play Publishing
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Referral Integration
                      </li>
                      <li className="d-flex gap-2">
                        <span>
                          {/* Insert your icon image here */}
                          <Image
                            className="appesect-ico"
                            src={appesect}
                            alt=""
                          />
                        </span>
                        Abandoned Checkout
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
      </section>
    </>
  );
};

export default PerfectPlan;
