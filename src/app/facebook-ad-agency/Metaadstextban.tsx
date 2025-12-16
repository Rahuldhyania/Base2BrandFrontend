"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";
import Image from "next/image";

export default function Metaadstextban() {
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
    <div className="pt-5 pb-5"
      style={{ background: "#0c0c0c" }}
    >
      <div className="container">
        <div className="row">
          <div className="tech_img_text_con row">
            <div className="col-lg-6 ads_text" data-aos="fade-up">
              <div className="text-start">
                <h2 className="b2b-partners-heading">
                  Partner with a Leading Facebook<br />  Ads Company
                </h2>
                <p className="m-0 text-white">
                  As a trusted fb ads company, Base2Brand delivers results-oriented Facebook marketing services. From lead generation to conversion-focused strategies, our expertise in digital marketing Facebook ads guarantees your success.
                </p>
                <div className="mt-4">
                  <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal}>
                    Request A Quote
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 ads_banner" data-aos="fade-up">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/colleagues-holding-sign-from-famous-social-networks_e9wsxd.jpg"
                alt=""
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>
        {showModal && <Request onCloseModal={toggleModal} />}
      </div>
    </div>
  );
}
