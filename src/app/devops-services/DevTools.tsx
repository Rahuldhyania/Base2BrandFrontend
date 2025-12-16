"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";
import Image from "next/image";
export default function DevTools() {
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
    <div>
      {/* 1st  */}
      <div
        style={{
          background: "linear-gradient(84deg, #000 5%, #221853 91%)"
        }}
      >
        <div className="container pt-5 pb-5">
          <div className="text-center">
            <h2 className="b2b-partners-heading" data-aos="fade-up">
              The Importance of DevOps Tools in Modern Development
            </h2>
            <p className="text-white m-0" data-aos="fade-up">
              The right DevOps tools are essential for enhancing collaboration,
              automating workflows, and improving the quality of <br />software
              releases. Our DevOps development company leverages
              industry-leading tools to ensure seamless integration <br />{" "}
              between development and operations.
            </p>
            <h2
              className="b2b-partners-heading pt-3" data-aos="fade-up"
              style={{ color: "#F37335" }}
            >
              How DevOps Tools Empower Teams?
            </h2>
          </div>
          <div className="toolcard pt-4">
            <div className="tcard" data-aos="fade-up">
              <div className="tcard_inner tcard_hover">
                <div className="tcard_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/handshak.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="tcard_text">
                  <span
                    className="dev_choose_t1  pt-3 pb-2"
                    style={{ color: "#FFB78C" }}
                  >
                    Enhanced Collaboration
                  </span>
                  <span className="dev_choose_p text-white">
                    The right DevOps tools streamline communication between
                    developers, testers, and operations teams, ensuring faster
                    issue resolution.
                  </span>
                </div>
              </div>
            </div>
            <div className="tcard" data-aos="fade-up">
              <div className="tcard_inner tcard_hover">
                <div className="tcard_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/greenplaane.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="tcard_text">
                  <span
                    className="dev_choose_t1 pt-3 pb-2"
                    style={{ color: "#00BF8F" }}
                  >
                    Accelerated Deployment
                  </span>
                  <span className="dev_choose_p text-white">
                    By automating deployment pipelines, businesses can push new
                    updates faster, reducing time-to-market.
                  </span>
                </div>
              </div>
            </div>
            <div className="tcard" data-aos="fade-up">
              <div className="tcard_inner tcard_hover">
                <div className="tcard_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/arrowup.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="tcard_text">
                  <span
                    className="dev_choose_t1  pt-3 pb-2"
                    style={{ color: "#F37335" }}
                  >
                    Improved Quality
                  </span>
                  <span className="dev_choose_p text-white">
                    DevOps tools provide real-time insights, enabling teams to
                    detect and resolve issues before they affect end-users.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd  */}
      <div
        style={{
          background: "#FFF2F2"
        }}
        className="pt-5 pb-5"
      >
        <div className="container">
          <div className="text-center ">
            <h2 className="b2b-partners-heading text-black" data-aos="fade-up">
              The Role of DevOps Tools in Continuous Monitoring
            </h2>
            <p className="text-black  m-0" data-aos="fade-up">
              A key aspect of DevOps support services is continuous monitoring.
              Proactive monitoring ensures optimal performance, <br /> security,
              and scalability of applications and infrastructure.
            </p>
          </div>
          <div className="lower_conainer">
            <div className="tool_card pt-4 pb-3" data-aos="fade-up">
              <div className="col-md-6">
                <div className="con_banner_con">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_24_ukdh1a.jpg"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <div className="tool2_heading">
                    <h2 className="dev_choose_t1">
                      Real-Time Visibility and Issue Detection
                    </h2>
                  </div>
                  <p className="text-black dev_choose_p col-12 col-sm-12 col-md-12 m-auto">
                    DevOps tools provide real-time visibility into your software
                    stack, allowing seamless monitoring of applications,
                    servers, networks, and databases. Advanced alerting
                    mechanisms ensure that potential issues are identified and
                    resolved before they impact users, reducing downtime and
                    improving user experience.
                  </p>
                  <div className="mt-4">
                    <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal} >
                      Consultation Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tool_card tool_card_center pt-4 pb-3" data-aos="fade-up">
              <div className="col-md-6">
                <div className="con_banner_con">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/innovation-technology-concept.jpg"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <div className="tool2_heading">
                    <h2 className="dev_choose_t1">
                      Performance Optimization and Scalability
                    </h2>
                  </div>
                  <p className="text-black dev_choose_p col-12 col-sm-12 col-md-12 m-auto">
                    By leveraging DevOps tools, our DevOps services and
                    solutions analyze system behavior, detect bottlenecks, and
                    optimize resource usage. With automatic scaling
                    capabilities, businesses can efficiently handle traffic
                    spikes, ensuring consistent performance even during peak
                    usage periods.
                  </p>
                  <div className="mt-4">
                    <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal} >
                      Consultation Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="tool_card pt-4 pb-3" data-aos="fade-up">
              <div className="col-md-6">
                <div className="con_banner_con">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/cloud-cyber-security.jpg"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center">
                <div>
                  <div className="tool2_heading">
                    <h2 className="dev_choose_t1">
                      Security and Compliance Management
                    </h2>
                  </div>
                  <p className="text-black dev_choose_p col-12 col-sm-12 col-md-12 m-auto">
                    Security remains a top priority for businesses relying on
                    DevOps methodologies. Our DevOps professional services
                    include real-time security monitoring, compliance
                    enforcement, and vulnerability detection. With advanced
                    DevOps tools, organizations can safeguard sensitive data and
                    ensure compliance with industry regulations.
                  </p>
                  <div className="mt-4">
                    <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal} >
                      Consultation Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {showModal && <Request onCloseModal={toggleModal} />}
          </div>
        </div>
      </div>
      {/* Why Partner with Our DevOps Development Company? */}
      <div
        style={{
          background: "linear-gradient(84deg, #000 5%, #221853 91%)"
        }}
        className="pt-5"
      >
        <div className="container">
          <div className="text-center ">
            <h2 className="b2b-partners-heading text-white" data-aos="fade-up">
              Why Partner with Our DevOps Development Company?
            </h2>
            <p className="text-white  m-0" data-aos="fade-up">
              As a leading DevOps solutions provider, we bring deep expertise
              and proven methodologies to help businesses transition to a fully{" "}
              <br /> automated and efficient DevOps ecosystem. When you choose
              our DevOps development services, you gain:
            </p>
          </div>
          <div className="dev_partner_bar pt-5 pb-5 row">
            <div className="col-lg-6 col-md-6 col-sm-12 dev_bar">
              <div className="dev_bar_inner dev_ai_hover_blue" data-aos="fade-up">
                <div className="dev_bar_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Planeup.jpg"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="dev_bar_text">
                  <h2 className="dev_choose_t1 text-white">Faster Software Releases</h2>
                  <p className="text-white dev_choose_p col-12 col-sm-12 col-md-12 m-auto">
                    Automate deployment processes, reducing manual interventions
                    and increasing release frequency
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 dev_bar">
              <div className="dev_bar_inner dev_ai_hover_blue" data-aos="fade-up">
                <div className="dev_bar_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/bookarrow.jpg"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="dev_bar_text">
                  <h2 className="dev_choose_t1 text-white">Scalability and Flexibility</h2>
                  <p className="text-white dev_choose_p col-12 col-sm-12 col-md-12 m-auto">
                    Ensure that your infrastructure scales effortlessly to meet
                    growing business demands
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 dev_bar">
              <div className="dev_bar_inner dev_ai_hover_blue" data-aos="fade-up">
                <div className="dev_bar_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/settingclock.jpg"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="dev_bar_text">
                  <h2 className="dev_choose_t1 text-white">Cost Efficiency</h2>
                  <p className="text-white dev_choose_p col-12 col-sm-12 col-md-12 m-auto">
                    Reduce operational costs by eliminating inefficiencies and
                    optimizing resource utilization.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 dev_bar">
              <div className="dev_bar_inner dev_ai_hover_blue" data-aos="fade-up">
                <div className="dev_bar_img">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/lock.jpg"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="dev_bar_text">
                  <h2 className="dev_choose_t1 text-white">Robust Security Measures</h2>
                  <p className="text-white dev_choose_p col-12 col-sm-12 col-md-12 m-auto">
                    Strengthen security with proactive monitoring, compliance
                    tracking, and automated threat detection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
