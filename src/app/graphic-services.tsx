'use client'
import React, { useState } from "react";
import Request from "./request-form";

import Image from "next/image";


export default function Graphicservices() {

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
            <div className="w-100 b2b-gray-bg py-md-5 py-4 deliverableSteps" data-aos="fade-up">
                <div className="b2b-container-lg">
                    <div className="row">
                        <div className="col-lg-12">
                            <h3 className=" text-capitalize b2b-sub-heading" data-aos="fade-up" data-aos-delay="300">We Create Designs That </h3>
                            <h2 className="b2b-heading" data-aos="fade-up" data-aos-delay="300">Inspire and Engage!</h2>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-xl-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="deliverable-step-outer">
                                <div className="deliverable-step">
                                    <div className="deliverable-icon">
                                        <div className="deliverable-icon-bg">
                                            <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon1_gpykbc.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="deliverable-content">
                                        <h2 className="b2b-sub-heading">App Design</h2>
                                        <p className="b2b-text">User-friendly interfaces, intuitive navigation, engaging visuals, responsive layouts, seamless interactions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="deliverable-step-outer">
                                <div className="deliverable-step">
                                    <div className="deliverable-icon">
                                        <div className="deliverable-icon-bg">
                                            <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon2_m0xiwa.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="deliverable-content">
                                        <h2 className="b2b-sub-heading">Websites</h2>
                                        <p className="b2b-text">Responsive layouts, captivating visuals, easy navigation, clear messaging, optimized performance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="deliverable-step-outer">
                                <div className="deliverable-step">
                                    <div className="deliverable-icon">
                                        <div className="deliverable-icon-bg">
                                            <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon3_tzoqd3.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="deliverable-content">
                                        <h2 className="b2b-sub-heading">Design Systems</h2>
                                        <p className="b2b-text">Consistent design elements, modular components, reusable patterns, scalable frameworks, streamlined workflows.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="deliverable-step-outer">
                                <div className="deliverable-step">
                                    <div className="deliverable-icon">
                                        <div className="deliverable-icon-bg">
                                            <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon4_ayz6jp.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="deliverable-content">
                                        <h2 className="b2b-sub-heading">UI Kits</h2>
                                        <p className="b2b-text">Comprehensive design elements, customizable components, consistent styles, efficient resource for designers.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="deliverable-step-outer">
                                <div className="deliverable-step">
                                    <div className="deliverable-icon">
                                        <div className="deliverable-icon-bg">
                                            <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon5_w1mwr9.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="deliverable-content">
                                        <h2 className="b2b-sub-heading">Branding</h2>
                                        <p className="b2b-text">Memorable logos, cohesive visual identity, brand guidelines, impactful messaging, consistent across platforms</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="deliverable-step-outer">
                                <div className="deliverable-step">
                                    <div className="deliverable-icon">
                                        <div className="deliverable-icon-bg">
                                            <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon6_oytazd.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="deliverable-content">
                                        <h2 className="b2b-sub-heading">Prototypes</h2>
                                        <p className="b2b-text">Interactive mockups, user flows, clickable prototypes, usability testing, effective communication of design concepts.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="deliverable-step-outer">
                                <div className="deliverable-step">
                                    <div className="deliverable-icon">
                                        <div className="deliverable-icon-bg">
                                            <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon7_vj67e1.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="deliverable-content">
                                        <h2 className="b2b-sub-heading">Illustration</h2>
                                        <p className="b2b-text">Custom illustrations, visual storytelling, brand personality, enhancing user experience, conveying complex ideas.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 mb-4" data-aos="fade-up" data-aos-delay="300">
                            <div className="deliverable-step-outer">
                                <div className="deliverable-step">
                                    <div className="deliverable-icon">
                                        <div className="deliverable-icon-bg">
                                            <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon8_ecmbmb.svg" alt="" />
                                        </div>
                                    </div>
                                    <div className="deliverable-content">
                                        <h2 className="b2b-sub-heading">Animation</h2>
                                        <p className="b2b-text">Engaging motion graphics, enhancing user interactions, storytelling, adding depth to designs, capturing attention.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showModal &&
                <Request
                    onCloseModal={toggleModal}
                />
            }
        </>
    )
}