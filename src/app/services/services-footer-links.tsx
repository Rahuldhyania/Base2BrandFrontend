"use client";
import "./services2.css"
import React from "react";
import { usePathname } from 'next/navigation';

export default function WebApplication() {

    const currentRoute = usePathname();
    console.log(currentRoute);
    return (
        <>
            <div className='container mb-md-5 mb-3 pt-5 '>
                <div className="row  justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center">
                            <h2 className='b2b-main-heading text-center mb-4 text-uppercase' data-aos="fade-up" data-aos-delay="300">Looking for Other Services?
                            </h2>

                        </div>
                        <p className="text-white text-center b2b-text mb-5" data-aos="fade-up" data-aos-delay="300">We&apos;re not just about mobile app development; we provide a comprehensive suite of IT solutions. From web development to digital marketing, our services encompass everything your business needs to thrive in the digital landscape</p>
                    </div>
                    <div className="col-lg-10">
                        <div className="row footer-menue justify-content-center">
                            {currentRoute === "/shopify" ? ('') : (
                                <div className="col-lg-4 col-md-6 col-sm-8 mb-3" data-aos="zoom-in-up" data-aos-delay="300">
                                    <a className="menuLink" href="/shopify">
                                        <div className=" b2b-pink-bg menuInner-gk">
                                            <h3 className='b2b-title-text text-black'>Shopify Development</h3>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <p className='menuText mb-0'>Create a user-friendly store </p>
                                                <span className='menuIcon pl-3'></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )}
                            {currentRoute === "/digital-marketing" ? ('') : (
                                <div className="col-lg-4 col-md-6 col-sm-8 mb-3" data-aos="zoom-in-up" data-aos-delay="300">
                                    <a className="menuLink" href="/digital-marketing">
                                        <div className=" b2b-lightBlue-bg menuInner-gk">
                                            <h3 className='b2b-title-text text-black'>Digital Marketing</h3>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <p className='menuText mb-0'>Implement a results-driven digital marketing strategy                                </p>
                                                <span className='menuIcon pl-3'></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )}
                            {currentRoute === "/graphic" ? ('') : (
                                <div className="col-lg-4 col-md-6 col-sm-8 mb-3" data-aos="zoom-in-up" data-aos-delay="300">
                                    <a className="menuLink" href="/graphic">
                                        <div className=" b2b-pink-bg menuInner-gk">
                                            <h3 className='b2b-title-text text-black'>Graphic &amp; UI/UX designing</h3>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <p className='menuText mb-0'>Designs that Enhances User Engagement</p>
                                                <span className='menuIcon pl-3'></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )}
                            {currentRoute === "/e-commerce" ? ('') : (
                                <div className="col-lg-4 col-md-6 col-sm-8 mb-3" data-aos="zoom-in-up" data-aos-delay="300">
                                    <a className="menuLink" href="/e-commerce">
                                        <div className=" b2b-lightBlue-bg menuInner-gk">
                                            <h3 className='b2b-title-text text-black'>Ecommerce</h3>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <p className='menuText mb-0'>Increase online sales seamlessly</p>
                                                <span className='menuIcon pl-3'></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )}
                            {currentRoute === "/web-application" ? ('') : (
                                <div className="col-lg-4 col-md-6 col-sm-8 mb-3" data-aos="zoom-in-up" data-aos-delay="300">
                                    <a className="menuLink" href="/web-application">
                                        <div className=" b2b-pink-bg menuInner-gk">
                                            <h3 className='b2b-title-text text-black'>Web Development</h3>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <p className='menuText mb-0'>Dynamic Website for Mobile Devices</p>
                                                <span className='menuIcon pl-3'></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )}
                            {currentRoute === "/app-development" ? ('') : (
                                <div className="col-lg-4 col-md-6 col-sm-8 mb-3" data-aos="zoom-in-up" data-aos-delay="300">
                                    <a className="menuLink" href="/app-development">
                                        <div className=" b2b-lightBlue-bg menuInner-gk">
                                            <h3 className='b2b-title-text text-black'>Mobile App Development</h3>
                                            <div className='d-flex align-items-center justify-content-between'>
                                                <p className='menuText mb-0'>Sales Friendly App for Your Business</p>
                                                <span className='menuIcon pl-3'></span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )}



                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

