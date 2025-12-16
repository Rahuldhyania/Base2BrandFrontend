"use client"
import React, { useState } from 'react'

import Request from "@/app/request-form";
import Seoimpcard from '../conversion-rate-optimization-services/Seoimpcard';
import Image from 'next/image';
export default function Youmarimp() {
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
              <h2 className="b2b-partners-heading" data-aos="fade-up">
                Why YouTube Marketing is Crucial for <br /> Your Business?
              </h2>
              <div className='seoimpcard_con'>
                <Seoimpcard impcardtitle="Increase Visibility and Engagement" impcardpara='Active YouTube marketing drives higher visibility. Businesses with YouTube channels see a 40% increase in audience engagement and retention.' />
                <Seoimpcard impcardtitle="Higher Conversion Rates" impcardpara='70% of consumers say they prefer watching videos to learn about a product. Our YouTube marketing agency helps convert viewers into customers.' />
                <Seoimpcard impcardtitle="Cost-Effective Marketing" impcardpara='With YouTube marketing services, you can reach a vast audience with a flexible budget. Advertisers report a 3x ROI on YouTube campaigns.' />
                <Seoimpcard impcardtitle="Measurable Results" impcardpara='We provide actionable insights through analytics, ensuring continuous campaign optimization. Metrics like watch time, click-through rates, and engagement help fine-tune strategies.' />
              </div>
              <div className='mt-4'>
                <button className='b2b-btn b2b-btn-sm m-0' onClick={toggleModal} data-aos="fade-up">Request A Quote</button>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className='seobanner' data-aos="fade-up">
              <Image src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_61_vgu0je.png'
                alt='' width={1000} height={500} />
            </div>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  )
}
