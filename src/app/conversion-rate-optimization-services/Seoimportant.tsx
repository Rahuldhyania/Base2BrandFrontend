"use client"
import React, { useState } from 'react'
import Seoimpcard from './Seoimpcard'

import Request from "@/app/request-form";
import Image from 'next/image';
export default function Seoimportant() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function () {
      const ModalBody = document.querySelector(".request-form");
      if (ModalBody) {
        ModalBody.classList.add("transformAnim");
      }
    }, 200);
  }
  return (
    <div className='pt-5 pb-5' style={{
      background: "linear-gradient(147deg, rgba(0,0,0,0.9527993081998425) 1%, rgba(34,24,83,1) 50%, rgba(0,0,0,0.9612026695443803) 100%)"
    }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-flex align-items-center">
            <div className="text-start">
              <h2 className="b2b-partners-heading">
                Why is CRO Essential for Your Website?
              </h2>
              <div className='seoimpcard_con'>
                <Seoimpcard impcardtitle="Improved ROI" impcardpara='A well-optimized website maximizes the value of your existing traffic without the need for additional ad spend.' />
                <Seoimpcard impcardtitle="Enhanced User Experience" impcardpara='Conversion rate optimization services focus on creating seamless and engaging experiences that encourage visitors to take action.' />
                <Seoimpcard impcardtitle="Data-Driven Decisions" impcardpara='With actionable insights, you can make informed decisions to continually refine and improve your website’s performance.' />
              </div>
              <div className='mt-4'>
                <button className='b2b-btn b2b-btn-sm m-0' onClick={toggleModal}>Let’s Fire Up Your Business!</button>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className='seobanner'>
              <Image src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_43_imbsun.jpg'
                alt='' width={1000} height={500} />
            </div>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  )
}
