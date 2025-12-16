"use client";
import Image from "next/image";
import React from "react";

export default function Webwow() {
  return (
    <div style={{ backgroundColor: "#19203B", position: "relative" }}>
      {/* <div className="black_sm_gradient_blue" style={{bottom:"0",height:"120px"}}></div> */}
      <div className="webwow_container">
        <Image
          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_4_l2lelx.webp"
          alt=""
          width={10000}
          height={500}
          className="d-none d-lg-block "
        />
        <Image
          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_2_5_mmvuzv.webp"
          alt=""
          width={10000}
          height={500}
          className="d-block d-lg-none "
        />
        <div className="row w-lg-100 wow_text">
          <div className="col-12 col-lg-6 d-flex align-items-center">
            <div className=" cus_container_con">
              <h2 className="sm_heading_text2 text-white m-0">From Web To</h2>
              <div className="wow_banner_img">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_2_4_ha1nrh.webp"
                  alt="*"
                  width={10000}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6" />
        </div>
      </div>
    </div>
  );
}
