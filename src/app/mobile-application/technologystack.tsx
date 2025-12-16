'use client'

import React from "react";  
import mobile from "../../../public/mobile/1.png"; 
import mobile1 from "../../../public/mobile/2.png"; 
import mobile2 from "../../../public/mobile/3.png"; 
import mobile3 from "../../../public/mobile/4.png"; 
import mobile4 from "../../../public/mobile/5.png"; 
import mobile5 from "../../../public/mobile/6.png"; 
import mobile6 from "../../../public/mobile/7.png"; 
import mobile7 from "../../../public/mobile/8.png"; 
import mobile8 from "../../../public/mobile/9.png"; 
import mobile9 from "../../../public/mobile/10.png"; 

export default function technologystack() {
   
  return (
    <>  
      <div className="container-fluid p-5 mb-5"> 
         <div className="row">
            <div className="col-md-12 text-center text-white mb-5" data-aos="fade-up"> 
                <h2>Our Technology Stack</h2>
            </div>
            <div className="col borderStack">
                <img src={mobile.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={mobile1.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={mobile2.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={mobile3.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={mobile4.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={mobile5.src} alt=""   />
            </div>
            <div className="col borderStack">
                <img src={mobile6.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={mobile7.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={mobile8.src} alt="" />
            </div>
            <div className="col borderStack">
                <img src={mobile9.src} alt="" />
            </div>
         </div>

      </div> 
    </>
  )
}
