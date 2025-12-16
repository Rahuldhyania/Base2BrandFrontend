"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";
import Image from "next/image";

export default function Crobanner() {
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
    <div className="bg_home pt-md-5 pb-md-5"
      style={{
        backgroundImage:
          'url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh_2_tfauei_1.svg")',
        backgroundRepeat: "no-repeat",
        width: "100%",
        position: "relative"
      }}>
      <div
        className="service-banner pt-5 pb-5"

      >
        <div className="container">
          <div className="text-center">
            <h1 className="b2b-sub-heading-bold m-0">
              <span style={{ color: "#F37335" }}>Conversion Rate Optimization</span> Services <br />
              That Maximize <span style={{ color: "#F37335" }}>Engagement & Conversions</span>
            </h1>
          </div>
          <div className="text-center pt-3">
            <p className="text-white">
              Conversion Rate Optimization (CRO) is the foundation of driving meaningful results for your online presence. <br /> Our professional CRO services are  designed to turn website visitors into loyal customers, maximizing your ROI <br /> and fueling your business growth.
            </p>
          </div>
          <div className="main_cro pt-2 pb-2">
            <div className="cro_con_main">
              <div className="cro_banner_con card_right_border">
                <h2 className="b2b-partners-heading m-0">
                  $200M+
                </h2>
                <p className="banner_card_p cro_banner_con_p m-0">
                  Extra revenue for <br /> ecommerce brands
                </p>
              </div>
              <div className="cro_banner_con card_right_border">
                <h2 className="b2b-partners-heading m-0">
                  8X
                </h2>
                <p className="banner_card_p cro_banner_con_p m-0">
                  Increase in Average <br /> order value
                </p>
              </div>
              <div className="cro_banner_con ">
                <h2 className="b2b-partners-heading m-0">
                  90 Days
                </h2>
                <p className="banner_card_p cro_banner_con_p m-0">
                  Proven results within <br /> just 90 days
                </p>
              </div>
            </div>
          </div>
          <div className="seo_banner_client pt-3">
            {/* <div className="rating_seo"> */}
            <div className="seo_star">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480256_2_yvlijh.png"
                alt=""
                width={1000}
                height={500}
              />
            </div>
            <p className="b2b-text-sm text-white m-0">
              1000+ Reviews
            </p>
            {/* </div> */}
          </div>
          <div className="pt-4 d-flex justify-content-center">
            <button
              className="b2b-btn b2b-btn-sm m-0"
              onClick={toggleModal}
            >
              Let’s Fire Up Your Business!
            </button>
          </div>
        </div>
        <div className="seo_banner_gradient" />
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  );
}
