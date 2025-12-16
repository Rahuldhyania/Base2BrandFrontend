"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";
type seofooter_bar = {
  seo_footer_bar_title: string;
  seo_footer_bar_title_para: string;
  seo_footer_bar_btn: string;
};
const Seofooterbar = ({
  seo_footer_bar_title,
  seo_footer_bar_title_para,
  seo_footer_bar_btn
}: seofooter_bar) => {
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
    <div
      className="pt-5 pb-5"
      style={{
        background:
          " linear-gradient(84deg, rgb(34, 24, 83) 5%, rgb(0, 0, 0) 91%)",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container text-center">
        <div className="row justify-content-center">
          <h2 className="b2b-partners-heading" data-aos="fade-up">
            {seo_footer_bar_title}
          </h2>
          <p className="col-lg-9 text-white" data-aos="fade-up">
            {seo_footer_bar_title_para}
          </p>
          <div className="pt-4" data-aos="fade-up">
            <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal}>
              {seo_footer_bar_btn}
            </button>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  );
};

export default Seofooterbar;
