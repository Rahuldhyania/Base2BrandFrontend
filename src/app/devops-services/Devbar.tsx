"use client"
import React, { useState } from "react";
import Request from "@/app/request-form";
export default function Devbar() {
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
    <div style={{
        background:"#1F222F"
    }} className="pt-5 pb-5">
      <div className="container">
        <div className="text-center ">
          <h2 className="b2b-partners-heading text-white" data-aos="fade-up">
            Get Started with Our DevOps Services Today
          </h2>
          <p className="text-white  m-0" data-aos="fade-up">
            Whether you need a full-scale DevOps services company to manage your
            entire infrastructure or expert consultation on implementing
            automation, <br /> we have the right solutions for you. Our DevOps support
            services ensure seamless development cycles, enhanced collaboration,
            and optimized <br /> software performance.
          </p>
        </div>
        <div className="d-flex justify-content-center pt-4">
          <button className="b2b-btn b2b-btn-sm m-0"onClick={toggleModal} data-aos="fade-up" >Consultation Now</button>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  );
}
