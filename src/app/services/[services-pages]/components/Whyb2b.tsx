"use client";
import Image from "next/image";
import React, { useState } from "react";
import Request from "../../../request-form";
type whyb2b = {
  whytitle: string;
  whydescription1?: string;
  whydescription2?: string;
  whydescription?: string;
  whybanner?:string;
};
const Whyb2b = ({
  whytitle,
  whydescription1,
  whydescription2,
  whydescription,
  whybanner
}: whyb2b) => {
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
    <div className="bg_blue_right">
      <div className="cus_container max_w_1920 py-5">
        <div className="row">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <Image
              src={whybanner}
              alt=""
              width={1000}
              height={500}
              className="whyb2b_banner"
            />
          </div>
          <div className="col-12 col-lg-6 m-auto mt-4 mt-md-0">
            <div className="text-right text-lg-end  ">
              <h2
                className="hire_banner_subheading text-white"
                dangerouslySetInnerHTML={{ __html: whytitle }}
              />

              {whydescription
                ? <p
                    className="b2b-title-text pt-3"
                    dangerouslySetInnerHTML={{ __html: whydescription }}
                  />
                : <div>
                    <p className="b2b-title-text pt-3">
                      {whydescription1}
                    </p>
                    <p className="b2b-title-text pt-3">
                      {whydescription2}
                    </p>
                  </div>}

              <div className="mt-4">
                <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal}>
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
        {showModal &&
        <Request
          onCloseModal={toggleModal}
        />
      }
      </div>
    </div>
  );
};
export default Whyb2b;
