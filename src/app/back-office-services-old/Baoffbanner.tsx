"use client";
import Image from "next/image";
import React from "react";

export default function Baoffbanner() {
  return (
    <div className="main_baoff_banner pt-5 " style={{ background: "#231c41" }}>
      <div className="pt-5 pb-0 pb-lg-5">
        <div className="baoff_banner_con text-center">
          <h1 className="baoff_cus_heading ">
            <span className="baoff_upper_header">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_87_oq4pbm.png"
                alt=""
                width={1000}
                height={500}
              />
              Back Office Customer Support
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707479210_orc90e.png"
                alt=""
                width={1000}
                height={500}
              />
            </span>{" "}
            <br />
            <span className="b2b_2color baoff_lower_header">
              Focus On Growth
            </span>
          </h1>
        </div>
        <div className="baoff_bar">
          <hr />
          <div className="baoff_banner_bar">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Sketch-annotation-element.png"
              alt=""
              width={1000}
              height={500}
            />
            <span className="baoff_bar_heading">Let Us Handle the Rest</span>
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Sketch-annotation-element-stroke-abstract-highlight-ribbon-filled_1_esdyld.png"
              alt=""
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
