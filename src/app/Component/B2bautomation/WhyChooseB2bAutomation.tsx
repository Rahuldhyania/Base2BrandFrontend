'use client'
import RequestForm from "@/app/request-form";
import React, { useState } from "react";
import { FiInfo, FiCheckCircle, FiDollarSign } from "react-icons/fi";

const WhyChooseB2bAutomation = () => {
  const items = [
    {
      id: 1,
      icon: <FiInfo size={26} />,
      title: "Shopify Plus Required Only For",
      content:
        "Company/employee hierarchies requiring multiple login credentials per corporate account. 90% of mid-market wholesalers do not require this functionality. All other B2B capabilities deploy on standard platforms.",
    },
    {
      id: 2,
      icon: <FiCheckCircle size={26} />,
      title: "SAAS Integrator on Standard Platforms",
      content:
        "Tier pricing, credit limits, payment terms, volume discounts, wholesale workflows, and customer-specific pricing—fully automated on standard e-commerce platforms.",
    },
    {
      id: 3,
      icon: <FiDollarSign size={26} />,
      title: "Verified Annual Cost Comparison",
      content: (
        <>
          <div className="cost-line">Shopify Plus: <strong>$30,000 / year</strong></div>
          <div className="cost-line">Standard Platform + Integration: <strong>~$3,000 / year</strong></div>
          <div className="cost-highlight">Savings: $27,000+ USD</div>
        </>
      ),
    },
  ];
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
    <section className="b2b-black-bg py-5">
      <div className="xxl_container">
        <div className="row mb-4 mb-md-5 text-center text-md-start">
          <div className="col-lg-7">
            <h2 className="SolutionAccelerator_heading gradient_text">
              Why Mid-Market Wholesalers Choose{" "}
              <span className="gradient_text">B2B Automation Over Shopify Plus</span>
            </h2>
          </div>
          <div className="col-lg-5">
            <p className="b2b-title-text text-white">
              Shopify Plus is often recommended for tier pricing and credit
              management. In reality, full B2B automation is achievable on
              standard platforms—saving $27,000+ annually without sacrificing
              enterprise capabilities.
            </p>
          </div>
        </div>
        <div className="b2b-timeline">
          {items.map((item, index) => (
            <div
              key={item.id}
              className={`timeline-row ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="timeline-content">
                <div className="timeline-icon">
                  {item.icon}
                </div>

                <h4 className="timeline-title">{item.title}</h4>

                <div className="timeline-text">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-3 pt-xxl-5 d-flex justify-content-center">
          <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal}>
            Discover Our Solutions
          </button>
        </div>
      </div>
      {showModal && <RequestForm onCloseModal={toggleModal} />}
    </section>
  );
};

export default WhyChooseB2bAutomation;
