"use client";
import RequestForm from "@/app/request-form";
import React, { useState } from "react";

const IndustriesBanner = ({ title, description }) => {
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
    <div className="px-md-3 py-md-3 b2b-black-bg">
      <div
        className="indusries-bg position-relative"
        style={{
          backgroundImage: `url(/newindusries/demi-bg.webp)`
        }}
      >
        <div className="bg-overlay" />
        <h1
          className="indusries_haeding text-center text-white"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="b2b-title-text text-center text-white indusries_haeding_description pt-2">
          {description}
        </p>
        <div className="pt-3 pt-xxl-5 d-flex justify-content-center">
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
