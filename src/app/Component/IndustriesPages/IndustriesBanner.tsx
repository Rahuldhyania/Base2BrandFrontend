"use client";
import RequestForm from "@/app/request-form";
import React, { useState } from "react";

const IndustriesBanner = () => {
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
    <div className="px-3 py-3 b2b-black-bg">
      <div
        className="indusries-bg position-relative"
        style={{
          backgroundImage: `url(/newindusries/demi-bg.webp)`
        }}
      >
        <div className="bg-overlay" />

        <h1 className="indusries_haeding text-center text-white">
          E-commerce Business with Base2brand
        </h1>
        <p className="b2b-title-text text-center text-white indusries_haeding_description pt-2">
          In Shopify development services, we don't just meet expectations; we
          exceed them. With a proven track record of success, we outperform in
          every aspect of Shopify development.
        </p>
        <div className="pt-5 d-flex justify-content-center">
          <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal}>
            Discover Our Solutions
          </button>
        </div>
      </div>
      {showModal && <RequestForm onCloseModal={toggleModal} />}
    </div>
  );
};

export default IndustriesBanner;
