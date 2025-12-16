"use client";
import Image from "next/image";
import React from "react";

export default function Motion3d() {
  return (
    <div className="b2b-black-bg position-relative">
      <div
        className="black_sm_gradient"
        style={{ height: "120px", top: "-100px" }}
      />
      <div className="row w-lg-100 w_ph_row" style={{ width: "100%" }}>
        <div className="col-12 col-lg-6 motion_3d_banner">
          <Image
            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_112939_kcqsbb.webp"
            alt=""
            width={10000}
            height={300}
          />
        </div>
        <div className="col-12 col-lg-6">
          <div className="webservices_right webservices_right_ph_motion ms-md-5 pb-md-5 pb-0">
            <div className="webservices_right_arrow">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_2_gszrnc.png"
                alt=""
                width={1000}
                height={300}
              />
            </div>
            <h2 className="sm_heading_text2 sm_orange  font_600">
              Make It Pop With
            </h2>
            <h2 className="sm_subheading_text2 sm_skyblue font_800">
              3D Motion
              <br />
              {/* <p className="text-white cool_subheading_text2 font_500">
                  Just Tell Us Your Flavor!
                </p> */}
            </h2>
            <p className="m-0 b2b-text" style={{ lineHeight: "inherit" }}>
              Elevate your visuals with 3D motion graphics animation services
              that add a new dimension to your brand. Our team excels in
              creating lifelike animations that deliver immersive experiences,
              ideal for product demonstrations, architectural visualizations,
              and brand storytelling.
            </p>
            <div className="webservices_lower_arrow">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Objects_nh4jnb_1.webp"
                alt=""
                width={10000}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
