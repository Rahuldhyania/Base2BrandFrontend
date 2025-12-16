'use client'
import { useEffect } from 'react';
import React, { useState } from "react";
import './project.css';
import CountUp from 'react-countup';
import Image from 'next/image';
import Slide from './slide/page'
import Slide1 from './slide/slide2'
import Slide2 from './slide/slide3'
import Slide3 from './slide/slide4'
import Slide4 from './slide/slide5'
import Request from "./request-form";
import processIcon1Anim from '../../public/json/working-Process/process-icon-1-anim.gif';
import processIcon2Anim from '../../public/json/working-Process/process-icon-2-anim.gif';
import processIcon3Anim from '../../public/json/working-Process/process-icon-3-anim.gif';
import processIcon4Anim from '../../public/json/working-Process/process-icon-4-anim.gif';
import processIcon5Anim from '../../public/json/working-Process/process-icon-5-anim.gif';
import processIcon6Anim from '../../public/json/working-Process/process-icon-6-anim.gif';


export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
    setTimeout(function () {
      const ModalBody = document.querySelector(".request-form");
      if (ModalBody) {
        ModalBody.classList.add("transformAnim");
      }

    }, 200);
  };
  return (
    <>


      <div className="">
        <Slide />

      </div>
      <div className='radialGradient'>
        <div className='b2b-container-lg'>
          <div className='progress-column'>

            <div className='row'>
              <div className='col-lg-6 col-md-6 col-sm-12 header-columns p-3 m-auto'>
                <div className="text-center">
                  <h2 className='text-center b2b-sub-heading-bold text-capitalize' data-aos="fade-up">How We Bring Ideas to Life?</h2>
                  {/* <img src="/img/underline.png" alt="" className='line_working_process'/> */}
                </div>
                {/* <p className='b2b-title-text text-center ' data-aos="fade-up" data-aos-delay="300">How we work for our customer</p> */}
              </div>
            </div>


            <div className='progress-count d-flex flex-wrap justify-content-between b2b-workProcess'>
              <div className="count-col" data-aos="fade-up" data-aos-delay="500">
                <div className='d-flex justify-content-center b2b-workProcess-wrap'>

                  <div className=''>
                    <div className='img-wrap'>
                      <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/process-icon-1_ilnjvv.svg"
                        width="88"
                        height="88"
                        alt=''
                        // quality="auto"
                        className="icon" />
                      <div className='animated-icon-wrap'>
                        <Image src={processIcon1Anim.src} width="88" height="88" alt='' className="animated-icon" />
                      </div>

                    </div>
                    <p className='text-white text-center'>Research</p>
                  </div>
                </div>
              </div>

              <div className="count-col" data-aos="fade-up" data-aos-delay="600">
                <div className='d-flex justify-content-center  b2b-workProcess-wrap'>

                  <div>
                    <div className='img-wrap'>
                      <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/process-icon-2_g82wvv.svg"
                        width="88"
                        height="88"
                        alt=''
                        className="icon" />
                      <div className='animated-icon-wrap'>
                        <Image src={processIcon2Anim.src} width="88" height="88" alt='' className="animated-icon" />
                      </div>
                    </div>
                    <p className='text-white text-center'>Planning</p>
                  </div>
                </div>
              </div>

              <div className="count-col" data-aos="fade-up" data-aos-delay="700">
                <div className='d-flex justify-content-center  b2b-workProcess-wrap'>

                  <div>
                    <div className='img-wrap'>
                      <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/process-icon-3_l1ihmw.svg"
                        width="88"
                        height="88"
                        alt=''
                        className="icon" />
                      <div className='animated-icon-wrap'>
                        <Image src={processIcon3Anim.src} width="88" height="88" alt='' className="animated-icon" />
                      </div>
                    </div>
                    <p className='text-white text-center'>Design</p>
                  </div>
                </div>
              </div>

              <div className="count-col" data-aos="fade-up" data-aos-delay="800">
                <div className='d-flex justify-content-center b2b-workProcess-wrap'>

                  <div>
                    <div className='img-wrap'>
                      <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/process-icon-4_g1sqem.svg"
                        width="88"
                        height="88"
                        alt=''
                        className="icon" />
                      <div className='animated-icon-wrap'>
                        <Image src={processIcon4Anim.src} width="88" height="88" alt='' className="animated-icon" />
                      </div>
                    </div>
                    <p className='text-white text-center'>Development</p>
                  </div>
                </div>
              </div>

              <div className="count-col" data-aos="fade-up" data-aos-delay="900">
                <div className='d-flex justify-content-center b2b-workProcess-wrap'>

                  <div>
                    <div className='img-wrap'>
                      <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/process-icon-5_jfez8t.svg"
                        width="88"
                        height="88"
                        alt=''
                        className="icon" />
                      <div className='animated-icon-wrap'>
                        <Image src={processIcon5Anim.src} width="88" height="88" alt='' className="animated-icon" />
                      </div>
                    </div>
                    <p className='text-white text-center'>Testing</p>
                  </div>
                </div>
              </div>
              <div className="count-col" data-aos="fade-up" data-aos-delay="1000">
                <div className='d-flex justify-content-center b2b-workProcess-wrap'>

                  <div>
                    <div className='img-wrap'>
                      <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/process-icon-6_dyupou.svg"
                        width="88"
                        height="88"
                        alt=''
                        className="icon" />
                      <div className='animated-icon-wrap'>
                        <Image src={processIcon6Anim.src} width="88" height="88" alt='' className="animated-icon" />
                      </div>
                    </div>
                    <p className='text-white text-center'>Launch</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='row mt-4'>
              <div className='col-lg-12 text-center' data-aos="fade-up" data-aos-delay="1200">
                <button onClick={toggleModal} className='b2b-btn b2b-btn-lg'>Request a Quote</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal &&
        <Request
          onCloseModal={toggleModal}
        />
      }
    </>
  )
}