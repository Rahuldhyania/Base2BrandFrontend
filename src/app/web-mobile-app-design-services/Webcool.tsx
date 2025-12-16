"use client";
import Image from "next/image";
import React from "react";

export default function Webcool() {
  return (
    <div className="b2b-black-bg position-relative">
      <div
        className="black_sm_gradient"
        style={{ height: "120px", top: "-100px" }}
      />
      <div className="row w-lg-100 w_ph_row" style={{ width: "100%" }}>
        <div className="col-12 col-lg-6 collbanner_outer">
          <Image
            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_5_thbweq.webp"
            alt=""
            width={10000}
            height={300}
          />
        </div>
        <div className="col-12 col-lg-6">
          <div className="webservices_right">
            <div className="webservices_right_arrow">
              <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_2_gszrnc.png" alt="" width={1000} height={300} />
            </div>
            <h2 className="sm_heading_text2 sm_orange  font_600">
              We Cook Up Cool
            </h2>
            <h2 className="sm_subheading_text2 sm_skyblue font_800">
              Websites & Apps
              <br />
              <p className="text-white cool_subheading_text2 font_500">
                Just Tell Us Your Flavor!
              </p>
            </h2>
            <p className="m-0 b2b-text">
              At Base2Brand, we recognize that every business has unique needs. That’s why we offer <br />
              a wide range of services for your web design and app design needs.
            </p>
            <div className="webservices_lower_arrow">
              <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Objects_nh4jnb.webp" alt="" width={10000} height={300} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
