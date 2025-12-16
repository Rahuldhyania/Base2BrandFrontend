"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";

export default function Emailmar() {
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
    <div
      className="bg_home pt-md-5 pb-md-5"
      style={{
        backgroundImage:
          'url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh_2_tfauei_1.svg")',
        backgroundRepeat: "no-repeat",
        width: "100%",
        position: "relative"
      }}
    >
      <div className="service-banner pt-5 pb-5">
        <div className="container pt-5 pb-5">
          <div className="text-center">
            <h1 className="b2b-sub-heading-bold m-0">
              Professional{" "}
              <span className="devops_color">Email Marketing </span> Services in <br />
              India to
              <span className="devops_color"> Boost Engagement</span> and{" "}
              <span className="devops_color">Conversions</span>
            </h1>
          </div>
          <div className="text-center pt-3">
            <p className="text-white">
              Email marketing remains one of the most effective ways to connect with your audience and drive results. As a leading email <br /> marketing company in India, we provide comprehensive services tailored to help your business succeed. Our strategies focus <br /> on maximizing ROI while ensuring your email campaigns deliver measurable success.
            </p>
          </div>
          {/* <div className="seo_banner_client pt-3">
            <div className="seo_star">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480256_2_yvlijh.png"
                alt=""
                width={1000}
                height={500}
              />
            </div>
            <p className="b2b-text-sm text-white">
              Trusted by Business <br /> Owners Nationwide
            </p>
          </div> */}
          <div className="pt-3 d-flex justify-content-center">
            <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal}>
              Request A Quote
            </button>
          </div>
        </div>
        <div className="seo_banner_gradient" />

      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  );
}
