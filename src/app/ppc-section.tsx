'use client'

import React, { useState } from "react";   

import PPCbg from "../../public/googlePPC-img/ppc-bg.png";
import Request from "./request-form"; 

export default function PPC() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>  
      <div className="container-fluid pb-5"> 
        <div className="row process bg-gray text-white mb-5 justify-content-center px-5 pb-5"> 
              <div className="justify-content-between d-flex flex-wrap align-items-center">
                <div className="ser-digital-col col-12 col-sm-12 col-md-6 col-lg-4 pb-5">
                    <div className="d-flex flex-wrap justify-content-start align-items-center">
                        <h2 className="digital-txt mb-4">Results-Driven PPC Management Services</h2>
                        <p className="digital-para">Experience results-driven PPC management services in Mohali. Partner with us for a tailored strategy that ensures the highest ROI. Our proven process caters to your needs and swiftly adapts to data insights, ensuring maximum returns on your investment.</p>
                        <button className="btn btn-outline-primary m-0" onClick={toggleModal}> Request a Quote </button>
                    </div>
                  </div>

                <div className="ser-digital col-12 col-sm-12 col-md-6 col-lg-4 justify-content-end d-flex flex-wrap">
                    <img className="w-100" src={PPCbg.src} alt=""/>
                </div>
            </div>
        </div>

        <div className="row ppc-count-bg text-white justify-content-between align-items-center px-lg-5 py-lg-5 px-2 py-2 px-md-3 py-md-3 px-2 py-2 px-sm-3 py-sm-3"> 
          <div className="col-12 col-md-12 col-lg-4">
            <h1 className="text-white fs-4 m-0 mb-md-5 mb-sm-5 font-light ppc-col-head">Let Our Achievements Speak</h1>
          </div>

          <div className="col-12 col-md-12 col-lg-8 d-flex flex-wrap">
            <div className="ppc-count col-12 col-sm-4">
              <h1 className="text-white fs-3">￪+168%</h1>
              <span className="col-12 d-flex flex-wrap">WEBSITE LEADS</span>
                <small>Healthy Bedroom Logo</small>
            </div>

            <div className="ppc-count col-12 col-sm-4">
              <h1 className="text-white fs-3">￪+574%</h1>
              <span className="col-12 d-flex flex-wrap">YOUTUBE VIEWS</span>
              <small>Maansi Sharma Logo</small>
            </div>

            <div className="ppc-count col-12 col-sm-4">
              <h1 className="text-white fs-3">￪+293%</h1>
              <span className="col-12 d-flex flex-wrap">GROWTH IN SEARCH VISIBILITY</span>
              <small>Checkups Meds Logo</small>
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
