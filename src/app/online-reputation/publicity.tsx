'use client'

import React, { useState } from "react";    
import Brand from '../../../public/online/brand.png';
import Tag from '../../../public/online/tag.png';
import Order1 from "../../../public/youtube-img/order1.png"
import Order2 from "../../../public/youtube-img/order2.png"
import '../online-reputation/online.css'
import Request from "../request-form";

export default function Rreputation() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
    };
    return (
        <>
            <div className="bg-black">
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 text-white mb-5 mb-md-0">
                            <h2>Save Your Brand from Negative Publicity</h2>
                            <p>Credit cards can be used to pay for our services through one of the <br /> most trusted and secure payment methods in the world.<br />
                                To make your payment, you don&apos;t have to register.</p>
                            <div className="row mt-5">
                                {/* <div className="col-md-1">
                                    <img src={Tag.src} className="tag_line" alt="" />
                                </div> */}
                                <div className="col-12">
                                    <ul className="order-list d-flex flex-wrap p-0 position-relative">
                                        <li className="w-100 d-flex justify-content-start gap-4 align-items-center mb-4">
                                            <img src={Order1.src} alt=""/>
                                        <span>Online reviews are trusted by 85% customers as much as personal recommendations.</span></li>
                                        <li className="w-100 d-flex justify-content-start gap-4 align-items-center mb-4">
                                            <img src={Order2.src} alt=""/>
                                            <span>60% of customers say that negative reviews stopped them from using a business.</span></li>
                                        <li className="w-100 d-flex justify-content-start gap-4 align-items-center mb-4">
                                            <img src={Order2.src} alt=""/>
                                            <span>49% of customers look for at least a four-star rating before choosing a business.</span></li>
                                        <li className="w-100 d-flex justify-content-start gap-4 align-items-center mb-4">
                                            <img src={Order2.src} alt=""/>
                                            <span>86% of prospective customers do not covert after seeing a 1 or 2-star review on a business page.</span></li>
                                    </ul>

                                    
                                    <button className="btn btn-outline-primary m-0" onClick={toggleModal}> <i className="fa fa-hand-o-right fs-4 hide_ic mr-3" aria-hidden="true"></i> Request a Quote </button>

                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-sm-12 col-md-6">
                            <img src={Brand.src} alt="" className="w-75" />
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
