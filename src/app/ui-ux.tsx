'use client'
import { useEffect } from 'react';

import React, { useState } from "react";   

import UiUx from '../../public/graphics/ui-ux.svg';
import UiUxIcons from '../../public/graphics/ui-ux-icons.svg';

import Request from "./request-form";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Player } from '@lottiefiles/react-lottie-player';

export default function UIUX() {
 
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
      setShowModal(!showModal);
      setTimeout(function() {
        const ModalBody = document.querySelector(".request-form");
        if(ModalBody){
          ModalBody.classList.add("transformAnim");
        }
                                 
        }, 200);
    };

  return (

    <>  
    <div className="py-5" data-aos="fade-up"> 
        <div className="graphic-ser-head text-white text-center px-4">
            <h2 className='b2b-heading' data-aos="fade-up" data-aos-delay="300">We Use Cutting-Edge Tools to Craft Exceptional Experiences!</h2>
            <p className="b2b-text text-white" data-aos="fade-up" data-aos-delay="300">Our team of experts use cutting-edge tools like Figma, Adobe XD, Photoshop, and Illustrator to craft innovative graphic designs and intuitive UI/UX experiences. These industry-standard platforms enable us to deliver high-quality solutions tailored to your unique needs and preferences, ensuring exceptional results every time.</p>
            <img className="mt-4 ui-ux-tool-img" src={UiUxIcons.src} alt="ui/ux"  data-aos="fade-up" data-aos-delay="300"/>
        </div>
            
    </div>
    <div className="py-5 b2b-dblack-bg"> 
        <div className="b2b-container-lg">
            <div className="row align-items-center">
                <div className='col-lg-6 col-md-6 order-md-1 order-2 uiux-cta'>
                    <h2 className='b2b-heading' data-aos="fade-up" data-aos-delay="300">
                        Begin Your UI/UX and Graphic Design Journey with Us Today</h2>
                    <p className="b2b-text text-white" data-aos="fade-up" data-aos-delay="300">Book a free discovery session</p>
                    <button onClick={toggleModal} className="b2b-btn b2b-btn-sm m-0"  data-aos="fade-up" data-aos-delay="300">Request a Quote</button>
                </div>
                <div className='col-lg-6 col-md-6 order-md-2 order-1 mb-md-0 mb-4'>
                <Player src="\json\ui-ux.json" loop autoplay className="animated-imgs animated-banner-img small_json" />

                    {/* <img className='w-100 ui-ux-img' src={UiUx.src} alt="" data-aos="fade-up" data-aos-delay="300" /> */}
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