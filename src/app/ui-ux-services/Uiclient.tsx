"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
const client_data = [
  {
    id: 1,
    cli_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/67d0940379152e3cad133ae9_17716fbbceac2d4b8f30ed45bd32b3d2_review-img-04.svg_kkgmjq.png",
    cli_name: "Guy Hawkins",
    cli_deg: "Business Coach",
    cusreview:
      "The team did a phenomenal job with our brand identity design. The logo and branding mockups were spot-on. Our business has never looked better! The team did a phenomenal job with our brand identity design. The logo and branding mockups were spot-on. Our business has never looked better!"
  },
  {
    id: 2,
    cli_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_35_bqs6wa.png",
    cli_name: "Amanda Peterson",
    cli_deg: "CEO",
    cusreview:
      "Their brand identity mockup was stunning and incredibly detailed. The process was seamless, and the results perfectly captured our brand's essence. Fantastic team to work with! Their creativity, professionalism, and attention to detail made the entire experience effortless. They truly understand how to craft a strong visual identity that resonates with audiences. Highly recommended! From concept to delivery, their branding design services were exceptional. "
  },
  {
    id: 3,
    cli_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_36_aqkgvb.png",
    cli_name: "Tupac Shakur",
    cli_deg: "Entrepreneur",
    cusreview:
      "From concept to delivery, their branding design services were exceptional. The identity design they created has transformed how customers perceive our business. Highly recommended!"
  },
  {
    id: 4,
    cli_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_37_q8dpxu.png",
    cli_name: "Aiden Markram",
    cli_deg: "Business Man",
    cusreview:
      "The team did a phenomenal job with our brand identity design. The logo and branding mockups were spot-on. Our business has never looked better! The team did a phenomenal job with our brand identity design. The logo and branding mockups were spot-on. Our business has never looked better!"
  },
  {
    id: 5,
    cli_img:
      "https://cdn.shopify.com/s/files/1/0835/6334/8002/files/image_38_mrj33y.png",
    cli_name: "Kusal Mendis",
    cli_deg: "Entrepreneur",
    cusreview:
      "From concept to delivery, their branding design services were exceptional. The identity design they created has transformed how customers perceive our business. Highly recommended!"
  }
];
export default function Uiclient() {
  return (
    <div className="ui_bg pt-5 pb-5">
      <div className="client_sec cus_container_con">
        <div className="cus_container_con">
          <div className="ui_clinet_border pt-5 pb-5 position-relative">
            <span className="clinet_floting_img clinet_floting_img_left">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_58_zclzxq.png"
                alt=""
                width={1000}
                height={500}
              />
            </span>
            <h2 className="h2 b2b-heading text-center">
              Success Stories from <br />
              <span className="ui_skyblue">
                {" "}<span>
                  <Image
                    src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Misc_04_hzkuau.svg"
                    alt=""
                    width={1000}
                    height={500}
                    style={{ width: "58px" }}
                  />
                </span>{" "}
                Our Happy Clients
              </span>
            </h2>
            <div className="clinet_slider pt-2 pb-2">
              <Swiper
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false
                }}
                speed={1000}
                modules={[Autoplay, Pagination, Navigation]}
                slidesPerView={1}
                pagination={true}
              //   navigation={true}
              >
                {client_data.map((data, index) =>
                  <SwiperSlide key={index}>
                    <div className="client_ui_container pb-5">
                      <div className="ui_clinet_rating pt-1">
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/rate-container_noqyiq.png"
                          alt=""
                          width={1000}
                          height={500}
                        />
                      </div>
                      <div className="ui_clinet_msg pt-4">
                        <p className="m-0 b2b-text">
                          {data.cusreview}
                        </p>
                      </div>
                      <div className="ui_clinet_info mt-4">
                        <Image
                          src={data.cli_img}
                          alt=""
                          width={1000}
                          height={500}
                        />
                        <div className="ui_name_deg">
                          <p className="m-0 ui_clinet_name">
                            {data.cli_name}
                          </p>
                          <span className="">
                            {data.cli_deg}
                          </span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
            <span className="clinet_floting_img clinet_floting_img_right">
              <Image
                src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_58_zclzxq.png"
                alt=""
                width={1000}
                height={500}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
