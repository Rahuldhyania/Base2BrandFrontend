"use client";
import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Link from "next/link";
import "../project.css";
import Image from "next/image";
export default function home() {
  return (
    <div className="w-100 section-padding-hm-serv blackGradient mt-5">
      <div className="b2b-container-lg">
        <div className="col-md-12 d-flex flex-column align-items-center">
          <div className="text-center">
            <h2 className="b2b-heading">
              We Excel in Shopify Development Services
            </h2>
          </div>
          <div className="col-md-8">
            <div className="text-center">
              <p className="b2b-title-text text-center">
                In Shopify development services, we don&apos;t just meet
                expectations; we exceed them. With a proven track record of
                success, we outperform in every aspect of Shopify development.
              </p>
            </div>
          </div>
        </div>

        <div className="row d-flex flex-wrap ">
          {/* <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 shopify_bar_cusmargin">
            <div className="tab-content" id="pills-tabContent">
              <a
                href="https://www.shopify.com/partners/directory/partner/base2brand4"
                target="_blank"
              >
                <div
                  className="tab-pane fades show active d-flex flex-wrap align-items-center justify-content-center"
                  id="pills-digital"
                  role="tabpanel"
                  aria-labelledby="pills-digital-tab"
                >

                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/shopifycertified.png"
                    alt=""
                    width={1000}
                    height={500}
                  />
                </div>
              </a>
            </div>
          </div> */}
          <div className="col-sm-12 shopify_bar_cusmargin" id="WEB">
            <div
              className="nav flex-column nav-pills me-3"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
              aria-hidden="true"
            >
              <div className="d-flex justify-content-between flex-wrap tabs_link_warp">
                <div
                  className="tabs_link b2b-text"
                  role="tab"
                  id="tab-1"
                  aria-controls="panel-1"
                  tabIndex={0}
                  aria-hidden="true"
                >
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/sh1_ltndhi.svg"
                    width={100}
                    height={100}
                    className="social_icons me-3"
                    alt=""
                  />
                  <a
                    className="text-white"
                    href="/hire-shopify-developers"
                  >
                    ERP Software
                  </a>
                </div>
                <div
                  className="tabs_link b2b-text"
                  role="tab"
                  id="tab-2"
                  aria-controls="panel-2"
                  tabIndex={0}
                  aria-hidden="true"
                >
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/sh2_gxzr2y.svg"
                    width={100}
                    height={100}
                    className="social_icons me-3"
                    alt=""
                  />
                  <a
                    className="text-white"
                    href="/hire-shopify-developers"
                  >
                    Shopify API Integration
                  </a>
                </div>
                <div
                  className="tabs_link b2b-text"
                  role="tab"
                  id="tab-3"
                  aria-controls="panel-3"
                  tabIndex={0}
                  aria-hidden="true"
                >
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/sh3_xvpimt.svg"
                    width={100}
                    height={100}
                    className="social_icons me-3"
                    alt=""
                  />
                  <a
                    className="text-white"
                    href="/hire-shopify-developers"
                  >
                    Custom apps & Integrations
                  </a>
                </div>
                <div
                  className="tabs_link b2b-text"
                  role="tab"
                  id="tab-5"
                  aria-controls="panel-5"
                  tabIndex={0}
                  aria-hidden="true"
                >
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/sh5_vmjjl9.svg"
                    width={100}
                    height={100}
                    className="social_icons me-3"
                    alt=""
                  />
                  <a
                    className="text-white"
                    href="/hire-shopify-developers"
                  >
                    CRM
                  </a>
                </div>
                <div
                  className="tabs_link b2b-text"
                  role="tab"
                  id="tab-5"
                  aria-controls="panel-5"
                  tabIndex={0}
                  aria-hidden="true"
                >
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/sh5_vmjjl9.svg"
                    width={100}
                    height={100}
                    className="social_icons me-3"
                    alt=""
                  />
                  <a
                    className="text-white"
                    href="/hire-shopify-developers"
                  >
                    POS
                  </a>
                </div>
                <div
                  className="tabs_link b2b-text"
                  role="tab"
                  id="tab-4"
                  aria-controls="panel-4"
                  tabIndex={0}
                  aria-hidden="true"
                >
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/sh4_scer6d.svg"
                    width={100}
                    height={100}
                    className="social_icons me-3"
                    alt=""
                  />
                  <a
                    className="text-white"
                    href="/hire-shopify-developers"
                  >
                    CRO (Conversion Rate Optimization)
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="shopify_cus_heading pt-5">
                <h2 className="b2b-sub-heading text-center">
                  Our ERP Integration Services
                </h2>
              </div>
              <div className="d-flex flex-wrap home_shpoify_bar ">
                <div className="home_shpoify_bar_img">
                  <Link href="/uni-commerce">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480253_tp02vy.png"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="home_shpoify_bar_img">
                  <Link href="/odoo">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Odoo_logo.svg_1_ylvygw.png"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </Link>
                </div>
                <div className="home_shpoify_bar_img">
                  <Link href="/easy-ecom">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/easyecom_logo.png"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </Link>
                </div>

                <div className="home_shpoify_bar_img">
                  <Link href="/increff">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/increfff_1_w0runh.png"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </Link>
                </div>

                <div className="home_shpoify_bar_img">
                  <Link href="/orderwise">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Orderwise.png"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </Link>
                </div>



                <div className="home_shpoify_bar_img">
                  <Link href="/custom-recharge">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/customrecharge.png"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </Link>
                </div>
              </div>
              <div className="home_shpoify_bar_btn pt-5">
                {/* <Link href='/shopify' className='remove_under_line' data-aos="fade-up-left" data-aos-delay="900"> */}
                <a href="/hire-shopify-developers" className="m-auto">
                  <button className="b2b-btn b2b-btn-sm mt-4 m-0">
                    {" "}Read More{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="d-flex home_shpoify_bar_outer b pt-5 pb-2">
          <div className="col-lg-3 shopify_bar_heading">
            Our ERP Integration <br /> Services
          </div>
          <div className="col-lg-9 d-flex flex-wrap home_shpoify_bar ">
            <div className="home_shpoify_bar_img">
              <Link href="/uni-commerce">
                <Image
                  src=https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480253_tp02vy.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </Link>
            </div>

            <div className="home_shpoify_bar_img">
              <Link href="/easy-ecom">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/63a4b8b4ed5955b52a15eaf2_easyecom_logo-2_4_1_2_vbeaul.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </Link>
            </div>

            <div className="home_shpoify_bar_img">
              <Link href="/increff">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/increfff_1_w0runh.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </Link>
            </div>

            <div className="home_shpoify_bar_img">
              <Link href="/orderwise">
                <Image
                  src=" "
                  alt=""
                  width={1000}
                  height={500}
                />
              </Link>
            </div>

            <div className="home_shpoify_bar_img">
              <Link href="/odoo">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Odoo_logo.svg_1_ylvygw.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </Link>
            </div>

            <div className="home_shpoify_bar_img">
              <Link href="/custom-recharge">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480249_1_nrjkfb.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
