"use client";
import { Player } from "@lottiefiles/react-lottie-player";
import RequestForm from "@/app/request-form";
import Image from "next/image";
import React, { useState } from "react";

const HaveADream = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function() {
      const ModalBody = document.querySelector(".request-form");
      if (ModalBody) {
        ModalBody.classList.add("transformAnim");
      }
    }, 200);
  };
  return (
    <div className="b2b-black-bg">
      <div className="xxl_container py-3 py-md-5">
        <div className="row align-items-center row-reverse-mb">
          <div
            className="col-lg-6 col-md-12 col-12 text-white order-md-2 order-sm-2 order-xs-2 order-2 mt-md-5"
            data-aos="fade-up"
          >
            <h2 className="b2b-main-heading  text-capitalize">
              Have A Dream ? <br /> We Have A Team!
            </h2>
            <p className="b2b-sub-text">
              At our place, we have a stellar team of experts dedicated to
              bringing your vision to life. With extensive experience and a deep
              understanding of diverse industries, our team is equipped to
              handle any challenge that comes our way.
            </p>
            <p className="b2b-sub-text">
              Throughout the project, we prioritize clear communication and
              transparency, guiding you through every step and addressing any
              doubts or questions that may arise. Despite our high-quality
              services, we remain committed to offering competitive pricing to
              ensure accessibility for businesses of all sizes.
            </p>
            <p className="b2b-sub-text">
              Having successfully completed hundreds of projects, we bring a
              wealth of knowledge and expertise to each new endeavor,
              guaranteeing exceptional results that exceed expectations.
            </p>
          </div>
          <div
            className="col-lg-6 col-md-12 col-12 text-center mb-5 mb-md-0 order-md-3 order-sm-3 order-xs-3 order-3"
            data-aos="fade-up"
          >
            <Player
              src="/json/home-page/lottie animation.json"
              loop
              autoplay
              className="dream_img"
            />
          </div>
          <div
            className="col-lg-8 col-md-12 col-12 mb-md-5 mb-md-0 order-lg-3 order-md-1 order-sm-1 order-xs-1 order-1"
            data-aos="fade-up"
          >
            <h3 className="b2b-sub-text b2b-lightBlue-text">
              Our client list includes:
            </h3>
            <div className="d-flex justify-content-between flex-wrap">
              <div className="check_list b2b-text">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/check_nh4xni_1.svg"
                  width="14"
                  height="11"
                  style={{ maxWidth: "14px" }}
                  className=" check_icon me-2"
                  alt=""
                />{" "}
                Startups due to our cost-effectiveness
              </div>
              <div className="check_list b2b-text">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/check_nh4xni_1.svg"
                  width="14"
                  height="11"
                  style={{ maxWidth: "14px" }}
                  className=" check_icon me-2"
                  alt=""
                />{" "}
                Corporates due to our reliability and scalability
              </div>
              <div className="check_list b2b-text">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/check_nh4xni_1.svg"
                  width="14"
                  height="11"
                  style={{ maxWidth: "14px" }}
                  className=" check_icon me-2"
                  alt=""
                />{" "}
                Industries due to our expertise and versatility
              </div>
            </div>
            <button
              className="b2b-btn b2b-btn-sm mt-4 m-0"
              onClick={toggleModal}
            >
              {" "}Let’s Discuss Your Project
            </button>
          </div>
        </div>
        {showModal && <RequestForm onCloseModal={toggleModal} />}
      </div>
    </div>
  );
};

export default HaveADream;
