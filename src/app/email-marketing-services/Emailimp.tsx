"use client"
import React, { useState } from 'react'
import Request from "@/app/request-form";
import Seoimpcard from '../conversion-rate-optimization-services/Seoimpcard';
import Image from 'next/image';
export default function Emailimp() {
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
    <div className='bg_home pt-5 pb-5 seo_home_banner' style={{
      background: "linear-gradient(147deg, rgba(0,0,0,0.9527993081998425) 1%, rgba(34,24,83,1) 50%, rgba(0,0,0,0.9612026695443803) 100%)"
    }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 d-flex align-items-center">
            <div className="text-start">
              <h2 className="b2b-partners-heading">
                Why Email Marketing Is Vital for Your Business
              </h2>
              <div className='seoimpcard_con'>
                <Seoimpcard impcardtitle="Cost-Effective Marketing" impcardpara='Email campaigns deliver an incredible ROI, often outperforming other digital channels in cost-effectiveness.' />
                <Seoimpcard impcardtitle="Enhanced User Experience" impcardpara='With personalized content, you can build deeper connections and foster brand loyalty.' />
                <Seoimpcard impcardtitle="Measurable Results" impcardpara='Our email marketing services in India provide actionable data, helping you make informed decisions to improve future campaigns.' />
              </div>
              <div className='mt-4'>
                <button className='b2b-btn b2b-btn-sm m-0' onClick={toggleModal}>Request A Quote</button>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className='seobanner'>
              <Image src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/woman-using-computer-digital-marketing-technology-concept-screen-email_p1rbnu.png'
                alt='' width={1000} height={500} />
            </div>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  )
}
