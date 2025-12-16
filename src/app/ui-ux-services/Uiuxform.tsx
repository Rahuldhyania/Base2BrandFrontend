"use client";

import React from "react";
import Uifrom from "../customer-support/Uiform";
import Image from "next/image";

export default function Uiuxform() {
  return (
    <div className="ui_form_con">
      <div className="cus_container_con pt-5 pb-5">
        <div className="row">
          <div className="col-12 col-lg-5 d-flex" data-aos="fade-up" data-aos-duration="500">
            <div className="ui_form_outer">
              <div className="ui_form_p">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_84_axuzml.png"
                  alt=""
                  width={1000}
                  height={500}
                  className="w-auto pt-3 pb-3"
                />
                <h2 className="ui_cus_heading_lower">
                  Begin Your <span className="text-white"> UI/UX </span> <br />
                  and <span className="text-white"> Graphic Design </span>{" "}
                  <br />
                  Project Journey with <br />
                  <span className="text-white"> Us Today </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 d-none d-lg-flex align-items-center" data-aos="fade-up" data-aos-duration="600">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Sketch-annotation-element-stroke-line-arrow-hand-zigzag-non-filled_y48ndu.png"
              alt=""
              width={1000}
              height={500}
            />
          </div>
          <div className="col-12 col-lg-5 mt-4 mt-lg-0" data-aos="fade-up" data-aos-duration="700">
            <div className="ui_form_sec">
              <Uifrom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
