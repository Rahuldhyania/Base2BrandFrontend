"use client";
import React, { useState } from "react";
import Request from "../request-form";
import "./integration.css";
import Header from "../../../component/header";
import Intebar from "../../../component/integration-component/Intebar";
import Image from "next/image";
function Intebanner() {
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
      <div className="bannerSection md-5  pb-5 md-5 position-relative"
        style={{
          backgroundImage:
            'url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh.svg")',
          backgroundRepeat: "no-repeat"
        }}>
        <div className="container pt-5">
          <div className="row align-items-center">
            <div className="col-md-7">
              <div className="typewriterWrap d-flex align-items-center gap-2 callc_banner_animation">
                <h1 className="sub_heading ">
                  Shopify Custom <br />
                  Integration
                </h1>
              </div>
              <p className="sub_text text-white mt-4  col-md-10">
                We offer seamless Shopify custom integration solutions tailored
                to your business needs. From ERP systems to payment gateways and
                third-party apps, our expertise ensures smooth functionality,
                enhanced efficiency, and a personalized shopping experience for
                your customers.
              </p>
              <div className="mt-4">
                <button
                  onClick={toggleModal}
                  className="b2b-btn b2b-btn-sm m-0"
                >
                  Request a Quote
                </button>
              </div>
            </div>
            <div className="col-md-5 pb-5 pt-5 d-flex justify-content-center">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480147_1_xiqjuq.png"
                alt="banner"
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>
        <Image
          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Shopify_4_riftqp.webp"
          alt="demo"
          width={1000}
          height={500}
          className="inte_com_banner_img"
        />
        {showModal && <Request onCloseModal={toggleModal} />}
      </div>
      <Intebar bartitle1=' We are Specialised in '
        colorbartitle="Shopify "
        bartitle2=" Custom Integration"
        barpara='Base2Brand specializes in custom Shopify integrations designed to
              help store owners enhance their online presence and streamline
              business operations. Our services include seamless third-party app
              integration, custom payment gateway, CRM, advanced payment
              solutions, tailored shipping methods, and custom API.'
      />
      {/* <div className="banner_lower_inte pt-4 pb-4">
        <div className="row align-items-start">
          <div className="col-md-5">
            <h3 className="b2b-service-heading inte_heading">
              We are Specialised in Shopify <br />
              Custom Integration
            </h3>
          </div>
          <div className="col-md-7 pb-2 pt-2 d-flex justify-content-center">
            <p className="inte_text text-white mt-4 inte_cen_textban col-md-10">
              Base2Brand specializes in custom Shopify integrations designed to
              help store owners enhance their online presence and streamline
              business operations. Our services include seamless third-party app
              integration, custom payment gateway, CRM, advanced payment
              solutions, tailored shipping methods, and custom API.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Intebanner;
