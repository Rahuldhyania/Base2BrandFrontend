"use client";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

export default function Baofftrustserve() {
  return (
    <div className="main_baoff_trust">
      {/* Trust conatainer */}
      <div
        className="pt-5 pb-5 position-relative "
        style={{ background: "#111616", position: "relative" }}
      >
        <div className="b2b-container-lg pt-4 pb-4">
          <div className="floting_img trust_left_floting_img ">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_2_p6ehmq.png"
              alt=""
              width={1000}
              height={500}
            />
          </div>
          <div className="row">
            <div
              className="cus_gradient_baoff"
              style={{ width: "50%", height: "100%", left: "-10%" }}
            />

            <div className="col-12 col-lg-6 d-flex gradient_index">
              <div className="text_center">
                <h2 className="b2b-heading baoff_text_ph ">
                  <span className="b2b_2color handdrawn">
                    Secure and Reliable
                  </span>{" "}
                  <br />
                  Customer Support{" "}
                  <span className="b2b_voilet trust_title_img">
                    You <br />
                    Can Trust
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/018_rke6qq.png"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </span>
                </h2>

                <p className="b2b-text baoff_text pt-3">
                  We deliver{" "}
                  <span className="b2b_voilet">
                    responsive and efficient back office support
                  </span>{" "}
                  for small businesses while prioritizing your data’s security.
                  Our systems are designed to ensure complete data protection,
                  user privacy, and compliance with industry standards. From
                  handling customer queries to resolving technical issues,{" "}
                  <span className="b2b_voilet">
                    we maintain strict safeguards against data breaches—giving
                    you peace of mind with every interaction.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-12 col-lg-6 mt-4 mt-lg-0">
              <div className="trust_banner">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480424_c9npfi.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
            </div>
          </div>
          <div className="floting_img trust_right_floting_img ">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_2_1_newdrw.png"
              alt=""
              width={1000}
              height={500}
            />
          </div>
        </div>
      </div>
      {/* Industries We Serve container */}
      <div className="pt-5 pb-5 indus_card_1" style={{ background: "#111616" }}>
        <div className="cus_container">
          <div className="text-center">
            <h2 className="b2b-heading">
              Industries <span className="b2b_2color handdrawn">We Serve</span>
            </h2>
          </div>

          <div className="industries_container pt-5 pb-5">
            <div className="indus_row pt-2">
              <Marquee>
                {[
                  "eCommerce Stores",
                  "Hotels & Hospitality",
                  "Healthcare Clinics",
                  "Restaurants",
                  "Car Rentals",
                  "eCommerce Stores",
                  "Hotels & Hospitality",
                  "Healthcare Clinics",
                  "Restaurants",
                  "Car Rentals"
                ].map(item =>
                  <div className="indus_bar">
                    {item}
                  </div>
                )}
              </Marquee>
            </div>
            <div className="indus_row pt-2">
              <Marquee direction="right">
                {[
                  "Accounting Firms",
                  "Logistics & Delivery Services",
                  "Telecom Services",
                  "Data Entry Firms",
                  "Data Processing",
                  "Accounting Firms",
                  "Logistics & Delivery Services",
                  "Telecom Services",
                  "Data Entry Firms",
                  "Data Processing"
                ].map(item =>
                  <div className="indus_bar ">
                    {item}
                  </div>
                )}
              </Marquee>
            </div>
            <div className="indus_row pt-2">
              <Marquee>
                {[
                  "Wellness & Fitness Studios",
                  "Real Estate Agencies",
                  "Event & Ticketing Services",
                  "Salons & Spas",
                  "Movers & Packers",
                  "Wellness & Fitness Studios",
                  "Real Estate Agencies",
                  "Event & Ticketing Services",
                  "Salons & Spas",
                  "Movers & Packers"
                ].map(item =>
                  <div className="indus_bar">
                    {item}
                  </div>
                )}
              </Marquee>
            </div>
            <div className="indus_row pt-2">
              <Marquee direction="right">
                {[
                  "Professional Services (Law, HR, Consulting)",
                  "Online Learning Platforms",
                  "Home Services (Plumbers, Electricians)",
                  "Professional Services (Law, HR, Consulting)",
                  "Online Learning Platforms",
                  "Home Services (Plumbers, Electricians)"
                ].map(item =>
                  <div className="indus_bar">
                    {item}
                  </div>
                )}
              </Marquee>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5 pb-5 indus_card_2" style={{ background: "#111616" }}>
        <div className="cus_container w-100">
          <div className="text-center">
            <h2 className="b2b-heading">
              Industries <span className="b2b_2color handdrawn">We Serve</span>
            </h2>
          </div>

          <div className="industries_container pt-5 ">
            <div className="indus_row pt-2">
              <div>
                {[
                  "eCommerce Stores",
                  "Hotels & Hospitality",
                  "Healthcare Clinics",
                  "Restaurants",
                  "Car Rentals",
                  "Accounting Firms",
                  "Logistics & Delivery Services",
                  "Telecom Services",
                  "Data Entry Firms",
                  "Data Processing",
                  "Wellness & Fitness Studios",
                  "Real Estate Agencies",
                  "Event & Ticketing Services",
                  "Salons & Spas",
                  "Movers & Packers",
                  "Professional Services (Law, HR, Consulting)",
                  "Online Learning Platforms",
                  "Home Services (Plumbers, Electricians)"
                ].map(item =>
                  <div className="indus_bar col-sm-12 col-md-6">
                    {item}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
