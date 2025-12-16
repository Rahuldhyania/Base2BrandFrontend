"use client";
import React, { useState } from "react";
import "./intecom.css";
import Request from "@/app/request-form";
import { usePathname } from "next/navigation";
import Image from "next/image";
type Intecombanner = {
  Intecomtitle1: string;
  Intecomtitle2: string;
  Intecompara: string;
  Intecombannerimg: string;
  last_text: string;
  color_text: string;
  text_banner_img: string;
  banner_text_color: string;
};
const Intecombanner = ({
  Intecomtitle1,
  Intecomtitle2,
  Intecompara,
  Intecombannerimg,
  color_text,
  last_text,
  text_banner_img,
  banner_text_color
}: Intecombanner) => {
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
  const pathname = usePathname()
  return (
    <div className={`inte_com_banner ${pathname == "/odoo" ? "inte_com_banner_padding" : ""} ${pathname == "/easy-ecom" ? "pt-0 pb-0" : ""} ${pathname == "/uni-commerce" ? "pt-0 pb-0" : ""} ${pathname == "/custom-recharge" ? "pt-0 pb-0" : ""}`}
      style={{
        backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh_2_tfauei_1.svg")',
        backgroundRepeat: 'no-repeat',
        width: "100%"
      }}>
      <div className="container propsbanner">
        <div className="row align-items-center">
          <div className="col-md-7 props_image_banner">
            <div className="typewriterWrap d-flex align-items-center gap-2 callc_banner_animation">
              <h1 className="erp_heading">
                {Intecomtitle1}{" "}
                <span style={{ color: banner_text_color }}>
                  {color_text}
                </span>{" "}
                {last_text} <br />
                {Intecomtitle2}
              </h1>
            </div>
            <p className="sub_text text-white mt-3 lh-3 col-md-10">
              {Intecompara}
            </p>
            <div className="mt-4">
              <button onClick={toggleModal} className="b2b-btn b2b-btn-sm m-0">
                Book a Free Demo
              </button>
            </div>
          </div>
          <div className="col-md-5 pb-5 d-flex justify-content-center props_image_banner">
            <Image
              src={Intecombannerimg}
              alt="banner"
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
      <Image
        src={text_banner_img}
        alt="demo"
        width={1000}
        height={500}
        className="inte_com_banner_img"
      />
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  );
};
export default Intecombanner;
