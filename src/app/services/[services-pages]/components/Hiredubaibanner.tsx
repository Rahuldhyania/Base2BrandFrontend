"use client";
import React, { useState } from "react";
import Request from "../../../request-form";
import Image from "next/image";
type dubaibanner = {
  pagetitle: string;
  pagedescription: string;
  bannerimage: string;
  right_banner?: string;
};
const Hiredubaibanner = ({
  pagetitle,
  pagedescription,
  bannerimage,
  right_banner
}: dubaibanner) => {
  console.log("right_banner", right_banner);

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
    <div className="bg_blue_right_none" style={{ background: "#111616" }}>
      <div className="max_w_1920 cus_container py-5">
        <div
          className="hire_dubai_banner position-relative"
          style={{
            backgroundImage: `url(${bannerimage})`
          }}
        > 
        <div className="position-absolute top-0">

        </div>
          <div className="py-4 px-3 px-md-5 row">
            <div className="col-lg-10 text-center m-auto" data-aos="zoom-in-up">
              <h1
                className="hire_dubai_banner_title w-lg-100 w-75 m-auto"
                dangerouslySetInnerHTML={{ __html: pagetitle }}
              />
              <p
                className="b2b-title-text text-white"
                dangerouslySetInnerHTML={{ __html: pagedescription }}
              />
              <div className="mt-4">
                <button
                  onClick={toggleModal}
                  className="b2b-btn b2b-btn-sm m-0"
                >
                  Request a Quote
                </button>
              </div>
            </div>
            {/* <div className="col-12 col-lg-6 d-flex justify-content-center">
              {
                right_banner ?
                <Image
                src={right_banner}
                alt="banner"
                width={1000}
                height={100}
                className="hire_dubai_right_banner sf"
                data-aos="zoom-in-up"
              />
              :
              null
              }
              
            </div> */}
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  );
};

export default Hiredubaibanner;
