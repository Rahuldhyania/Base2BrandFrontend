'use client'

import React, { useState } from "react";    
import Order1 from "../../public/youtube-img/order1.png"
import Order2 from "../../public/youtube-img/order2.png"
import YouTube7 from "../../public/youtube-img/youtube7.png"
import ChooseOrder from "../../public/youtube-img/choose-service.png"
import Utube8 from "../../public/youtube-img/youtube8.png"
import Utube9 from "../../public/youtube-img/youtube9.png"
import Utube10 from "../../public/youtube-img/youtube10.png"
import Utube11 from "../../public/youtube-img/youtube11.png"
import Utube12 from "../../public/youtube-img/youtube12.png"
import Utube13 from "../../public/youtube-img/youtube13.png";
import Request from "./request-form";

export default function Single() {
    const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function() {
        const ModalBody = document.querySelector(".request-form");
        if(ModalBody){
          ModalBody.classList.add("transformAnim");
        }
                                 
        }, 200);
  };
  return (
    <>  
        <div className="container-fluid pb-5"> 
            <div className="row process bg-gray text-white mb-5 justify-content-center ps-5 pb-5"> 
                <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                    <div className="d-flex flex-wrap justify-content-start">
                    <h1 className="fs-3 text-white font-light mb-3">Increase Brand Awareness With Our YouTube Marketing Services Now!</h1>
                    <p className="text-white">Increase brand awareness with our comprehensive YouTube marketing services today! Our tailored strategies focus on maximizing visibility, engagement, and reach for your videos. Benefit from:</p>
                    <ul className="order-list d-flex flex-wrap p-0 position-relative">
                        <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-5"><img src={Order1.src} alt=""/>
                        <span>Targeted audience research</span></li>
                        <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-5"><img src={Order2.src} alt=""/>
                        <span>Engaging content creation</span></li>
                        <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-5"><img src={Order2.src} alt=""/>
                        <span>Strategic keyword optimization</span></li>
                        <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-5"><img src={Order2.src} alt=""/>
                        <span>Data-driven analytics</span></li>
                        <li className="w-100 d-flex flex-wrap justify-content-start gap-4 align-items-center mb-5"><img src={Order2.src} alt=""/>
                        <span>Ongoing performance monitoring</span></li>
                    </ul>
                    <button className="btn btn-outline-primary m-0"  onClick={toggleModal}> Request a Quote </button>
                </div>
                </div>
                <div className="d-flex flex-wrap justify-content-start col-12 col-sm-12 col-md-6 col-lg-6 p-0">
                    <img src={YouTube7.src} alt="" />
                </div>
    
            </div>

            {/* <div className="row process bg-gray text-white mb-5 justify-content-center ps-5 pb-5"> 
                <div className="col-12 text-center">
                    <h1 className="fs-3 text-white font-light mb-3">Why choose our services ?</h1>
                    <p className=" col-12 col-sm-6 m-auto font-light mb-5">Many websites sell similar services to ours. “Why you should buy YouTube views or other services from Base2Brand? Here are some reasons.</p>
                    <img src={ChooseOrder.src} alt="" />
                </div>
            </div> */}

            <div className="row process bg-gray text-white mb-5 justify-content-center ps-5 pb-5"> 
                <h1 className=" w-100 text-center mb-5">Our Cherished Projects</h1>
                    <div className="mb-5 d-flex flex-wrap">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-start">
                            <h1 className="fs-3 text-white font-light mb-2 w-100">Project Name</h1>
                            <p className=" col-12 col-sm-6 m-auto font-light mb-4 w-100">Project Description</p>
                            <img src={Utube8.src} alt="" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-start">
                            <h1 className="fs-3 text-white font-light mb-2 w-100">Project Name</h1>
                            <p className=" col-12 col-sm-6 m-auto font-light mb-4 w-100">Project Description</p>
                            <img src={Utube9.src} alt="" />
                        </div>
                    </div>

                    <div className="mb-5 d-flex flex-wrap">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-start">
                            <h1 className="fs-3 text-white font-light mb-2 w-100">Project Name</h1>
                            <p className=" col-12 col-sm-6 m-auto font-light mb-4 w-100">Project Description</p>
                            <img src={Utube10.src} alt="" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-start">
                            <h1 className="fs-3 text-white font-light mb-2 w-100">Project Name</h1>
                            <p className=" col-12 col-sm-6 m-auto font-light mb-4 w-100">Project Description</p>
                            <img src={Utube11.src} alt="" />
                        </div>
                    </div>

                    <div className="mb-5 d-flex flex-wrap">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-start">
                            <h1 className="fs-3 text-white font-light mb-2 w-100">Project Name</h1>
                            <p className=" col-12 col-sm-6 m-auto font-light mb-4 w-100">Project Description</p>
                            <img src={Utube12.src} alt="" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 d-flex flex-wrap justify-content-start">
                            <h1 className="fs-3 text-white font-light mb-2 w-100">Project Name</h1>
                            <p className=" col-12 col-sm-6 m-auto font-light mb-4 w-100">Project Description</p>
                            <img src={Utube13.src} alt="" />
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
