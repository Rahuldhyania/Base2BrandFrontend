"use client"
import React, { useState } from 'react'
import Request from "@/app/request-form";
import Seoimpcard from '../conversion-rate-optimization-services/Seoimpcard';
import Image from 'next/image';
export default function Conserimp() {
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
                Why Content Writing Services Are Crucial <br /> for Your Brand?
              </h2>
              <div className='seoimpcard_con'>
                <Seoimpcard impcardtitle="Build Brand Authority" impcardpara='Effective content writing services establish your brand as an industry leader. Businesses with consistent content see a 60% increase in audience trust and engagement, driving long-term credibility and influence.' />

                <Seoimpcard impcardtitle="Boost Online Visibility" impcardpara='Our SEO and content writing services enhance your online presence. Businesses using SEO content writing services report 70% higher website traffic and improved search engine rankings, resulting in a 55% increase in online visibility.' />

                <Seoimpcard impcardtitle="Engage and Retain Customers" impcardpara='High-quality content keeps customers engaged. Companies investing in the best website content writing services see a 45% increase in repeat visitors, a 35% improvement in customer retention, and greater brand loyalty.' />

                <Seoimpcard impcardtitle="Cost-Effective Marketing" impcardpara='Content writing services offer long-term value. Businesses using our SEO content writing services achieve 3x ROI through improved traffic, conversions, and brand awareness, with cost-effective returns on marketing investments.' />

                <Seoimpcard impcardtitle="Data-Driven Insights" impcardpara='Our content writing agency uses analytics to deliver measurable results. Metrics like engagement rates (up by 50%) and search rankings (improvement of 40%) guide continuous improvement for sustained success.' />
              </div>
              <div className='mt-4'>
                <button className='b2b-btn b2b-btn-sm m-0' onClick={toggleModal} data-aos="fade-up">Request A Quote</button>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className='seobanner' data-aos="fade-up">
              <Image src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/company-worker-using-documents-research-laptop-take-notes_rhofye.jpg'
                alt='' width={1000} height={500} />
            </div>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  )
}
