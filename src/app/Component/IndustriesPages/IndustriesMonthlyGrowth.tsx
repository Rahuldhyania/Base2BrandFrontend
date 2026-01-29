"use client";
import RequestForm from "@/app/request-form";
import React, { useState } from "react";

const IndustriesMonthlyGrowth = () => {
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
      <div className="xxl_container">
        <div className="row">
          <div className="col-5">
            <div className="text-start pt-5">
              <h2 className="SolutionAccelerator_heading gradient_text m-0">
                Monthly returns between <span>10%</span> and <span>12%</span>
              </h2>
              <p className="b2b-title-text text-white max-w-9 pt-3">
                Stay ahead with real-time market insights and trending stocks
                curated for you.Stay ahead with real-time market insights and
                trending stocks curated for you.Stay ahead with
              </p>
              <div className="pt-5 d-flex justify-content-start">
                <button
                  className="b2b-btn b2b-btn-sm m-0"
                  onClick={toggleModal}
                >
                  Discover Our Solutions
                </button>
              </div>
            </div>
          </div>
          <div className="col-7">
            <div className="pt-0">
              <div className="MonthlyGrowthgraph">
                <div className="d-flex justify-content-between">
                  <div>
                    <h5 className="text-white">Your Profit</h5>
                    <h2 className="MonthlyGrowthgraph_heading">$563.40</h2>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="43"
                      height="42"
                      viewBox="0 0 43 42"
                      fill="none"
                    >
                      <path
                        d="M28.2736 10.4023L32.2281 14.3223L23.8034 22.6736L16.9261 15.8562L4.20312 28.4684L6.61018 30.8545L16.9261 20.6284L23.8034 27.4458L34.6351 16.7084L38.5896 20.6284V10.4023H28.2736Z"
                        fill="#0fc90f"
                      />
                    </svg>
                    <h5 className="text-white">+2.35%</h5>
                  </div>
                </div>
                <div className="pt-5">
                  <p className="b2b-title-text text-white text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Temporibus nesciunt sint omnis, nihil quo molestiae vero.
                    Dolor quo aut numquam quaerat error consequatur accusamus
                    unde distinctio dicta fugiat voluptate, inventore omnis
                    magni quis laboriosam rerum esse dignissimos atque? Ratione,
                    nemo dignissimos! Explicabo, similique. Assumenda quisquam
                    corporis delectus expedita.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <RequestForm onCloseModal={toggleModal} />}
    </div>
  );
};

export default IndustriesMonthlyGrowth;
