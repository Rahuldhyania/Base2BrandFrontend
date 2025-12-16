import React from "react";
import seo from "../../../public/img/digitai-markating-packags/seo.svg";
import Image from "next/image";

const SearchEngineOptimization = () => {
  return (
    <>
      <section
        className="bg-image b2b-brands-wrap  "
        style={{
          backgroundImage:
            "url('./img/digitai-markating-packags/seobanner.png')",
          backgroundSize: "cover",
          backgroundPosition: "98% 50%",
          width: "100%",
          height: "100%",
        }}
      >
        <div className="perfectplane">
          <div className="b2b-container-lg">
            <div className=" d-flex  justify-content-center gap-3 align-items-center flex-lg-row flex-column ">
              <h3 className="gk-heading-bold text-center  text-cente  m-0 ">
                Search Engine Optimization
              </h3>
              <span>
                <Image className="m-0 icon-image" src={seo} alt="" />
              </span>
            </div>
          </div>

          <div className="b2b-container-lg">
            <div className="cardi-main     pt-lg-5 pt-4   overflow-hidden px-lg-0 ">
              <div className=" p-4 gk-rounded card-price ">
                <div className="border-secondary">
                  <p className="gk-b2b-bold text-white">3 Months Plan</p>
                  <p className="b2b-sub-text"></p>
                  <h2 className="fontlinear ">₹ 149,000</h2>
                  <div className="list d-flex  flex-column gap-3 pt-3">
                    <li>Website Audit </li>
                    <li>10 Keyword Analysis</li>
                    <li>On Page Optimization</li>
                    <li>Local SEO Optimization</li>
                    <li className="fw-bold fs-5">Content Marketing</li>
                    <li className="fw-bold fs-5">Email Outreach</li>
                    <li className="fw-bold fs-5">Off Page Optimization</li>
                    <li className="fw-bold fs-5">200 Link Creations</li>
                    <li>Monthly Reporting</li>
                  </div>
                  <div className=" card-btn mt-4 "></div>
                  <h5 className="text-white mt-lg-3 mt-2 pt-lg-4 pt-3 gk-border-top-2px  gk-text-bold">
                    TALK TO US
                  </h5>
                  <h5 className="text-white mt-lg-4 mt-3 gk-text-bold">
                    <a
                      href="tel:+919872487850"
                      target="_blank"
                      className="text-white"
                    >
                      +91-9872-487-850
                    </a>
                  </h5>
                </div>
              </div>
              <div className=" p-4 gk-rounded card-price ">
                <div className="border-secondary">
                  <p className="gk-b2b-bold text-white">6 Months Plan</p>
                  <p className="b2b-sub-text">
                    Advanced E-Commerce Website + Android App
                  </p>
                  <h2 className="fontlinear ">₹ 249,000</h2>
                  <div className="list d-flex  flex-column gap-3 pt-3">
                    <li>Shopify Website Creation and Setup</li>
                    <li className="fw-bold fs-5">Android Hybrid App</li>
                    <li className="fw-bold fs-5">Google Play Publishing</li>
                    <li>Referral Integration</li>
                    <li className="fw-bold fs-5">Abandoned Checkout</li>
                    <li>Upto 200 Products Upload By Our Team</li>
                    <li>SEO Ready Website</li>
                    <li>SSL Certificate</li>
                  </div>
                  <div className=" card-btn mt-4 "></div>
                  <h5 className="text-white mt-lg-3 mt-2 pt-lg-4 pt-3 gk-border-top-2px  gk-text-bold">
                    TALK TO US
                  </h5>
                  <h5 className="text-white mt-lg-4 mt-3 gk-text-bold">
                    <a
                      href="tel:+919872487850"
                      target="_blank"
                      className="text-white"
                    >
                      +91-9872-487-850
                    </a>
                  </h5>
                </div>
              </div>
              <div className=" p-4 gk-rounded card-price ">
                <div className="border-secondary">
                  <p className="gk-b2b-bold text-white">12 Months Plan</p>
                  <p className="b2b-sub-text">
                    Advanced E-Commerce Website + Android App + iOS Hybrid App
                  </p>
                  <h2 className="fontlinear ">₹ 299,000</h2>
                  <div className="list d-flex  flex-column gap-3 pt-3">
                    <li>Shopify Website Creation and Setup</li>
                    <li className="fw-bold fs-5">Android Hybrid App</li>
                    <li className="fw-bold fs-5">Google Play Publishing</li>
                    <li>iOS Web App</li>
                    <li>Referral Integration</li>
                    <li>Abandoned Checkout</li>
                    <li>Upto 200 Products Upload By Our Team</li>
                    <li className="fw-bold fs-5">SEO Ready Website</li>
                  </div>
                  <div className=" card-btn mt-4 "></div>

                  <h5 className="text-white mt-lg-3 mt-2 pt-lg-4 pt-3 gk-border-top-2px  gk-text-bold">
                    TALK TO US
                  </h5>
                  <h5 className="text-white mt-lg-4 mt-3 gk-text-bold">
                    <a
                      href="tel:+919872487850"
                      target="_blank"
                      className="text-white"
                    >
                      +91-9872-487-850
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchEngineOptimization;
