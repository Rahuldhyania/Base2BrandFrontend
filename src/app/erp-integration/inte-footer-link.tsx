"use client";
// import "./services2.css"
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Intefooterlink() {
  const currentRoute = usePathname();
  console.log(currentRoute);
  return (
    <div
      style={{
        backgroundImage:
          'url("https://cdn.shopify.com/s/files/1/0835/6334/8002/files/radial_bg_orzxvh_2_tfauei_1.svg")',
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="cus_container_con pb-5 pt-5 ">
        <div className="row  justify-content-center">
          <div className="col-lg-8">
            <div className="text-center">
              <h2
                className="b2b-main-heading text-center mb-4 text-uppercase"
              >
                Looking for Other Integration?
              </h2>
            </div>
            <p
              className="text-white text-center b2b-text mb-5"
            >
              We&apos;re not just about mobile app development; we provide a
              comprehensive suite of IT solutions. From web development to
              digital marketing, our services encompass everything your business
              needs to thrive in the digital landscape
            </p>
          </div>
          <div className="col-lg-10">
            <div className="row footer-menue justify-content-center">
              {currentRoute === "/uni-commerce"
                ? ""
                : <div
                  className="col-lg-4 col-md-6 col-sm-8 mb-3"
                >
                  <Link className="menuLink" href="/uni-commerce">
                    <div className="menuInner b2b-pink-bg erp-before">
                      <h3 className="b2b-title-text text-black d-flex align-items-start">
                        Uni-Commerce Integration With Shopify
                      </h3>

                      <div className="d-flex align-items-start justify-content-between">
                        <p className="menuText mb-0">
                          Simplify inventory management with Uni-Commerce
                          integration on Shopify
                        </p>
                        <div className="nav_image">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480204_bdtz0u_1.webp"
                            alt=""
                            width={1000}
                            className="integration_cross_logo"
                            height={500}
                            style={{
                              width: "60px",
                              height: "auto",
                              objectFit: "cover",
                              marginRight: "10px "
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>}
              {currentRoute === "/odoo"
                ? ""
                : <div
                  className="col-lg-4 col-md-6 col-sm-8 mb-3"
                >
                  <Link className="menuLink" href="/odoo">
                    <div className="menuInner b2b-lightBlue-bg erp-before">
                      <h3 className="b2b-title-text text-black d-flex align-items-start">
                        Odoo Integration With Shopify
                      </h3>
                      <div className="d-flex align-items-start justify-content-between">
                        <p className="menuText mb-0">
                          Optimize inventory and business operations with Odoo
                          and Shopify integration
                        </p>
                        <div className="nav_image">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480205_1_zfmg4t.webp"
                            alt=""
                            width={1000}
                            className="integration_cross_logo"
                            height={500}
                            style={{
                              width: "60px",
                              height: "auto",
                              objectFit: "cover",
                              marginRight: "10px "
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>}
              {currentRoute === "/easy-ecom"
                ? ""
                : <div
                  className="col-lg-4 col-md-6 col-sm-8 mb-3"
                >
                  <Link className="menuLink" href="/easy-ecom">
                    <div className="menuInner b2b-pink-bg erp-before">
                      <h3 className="b2b-title-text text-black d-flex align-items-start">
                        Easy Ecom Integration With Shopify
                      </h3>
                      <div className="d-flex align-items-start justify-content-between">
                        <p className="menuText mb-0">
                          Streamline inventory and order management with Easy
                          Ecom integration on Shopify
                        </p>
                        <div className="nav_image">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480203_omwokg.webp"
                            alt=""
                            width={1000}
                            className="integration_cross_logo"
                            height={500}
                            style={{
                              width: "60px",
                              height: "auto",
                              objectFit: "cover",
                              marginRight: "10px "
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>}
              {currentRoute === "/increff"
                ? ""
                : <div
                  className="col-lg-4 col-md-6 col-sm-8 mb-3"
                >
                  <Link className="menuLink" href="/increff">
                    <div className="menuInner b2b-lightBlue-bg erp-before">
                      <h3 className="b2b-title-text text-black d-flex align-items-start">
                        Increff Integration With Shopify
                      </h3>
                      <div className="d-flex align-items-start justify-content-between">
                        <p className="menuText mb-0">
                          Enhance inventory control with Increff integration
                          for Shopify
                        </p>
                        <div className="nav_image">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480192_wmpgit.webp"
                            alt=""
                            width={1000}
                            className="integration_cross_logo"
                            height={500}
                            style={{
                              width: "60px",
                              height: "auto",
                              objectFit: "cover",
                              marginRight: "10px "
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>}
              {currentRoute === "/custom-recharge"
                ? ""
                : <div
                  className="col-lg-4 col-md-6 col-sm-8 mb-3"
                >
                  <Link className="menuLink" href="/custom-recharge">
                    <div className="menuInner b2b-pink-bg erp-before">
                      <h3 className="b2b-title-text text-black d-flex align-items-start">
                        Custom Recharge Integration With Hydrogen
                      </h3>
                      <div className="d-flex align-items-start justify-content-between">
                        <p className="menuText mb-0">
                          Create a responsive Shopify site with Hydrogen
                          recharge integration
                        </p>
                        <div className="nav_image">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480201_r3dn6i.webp"
                            alt=""
                            width={1000}
                            className="integration_cross_logo"
                            height={500}
                            style={{
                              width: "60px",
                              height: "auto",
                              objectFit: "cover",
                              marginRight: "10px "
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>}
              {currentRoute === "/orderwise"
                ? ""
                : <div
                  className="col-lg-4 col-md-6 col-sm-8 mb-3"
                >
                  <Link className="menuLink" href="/orderwise">
                    <div className="menuInner b2b-lightBlue-bg erp-before">
                      <h3 className="b2b-title-text text-black d-flex align-items-start">
                        OrderWise Integration With Shopify
                      </h3>
                      <div className="d-flex align-items-start justify-content-between">
                        <p className="menuText mb-0">
                          Effortlessly manage inventory and orders with
                          OrderWise integration for Shopify.
                        </p>
                        <div className="nav_image">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480206_lf54ys.webp"
                            alt=""
                            width={1000}
                            className="integration_cross_logo"
                            height={500}
                            style={{
                              width: "60px",
                              height: "auto",
                              objectFit: "cover",
                              marginRight: "10px "
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
