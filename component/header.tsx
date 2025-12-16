"use client";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import "./footer.css";
import "./header.css";
import "aos/dist/aos.css";
import AOS from "aos";
import { AppStateContext } from "../src/app/context/AppStateContext";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import logo from "../public/img/logo.png";
export default function Header() {
  const currentRoute = usePathname();
  const { setBlogsRoute } = useContext(AppStateContext);

  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });
  }, []);

  const blogsLoad = e => {
    setBlogsRoute(true); // Your logic to set the route
  };
  return (
    <header>
      {/* <div className='top-header bg-dark pl-4 pr-4 pt-1 pb-1'>
  <div className="d-flex flex-wrap align-items-center justify-content-end contact-num">
        <a href="tel:+91-836-011-6967" className="text-orange text-white font-semibold hover:text-white text-decoration-none py-2 px-4">
        India:- +91-836-011-6967</a> 
        <a href="tel:+1-416-879-2244" className="text-orange text-white font-semibold hover:text-white text-decoration-none py-2 px-4">
        Canada:- +1 (416) 879-2244</a> 
    </div>
            
  </div> */}

      <nav className="navbar navbar-expand-xl pt-4 pb-4 ps-3 pe-3 position-relative">
        <div className="container-fluid">
          <Link href="/" className="flex items-center navbar-brand pt-0">
            {/* <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo_zqvf04_1.webp?v=1761903096"
              width="299"
              height="53"
              className="responsive-image"
              alt="Sample Cloudinary Image"
              crop="fill"
              quality="auto"
              style={{ maxWidth: "299px" }}
            /> */}
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/logo.e9cf2080_1_egmydg.png"
              width={1000}
              height={500}
              // className="responsive-image"
              decoding="async"
              alt="Sample Cloudinary Image"
              style={{ maxWidth: "299px" }}
            />
          </Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="collapsibleNavbar"
          >
            <ul className="navbar-nav main-menu align-items-center d-flex flex-wrap Header_link">
              {/* Home */}
              <li>
                <Link
                  href="/"
                  className={
                    currentRoute === "/"
                      ? "active  py-2 px-1 "
                      : "block py-2 px-1"
                  }
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              {/* About Us */}
              <li className="dropdown">
                <Link
                  href="/about"
                  className={
                    currentRoute === "/about"
                      ? "active  py-2 px-1 dropdown-toggle"
                      : "dropdown-toggle block py-2 px-1"
                  }
                >
                  About Us
                </Link>
                <ul className="dropdown-menu ph_align_drop">
                  <li className="mega-menu">
                    <div className="row justify-content-center">
                      <div className="col-lg-3 mb-3">
                        <Link href="/about">
                          <div className="menuInner b2b-lightBlue-bg">
                            <h3 className="b2b-title-text text-black">
                              About Us
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                We are super efficient and humble to serve you
                              </p>
                              <span className="menuIcon pl-3" />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/team">
                          <div className="menuInner b2b-pink-bg">
                            <h3 className="b2b-title-text text-black">Team</h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                We are proud of our experienced and accomplished
                                team!
                              </p>
                              <span className="menuIcon pl-3" />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/career">
                          <div className="menuInner b2b-lightBlue-bg">
                            <h3 className="b2b-title-text text-black">
                              Career
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Check Latest Vacancies
                              </p>
                              <span className="menuIcon pl-3" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              {/* Services */}
              <li className="dropdown">
                <Link
                  href="/services"
                  className={
                    currentRoute === "/services"
                      ? "active  py-2 px-1 dropdown-toggle"
                      : "dropdown-toggle block py-2 px-1"
                  }
                >
                  Services
                </Link>

                <ul className="dropdown-menu ph_align_drop">
                  <li className="mega-menu">
                    <div className="row justify-content-center">
                      <div className="col-lg-3 mb-3">
                        <a href="/hire-shopify-developers">
                          <div className="menuInner b2b-pink-bg">
                            <h3 className="b2b-title-text text-black">
                              Shopify Development
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Create a user-friendly store
                              </p>
                              <span className="menuIcon pl-3" />
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/digital-marketing">
                          <div className="menuInner b2b-lightBlue-bg">
                            <h3 className="b2b-title-text text-black">
                              Digital Marketing
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Implement a results-driven digital marketing
                                strategy
                              </p>
                              <span className="menuIcon pl-3" />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/ui-ux-services">
                          <div className="menuInner b2b-pink-bg">
                            <h3 className="b2b-title-text text-black">
                              Graphic &amp; UI/UX Services
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Creating Visual Solutions
                              </p>
                              <span className="menuIcon pl-3" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-3 mb-3">
                        <Link href="/e-commerce">
                          <div className="menuInner b2b-lightBlue-bg">
                            <h3 className="b2b-title-text text-black">
                              Ecommerce
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Increase online sales seamlessly
                              </p>
                              <span className="menuIcon pl-3" />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/web-application">
                          <div className="menuInner b2b-pink-bg">
                            <h3 className="b2b-title-text text-black">
                              Web Development
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Develop a modern, responsive website
                              </p>
                              <span className="menuIcon pl-3" />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/app-development">
                          <div className="menuInner b2b-lightBlue-bg">
                            <h3 className="b2b-title-text text-black">
                              Mobile App Development
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Innovative apps for mobile devices
                              </p>
                              <span className="menuIcon pl-3" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-3 mb-3">
                        <a href="/devops-services">
                          <div className="menuInner b2b-pink-bg">
                            <h3 className="b2b-title-text text-black">
                              DevOps Services
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Seamless Deployment and Scalable Infrastructure
                                Solutions.
                              </p>
                              <span className="menuIcon pl-3" />
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <a href="/ai-services">
                          <div className="menuInner b2b-lightBlue-bg ">
                            <h3 className="b2b-title-text text-black">
                              AI Services
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Innovative AI Solutions for Smarter Business.
                              </p>
                              <span className="menuIcon pl-3" />
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/back-office-services">
                          <div className="menuInner b2b-pink-bg">
                            <h3 className="b2b-title-text text-black">
                              Back Office Services
                            </h3>
                            <div className="d-flex align-items-center justify-content-between">
                              <p className="menuText mb-0">
                                Smart Back Office Support for Smarter Businesses
                              </p>
                              <span className="menuIcon pl-3" />
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </li>
              {/* Portfolio */}
              <li>
                <Link
                  href="/portfolio"
                  className={
                    currentRoute === "/portfolio"
                      ? "active  py-2 px-1 "
                      : "block py-2 px-1"
                  }
                >
                  Portfolio
                </Link>
              </li>
              {/* Case Study */}
              <li>
                <Link
                  href="/case-study"
                  className={
                    currentRoute === "/case-study"
                      ? "active  py-2 px-1 "
                      : "block py-2 px-1"
                  }
                >
                  Case Study
                </Link>
              </li>
              {/* ERP Integration */}
              <li className="dropdown">
                <Link
                  href="/erp-integration"
                  className={
                    currentRoute === "/erp-integration"
                      ? "active  py-2 px-1 dropdown-toggle"
                      : "dropdown-toggle block py-2 px-1"
                  }
                >
                  ERP Integration
                </Link>
                <ul className="dropdown-menu ph_align_drop">
                  <li className="mega-menu">
                    <div className="row justify-content-center">
                      <div className="col-lg-3 mb-3">
                        <Link href="/uni-commerce">
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
                                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480204_bdtz0u.webp"
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
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/odoo">
                          <div className="menuInner b2b-lightBlue-bg erp-before">
                            <h3 className="b2b-title-text text-black d-flex align-items-start">
                              Odoo Integration With Shopify
                            </h3>
                            <div className="d-flex align-items-start justify-content-between">
                              <p className="menuText mb-0">
                                Optimize inventory and business operations with
                                Odoo and Shopify integration
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
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/easy-ecom">
                          <div className="menuInner b2b-pink-bg erp-before">
                            <h3 className="b2b-title-text text-black d-flex align-items-start">
                              Easy Ecom Integration With Shopify
                            </h3>
                            <div className="d-flex align-items-start justify-content-between">
                              <p className="menuText mb-0">
                                Streamline inventory and order management with
                                Easy Ecom integration on Shopify
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
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-lg-3 mb-3">
                        <Link href="/increff">
                          <div className="menuInner b2b-lightBlue-bg erp-before">
                            <h3 className="b2b-title-text text-black d-flex align-items-start">
                              Increff Integration With Shopify
                            </h3>
                            <div className="d-flex align-items-start justify-content-between">
                              <p className="menuText mb-0">
                                Enhance inventory control with Increff
                                integration for Shopify
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
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/custom-recharge">
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
                      </div>
                      <div className="col-lg-3 mb-3">
                        <Link href="/orderwise">
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
                      </div>
                    </div>
                  </li>
                </ul>
              </li>

              <li className="d-block d-xl-none">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-wrap align-items-center contact-num">
            <ul className="navbar-nav align-items-center d-flex flex-wrap Header_link">
              <li className="menuBtn">
                {/* <a href="/contact-us"><span>Contact</span></a> */}
                <Link href="/contact-us">
                  <span>Contact</span>
                </Link>
              </li>
              <li className="dropdown iconHover">
                <div className="call_number_drop">
                  <Image
                    className="call_icon"
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/call1_pkhomy.png"
                    width="42"
                    height="42"
                    alt="Call image"
                    // crop="fill"
                    // quality="auto"
                    style={{ maxWidth: "42px" }}
                  />
                </div>
                <ul className="dropdown-menu dropdown-menu-right ph_align_drop">
                  <li className="mega-menu">
                    <Link href="">
                      <div className="menuInner b2b-blue-bg">
                        <div className="phoneMenuIcon">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/phone_n2jqo5.svg"
                            alt=""
                            width="22"
                            // quality="auto"
                            height="25"
                            style={{ maxWidth: "22px" }}
                          />
                        </div>
                        <h4 className="b2b-title-text text-white">
                          Let&apos;s Connect with Base2brand Team
                        </h4>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu">
                    <div className="menuInner border-bottom pt-3">
                      <div className="phoneMenuIcon" />
                      <h4 className="b2b-title-text text-white text-uppercase">
                        for sales inquiry
                      </h4>
                    </div>
                  </li>
                  <li className="mega-menu">
                    <Link href="tel:+919872487850">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/india_mvji31.svg"
                            alt=""
                            width="24"
                            // quality="auto"
                            height="18"
                            style={{ maxWidth: "24px" }}
                          />
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          +91 (987) 248 7850
                        </h3>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu">
                    <Link href="mailto:tech@base2brand.com ">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/mail_bqrib5.svg"
                            alt=""
                            width="22"
                            height="16"
                            // quality="auto"
                            style={{ maxWidth: "22px" }}
                          />
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          tech@base2brand.com
                        </h3>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu">
                    <div className="menuInner border-bottom pt-3">
                      <div className="phoneMenuIcon" />
                      <h4 className="b2b-title-text text-white text-uppercase">
                        for quick connect :
                      </h4>
                    </div>
                  </li>
                  <li className="mega-menu">
                    <Link href="https://wa.me/919041700209">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/whatsapp_audnqw.svg"
                            alt=""
                            width="25"
                            height="25"
                            // quality="auto"
                            style={{ maxWidth: "25px" }}
                          />
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          +91 (904) 1700209
                        </h3>
                      </div>
                    </Link>
                  </li>
                  {/* <li className='mega-menu'>
            
              <div className="menuInner border-bottom pt-3">
                <div className='phoneMenuIcon'></div>
                  <h3 className='b2b-title-text text-white text-uppercase'>others</h3>
              </div>
            
            </li> */}
                  <li className="mega-menu">
                    <Link href="tel:+17209035933">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/usa_ocqrxt.svg"
                            alt=""
                            width="28"
                            height="28"
                            style={{ maxWidth: "28px" }}
                          // quality="auto"
                          />
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          +1 (720) 9035933
                        </h3>
                      </div>
                    </Link>
                  </li>
                  <li className="mega-menu">
                    <Link href="tel:+0047448435973">
                      <div className="menuInner align-items-center">
                        <div className="phoneMenuIcon">
                          <Image
                            src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/uk_oupvdx.svg"
                            alt=""
                            width="28"
                            height="28"
                            style={{ maxWidth: "28px" }}
                          // quality="auto"
                          />
                        </div>
                        <h3 className="b2b-sub-text-gk text-white">
                          + (0044) 7448435973
                        </h3>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
