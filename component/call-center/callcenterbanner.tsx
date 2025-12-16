
import React, { useState } from "react";
// import Typewriter from "typewriter-effect";
import Request from "@/app/request-form";
import "./callcenter.css";
import customerbanner1 from "../../public/img/customerbanner1.jpeg";
import radialBg from '../../public/img/radial_bg.svg';
import { Player } from "@lottiefiles/react-lottie-player";
import Csupport from "./csupport";
import Cbtn from "./cbtn";
import Cusoform from "@/app/customer-portform/Customerportform";
export default function HomeBanner() {

  // const [cpopup, setpopup] = useState(false)
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => {
      setShowModal(!showModal);
      setTimeout(function() {
        const ModalBody = document.querySelector(".request-form");
        if (ModalBody) {
          ModalBody.classList.add("transformAnim");
        }
      }, 200);
    };
  return (

    <>
      <div className="bannerSection md-5 pt-1 md-5" style={{ backgroundImage: `url(${radialBg.src})`, backgroundRepeat: 'no-repeat' }}>
        <div className="container pt-5 pt-sm-0">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="typewriterWrap d-flex align-items-center gap-2 callc_banner_animation">
                <h1 className="sub_heading ">Outsource Support To Grow <br />
                  Faster & Become a Unicorn<br />
                  
                </h1>
              </div>
              <p className="sub_text text-white mt-4 call_cen_textban col-md-10 capmton custom_p">
                Helping global tech Unicorn scale faster by taking <br />
                perfect care of their  customer via chat, email,phone
              </p>
              {/* <div className="mt-4">
                <Csupport />
              </div> */}
               <div className="mt-4 d-flex justify-content-start">
              <button onClick={toggleModal} className="b2b-btn b2b-btn-sm m-0">
                Book a Free Demo
              </button>
            </div>
            </div>
            <div className="col-md-6 pb-5 pt-0 d-flex justify-content-center">
              {/* <Player
                src='/json/banner/6MzeMAq9gi.json'
                loop
                autoplay
                className="animated-imgs animated-banner-img"
              /> */}
              <Cusoform/>
            </div>
          </div>
        </div>
        <Cbtn />
       
      </div>
 {showModal && <Request onCloseModal={toggleModal} />}
    </>
  );
}

