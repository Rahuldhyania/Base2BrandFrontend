"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";

export default function Newblogbanner() {
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
              Unlocking Innovation <br />
              <span className="banner_text_color">
                Stories, Strategies & Success
              </span>
            </h1>
          </div>
          <div className="text-center pt-3">
            <p className="text-white">
              Unlocking innovation requires bold ideas, smart strategies, and a
              drive for success. Explore inspiring stories, <br /> proven techniques,
              and groundbreaking insights that fuel creativity, empower change,
              and transform challenges <br /> into opportunities for growth, progress,
              and impact.
            </p>
          </div>
          <div className=" d-flex justify-content-center">
            <p className="text-white blog_banner_bold text-center">
              Stay tuned for valuable advice to elevate your business. Happy reading!
            </p>
          </div>
        </div>
        <div className="blog_banner_gradient" />
      </div>
    </div>
  );
}
