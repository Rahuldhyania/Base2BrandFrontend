"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";
import Image from "next/image";
export default function UlUXbanner() {
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
    <div className="pt-5 pb-5 ui_main_banner ui_bg">
      <div className="cus_container pt-5 pb-5">
        <div className="main_ui_banner">
          <div className="first_text text-center">
            <h2 className="ui_cus_heading ui_border_text">
              Engage Your Audience with
            </h2>
          </div>
          <div className="img_text">
            <div className="banner_left_img">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/vhjk_1_bpjjgz.png"
                alt=""
                width={1000}
                height={500}
              />
            </div>
            <div className="text_con text-center">
              <h2 className="ui_cus_heading text-white pt-2">
                Stunning <span className="ui_skyblue"> UI/UX & </span>
                <span className="heading_image">
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480802_obd6db.webp"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </span>
              </h2>
              <h2 className="pt-2 pt-lg-4">
                <span className="vdo_edit_btn">
                  <span className="ui_skyblue_bg b2b-title-text banner_btn">
                    VIDEO EDITING
                  </span>
                </span>
                <span className="ui_cus_heading ui_heading3 ui_b2b_lite">
                  Graphic Designs
                </span>
                <span className="desiger_btn">
                  <span className="ui_skyblue_bg b2b-title-text banner_btn">
                    UI/UX DESIGNER
                  </span>
                </span>
              </h2>
              <div className="pt-3 pt-lg-5">
                <button
                  className="b2b-btn ui_btn b2b-btn-sm m-0"
                  onClick={toggleModal}
                >
                  Request a Quote
                </button>
              </div>
              <span className="banner_arow">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_3_wxbpzm.webp"
                  alt=""
                  width={1000}
                  height={500}
                />
              </span>
            </div>
            <div className="banner_right_img">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/26524829_2655_1_nyufks.webp"
                alt=""
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="line_img">
        <Image
          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_5_ncdifn.png"
          alt=""
          width={1000}
          height={500}
        />
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  );
}
