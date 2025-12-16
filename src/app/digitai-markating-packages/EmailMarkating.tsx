import React from "react";
import EmailMarketing from "../../../public/img/digitai-markating-packags/EmailMarketing.svg";
import Image from "next/image";



const EmailMarkating = () => {
    return (
        <>
            <section
                className="bg-image b2b-brands-wrap  "
                style={{
                    backgroundImage:
                        "url('./img/digitai-markating-packags/emailback.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "3% 11%",
                    width: "100%",
                    height: "100%",
                }}
            >
                <div className="perfectplane">


                    <div className=" d-flex  justify-content-center gap-3 align-items-center ">
                        <h3 className="gk-heading-bold text-center  text-cente  ">
                           
                        Email Marketing

                        </h3>
                        <span>
                            <Image className="mb-2 icon-image" src={EmailMarketing} alt="" />
                        </span>
                    </div>

                    <div className="b2b-container-lg">
                        <div className="cardi-main     pt-lg-5 pt-4   overflow-hidden px-lg-0 ">
                            <div className=" p-4 gk-rounded card-price ">
                                <div className="border-secondary">
                                    <p className="gk-b2b-bold text-white">
                                        3 Months Plan
                                    </p>
                                    <p className="b2b-sub-text"></p>
                                    <h2 className="fontlinear ">₹ 149,000</h2>
                                    <div className="list d-flex  flex-column gap-3 pt-3">
                                        <li className="fw-bold fs-5">2 Campaigns/Month</li>
                                        <li className="fw-bold fs-5">Template Design</li>
                                        <li>Performance Tracking</li>
                                        
                                    </div>
                                    <div className="card-btn"></div>
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
                                    <p className="gk-b2b-bold text-white">
                                        6 Months Plan
                                    </p>
                                    <p className="b2b-sub-text">
                                        Advanced E-Commerce Website + Android App
                                    </p>
                                    <h2 className="fontlinear ">₹ 249,000</h2>
                                    <div className="list d-flex  flex-column gap-3 pt-3">
                                        <li className="fw-bold fs-5">4 Campaigns/Month</li>
                                        <li className="fw-bold fs-5">Template Design</li>
                                        <li className="fw-bold fs-5">Performance Tracking</li>
                                        <li>Segmentation & Personalization</li>
                                        
                                    </div>
                                    <div className="card-btn"></div>
                                    
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
                                    <p className="gk-b2b-bold text-white">
                                        12 Months Plan
                                    </p>
                                    <p className="b2b-sub-text">
                                        Advanced E-Commerce Website + Android App + iOS Hybrid App
                                    </p>
                                    <h2 className="fontlinear ">₹ 299,000</h2>
                                    <div className="list d-flex  flex-column gap-3 pt-3">
                                        <li>6 Campaigns/Month</li>
                                        <li className="fw-bold fs-5">Template Design</li>
                                        <li className="fw-bold fs-5">Performance Tracking</li>
                                        <li className="fw-bold fs-5">Segmentation & Personalization</li>
                                        <li>Automation</li>
                                        
                                    </div>
                                    <div className="card-btn"></div>
                                    
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

export default EmailMarkating;
