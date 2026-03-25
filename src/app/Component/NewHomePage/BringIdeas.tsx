"use client";
import React, { useState } from "react";
import "../../project.css";
import Image from "next/image";
import processIcon1Anim from "/public/json/working-Process/process-icon-1-anim.gif";
import processIcon2Anim from "/public/json/working-Process/process-icon-2-anim.gif";
import processIcon3Anim from "/public/json/working-Process/process-icon-3-anim.gif";
import processIcon4Anim from "/public/json/working-Process/process-icon-4-anim.gif";
import processIcon5Anim from "/public/json/working-Process/process-icon-5-anim.gif";
import processIcon6Anim from "/public/json/working-Process/process-icon-6-anim.gif";
import RequestForm from "@/app/request-form";
const workProcessData = [
  {
    id: 1,
    title: "Research",
    icon:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/process-icon-1_ilnjvv.svg",
    animatedIcon: processIcon1Anim,
    delay: 500
  },
  {
    id: 2,
    title: "Planning",
    icon:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/process-icon-2_g82wvv.svg",
    animatedIcon: processIcon2Anim,
    delay: 600
  },
  {
    id: 3,
    title: "Design",
    icon:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/process-icon-3_l1ihmw.svg",
    animatedIcon: processIcon3Anim,
    delay: 700
  },
  {
    id: 4,
    title: "Development",
    icon:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/process-icon-4_g1sqem.svg",
    animatedIcon: processIcon4Anim,
    delay: 800
  },
  {
    id: 5,
    title: "Testing",
    icon:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/process-icon-5_jfez8t.svg",
    animatedIcon: processIcon5Anim,
    delay: 900
  },
  {
    id: 6,
    title: "Launch",
    icon:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/process-icon-6_dyupou.svg",
    animatedIcon: processIcon6Anim,
    delay: 1000
  }
];

export default function BringIdeas() {
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
    <div className="b2b-black-bg">
      <div className="radialGradient">
        <div className="b2b-container-lg">
          <div className="progress-column">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 header-columns p-3 m-auto">
                <div className="text-center">
                  <h2
                    className="text-center b2b-sub-heading-bold text-capitalize"
                    data-aos="fade-up"
                  >
                    We Build What You Imagine
                  </h2>
                </div>
              </div>
            </div>

            <div className="progress-count d-flex flex-wrap justify-content-between b2b-workProcess">
              {workProcessData.map(item =>
                <div
                  key={item.id}
                  className="count-col"
                  data-aos="fade-up"
                  data-aos-delay={item.delay}
                >
                  <div className="d-flex justify-content-center b2b-workProcess-wrap">
                    <div>
                      <div className="img-wrap">
                        <Image
                          src={item.icon}
                          width={88}
                          height={88}
                          alt={item.title}
                          className="icon"
                        />
                        <div className="animated-icon-wrap">
                          <Image
                            src={item.animatedIcon.src}
                            width={88}
                            height={88}
                            alt={item.title}
                            className="animated-icon"
                          />
                        </div>
                      </div>
                      <p className="text-white text-center">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="row mt-md-4">
              <div
                className="col-lg-12 text-center"
              >
                <button onClick={toggleModal} className="b2b-btn b2b-btn-lg">
                  Request a Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && <RequestForm onCloseModal={toggleModal} />}
    </div>
  );
}
