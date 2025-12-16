"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
export default function aibanner() {
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
      {/* Banner Section */}
      <div
        className="bg_home pt-5 pt-5 pt-sm-4 pb-sm-4"
        style={{
          backgroundImage:
            'url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/ai_servicesbannerimg.jpg")',
          backgroundRepeat: "round",
          width: "100%"
        }}
      >
        <div className="service-banner ">
          <div className="container">
            <div className="row flex-wrap align-items-center m-auto">
              <div className="col-md-7 props_image_banner text-start">
                <div className="typewriterWrap d-flex align-items-center justify-content-start gap-2 callc_banner_animation">
                  <h1 className="b2b-sub-heading-bold">
                    <span className="devops_color">
                      Artificial Intelligence{" "}
                    </span>Services
                  </h1>
                </div>
                <p className="text-white col-12 col-sm-12 col-md-12 m-auto pt-2">
                  Transforming Businesses with Intelligent Solutions –
                  leveraging AI, automation, and data-driven strategies to
                  enhance efficiency, streamline operations, and drive
                  sustainable growth. Empower your brand with innovative
                  technology for smarter decision-making and long-term success.
                </p>
                <div className="pt-4">
                  <button
                    onClick={toggleModal}
                    className="b2b-btn b2b-btn-sm m-0"
                  >
                    Get Free Consultation
                  </button>
                </div>
              </div>
              <div className="col-md-5 props_image_banner text-center">
                <Player
                  src="/json/about-us/aijson.json"
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* poster section */}
      <div
        className="pt-5 pb-5"
        style={{
          background:
            "linear-gradient(84deg, rgb(0, 0, 0) 5%, rgb(34, 24, 83) 91%)"
        }}
      >
        <div className="container">
          <div>
            <div className="lower_conainer">
              <div className="tool_card pt-4 pb-3" data-aos="fade-up">
                <div className="col-md-6">
                  <div className="con_banner_con justify-content-start">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/white-robot-hand.png
                      "
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div>
                    <div className="tool2_heading">
                      <h2 className="dev_choose_t1 text-white">
                        Unlock the Potential of AI with a Leading AI Service
                        Company
                      </h2>
                    </div>
                    <p className="text-white dev_choose_p col-12 col-sm-12 col-md-12 m-auto">
                      Companies that harness the power of AI gain a competitive
                      edge, with AI-driven solutions optimizing decision-making,
                      automating tasks, and predicting market trends. As a
                      trusted AI service company, we offer cutting-edge
                      artificial intelligence solutions tailored to meet your
                      business needs.
                    </p>
                    <div className="mt-4">
                      <button
                        className="b2b-btn b2b-btn-sm m-0"
                        onClick={toggleModal}
                      >
                        Get Free Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tool_card tool_card_center pt-4 pb-3" data-aos="fade-up">
                <div className="col-md-6">
                  <div className="con_banner_con justify-content-">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/roboatface.png"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </div>
                </div>
                <div className="col-md-6 d-flex align-items-center">
                  <div>
                    <div className="tool2_heading">
                      <h2 className="dev_choose_t1 text-white">
                        Why Businesses Need AI Solutions?
                      </h2>
                    </div>
                    <p className="text-white dev_choose_p col-12 col-sm-12 col-md-12 m-auto">
                      The impact of AI on businesses is undeniable. According to
                      a report, AI could contribute up to $15.7 trillion to the
                      global economy by 2030. Businesses leveraging AI solutions
                      for operations, marketing, and customer service experience
                      increased efficiency and productivity.
                      <br />
                      <br />
                      From AI-powered chatbots to predictive analytics and
                      automation, artificial intelligence solutions provide a
                      smarter way to manage operations and scale enterprises
                      effectively.
                    </p>
                    <div className="mt-4">
                      <button
                        className="b2b-btn b2b-btn-sm m-0"
                        onClick={toggleModal}
                      >
                        Get Free Consultation
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  );
}
