"use client";
import React from "react";
import CountUp, { useCountUp } from "react-countup";
import Blinkingstart from "@/Newcomponents/Blinkingstart";
import Splittext from "./Splittext";
// import HalfRoundedImageList from "./Bannerimagelist";
import CircularIcons from "./CircularIcons";
import Image from "next/image";
// const overalldata = [
//   {
//     number: 5,
//     title_text: "Years of Experience"
//   },
//   {
//     number: 250,
//     title_text: "Successful Project"
//   },
//   {
//     number: 4.9,
//     title_text: "Ratings on Clutch"
//   },
//   {
//     number: 150,
//     title_text: "Happy Client"
//   },
//   {
//     number: 100,
//     title_text: "Website Designed"
//   }
// ];
export default function Mainbanner() {
  useCountUp({
    ref: "counter",
    enableScrollSpy: true,
    scrollSpyDelay: 2000,
    end: 0
  });

  return (
    <div className="new_bg_black position-relative main_hedareouter">
      <div
        style={{
          backgroundImage:
            "url(https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481097_tfhimc.png)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="pb-5 main_hedareinner"
      >
        <div className="main_banner_outer">
          <div className="new_cus_container">
            <div className="row">
              <div className="col-12 col-xl-8">
                <div>
                  <h1 className="main_header_text text-white gradient_text">
                    {/*  <span className="">
                      <Splittext
                        text="DESIGN. BUILD. BRAND."
                        duration={1.0}
                        className="text-white"
                      />
                    </span>{" "}
                    <Splittext duration={1.2} text="BREAKTHOUGH." /> */}
                    DESIGN. BUILD. BRAND.
                    <br />
                    BREAKTHOUGH.
                  </h1>
                  <p className="new_subtitle text-white">
                    From pixels to products, we shape brands <br /> that stand
                    out.
                  </p>
                  <div className="d-flex align-items-center behance_outer_contianer">
                    <div className="behance_outer">
                      <div className="d-flex align-items-center justify-content-center gap-4 pb-2">
                        <p className="text-white new_subtitle m-0">Behance</p>
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707481111_kjw8vv.png"
                          width={1000}
                          height={500}
                          alt=""
                          className="behance_arrow"
                        />
                      </div>
                      <div>
                        <Image
                          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Rectangle_42559_rf7sgp.png"
                          width={1000}
                          height={500}
                          alt=""
                          className="portfolio_image"
                        />
                      </div>
                    </div>
                    {/* <div>
                      <div className="row justify-content-center overall_rating">
                        {overalldata.map((data, index) =>
                          <div
                            className="col-12 col-lg-6 col-xl-4 text-center mt-4"
                            key={index}
                          >
                            <span
                              className="new_subtitle_xl text-white new_banner_count"
                              style={{ fontWeight: "319" }}
                            >
                              <CountUp end={data.number} enableScrollSpy /> +
                            </span>
                            <p className="text-white b2b-text">
                              {data.title_text}
                            </p>
                          </div>
                        )}
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-4">
                <Image
                  data-aos="zoom-in"
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/mockup_screen_1_1_hjtzoh.png"
                  width={1000}
                  height={500}
                  alt=""
                  className="main_banner_image"
                />
                <CircularIcons />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="animated_start1">
        <Blinkingstart width="70px" height="70px" fadeInDelay={2000} />
      </div>
      <div className="animated_start2">
        <Blinkingstart width="60px" height="60px" fadeInDelay={4000} />
      </div>
      <div className="animated_start3">
        <Blinkingstart width="40px" height="40px" fadeInDelay={1500} />
      </div>
      <div className="animated_start4">
        <Blinkingstart width="80px" height="80px" fadeInDelay={2500} />
      </div>
      <div className="animated_start5">
        <Blinkingstart width="50px" height="50px" fadeInDelay={3000} />
      </div>
      <div className="animated_start6">
        <Blinkingstart width="50px" height="50px" fadeInDelay={3000} />
      </div>
    </div>
  );
}
