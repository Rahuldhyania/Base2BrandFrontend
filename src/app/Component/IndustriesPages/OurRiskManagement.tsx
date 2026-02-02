"use client";
import React, { useState } from "react";
import RequestForm from "@/app/request-form";

const RiskManagementModern = ({ title, description, btnname, maindata }) => {
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
    <div className="b2b-black-bg pb-5 pt-md-5">
      <section className="risk-modern-section">
        <div className="xxl_container">
          <div className="row align-items-center">
            <div className="col-xl-5 mb-5 mb-xl-0 text-center text-md-start">
              <h5
                className="text-white gradient_text mx-auto mx-md-0"
                style={{ width: "fit-content" }}
              >
                Risk Framework
              </h5>

              <h2
                className="SolutionAccelerator_heading text-white "
                dangerouslySetInnerHTML={{ __html: title }}
              />

              <p
                className="pt-2 b2b-title-text text-white"
                dangerouslySetInnerHTML={{ __html: description }}
              />
              <div className="pt-4 d-flex justify-content-md-start justify-content-center">
                <button
                  className="b2b-btn b2b-btn-sm m-0"
                  onClick={toggleModal}
                >
                  {btnname}
                </button>
              </div>
            </div>

            <div className="col-xl-7">
              <div className="risk-modern-grid">
                {maindata.map((item, index) =>
                  <div className="risk-card" key={index}>
                    <div className="risk-card-icon">
                      {item.icon}
                    </div>

                    <div className="risk-card-content">
                      <h5>
                        {item.title}
                      </h5>
                      <p>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {showModal && <RequestForm onCloseModal={toggleModal} />}
    </div>
  );
};

export default RiskManagementModern;
