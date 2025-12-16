"use client"

import Image from 'next/image'
import React from 'react'

export default function Aisulution() {
  return (
    <div className='bg_home'>
      <div
        style={{
          backgroundImage: 'url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh.svg")',
          backgroundRepeat: 'no-repeat',
          width: "100%"
        }}>
        <div className="container pt-5 pb-5">
          <div className="text-center">
            <h2 className='b2b-partners-heading text-white' data-aos="fade-up">
              Why Choose Our AI Solutions?
            </h2>
          </div>
          <div className='row justify-content-center text-center text-sm-start'>
            <div className='col-md-6 col-xl-4 mt-4'>
              <div className="tcard3" data-aos="fade-up">
                <div className="tcard_inner">
                  <div className="aicard_img">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_5_opqtio.svg"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </div>
                  <div className="tcard_text">
                    <span
                      className="dev_choose_t1  pt-3 pb-2"
                      style={{ color: "#00B4DB" }}
                    >
                      Expert AI Consulting
                    </span>
                    <span className="dev_choose_p text-white">
                      Our team of AI specialists provides comprehensive consulting on artificial intelligence to help businesses implement the right strategies.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-xl-4 mt-4'>
              <div className="tcard3" data-aos="fade-up">
                <div className="tcard_inner">
                  <div className="aicard_img">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Layer_x0020_1_rovzn9.svg"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </div>
                  <div className="tcard_text">
                    <span
                      className="dev_choose_t1  pt-3 pb-2"
                      style={{ color: "#ED8F03" }}
                    >
                      Custom AI Solutions
                    </span>
                    <span className="dev_choose_p text-white">
                      We tailor AI solutions for business needs, ensuring maximum efficiency and scalability.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-xl-4 mt-4'>
              <div className="tcard3" data-aos="fade-up">
                <div className="tcard_inner">
                  <div className="aicard_img">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_4_ht9ber.svg"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </div>
                  <div className="tcard_text">
                    <span
                      className="dev_choose_t1  pt-3 pb-2"
                      style={{ color: "#A8FF78" }}
                    >
                      Proven Results
                    </span>
                    <span className="dev_choose_p text-white">
                      The right DevOps tools streamline communication between
                      developers, testers, and operations teams, ensuring faster
                      issue resolution.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-xl-4 mt-4'>
              <div className="tcard3" data-aos="fade-up">
                <div className="tcard_inner">
                  <div className="aicard_img">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/x32_9_Mind_fknogb.svg"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </div>
                  <div className="tcard_text">
                    <span
                      className="dev_choose_t1  pt-3 pb-2"
                      style={{ color: "#F7BB97" }}
                    >
                      Cutting-Edge Technology
                    </span>
                    <span className="dev_choose_p text-white">
                      We stay ahead of AI advancements to provide businesses with the latest AI-driven tools and solutions.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-xl-4 mt-4'>
              <div className="tcard3" data-aos="fade-up">
                <div className="tcard_inner">
                  <div className="aicard_img">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_5_dsbaoc.svg"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </div>
                  <div className="tcard_text">
                    <span
                      className="dev_choose_t1  pt-3 pb-2"
                      style={{ color: "#74EBD5" }}
                    >
                      End-to-End AI Implementation
                    </span>
                    <span className="dev_choose_p text-white">
                      From strategy development to deployment and optimization, we handle every aspect of AI integration.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
