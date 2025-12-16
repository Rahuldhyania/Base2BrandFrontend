"use client";
import Image from "next/image";
import React from "react";
// import motiongif from "./motiongif.gif"
import Creativity from "./Creativity";
export default function Motionbanner() {
  return (
    <div className="sm_services_bg">
      <div className="sm_text_marquee pt-5 pb-5">
        <div className="text-center pb-5 webbanner_text">
          <h2 className="sm_banner_text sm_skyblue font_700 m-0 position-relative">
            <span className="position-relative">
              <span className="sm_banner_a_bg" />
              <span>Mo</span>
            </span>
            tion Vid
            <span className="position-relative">
              <span className="sm_banner_a_bg_right" />
              <span>eo</span>
            </span>
          </h2>
          <h2 className="sm_banner_text sm_design_border font_800 m-0 sm_design_text position-relative">
            <span className="sm_design_strom">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_ulgcqg.png"
                alt="*"
                width={1000}
                height={500}
              />
            </span>
            Editing
            <span className="sm_design_hand">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_ulgcqg_1.png"
                alt="*"
                width={1000}
                height={500}
              />
            </span>
          </h2>
        </div>
        <div>
          {/* <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_3_1_uq7lu6.webp" alt="" width={10000} height={500} /> */}
          {/* <Carousel3DSwiper/> */}
          <video
            src="https://cdn.shopify.com/videos/c/o/v/ac89650e02204e6db8748fde1320b53a.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="d-flex justify-content-center mb-3 mt-lg-5">
          {/* <Scrolldown/> */}
          <div className="position-relative">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480904_ghuevz.png"
              alt=""
              width={10000}
              height={500}
              className="cur_point scolldown_img"
            />
            <div className="scroll_arow">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/c604dc7a9e736ea3a9bbfd2cb14891f49ca72e82_1_e0olre.gif"
                alt=""
                width={10000}
                height={500}
              />
            </div>
          </div>
        </div>
        <Creativity />
      </div>
    </div>
  );
}
