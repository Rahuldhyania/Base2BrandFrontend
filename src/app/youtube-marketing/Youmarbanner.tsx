"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";

export default function Youmarbanner() {
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
      className="bg_home pt-md-5 pb-md-5 seo_home_banner"
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
              <span className="devops_color">YouTube Marketing Services</span> to Boost <br />
              Your Channel&apos;s <span className="devops_color">Success</span>

            </h1>
          </div>
          <div className="text-center pt-3">
            <p className="text-white">
              At our YouTube marketing agency, we specialize in elevating your YouTube presence. From <br /> content strategy to ad campaigns, we deliver measurable results that grow your <br /> audience and engagement.
            </p>
          </div>
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
