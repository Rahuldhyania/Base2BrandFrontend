"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";
import { Player } from "@lottiefiles/react-lottie-player";
import CountUp from "react-countup";
import Image from "next/image";
function devbanner() {
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
      <div
        className="bg_home "
        style={{
          backgroundImage:
            'url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh.svg")',
          backgroundRepeat: "no-repeat",
          width: "100%"
        }}
      >
        <div className="service-banner ">
          <div className="container propsbanner pt-5 pb-5">
            <div className="row align-items-center banner_part">
              <div className="col-md-7 props_image_banner">
                <div className="typewriterWrap d-flex align-items-center gap-2 callc_banner_animation">
                  <h1 className="b2b-sub-heading-bold">
                    <span className="devops_color">DevOps </span> Services
                  </h1>
                </div>
                <p className="text-white col-12 col-sm-12 col-md-12 m-auto">
                  Transforming software development with efficiency and
                  scalability, we streamline processes, enhance performance, and
                  drive innovation. Our solutions ensure seamless integration,
                  faster deployment, and future-ready applications, empowering
                  businesses to stay competitive in an ever-evolving digital
                  landscape.
                </p>
                <div className="mt-4">
                  <button
                    onClick={toggleModal}
                    className="b2b-btn b2b-btn-sm m-0"
                  >
                    Book a Devops Consultation Call
                  </button>
                </div>
              </div>
              <div className="col-md-5  d-flex justify-content-center props_text_banner">
                <Player
                  src="/json/about-us/devopsjson.json"
                  loop
                  autoplay
                  className="animated-imgs animated-banner-img"
                />
                {/* <div className="dev_right_banner">
                <div className="banner_number_container">
                  <div>
                    <h3 className="b2b-sub-heading-bold text-center">10+</h3>
                    <p className="b2b-text-sm devops_color">
                      Years of Experience
                    </p>
                  </div>
                  <div>
                    <h3 className="b2b-sub-heading-bold text-center">99.99%</h3>
                    <p className="b2b-text-sm devops_color">Uptime Achieved</p>
                  </div>
                </div>
                <div className="banner_number_container">
                  <div>
                    <h3 className="b2b-sub-heading-bold text-center">500+</h3>
                    <p className="b2b-text-sm devops_color">
                      Successful Projects
                    </p>
                  </div>
                  <div>
                    <h3 className="b2b-sub-heading-bold text-center">60%</h3>
                    <p className="b2b-text-sm devops_color text-center">
                      Faster Deployment Cycles
                    </p>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>

          {showModal && <Request onCloseModal={toggleModal} />}
        </div>
      </div>
      <div
        className="pb-5 pt-3"
        style={{
          background: "linear-gradient(84deg, rgb(0, 0, 0) 5%, rgb(34, 24, 83) 91%)"
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-7 col-md-7 col-sm-12 header-columns p-5 p-sm-3 m-auto">
              <h2
                className="text-center b2b-sub-heading-bold ttext-capitalize"
                data-aos="fade-up"
              >
                Our Achievements &amp; Milestones
              </h2>
              <p className="b2b-text text-center " data-aos="fade-up">
                Explore our company&apos;s remarkable achievements, milestones,
                and records that showcase our success and expertise
              </p>
            </div>
            <div className="b2b-container-lg" data-aos="fade-up">
              <div className="row progress-count d-flex flex-wrap justify-content-between devops_count_con">
                <div className="count-col">
                  <div className="d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap devops_count_inner ">
                    <div>
                      <Image
                        alt=""
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon1_wa4fzh_2.svg"
                        width="37"
                        height="50"
                      />
                    </div>
                    <div className="ms-2 w-100">
                      <h2 className="text-white text-start ps-2">
                        <CountUp end={10} enableScrollSpy />
                        +
                      </h2>
                      <p className="text-white text-start  ps-2">
                        Years of Experience
                      </p>
                    </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className="d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap devops_count_inner">
                    <div>
                      <Image
                        alt=""
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon2_xjnb1o_1.svg"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="ms-2 w-100">
                      <h2 className="text-white text-start ps-2">
                        <CountUp end={500} enableScrollSpy />+
                      </h2>
                      <p className="text-white text-start ps-2">
                        Successfull Project
                      </p>
                    </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className="d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap devops_count_inner">
                    <div>
                      <Image
                        alt=""
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon3_hsypru_1.svg"
                        width="40"
                        height="50"
                      />
                    </div>
                    <div className="ms-2 w-100">
                      <h2 className="text-white text-start ps-2">
                        <CountUp
                          end={99.9}
                          enableScrollSpy
                          decimals={1}
                          decimal="."
                        />%
                      </h2>
                      <p className="text-white text-start ps-2">
                        Uptime Achieved
                      </p>
                    </div>
                  </div>
                </div>

                <div className="count-col">
                  <div className="d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap devops_count_inner">
                    <div>
                      <Image
                        alt=""
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon4_ckyn0a_1.svg"
                        width="43"
                        height="50"
                      />
                    </div>
                    <div className="ms-2 w-100">
                      <h2 className="text-white text-start ps-2">
                        <CountUp end={60} enableScrollSpy />%
                      </h2>
                      <p className="text-white text-start  ps-2">
                        Faster Deployment
                      </p>
                    </div>
                  </div>
                </div>

                {/* <div className="count-col">
                  <div className="d-flex h-100 align-items-center justify-content-between b2b-achievements-wrap">
                    <div>
                      <Image
                        alt=""
                        src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/icon5_ucbth3_1.svg"
                        width="50"
                        height="50"
                      />
                    </div>
                    <div className="ms-2 w-100">
                      <h2 className="text-white text-start ps-2">
                        <CountUp end={100} enableScrollSpy />+
                      </h2>
                      <p className="text-white text-start  ps-2">
                        Website Designed
                      </p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default devbanner;
