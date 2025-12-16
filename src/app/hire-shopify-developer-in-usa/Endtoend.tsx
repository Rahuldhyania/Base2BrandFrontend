"use client";
import React, { useState } from "react";
import Request from "../request-form";
import Image from "next/image";
const Endtoend = ({ title, description1, description2 }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(() => {
      const ModalBody = document.querySelector(".request-form");
      if (ModalBody) {
        ModalBody.classList.add("transformAnim");
      }
    }, 200);
  };
  return (
    <div className="bg_blue_right">
      <div className="cus_container max_w_1920 pt-4 lg:pt-auto py-5">
        <div className="text-center">
          <h2
            className="hire_banner_subheading text-white"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </div>
        <div className="row pt-3 lg:pt-5">
          <div className="col-12 col-lg-6">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopify_xporun.jpg"
              alt="End to End Shopify Development"
              width={1000}
              height={500}
              className="endtoend_image"
            />
          </div>
          <div className="col-12 col-lg-6 mt-4 lg:mt-0 m-auto">
            <div className="m-auto">
              <p className="b2b-title-text text-white">
                {description1}
              </p>
              <p className="b2b-title-text text-white pt-3">
                {description2}
              </p>
              <div className="mt-4">
                <button
                  onClick={toggleModal}
                  className="b2b-btn b2b-btn-sm m-0"
                >
                  Request a Quote
                </button>
              </div>
              {showModal && <Request onCloseModal={toggleModal} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Endtoend;
