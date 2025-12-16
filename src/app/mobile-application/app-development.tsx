"use client";

import React from "react";  
import banner from '../../../public/mobile/mobileimg.png';   

export default function Marketing() {
 
  return (
    <> 
      <div className="container mt-5 mb-5" data-aos="zoom-in">
        <div className="text-center text-white">
            <h2 className="mb-5">Our App Development Services </h2>
            <img src={banner.src} alt="" />
        </div>
      </div>
    </>
  );
}

