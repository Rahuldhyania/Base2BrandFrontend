"use client";
import React, { useState } from "react";
import Request from "@/app/request-form";
import Image from "next/image";
export default function Chooservices() {
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
      <div>
        <div className="container">
          <div className="text-center" data-aos="fade-up">
            <h2 className="b2b-partners-heading">
              Why Choose Our DevOps Services?
            </h2>
            <p className="text-white m-0">
              Traditional IT operations can be time-consuming and inefficient.
              As a trusted DevOps services company, we specialize in integrating
              cutting-edge <br /> DevOps solutions that automate workflows, enhance
              security, and optimize software delivery. Our team of experts is
              dedicated to providing top-tier <br /> DevOps support services tailored
              to your unique business needs.
            </p>
          </div>
          <div className="main_choose_bar pt-5 pb-5">
            <div className="sub_choose_bar">
              <div className="choose_img_con" data-aos="fade-up">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/greenclock.png"
                  alt=""
                  width={1000}
                  height={500}
                />
                41% less time- <br />consuming then <br /> traditional
                operations
              </div>
              <div className="choose_img_con" data-aos="fade-up">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480200_otlmyy.png"
                  alt=""
                  width={1000}
                  height={500}
                />
                21% faster incident <br /> resolution for IT <br /> teams
              </div>
            </div>
            <div className="sub_choose_bar">
              <div className="choose_img_con" data-aos="fade-up">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/clockinhand.png"
                  alt=""
                  width={1000}
                  height={500}
                />
                Save 7+ hours weekly <br /> with seamless <br /> communication
              </div>
              <div className="choose_img_con" data-aos="fade-up">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/arrowinfinity.png"
                  alt=""
                  width={1000}
                  height={500}
                />
                DevOps reduces <br /> support case time <br /> by 60%
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="dev_key pt-5 pb-5">
        <div className="container">
          <div className="text-center">
            <h2 className="b2b-partners-heading  text-black" data-aos="fade-up">
              Our Key DevOps Consulting Service Offerings
            </h2>
            <p className=" m-0  text-black" data-aos="fade-up">
              We provide a broad range of DevOps professional services designed to improve software deployment, <br /> infrastructure management, and monitoring processes.
            </p>
          </div>
          <div className="main_choose_bar pt-5 pb-5">
            <div className="sub_choose_bar sub_choose_card">
              <div className="choose_img_con text-black choose_cart" data-aos="fade-up">
                <span className="dev_choose_t1">AWS DevOps</span>
                <span className="dev_choose_p">
                  Automate cloud deployment, infrastructure provisioning, and
                  scaling with AWS-native DevOps tools.
                </span>
              </div>
              <div className="choose_img_con text-black choose_cart" data-aos="fade-up">
                <span className="dev_choose_t1">CI/CD Pipeline <br /> Implementation</span>
                <span className="dev_choose_p">
                  Reduce manual effort and accelerate software releases with continuous integration and continuous deployment strategies.
                </span>
              </div>
            </div>
            <div className="sub_choose_bar sub_choose_card">
              <div className="choose_img_con text-black choose_cart" data-aos="fade-up">
                <span className="dev_choose_t1">GCP DevOps</span>
                <span className="dev_choose_p">
                  Optimize cloud performance and security with Google Cloud Platform DevOps solutions.
                </span>
              </div>
              <div className="choose_img_con text-black choose_cart" data-aos="fade-up">
                <span className="dev_choose_t1">Code Deployment <br /> Across All Languages</span>
                <span className="dev_choose_p">
                  We support deployment in all programming languages, excluding .NET and Windows-related frameworks.
                </span>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="b2b-btn b2b-btn-sm m-0"
              onClick={toggleModal}
              data-aos="fade-up"
            >
              Consultation Now
            </button>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  );
}
