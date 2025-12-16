'use client'
import { useEffect } from 'react';

import React from "react";
import Image from 'next/image';

export default function ecommerceFunctionality() {



  return (
    <>
      <div className="p-md-5 p-0 " data-aos="fade-up">
        <div className="container">
          <div className="row p-2">
            <div className="col-md-9 col-12 mx-auto text-center">
              <h2 className='text-white b2b-main-heading text-center' data-aos="fade-up" data-aos-delay="300">Improve Your Online Sales with Comprehensive <br />eCommerce Functionality</h2>
              <p className='b2b-text' data-aos="fade-up" data-aos-delay="300">Our comprehensive eCommerce solutions tailored to your business needs. From vendor registration and product catalog management to search and filtering, order management, and analytics reporting, we offer a streamlined platform to empower your online presence. With our expertise, enhance your customers' shopping experience and maximize your business potential in the digital marketplace.</p>
            </div>
            <div className="col-lg-8 m-auto mt-5">
              <div className='row row-cols-md-3 row-cols-2 ecommerceWrap'>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient skyBlueGD">
                    <div className="cell-wrap b2b-gray-bg">
                      <div className='text-center'>
                        <Image
                          width="100"
                          height="100"
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit1_bkn5wn.svg"
                          className="imgIcon" alt="" />
                        <span>Vendor Management</span></div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient skyBlueGD">
                    <div className="cell-wrap b2b-gray-bg">
                      <div className='text-center'>
                        <Image
                          width="100"
                          height="100"
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit2_z0cuae_ec000db0-6d41-4726-9693-826937c95b41.svg"
                          className="imgIcon"
                          alt="" />
                        <span>Product Catalog Management</span></div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient skyBlueGD">
                    <div className="cell-wrap b2b-gray-bg">
                      <div className='text-center'>
                        <Image
                          width="100"
                          height="100"
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit3_fc9den.svg"
                          className="imgIcon" alt="" />
                        <span>Search and Navigation</span></div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient skyBlueGD">
                    <div className="cell-wrap b2b-gray-bg">
                      <div className='text-center'>
                        <Image
                          width="100"
                          height="100"
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit4_ldq802.svg"
                          className="imgIcon" alt="" />
                        <span>Order Management</span></div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient skyBlueGD">
                    <div className="cell-wrap b2b-gray-bg">
                      <div className='text-center'>
                        <Image width="100" height="100"
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit5_htwqld.svg"
                          className="imgIcon"
                          alt="" />
                        <span>Financial Management</span></div>
                    </div>
                  </div>
                </div>
                <div className="col mb-4" data-aos="fade-up" data-aos-delay="300">
                  <div className="hoverGradient skyBlueGD">
                    <div className="cell-wrap b2b-gray-bg">
                      <div className='text-center'>
                        <Image
                          width="100"
                          height="100"
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/benefit6_nqetti.svg" className="imgIcon" alt="" />
                        <span>Analytics and Reporting</span></div>
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