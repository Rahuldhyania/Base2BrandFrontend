'use client'

import React, { useState } from "react";
import Request from "./request-form";

import Image from "next/image";

export default function Audience() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="container pt-5 pb-5">
        <div className="row process bg-gray text-white mb-5 justify-content-center px-5 pb-5">
          <div className="justify-content-between d-flex flex-wrap align-items-center">
            <div className="ser-digital-col col-md-6  pb-5">
              <div className="d-flex flex-wrap justify-content-start align-items-center">
                {/* <h5 className="mb-2 font-light fs-5">Let Base2Brand do the hard work</h5> */}
                <h1 className="digital-txt mb-4 font-light">Make Your Video Visible to Your Audience</h1>
                <p className="digital-para mb-4">To ensure your video reaches its intended audience, we employ strategic SEO techniques, optimize titles and descriptions, share across relevant platforms, engage with viewers through comments and feedback, and utilize eye-catching thumbnails.</p>
                <button className="btn btn-outline-primary m-0" onClick={toggleModal}> Request a Quote </button>
              </div>
            </div>

            <div className="ser-digital col-md-6">
              <Image width={1000} height={500} src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/youtube_qaldpb.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {showModal &&
        <Request
          onCloseModal={toggleModal}
        />
      }
    </>
  )
}
