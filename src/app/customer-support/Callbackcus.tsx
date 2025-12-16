"use client"
import React, { useState } from "react";
import Callbackform from "./Callbackform";

export default function Callbackcus() {
    const [callfrom,setCallForm] = useState(false)
    const callbackopup = () => {
        setCallForm(!callfrom);
      };
  return (
    <div className="main_call_back_outer">
       <div className="call_back_cus_outer" onClick={callbackopup}>
      <div className="call_back_inner b2b-btn">
        <div className="cback_svg">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><animate fill="freeze" attributeName="fill-opacity" begin="0.84s" dur="0.21s" values="0;0"/><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.84s" values="64;0"/><animateTransform id="lineMdPhoneCallTwotoneLoop0" fill="freeze" attributeName="transform" begin="0.84s;lineMdPhoneCallTwotoneLoop0.begin+3.78s" dur="0.7s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"/></path><path stroke-dasharray="4" stroke-dashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallTwotoneLoop0.begin+0s" dur="3.78s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4"/></path><path stroke-dasharray="6" stroke-dashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"><animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallTwotoneLoop0.begin+0.28s" dur="3.78s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6"/></path></g></svg>
        </div>
        <div className="cback_text">
          <p className="m-0 text-white">Get a Call Back</p>
        </div>
      </div>
       </div>
       <div className={!callfrom ? "call_back_popup" :"call_back_popup call_back_popup_active"}>
          <div className="position-relative" >
          <div className="call_back_cross" onClick={callbackopup}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 15 15"><path fill="#fff" d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27"/></svg>
            </div>
            <Callbackform/>
          </div>
       </div>
    </div>
  );
}
