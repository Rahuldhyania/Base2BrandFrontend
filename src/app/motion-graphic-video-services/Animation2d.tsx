"use client";
import Image from "next/image";
import React from "react";

export default function Animation2d() {
  return (
    <div>
      <div className="pt-5 position-relative overflow-hidden">
        <div className="bg_volume_left">
          <Image
            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/252982158_xncbn3.webp"
            alt=""
            width={10000}
            height={500}
          />
        </div>
        <div className="bg_volume_right">
          <Image
            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/252982158_xncbn3.webp"
            alt=""
            width={10000}
            height={500}
          />
        </div>
        <div className="container pb-5 position-relative d-flex justify-content-center">
          <Image
            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480967_xejr0x.webp"
            alt="banner"
            width={10000}
            height={500}
            className="animation_upper2d"
          />
          <div className="volume_flotingimg">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_4_zolnpc.webp"
              alt=""
              width={10000}
              height={500}
            />
          </div>
        </div>
        <div className="position-relative">
          <Image
            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480963_lu13ya.webp"
            alt=""
            width={10000}
            height={500}
            className="animation2d_textbg"
          />
          <div className=" text-center aimation2d_text">
            <h2 className="sm_heading_text sm_skyblue font_700">
              Striking <span className="sm_orange"> 2D Animation </span>That{" "}
              <br />
              Speaks Volumes
            </h2>
            <p className="b2b-text">
              Bring your ideas to life with dynamic 2D motion graphic designs.
              Perfect for explainer videos,  promotional<br /> content, and
              advertisements, our motion graphics designers craft visually
              appealing  animations that<br /> simplify complex concepts and resonate
              with your target audience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
