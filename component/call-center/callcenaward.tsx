import React from "react";
import "./callcenter.css";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
export default function HomeBanner() {
  return (
    <div className="main_award overflow-hidden">
      <div className="bannerSection pt-md-5 pt-3 pb-md-5 pb-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-5 d-flex justify-content-center">
              <Player
                src='/json/banner/6MzeMAq9gi.json'
                loop
                autoplay
                className="animated-imgs animated-banner-img"
              />

            </div>
            <div className="col-md-6 ms-3 mb-3">
              <div className="typewriterWrap d-flex align-items-center gap-2 callc_banner_animation">
                <h1 className="sub_heading capmton cs_ph_heading">
                  Award-Winning Excellence in <br /> Customer Support Services
                </h1>
              </div>
              <p className="sub_text text-white award_text mt-4 capmton">
                Base2Brand is proud to be an award-winning leader in customer support
                services. Recognized for our outstanding customer support,
                technical expertise, and seamless operations, we provide
                businesses with reliable, high-quality solutions. Our dedicated
                team ensures every interaction enhances customer satisfaction,
                setting us apart as a trusted partner in delivering exceptional
                customer support experiences.
              </p>
              <div className="mt-4">
                <button className="b2b-btn b2b-btn-sm  m-0 bg-transparent callcenbanner2btn">
                 Get a Free Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
