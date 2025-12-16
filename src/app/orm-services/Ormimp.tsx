"use client"
import React, { useState } from 'react'
import Request from "@/app/request-form";
import Seoimpcard from '../conversion-rate-optimization-services/Seoimpcard';
import Image from 'next/image';
export default function Ormimp() {
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
                Why Online Reputation Management is <br /> Crucial for Your Business?
              </h2>
              <div className='seoimpcard_con'>
                <Seoimpcard impcardtitle="Enhance Trust and Credibility" impcardpara='Effective online reputation management services build trust. Businesses with a positive reputation retain 80% of customers and boost repeat purchases by 70%.' />

                <Seoimpcard impcardtitle="Improved Brand Visibility" impcardpara='Active ORM services India enhance online visibility. Businesses experience 50% higher engagement, 60% traffic growth, and 35% better search rankings.' />

                <Seoimpcard impcardtitle="Crisis Management" impcardpara='Our online reputation management agency resolves crises within 48 hours, minimizing damage and restoring public confidence with strategic responses.' />

                <Seoimpcard impcardtitle="Cost-Effective Solutions" impcardpara='Businesses investing in online reputation management services India achieve 4x ROI, boosting customer acquisition and retention through affordable, scalable solutions.' />

                <Seoimpcard impcardtitle="Measurable Results" impcardpara='Detailed metrics like sentiment scores, brand mentions, and engagement rates guide continuous improvement, ensuring your reputation management strategy remains effective.' />
              </div>
              <div className='mt-4'>
                <button className='b2b-btn b2b-btn-sm m-0' onClick={toggleModal} data-aos="fade-up">Request A Quote</button>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className='seobanner' data-aos="fade-up">
              <Image src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_68_fuaxcm.jpg'
                alt='' width={1000} height={500} />
            </div>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  )
}
