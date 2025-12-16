"use client";
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import Request from "./request-form";
import { Player } from "@lottiefiles/react-lottie-player";
import "./banner-hom.css"
import Marquee from "react-fast-marquee";
import Image from "next/image";
export default function HomeBanner() {
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
      {/* <div className="bannerSection pt-md-5 pt-3 pb-md-5 pb-1"
        style={{
          backgroundImage:'url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh.svg")',
          backgroundRepeat: 'no-repeat'
        }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <p className="typewriterWrap d-flex align-items-center gap-2 m-0">
                <span className="sub_heading">Build Your</span>
                <span className="sub_heading">
                  <Typewriter
                    options={{
                      strings: strings.map(
                        (item) =>
                          `<span style="color:${item.color}">${item.text}</span>`
                      ),
                      autoStart: true,
                      loop: true,
                      delay: 75,
                    }}
                  />
                </span>
              </p>
              <div className="lower_text_con">
                <div className="pt-3">
                  <h1 className="sub_text text-white banner_text_inner">with Flawless Technology,</h1>
                  <h2 className="sub_text text-white banner_text_inner">Design and Execution</h2>
                </div>
                <p className="sub_text text-white mt-4">
                  Let's Build something Digital together, We are Leading
                  <p>Innovative Partner for Start-ups and Enterprises</p>
                </p>
                <p className="mt-4">
                  <button
                    onClick={toggleModal}
                    className="b2b-btn b2b-btn-sm m-0"
                  >
                    Request a Quote
                  </button>
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <Player
                src="/json/banner/home page.json"
                loop
                autoplay
                className="animated-imgs  animated-banner-img"
              />
            </div>
          </div>
        </div>
      </div> */}
      <div className="position-relative">
        <div
          className="home_banner_new d-flex flex-column align-items-center" >

          <div className="inner_banner_con">
            <div>
              <h2 className="b2b-heading text-white text-center new_banner_text ">
                Empowering <span className="sub_heading_new_banner new_banner_color">Businesses</span> With <br /> Seamless <span className="sub_heading_new_banner new_banner_color"> Websites,</span> Intuitive <span className="sub_heading_new_banner new_banner_color">Apps</span> <br />
                & Data-Driven <span className="sub_heading_new_banner new_banner_color">Marketing</span>
              </h2>
            </div>
            <div className="d-flex justify-content-center">
              <p className="">
                <button
                  onClick={toggleModal}
                  className="b2b-btn b2b-btn-sm m-0"
                >
                  Request a Quote
                </button>
              </p>
            </div>
            <div className="w-100 d-flex justify-content-center">
              <div className="d-flex justify-content-center align-items-center banner_rating_bar">
                <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480261_fe3ebc_e022fb5a-08c2-4d8a-b4dc-ab6a0c29f965.png"
                  width={1000}
                  height={500}
                  alt=""
                />
                4.9 out of 5 (89+ Reviews)
              </div>
            </div>
            <div className="text-center d-flex justify-content-center pt-sm-2 pb-sm-2">
              <p className="new_banner_italic_p m-0" >
                Trusted by over 200+ innovative eCommerce brands, we’re your partner in success.
              </p>
            </div>
          </div>
          <div className="new_banner_marque w-100">
            <div className="b2b-container-lg">
              <Marquee className="w-100 new_banner_marque">
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo6_pdrvad.png" className='social_logo_new_banner' priority alt=""
                    // quality="auto" 
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo2_nqqdal.png" className='social_logo_new_banner' priority alt=""
                    // quality="auto" 
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo5_kyxwdv.png" className='social_logo_new_banner' priority alt=""
                    // quality="auto" 
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo4_rhb1jf.png" className='social_logo_new_banner' priority alt=""
                    // quality="auto" 
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo3_sr1vyn.png" className='social_logo_new_banner' priority alt=""
                    // quality="auto" 
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo1_fityqe.png" className='social_logo_new_banner' priority alt=""
                    // quality="auto" 
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo7_vofbro.png" className='social_logo_new_banner' priority alt=""
                    // quality="auto" 
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/iso-logo_al1xmo.png" className='social_logo_new_banner' priority alt=""
                    // quality="auto" 
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo2_nqqdal.png" className='social_logo_new_banner' priority alt=""
                    // quality="auto"
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo5_kyxwdv.png" className='social_logo_new_banner' priority alt=""
                    // quality="auto" 
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo4_rhb1jf.png" className='social_logo_new_banner' priority alt=""
                    // quality="auto" 
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo3_sr1vyn.png" className='social_logo_new_banner' priority alt=""
                    // quality="auto" 
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo1_fityqe.png" className='social_logo_new_banner' priority alt=""
                    // quality="auto"
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/iso-logo_al1xmo.png" className='social_logo_new_banner social_logo_new_banne2 ' priority alt=""
                    // quality="auto" 
                    width={1000}
                    height={100} />
                </div>
                <div>
                  <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/adob.png" className='social_logo_new_banner social_logo_new_banne2 ' priority alt=""
                    // quality="auto"
                    width={1000}
                    height={100} />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
        <div className="banner_gradent">
        </div>
      </div>
      {showModal &&
        <Request onCloseModal={toggleModal} />
      }
    </>
  );
}