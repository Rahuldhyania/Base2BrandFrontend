"use client";
import Image from "next/image";
import React from "react";

export default function Baoffsec2() {
  return (
    <div className="pt-5 pb-5 text_center_cus" style={{ background: "#231c41", position: "relative", overflow: "hidden" }}>
      <div className="section2_bg_images"></div>
      <div className="b2b-container-lg images_container_index">
        <div className="row">
          <div className="cus_gradient_baoff" style={{ width: "50%", height: "100%", left: "-10%" }}></div>
          <div className="col-12 col-lg-6">
            <h2 className="b2b-heading baoff_text_ph">
              Base<span className="b2b_2color">2</span>Brand – Your
              <span className="b2b_voilet"> Trusted </span> <br />
              Partner for{" "}
              <span className="b2b_2color trust_title_img ">
                Back Office <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707479210_orc90e_1.png"
                  alt=""
                  width={1000}
                  height={500}
                />
                <br /> <span className="handdrawn">Support Services</span>
              </span>
            </h2>
            <p className="m-0 b2b-text pt-3 baoff_text">
              Running a business is no small task. Whether you’re managing
              orders in a bustling restaurant, handling bookings for a car
              rental service, or juggling client queries in an accounting
              firm—back office service desk is a mission-critical operation that
              can’t be ignored. Yet, for many businesses, managing back office
              operations becomes overwhelming.
            </p>
          </div>
          <div className="col-12 col-lg-6 mt-4 mt-lg-0 ">
            <div className="baoff_sec2_banner">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Hero_main_image_qsdejd.webp"
                alt=""
                width={1000}
                height={500}
              />
            </div>
            <div className="baoff_banner2_bar pt-4">
              <div className="baoff_bar2 b2b-sub-text baoff_text">
                That’s where Base<span className="b2b_2color">2</span>Brand
                steps in
              </div>
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Vector_1_xn7g2c.png"
                alt=""
                width={1000}
                height={500}
              />
            </div>
          </div>
        </div>

        {/* Back Office Customer Support  */}
        <div className="baoff_cus_sup_left_img"></div>
        <div className="pt-5">
          <div className="">
            <div className="text-center">
              <h2 className="b2b-heading baoff_text_ph">
                <span className="b2b_2color handdrawn">
                  Back Office Customer Support
                </span> <br /> {" "} That  {" "}

                <span className="b2b_voilet">
                  Listens, Solves,
                </span> and <br />
                <span className="b2b_voilet"> Delivers</span>
              </h2>

              <div className="pt-3">
                <p className="baoff_text b2b-text">
                  At{" "}
                  <span className="text-white">
                    Base<span className="b2b_2color">2</span>Brand
                  </span>, we provide back office support services tailored for
                  busy industries like <br /> restaurants, enterprises, car
                  rentals,  accounting firms and more.{" "}
                  <span className="b2b_voilet">
                    Our goal is simple: Let you focus <br /> on running your
                    business while we professionally manage your customers.
                  </span>
                </p>
                <p className="baoff_text b2b-text">
                  Using powerful <span className="b2b_voilet">CRM</span>{" "}
                  software, help desk, ticketing software, trained staff, and a
                  commitment <br /> to excellence, we offer seamless support for
                  your{" "}
                  <span className="b2b_voilet">
                    sales, orders, and customer <br /> queries,
                  </span>
                  so nothing falls through the cracks.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="baoff_cus_sup_right_img"></div>

      </div>
    </div>
  );
}
