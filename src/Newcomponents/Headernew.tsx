"use client";
import React from "react";
import "./Headernew.css";
import Newbutton from "./Newbutton";
import Navbar from "./Newnavbar";
import Image from "next/image";
export default function Headernew() {
  return (
    <div style={{ margin: "0 2%" }}>
      <div className="new_header_inner">
        <Image
          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/31-31_1_1_nfvbj1.png"
          width={2000}
          height={500}
          decoding="async"
          alt="Sample Cloudinary Image"
          className="header_image"
          style={{ maxHeight: "55px" }}
        />
        <Navbar />
        <div>
          <Newbutton
            btnname="Get in Touch"
            color="#fff"
            hovercolor="#000"
            pagelink="/contact-us"
          />
        </div>
      </div>
    </div>
  );
}
