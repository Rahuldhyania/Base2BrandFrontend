"use client";

import RequestForm from "@/app/request-form";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import {
  FiDollarSign,
  FiBarChart2,
  FiShield,
  FiTruck,
  FiAward,
  FiBox,
  FiSettings,
  FiRepeat
} from "react-icons/fi";
const features = [
  {
    id: 1,
    icon: <FiDollarSign size={56} strokeWidth={2} />,
    title: "Automated Customer-Specific Tier Pricing",
    description:
      "Negotiated contract rates applied automatically at customer login—zero manual intervention required for pricing accuracy."
  },
  {
    id: 2,
    icon: <FiBarChart2 size={56} strokeWidth={2} />,
    title: "Volume-Based Quantity Discount Automation",
    description:
      "Progressive discount structures applied dynamically as customers build orders—calculation errors eliminated."
  },
  {
    id: 3,
    icon: <FiShield size={56} strokeWidth={2} />,
    title: "Automated Credit Limit Enforcement for B2B Orders",
    description:
      "Customer credit limits and payment terms validated across all sales channels."
  },
  {
    id: 4,
    icon: <FiTruck size={56} strokeWidth={2} />,
    title: "Pre-Sell Incoming Inventory",
    description:
      "Sell against purchase orders and container shipments before arrival—system displays ETA dates enabling forward allocation and revenue acceleration."
  },
  {
    id: 5,
    icon: <FiAward size={56} strokeWidth={2} />,
    title: "Tiered Pricing by Customer Classification",
    description:
      "Customer tier assignments maintained in your ERP—Gold/Silver/Bronze or custom structures—synced automatically."
  },
  {
    id: 6,
    icon: <FiBox size={56} strokeWidth={2} />,
    title: "Unit of Measure Pricing",
    description:
      "Automatically generate pricing for each, box, carton, or pallet directly from your ERP."
  },
  {
    id: 7,
    icon: <FiSettings size={56} strokeWidth={2} />,
    title: "ERP-Native Wholesale Order Automation",
    description:
      "Orders flow directly from web to ERP—eliminating manual entry."
  },
  {
    id: 8,
    icon: <FiRepeat size={56} strokeWidth={2} />,
    title: "Quote-to-Order Conversion Workflow",
    description:
      "ERP quotes sync to portal—customers convert quotes without re-entry."
  }
];

const marqueeData = [
  "Acumatica",
  "NetSuite",
  "Business One",
  "WooCommerce",
  "Magento",
  "Shopify",
  "Retail Expres",
  "LightSpeed",
  "Intacct"
];
const AutomationPricing = ({ title, description }) => {
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
    <div className="pricing-automation-container">
      <div className="xxl_container">
        <div className="pricing-header">
          <h2
            className="SolutionAccelerator_heading gradient_text m-0"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="b2b-title-text text-white max-w-9 pt-3">
            {description}
          </p>
        </div>
        <div className="container">
          <div className="pricing-features-grid">
            {features.map(feature =>
              <div key={feature.id} className="pricing-feature-card">
                <div
                  className="pricing-feature-icon"
                  style={{
                    background: "none",
                    fontSize: "40px",
                    width: "auto",
                    height: "auto",
                    borderRadius: "0",
                    boxShadow: "none",
                    marginBottom: "20px"
                  }}
                >
                  {feature.icon}
                </div>
                <h3 className="pricing-feature-title">
                  {feature.title}
                </h3>
                <p className="pricing-feature-description">
                  {feature.description}
                </p>
              </div>
            )}
          </div>

          <div className="d-flex justify-content-center">
            <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal}>
              Book a Call
            </button>
          </div>

          <div className="pt-5 text-center">
            <p className="b2b-title-text text-white ">
              Supported ERP and E-Commerce Platforms
            </p>

            <div className="pt-4">
              <Marquee>
                {marqueeData.map((data, index) =>
                  <div key={index} className="Supported_marquee_bar">
                    {data}
                  </div>
                )}
              </Marquee>
            </div>
          </div>
        </div>
      </div>
      {showModal && <RequestForm onCloseModal={toggleModal} />}
    </div>
  );
};

export default AutomationPricing;
