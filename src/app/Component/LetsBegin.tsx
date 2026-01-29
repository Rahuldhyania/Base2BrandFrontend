"use client";
import React, { useState } from "react";
import RequestForm from "../request-form";

const LetsBegin = () => {
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
    <div className="px-2 px-md-3">
      <div
        className="px-md-3 letsbeginmain my-3 mx-auto"
        style={{
          maxWidth: "1920px",
          backgroundImage: "url(/newhomepage/letsbeginbg.webp)"
        }}
      >
        <div className="xxl_container row py-5 m-auto">
          <div className="col-12 col-md-6">
            <h2 className="new_subheading text-white">
              Your project deserves the perfect team. Let’s make it happen.
            </h2>
          </div>
          <div className="col-12 col-md-6">
            <p className="new_subdescription text-white col-xl-10">
              Work with experts who deliver custom-built solutions, modern technology, seamless workflows, and dependable engineering designed to turn your vision into reality.
            </p>
            <div className="row mt-3">
              <div className="col-lg-12">
                <button onClick={toggleModal} className="b2b-btn b2b-btn-lg">
                  Start Your Project
                </button>
              </div>
            </div>
          </div>
        </div>
        {showModal && <RequestForm onCloseModal={toggleModal} />}
      </div>
    </div>
  );
};

export default LetsBegin;
