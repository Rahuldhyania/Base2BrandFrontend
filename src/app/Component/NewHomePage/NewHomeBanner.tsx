"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import RequestForm from "@/app/request-form";

const marqueeImageList = [
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo6_pdrvad.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo2_nqqdal.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo5_kyxwdv.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo4_rhb1jf.png",
  "/newhomepage/kalaviyo.webp",
  "/newhomepage/shopifypartner.webp",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo7_vofbro.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/iso-logo_al1xmo.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo2_nqqdal.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo5_kyxwdv.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo4_rhb1jf.png",
  "/newhomepage/kalaviyo.webp",
  "/newhomepage/shopifypartner.webp",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/iso-logo_al1xmo.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/adob.png"
];

const NewHomeBanner = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMarquee, setShowMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMarquee(true), 200);
  }, []);

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
    <div className="b2b-black-bg home_bg_image">
      <div className="new_banner_container">
        <div className="new_banner_container_inner">
          <h1 className="m-0 new_heading text-center text-white">
            Designing Websites That <br /> Drive Business
          </h1>
          <div className="d-flex justify-content-center pt-4">
            <p className="">
              <button className="b2b-btn b2b-btn-sm m-0" onClick={toggleModal}>
                Discover Our Solutions
              </button>
            </p>
          </div>
          {showMarquee
            ? <div className="new_banner_marque w-100 pt-4 pt-md-5">
                <div className="b2b-container-lg py-3 center-gradient-bg">
                  <Marquee className="w-100 new_banner_marque">
                    {marqueeImageList.map((item, index) =>
                      <div className="" key={index}>
                        <Image
                          src={item}
                          className="social_logo_new_banner_new"
                          alt="social logo"
                          width={160}
                          height={60}
                        />
                      </div>
                    )}
                  </Marquee>
                </div>
              </div>
            : null}
        </div>
      </div>
      {showModal && <RequestForm onCloseModal={toggleModal} />}
    </div>
  );
};

export default NewHomeBanner;
