'use client'
import { useEffect } from 'react';

import React from "react";

import Image from 'next/image';


export default function engagementmodal() {



  return (
    <>
      <div className="p-5 b2b-gray-bg mobileAppWrap" data-aos="fade-up">
        <div className="container">
          <div className="row p-2">
            <div className="col-md-12 mx-auto text-center">
              <h2 className='text-white b2b-main-heading text-center' data-aos="fade-up" data-aos-delay="300">Industries That Benefit <br /> A Lot From Mobile Apps
              </h2>
            </div>
            <div className="col-lg-10 m-auto mt-5">
              <div className='row row-cols-md-5 row-cols-sm-3  row-cols-2'>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD">
                    <div className="cell-wrap">
                      <Image
                        width="100"
                        height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit1_oz6fim.svg" className="imgIcon" alt="" />
                      <span>Health Care</span>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD">
                    <div className="cell-wrap">
                      <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit2_fa3ldp_1.svg" className="imgIcon" alt="" />
                      <span>E-Commerce</span>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD">
                    <div className="cell-wrap">
                      <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit3_ygcz7m.svg" className="imgIcon" alt="" />
                      <span>E-Learning</span>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD">
                    <div className="cell-wrap">
                      <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit4_h2dvyj.svg" className="imgIcon" alt="" />
                      <span>Travel</span>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD">
                    <div className="cell-wrap">
                      <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit5_ubpje5.svg" className="imgIcon" alt="" />
                      <span>Logistic</span>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD">
                    <div className="cell-wrap">
                      <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit6_bmqckc.svg" className="imgIcon" alt="" />
                      <span>Saas</span>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD">
                    <div className="cell-wrap">
                      <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit7_ebymha.svg" className="imgIcon" alt="" />
                      <span>Fintech</span>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD">
                    <div className="cell-wrap">
                      <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit8_fqoxu9.svg" className="imgIcon" alt="" />
                      <span>Restaurant</span>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD">
                    <div className="cell-wrap">
                      <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit9_mchdoe.svg" className="imgIcon" alt="" />
                      <span>On Demand </span>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient blueGD">
                    <div className="cell-wrap">
                      <Image width="100" height="100" src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit10_dvl1se.svg" className="imgIcon" alt="" />
                      <span>Social Media</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </>
  )
}