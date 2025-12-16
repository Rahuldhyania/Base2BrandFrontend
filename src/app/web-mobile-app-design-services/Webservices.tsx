"use client";
import React from "react";
import Webservicescard from "./Webservicescard";
import Image from "next/image";

export default function Webservices() {
  return (
    <div className="dotted_gradient_bg webservices_banner">
      <div
        className="black_sm_gradient_blue"
        style={{ height: "120px", top: "-100px" }}
      />
      <div className="row pt-lg-5 pb-5 position-relative" style={{ width: "100%" }}>
        <div className="col-12 col-lg-6">
          <div className="webservices_left">
            <div className="cus_container_con">
              <h2 className="sm_heading_text sm_orange  font_700">
                Web & Mobile{' '}
                <br />
                <span className="text-white"> App Design </span>
              </h2>
              <h2 className="sm_banner_text sm_skyblue font_800"> Service </h2>
              <p className="m-0 b2b-text">
                At Base2Brand, we offer cutting-edge web and mobile app design{" "}
                <br />
                services that focus on enhancing user experience, boosting{" "}
                <br />
                brand identity, and driving conversions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6 position-relative d-flex align-items-end">
          <div className="setting_man d-none d-lg-block">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_76_uqr7p2.webp"
              alt=""
              width={10000}
              height={300}
            />
          </div>
          <div className="webservices_">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_14_p24pfg.webp"
              alt=""
              width={10000}
              height={500}
              className="d-none d-lg-block"
            />
            <Image src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_75_xwob5b.webp" alt="" width={10000} height={500} className="d-block d-lg-none mt-4 mt-lg-0" />
          </div>
        </div>
      </div>
      <div className="position-relative overflow-hidden pb-5">
        <div className="chain_left">
          <Image
            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/gradient_glass_1_spd5zp.webp"
            alt=""
            width={10000}
            height={300}
          />
        </div>
        <div className="cus_container pt-lg-5 pb-md-5 pb-3 position-relative" style={{ zIndex: "1" }}>
          <div className="text-center">
            <h2 className="cool_subheading_text2  sm_skyblue" data-aos="fade-up">
              Wanna see more?
            </h2>
            <p className="m-0 b2b-text" data-aos="fade-up">
              And many more works, experiments and Designs are <br /> on Behance
              profile.
            </p>
            <div className="pt-4 position-relative" data-aos="fade-up">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/behance_logo_icon_181504_1_2_gtsy7w.png"
                alt=""
                width={1000}
                height={500}
                className="behance_left_flowting"
              />
              <a href="https://www.behance.net/base2brand" target="_blank">
                <button className="sm_btn b2b-btn b2b-btn-sm m-0">
                  See more on Behance
                </button>
              </a>
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/behance_logo_icon_181504_1_1_hzsv6z.png"
                alt=""
                width={1000}
                height={500}
                className="behance_right_flowting"
              />
            </div>
          </div>
        </div>
        <div className="pt-lg-5 webcard_bg position-relative">
          <Webservicescard />
        </div>
        <div className="chain_right">
          <Image
            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/gradient_glass_1_spd5zp.webp"
            alt=""
            width={10000}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
