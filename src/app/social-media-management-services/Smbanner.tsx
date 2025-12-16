"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

var marqueeimg = [
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_39_omvsqa.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_39_omvsqa.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_41_edddby.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_42_zf9w7d.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_43_bekgij.png",
  // copy these image for complete marquee container
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_39_omvsqa.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_39_omvsqa.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_41_edddby.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_42_zf9w7d.png",
  "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_43_bekgij.png",
];
export default function Smbanner() {
  return (
    <div className="sm_services_bg">
      <div className="sm_text_marquee pt-5 pb-5">
        <div className="text-center pb-5">
          <h2 className="sm_banner_text sm_skyblue font_700 m-0 position-relative">
            <span className="position-relative">
              <span className="sm_banner_a_bg" />
              <span>So</span>
            </span>
            cial Med
            <span className="position-relative">
              <span className="sm_banner_a_bg_right" />
              <span>ia</span>
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
            Design
            <span className="sm_design_hand">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_1_dckqg6.png"
                alt="*"
                width={1000}
                height={500}
              />
            </span>
          </h2>
        </div>
        <div className="sm_marquee_sec">
          <Marquee>
            {marqueeimg.map((data, index) =>
              <div className="sm_marquee_img_con" key={index}>
                <Image src={data} alt="" width={1000} height={500} />
              </div>
            )}
          </Marquee>
        </div>
        <div className="pt-5 d-flex justify-content-center mb-3">
          {/* <Scrolldown/> */}
          <div className="position-relative">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480904_ghuevz.png"
              alt=""
              width={1000}
              height={500}
              className="cur_point scolldown_img"
            />
            <div className="scroll_arow">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/c604dc7a9e736ea3a9bbfd2cb14891f49ca72e82_1_e0olre.gif"
                alt=""
                width={1000}
                height={500}
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
