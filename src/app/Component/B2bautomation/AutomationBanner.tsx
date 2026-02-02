"use client";
import React, { useState } from "react";
import RequestForm from "@/app/request-form";

const AutomationBanner = ({ title, description, topbar_title }) => {
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
    <div className="px-md-3 b2b-black-bg">
      <div
        className="automatoin-bg position-relative"
        style={{
          backgroundImage: "url(/automation/shopify-banner.webp)"
        }}
      >
        <div className="bg-overlay-automation" />
        <div className="banner_top_bar">
          <svg
            width="16"
            height="16"
            fill="none"
            stroke="#0fc90f"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h5 className="m-0">
            {topbar_title}
          </h5>
        </div>
        <h1
          className="automatoin_haeding text-center text-white"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="b2b-title-text text-center text-white automatoin_haeding_description pt-2">
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

export default AutomationBanner;
