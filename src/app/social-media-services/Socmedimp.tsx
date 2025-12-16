"use client"
import React, { useState } from 'react'

import Request from "@/app/request-form";
import Seoimpcard from '../conversion-rate-optimization-services/Seoimpcard';
import Image from 'next/image';
export default function Socmedimp() {
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
                Why Social Media Marketing Is Essential for Your Business?
              </h2>
              <div className='seoimpcard_con'>
                <Seoimpcard impcardtitle="Increased Brand Visibility" impcardpara='Social media marketing services enhance your brand’s visibility, ensuring you connect with potential customers across various platforms. Statistics show that businesses with active social media profiles see a 32% increase in customer engagement.' />
                <Seoimpcard impcardtitle="Higher Conversion Rates" impcardpara='A well-executed social media strategy drives conversions. According to recent studies, 74% of consumers rely on social media to make purchasing decisions. Our social media management agency optimizes campaigns to turn followers into loyal customers.' />
                <Seoimpcard impcardtitle="Cost-Effective Marketing" impcardpara='Social media advertising services offer one of the most cost-effective ways to promote your business. With precise targeting and flexible budgets, businesses see up to a 3x return on ad spend.' />
                <Seoimpcard impcardtitle="Measurable Results and Continuous Optimization" impcardpara='Our social media management services include real-time analytics, enabling us to tweak strategies for optimal performance. Metrics like reach, impressions, and audience demographics provide actionable insights for sustained growth.' />
              </div>
              <div className='mt-4'>
                <button className='b2b-btn b2b-btn-sm m-0' onClick={toggleModal} data-aos="fade-up">Request A Quote</button>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className='seobanner' data-aos="fade-up">
              <Image src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/woman-is-waving-her-hand-while-she-is-using-computer-with-facebook-app-screen_xfnsp7.jpg'
                alt='' width={1000} height={500} />
            </div>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  )
}
