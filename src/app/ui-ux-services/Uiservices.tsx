"use client";
import React from "react";
import UISercard from "./UISercard";
import Link from "next/link";
import Image from "next/image";

export default function Uiservices() {
  return (
    <div className="ui_bg">
      <div className="cus_container_con pt-5 pb 5">
        <div className="services_text_sec">
          <div className="row">
            <div className="col-12 col-lg-7 d-flex">
              <h2 className="ui_services_heading" data-aos="fade-up">
                <span className="ui_border_text_white">Design</span> <br />
                <span className="ui_skyblue"> Services</span>
              </h2>
            </div>
            <div className="col-12 col-lg-5">
              <div className="service_banner" data-aos="fade-up">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Saly-13_jxzqvr.webp"
                  width={1000}
                  alt=""
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="services_card">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6 col-xl-4">
              <Link href="/social-media-management-services">
                <div className="pt-4 pt-xl-0">
                  <UISercard
                    card_bg_ing="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_11_qifb5h.png"
                    card_title="Social Media Design"
                  />
                </div>
              </Link>
              <Link href="/web-mobile-app-design-services">
                <div className="pt-4">
                  <UISercard
                    card_bg_ing="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/empty_phone_screen_00025_rxy6fz.png"
                    card_title="App Design"
                  />
                </div>
              </Link>
            </div>
            <div className="col-12 col-lg-6 col-xl-4">
              <Link href="/web-mobile-app-design-services">
                <div className="pt-4 pt-xl-0 h-100 uiux_services_2ndlastcard">
                  <UISercard
                    card_bg_ing="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_12_e4hfs1.png"
                    card_title="Website Design"
                    center_con="center_ser_con"
                  />
                </div>
              </Link>
            </div>
            <div className="col-12 col-lg-12 col-xl-4">
              <Link href="/motion-graphic-video-services">
                <div className="pt-4 pt-xl-0 h-100 uiux_services_lastcard">
                  <UISercard
                    card_bg_ing="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_3_lgb1ll.png"
                    card_title="Motion Graphics & Video"
                    center_con="center_ser_con"
                  />
                </div>
              </Link>
            </div>
            {/* <div className="col-12 col-md-12 col-xl-4 col-xl-4 row p-0 p-xl-auto">
              <div className="pt-4 pt-xl-0 col-12 col-md-6 col-xl-12">
                <UISercard
                  card_bg_ing="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480797_hvtrpx.png"
                  card_title="Motion Graphics & Video"
                />
              </div>
              <div className="pt-4 col-12 col-md-6 col-xl-12">
                <UISercard
                  card_bg_ing="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480796_yisz5n.png"
                  card_title="Brand & Identity"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* Wanna see more? */}
      <div className="pt-5 pb-5 ">
        <div className="text-center see_more_text position-relative">
          <div className="see_more_text_right_flot">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/behance_logo_icon_181504_1_2_gtsy7w_1.png"
              alt=""
              width={1000}
              height={500}
            />
          </div>
          <div className="see_more_arow">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_6_pto50k.webp"
              alt=""
              width={1000}
              height={500}
            />
          </div>
          <h2 className="cool_subheading_text2 ui_skyblue">Wanna see more?</h2>
          <p className="b2b-text">
            And many more works, experiments and Designs are on <br />
            Behance profile.
          </p>
          <div className="pt-4">
            <a href="https://www.behance.net/base2brand" target="_blank">
              <button className="b2b-btn ui_btn b2b-btn-sm m-0">
                More work on Behance
              </button>
            </a>
          </div>
          <div className="see_more_text_left_flot">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/behance_logo_icon_181504_1_1_hzsv6z_1.png"
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
