"use client";
import Image from "next/image";
import React from "react";

export default function Reviewbar() {
  return (
    <div
      className="pt-5 pb-5"
      style={{
        background:
          "linear-gradient(84deg, rgb(0, 0, 0) 5%, rgb(34, 24, 83) 91%)"
      }}
    >
      <div className="container">
        <div className="row seo_bar">
          <div className="col-6 col-md-6 col-xl-4 mt-4 d-flex justify-content-center">
            <div
              className="review_bar"
              data-aos="fade-up"
              data-aos-duration="600"
            >
              <div className="review_title">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Google_2015_logo.svg_1_giidj3.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
              <div className="review_rating">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480822_m41uuf.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
              <div className="text-center">
                <span className="dev_choose_t1 text-white">80+ Reviews</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-xl-4 mt-4 d-flex justify-content-center">
            <div
              className="review_bar"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div className="review_title">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/clutch-logo-2D745B01F0-seeklogo_1_ydvvaf.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
              <div className="review_rating">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480822_m41uuf.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
              <div className="text-center">
                <span className="dev_choose_t1 text-white">74+ Reviews</span>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-6 col-xl-4 mt-4 d-flex justify-content-center">
            <div
              className="review_bar"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="review_title">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Google_2015_logo.svg_1_giidj3.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
              <div className="review_rating">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480822_m41uuf.png"
                  alt=""
                  width={1000}
                  height={500}
                />
              </div>
              <div className="text-center">
                <span className="dev_choose_t1 text-white">80+ Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
