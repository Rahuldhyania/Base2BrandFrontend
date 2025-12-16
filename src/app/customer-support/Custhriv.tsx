"use client";
import Image from "next/image";
import React from "react";

export default function Custhriv() {
  return (
    <div>
      <div
        className="pt-5 pb-5 "
        style={{
          backgroundImage:
            "url(https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1_36_duibhj.webp)",
          position: "relative",
          backgroundRepeat: "round"
        }}
      >
        <div
          className="cus_gardient_upper"
          style={{
            height: "35%",
            top: "0"
          }}
        />
        <div className="container">
          <div className="text-center cus_text_zindex">
            <h2 className="b2b-partners-heading m-0 lh-sm" data-aos="fade-up">
              Why Base<span style={{ color: "rgb(243, 115, 53)" }}>2</span>Brand
              Thrive with Its
            </h2>
            <h2
              data-aos="fade-up"
              className="b2b-partners-heading lh-sm"
              style={{ color: "#7D9BFF" }}
            >
              Customer Support Service?
            </h2>
          </div>
          <div className="row pt-5 pb-4">
            <div className="col-12 col-sm-12 col-md-6 thrive_text_outer">
              <div className="thr_text">
                <div
                  className="procedure_inner procedure_inner_thr"
                  data-aos="fade-up"
                >
                  <div className="pro_img_thr">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480390_sdqu8v.png"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </div>
                  <div className="pro_text">
                    <h4
                      className="b2b-service-heading  m-0"
                      style={{ color: "#7D9BFF" }}
                    >
                      24/7 Support:
                    </h4>
                    <span className="" style={{ color: "#DBDBDB" }}>
                      Round-the-clock assistance whenever you need it.
                    </span>
                  </div>
                </div>
                <div
                  className="procedure_inner procedure_inner_thr"
                  data-aos="fade-up"
                >
                  <div className="pro_img_thr">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480389_pp55bp.png"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </div>
                  <div className="pro_text">
                    <h4
                      className="b2b-service-heading  m-0"
                      style={{ color: "#7D9BFF" }}
                    >
                      Expert Team:
                    </h4>
                    <span className="" style={{ color: "#DBDBDB" }}>
                      Highly skilled technicians who understand your business.
                    </span>
                  </div>
                </div>
                <div
                  className="procedure_inner procedure_inner_thr"
                  data-aos="fade-up"
                >
                  <div className="pro_img_thr">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480386_kmlbo5.png"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </div>
                  <div className="pro_text">
                    <h4
                      className="b2b-service-heading  m-0"
                      style={{ color: "#7D9BFF" }}
                    >
                      Seamless Integration:
                    </h4>
                    <span className="" style={{ color: "#DBDBDB" }}>
                      Seamless Integration: Support built into all our services.
                    </span>
                  </div>
                </div>
                <div
                  className="procedure_inner procedure_inner_thr m-lg-0"
                  data-aos="fade-up"
                >
                  <div className="pro_img_thr">
                    <Image
                      src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480384_oerw8s.png"
                      alt=""
                      width={1000}
                      height={500}
                    />
                  </div>
                  <div className="pro_text">
                    <h4
                      className="b2b-service-heading  m-0"
                      style={{ color: "#7D9BFF" }}
                    >
                      Personalized Approach:
                    </h4>
                    <span className="" style={{ color: "#DBDBDB" }}>
                      Tailored solutions designed for your business needs.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6">
              <div className="thrive_banner" data-aos="fade-up">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42930_pcplye.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="cus_gardient_lower"
          style={{
            height: "25%",
            bottom: "0"
          }}
        />
      </div>
      <div className="pt-5 pb-5" style={{ background: "rgb(0, 0, 0)" }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-12 col-md-6">
              <div className="touch_banner" data-aos="fade-up">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_1_m2c0qj.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
            </div>
            <div className="col-12 col-sm-12 col-md-6 d-flex align-items-center justify-content-center">
              <div className="tuch_text_con">
                <h2
                  data-aos="fade-up"
                  className="s_card_title_tuch p-0 m-0"
                  style={{ color: "#7D9BFF" }}
                >
                  Get in Touch
                </h2>
                <h2
                  className="s_card_title_tuch text-white p-0 m-0"
                  data-aos="fade-up"
                >
                  With Us Today!
                </h2>

                <p
                  className="b2b-text s_card_para_tuch m-0 pt-3"
                  data-aos="fade-up"
                >
                  At Base2Brand, we’re here to help you succeed. <br /> Reach
                  out to our customer support team for any <br /> IT assistance
                  or questions. With Base2Brand,<br /> your IT needs are in the
                  best hands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
