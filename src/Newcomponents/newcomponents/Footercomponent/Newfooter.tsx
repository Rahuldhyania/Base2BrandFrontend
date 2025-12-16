"use client";
import React from "react";
import "./Newfooter.css";
import Footernavlist from "./Footernavlist";
import { footerdata, socialmedia } from "./Linkingdata";
import Link from "next/link";
import Image from "next/image";

export default function Newfooter() {
  return (
    <div className="new_bg_black pt-5">
      <div className="main_new_footer">
        <div className="new_cus_container py-5">
          <div className=" Footernavlist_outer py-5">
            {footerdata.map((data, index) =>
              <div className="Footernavlist" key={index}>
                <Footernavlist
                  pagetitle={data.title}
                  pagelinklist={data.linklist}
                />
              </div>
            )}
          </div>
          <div className="social_media_container py-3">
            <div className="social_media_inner">
              {socialmedia.map((data, index) =>
                <div
                  className="d-flex align-items-center social_media_linking"
                  key={index}
                >
                  {index !== 0 ? <span className="social_dot" /> : null}
                  <a
                    href={data.pagelink}
                    target="_blank"
                    className="footerlist_title gradient_text"
                  >
                    {data.pagename}
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="py-3">
            <div className="footer_lower_box_outer pt-5">
              <div className="d-flex align-items-center footer_lower_box_logo px-3">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/31-31_1_1_nfvbj1.png"
                  alt=""
                  width={1000}
                  height={500}
                  className="header_image"
                  style={{ width: "319px" }}
                />
              </div>
              <div className="footer_lower_box">
                <h5 className="footerlist_title gradient_text">Working Hours</h5>
                <p className="footerlist_list_li">
                  Mon-Fri: 10 am- 7 pm
                  <br />
                  Sat-Sun: Holiday
                </p>
              </div>
              <div className="footer_lower_box">
                <h5 className="footerlist_title gradient_text">India (headquater) </h5>
                <p className="footerlist_list_li">
                  F-209, Industrial area Phase 8-B,<br />
                  Sector 74, Mohali, 160074, <br />
                  <a
                    href="tel:+919872487850"
                    target="_blank"
                    className="footerlist_list_li"
                  >
                    +91 9872487850
                  </a>
                </p>
              </div>
              <div className="footer_lower_box">
                <h5 className="footerlist_title gradient_text">USA</h5>
                <p className="footerlist_list_li">
                  7311 Gladys Ave, El Cerrito, <br />
                  CA 94530, USA,
                  <br />
                  <a
                    href="tel:+1(720)9035933"
                    target="_blank"
                    className="footerlist_list_li"
                  >
                    {" "}+1 (720) 903-5933
                  </a>
                </p>
              </div>
              <div className="footer_lower_box">
                <h5 className="footerlist_title gradient_text">UK</h5>
                <p className="footerlist_list_li">
                  Ms Ady 114, Bellchase Trail Brampton
                  <br />
                  ON L6P 3LA,
                  <br />
                  <a
                    href="tel:+447552535341 "
                    target="_blank"
                    className="footerlist_list_li"
                  >
                    {" "}+44 7552 535341
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="py-3 text-center text-white">
            © 2025 <Link href="/" className="text-white">base2brand.com.</Link>  All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}
