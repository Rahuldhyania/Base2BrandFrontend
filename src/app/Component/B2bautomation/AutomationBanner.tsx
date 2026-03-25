"use client";
import React, { useState } from "react";
import RequestForm from "@/app/request-form";
import Image from "next/image";

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
    <div className="px-md-3 b2b-black-bg border-t-lite">
      <div className="row xxl_container">
        <div className="col-12 col-lg-7 d-flex align-items-center">
          <div className="automatoin-bg position-relative">
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
              className="automatoin_haeding text-start text-white mt-1 mt-md-4"
              dangerouslySetInnerHTML={{ __html: title }}
            />
            <p className="b2b-title-text text-start text-white automatoin_haeding_description pt-2">
              {description}
            </p>
            <div className="pt-3 pt-xxl-5 d-flex justify-content-start">
              <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal}>
                Discover Our Solutions
              </button>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5">
          <Image
            src={
              "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/3d-render-shopify-logo-extruded-transparent-green-resin-hovering-45-degree-angle-neon-gree_x102zo.webp"
            }
            alt=""
            width={1000}
            height={500}
            className=""
          />
        </div>
      </div>

      {showModal && <RequestForm onCloseModal={toggleModal} />}
    </div>
  );
};

export default AutomationBanner;
