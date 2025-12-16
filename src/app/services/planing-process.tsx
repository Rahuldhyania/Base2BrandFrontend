'use client'

import React, { useState } from "react";
import Image from "next/image";
export default function Servicetwo() {

    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    return (
        <>
            <div className="py-md-5 py-3">
                <div className="container m-auto">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-white b2b-sub-heading-bold text-center text-uppercase mb-5" data-aos="fade-up">Our Planning &amp; Execution Process</h2>
                        </div>
                    </div>
                    <div className="row row-cols-lg-5 row-cols-1 planningSteps pt-3">
                        <div className="col">
                            <div className="hexWrap">
                                <div className="hexBg">
                                    <div className="hexagon"></div>
                                    <div className="hexagon hexagon-bottom"></div>
                                    <div className="hexagon-inner"></div>
                                </div>
                                <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/plan-step-1_fxhgg4.svg" alt="" />
                            </div>
                            <div className="process-content" data-aos="fade-in" data-aos-delay="500">
                                <div className="step-count"><span>01</span></div>
                                <h2 className="step-title">PLANNING</h2>
                                <p className="step-text">Define project goals, gather stakeholder input, analyze requirements, and identify constraints, risks, and dependencies.</p>
                            </div>
                        </div>
                        <div className="col">

                            <div className="process-content" data-aos="fade-in" data-aos-delay="500">
                                <div className="step-count"><span>02</span></div>
                                <h2 className="step-title">DESIGN</h2>
                                <p className="step-text">Develop a detailed project plan, allocate resources, establish communication channels, and create a risk management strategy.</p>
                            </div>
                            <div className="hexWrap">
                                <div className="hexBg">
                                    <div className="hexagon"></div>
                                    <div className="hexagon hexagon-bottom"></div>
                                    <div className="hexagon-inner"></div>
                                </div>
                                <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/plan-step-2_lppscq.png" alt="" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="hexWrap">
                                <div className="hexBg">
                                    <div className="hexagon"></div>
                                    <div className="hexagon hexagon-bottom"></div>
                                    <div className="hexagon-inner"></div>
                                </div>
                                <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/plan-step-3_gollhp.png" alt="" />
                            </div>
                            <div className="process-content" data-aos="fade-in" data-aos-delay="500">
                                <div className="step-count"><span>03</span></div>
                                <h2 className="step-title">DEVELOPMENT</h2>
                                <p className="step-text">Design architecture and UI, develop software, conduct testing, and iteratively refine the product based on feedback.</p>
                            </div>
                        </div>
                        <div className="col">
                            <div className="process-content" data-aos="fade-in" data-aos-delay="500">
                                <div className="step-count"><span>04</span></div>
                                <h2 className="step-title">LAUNCH</h2>
                                <p className="step-text">Execute the project plan, deploy the solution, provide training, and monitor performance during implementation</p>
                            </div>
                            <div className="hexWrap">
                                <div className="hexBg">
                                    <div className="hexagon"></div>
                                    <div className="hexagon hexagon-bottom"></div>
                                    <div className="hexagon-inner"></div>
                                </div>
                                <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/plan-step-4_ysaueb.png" alt="" />
                            </div>

                        </div>
                        <div className="col">
                            <div className="hexWrap">
                                <div className="hexBg">
                                    <div className="hexagon"></div>
                                    <div className="hexagon hexagon-bottom"></div>
                                    <div className="hexagon-inner"></div>
                                </div>
                                <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/plan-step-5_m0doxh.png" alt="" />
                            </div>
                            <div className="process-content" data-aos="fade-in" data-aos-delay="500">
                                <div className="step-count"><span>05</span></div>
                                <h2 className="step-title">MAINTENANCE</h2>
                                <p className="step-text">Conduct post-implementation review, gather feedback, establish a maintenance plan, and continuously monitor and update the system.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
