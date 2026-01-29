"use client";
import RequestForm from "@/app/request-form";
import React, { useState } from "react";
import CountUp from "react-countup";

const KeyMetrics = [
  {
    number: 782,
    metricName: "Happy Clients"
  },
  {
    number: 512,
    metricName: "Projects Completed"
  },
  {
    number: 324,
    metricName: "Websites Developed"
  },
  {
    number: 55,
    metricName: "Apps Delivered"
  },
  {
    number: 21,
    metricName: "Experienced Developers"
  },
  {
    number: 52,
    metricName: "Team Members"
  }
];
const B2bKeysMetric = () => {
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
    <div className="b2b-black-bg py-1 py-md-5">
      <div className="xxl_container pb-2 pb-md-0">
        <div className="container-xl">
          <div className="text-center">
            <h2
              className="b2b-heading text-center text-capitalize"
              data-aos="fade-up"
            >
              Performance You Can Measure
            </h2>
          </div>
          <div className="row pt-3 pt-md-5 metricCountmain">
            {KeyMetrics.map((data, index) =>
              <div className="col-12 col-md-6" key={index}>
                <h2
                  className={`text-center text-white  ${index % 2 === 0
                    ? "metricCount"
                    : "metricCount metricCountreverce"}`}
                >
                  <span className="metricCountnumber">
                    <CountUp end={data.number} enableScrollSpy /> +
                  </span>
                  <span className="metricCountdescription">
                    {data.metricName}
                  </span>
                </h2>
              </div>
            )}
          </div>
          <div className="row mt-4">
            <div
              className="col-lg-12 text-center"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <button onClick={toggleModal} className="b2b-btn b2b-btn-lg">
                Scale With Us
              </button>
            </div>
          </div>
        </div>
      </div>
      {showModal && <RequestForm onCloseModal={toggleModal} />}
    </div>
  );
};

export default B2bKeysMetric;
