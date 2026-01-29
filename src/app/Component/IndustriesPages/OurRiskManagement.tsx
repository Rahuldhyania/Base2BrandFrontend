"use client";
import React, { useState } from "react";
import RequestForm from "@/app/request-form";

const riskData = [
  {
    icon: "🛡️",
    title: "Proactive Risk Detection",
    desc:
      "Identifying potential threats early through predictive insights and strategic monitoring."
  },
  {
    icon: "📊",
    title: "Data-Driven Decisions",
    desc:
      "Leveraging real-time analytics to reduce uncertainty and optimize performance."
  },
  {
    icon: "🔐",
    title: "Security & Compliance",
    desc:
      "Ensuring enterprise-grade security aligned with global compliance standards."
  },
  {
    icon: "⚙️",
    title: "Operational Resilience",
    desc:
      "Building scalable systems that adapt to change while maintaining stability."
  }
];

const RiskManagementModern = () => {
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
    <div className="b2b-black-bg py-5">
      <section className="risk-modern-section">
        <div className="xxl_container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h5
                className="text-white gradient_text"
                style={{ width: "fit-content" }}
              >
                Risk Framework
              </h5>

              <h2 className="SolutionAccelerator_heading text-white ">
                Our Risk Management Philosophy
              </h2>

              <p className="pt-2 b2b-title-text text-white">
                Risk intelligence is embedded into every decision we make,
                helping businesses scale securely and sustainably.
              </p>
              <div className="pt-4 d-flex justify-content-start">
                <button
                  className="b2b-btn b2b-btn-sm m-0"
                  onClick={toggleModal}
                >
                  Discover Our Solutions
                </button>
              </div>
            </div>

            <div className="col-lg-7">
              <div className="risk-modern-grid">
                {riskData.map((item, index) =>
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
