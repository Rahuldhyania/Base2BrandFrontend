import React, { useState } from "react";
// import Typewriter from "typewriter-effect";
import "./callcenter.css";
import customerbanner1 from "../../public/img/customerbanner1.jpeg";
import radialBg from "../../public/img/radial_bg.svg";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import Csupport from "./csupport";
import newicon2 from "../../public/callcenter-icon/newbtn1.svg";
import newicon3 from "../../public/callcenter-icon/newbtn2.svg";
import newicon4 from "../../public/callcenter-icon/newbtn3.svg";
import newicon5 from "../../public/callcenter-icon/newbtn4.svg";
import newicon6 from "../../public/callcenter-icon/newbtn5.svg";
import newicon7 from "../../public/callcenter-icon/newbtn6.svg";
function cbtn() {
  return (
    <div className="b2b-black-bg">
      <div className="container pt-5 b2b-black-bg">
        <div className="row">
          <div
            className="col-lg-4 col-md-6 mb-3"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="service_box_outer greenGradiant">
              <div className="service_box_gradiant">
                <div className="serviceIcon d-flex">
                  <img
                    className="IconAlign customer_btn_icon"
                    src={newicon2.src}
                    alt=""
                  />
                  <div className="d-flex justify-content-between align-items-start">
                    <h3 className="b2b-service-heading cus_h capmton">
                      Customer Support <br /> Outsourcing
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 mb-3"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="service_box_outer purpleGradiant">
              <div className="service_box_gradiant ">
                <div className="serviceIcon d-flex">
                  <img
                    className="IconAlign customer_btn_icon"
                    src={newicon3.src}
                    alt=""
                  />
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="b2b-service-heading cus_h capmton">
                      Telephone <br />Services
                    </h3>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 mb-3"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="service_box_outer skyBlueGradiant">
              <div className="service_box_gradiant ">
                <div className="serviceIcon d-flex">
                  <img
                    className="IconAlign customer_btn_icon"
                    src={newicon4.src}
                    alt=""
                  />
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="b2b-service-heading cus_h capmton">
                      Ecommerce <br /> Support
                    </h3>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 mb-3"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="service_box_outer yellowGradiant">
              <div className="service_box_gradiant ">
                <div className="serviceIcon d-flex">
                  <img
                    className="IconAlign customer_btn_icon"
                    src={newicon5.src}
                    alt=""
                  />
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="b2b-service-heading cus_h capmton">
                      Social Media <br /> Service
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 mb-3"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div className="service_box_outer pinkGradiant">
              <div className="service_box_gradiant ">
                <div className="serviceIcon d-flex">
                  <img
                    className="IconAlign customer_btn_icon"
                    src={newicon6.src}
                    alt=""
                  />
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="b2b-service-heading cus_h capmton">
                      Amazon Customer <br /> Support
                    </h3>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 col-md-6 mb-3"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="service_box_outer blueGradiant">
              <div className="service_box_gradiant ">
                <div className="serviceIcon d-flex">
                  <img
                    className="IconAlign customer_btn_icon"
                    src={newicon7.src}
                    alt=""
                  />
                  <div className="d-flex justify-content-between align-items-center">
                    <h3 className="b2b-service-heading cus_h capmton">
                      Live Chat<br /> Support
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cbtn;
