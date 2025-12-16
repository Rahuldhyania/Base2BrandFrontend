"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";
import Image from "next/image";
type Consultation = {
  banner: string;
  heading: string;
  para: string;
  btnname: string;
};

const Consultation = ({ banner, heading, para, btnname }: Consultation) => {
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
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="con_banner_con" data-aos="fade-up">
              <Image src={banner} alt="" width={1000} height={500} />
            </div>
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <div data-aos="fade-up">
              <div className="typewriterWrap d-flex align-items-center gap-2 callc_banner_animation">
                <h2 className="b2b-partners-heading">
                  {heading}
                </h2>
              </div>
              <p className="text-white col-12 col-sm-12 col-md-12 m-auto">
                {para}
              </p>
              <div className="mt-4">
                <button onClick={toggleModal} className="b2b-btn b2b-btn-sm m-0">
                  {btnname}
                </button>
              </div>
            </div>
          </div>
        </div>
        {showModal && <Request onCloseModal={toggleModal} />}
      </div>
    </div>
  );
};
export default Consultation;
