"use client"
import React, { useState } from 'react'
import Request from "@/app/request-form";
import Seoimpcard from '../conversion-rate-optimization-services/Seoimpcard';
import Image from 'next/image';
export default function Ecommarimp() {
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
                Why E-Commerce Marketing Is Essential <br /> for Your Business
              </h2>
              <div className='seoimpcard_con'>
                <Seoimpcard impcardtitle="Increased Brand Visibility" impcardpara='Our e-commerce marketing services enhance your online presence, ensuring your brand is discoverable and recognized by potential customers.' />

                <Seoimpcard impcardtitle="Higher Conversion Rates" impcardpara='We optimize campaigns to convert visitors into loyal customers through seamless shopping experiences and targeted e-commerce online marketing strategies.' />

                <Seoimpcard impcardtitle="Scalable Growth" impcardpara='Our scalable digital marketing solutions grow alongside your business, adapting to new markets, products, and opportunities with ease.' />

                <Seoimpcard impcardtitle="Cost-Effective Marketing" impcardpara='E-commerce marketing delivers high ROI through affordable strategies like SEO, paid ads, and social media, ensuring maximum impact.' />

                <Seoimpcard impcardtitle="Measurable Results and Optimization" impcardpara='Our services include detailed analytics, enabling continuous improvement through data-driven insights and regular performance reporting for effective campaigns.' />
              </div>
              <div className='mt-4'>
                <button className='b2b-btn b2b-btn-sm m-0' onClick={toggleModal} data-aos="fade-up">Request A Quote</button>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className='seobanner' data-aos="fade-up">
              <Image src='https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_63_i0ovlz.jpg'
                alt='' width={1000} height={500} />
            </div>
          </div>
        </div>
      </div>
      {showModal && <Request onCloseModal={toggleModal} />}
    </div>
  )
}
