"use client";
import Request from "../request-form";
import React, { useState } from "react";
import Image from "next/image";

type HirebannerProps = {
  bannerHeading?: string;
  bannerSubHeading?: string;
  bannerImage?: string;
  bannerList1?: string;
  bannerList2?: string;
  bannerList3?: string;
  bannerList4?: string;
  bannerList5?: string;
  bannertoptitle1: string;
  bannertoptitle2: string;
};

const Hirebanner = ({
  bannerHeading,
  bannerSubHeading,
  bannerImage,
  bannerList1,
  bannerList2,
  bannerList3,
  bannerList4,
  bannerList5,
  bannertoptitle1,
  bannertoptitle2
}: HirebannerProps) => {
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
    <div className="hire_banner_bg">
      <div className="cus_container max_w_1920 pt-3  pt-lg-5 py-5">
        <div className="row align-items-center">
          <div className="col-12 col-lg-7">
            <h3 className="hire_banner_heading2 text-black text-center text-md-start">
              {bannertoptitle1}
              <br />
              <span className="text_hire_primary">
                {bannertoptitle2}
              </span>
            </h3>
            {bannerHeading &&
              <h2
                className="hire_banner_heading text_hire_green text-center text-md-start"
                dangerouslySetInnerHTML={{ __html: bannerHeading }}
              />}
            <p className="b2b-text text-black fw-normal text-center text-md-start">
              {bannerSubHeading}
            </p>
            <ul>
              {[bannerList1, bannerList2, bannerList3, bannerList4, bannerList5]
                .filter(Boolean)
                .map((item, index) =>
                  <li
                    key={index}
                    className="b2b-text text-black hire_banner_list"
                  >
                    <span dangerouslySetInnerHTML={{ __html: item || "" }} />
                  </li>
                )}
            </ul>
            <div className="mt-4">
              <button onClick={toggleModal} className="b2b-btn b2b-btn-sm m-0">
                Request a Quote
              </button>
            </div>
          </div>

          <div className="col-12 col-lg-5 pt-4 lg:pt-0 hire_banner_image_outer">
            {bannerImage &&
              <Image
                src={bannerImage}
                alt={bannerHeading || "Hire Banner"}
                width={1000}
                height={500}
                className="hire_banner_image"
              />}
          </div>
        </div>

        {showModal && <Request onCloseModal={toggleModal} />}
      </div>
    </div>
  );
};

export default Hirebanner;
