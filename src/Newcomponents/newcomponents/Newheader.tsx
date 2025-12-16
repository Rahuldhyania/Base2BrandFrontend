"use client";
import React, { useState } from "react";
import Newbutton from "../Newbutton";
import Image from "next/image";

export default function Newheader() {
  const [menubar, setmenubar] = useState(false);
  const [menutalkbar, setmenutalkbar] = useState(false);
  return (
    <div className="updated_header">
      <div className="new_cus_container px-5  position-relative">
        <div className="d-flex justify-content-between align-items-center header_contnent">
          <Image
            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/31-31_1_1_nfvbj1.png"
            width={2000}
            height={500}
            decoding="async"
            alt="Sample Cloudinary Image"
            className="header_image w-auto"
            style={{ height: "70px" }}
          />
          <div className="d-flex gap-5">
            <div onClick={() => setmenutalkbar(!menutalkbar)}>
              <Newbutton
                btnname="LET'S TALK"
                color="#000"
                background="#fff"
                hovercolor="#fff"
                arrow={true}
              />
            </div>
            <div onClick={() => setmenubar(!menubar)}>
              <Newbutton
                btnname={!menubar ? "MENU" : "CLOSE"}
                color="#000"
                background="#fff"
                hovercolor="#fff"
                arrow={true}
              />
            </div>
          </div>
        </div>

        <div
          className={`menu_bar_list ${menubar ? "menu_bar_list_click" : ""} `}
        >
          <ul>
            <li className="menubar_li text-black">Home</li>
            <li className="menubar_li text-black">About Us</li>
            <li className="menubar_li text-black">Services</li>
            <li className="menubar_li text-black">Case Study</li>
            <li className="menubar_li text-black">Portfolio</li>
          </ul>
        </div>
      </div>
      <div className={`talk_from ${menutalkbar ? "talk_from_click" : ""}`} />
    </div>
  );
}
