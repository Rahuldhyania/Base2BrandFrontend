"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Motion3d from "./Motion3d";
import Videocard from "./Videocard";
import Image from "next/image";

export default function Creative() {
  return (
    <div style={{ background: "#111616" }}>
      <div className="overflow-hidden position-relative creative_marquee_con_outer">
        <Image
          src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480969_2_smrrud.webp"
          alt=""
          width={10000}
          height={500}
        />
        <div className="creative_marquee_con">
          <div className="main_creative_marquee">
            <Marquee>
              <div className="creative_marquee">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480966_6_x1wkug.png"
                  alt=""
                  width={10000}
                  height={500}
                />
              </div>
              <div className="creative_marquee">
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480966_6_x1wkug.png"
                  alt=""
                  width={10000}
                  height={500}
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
      <Videocard />
      <Motion3d />
      <div className="pt-5 pb-md-5">
        <div className="text-center">
          <h2 className="cool_subheading_text2 text-white px-md-1 px-5">
            Motion Graphics Design <br />{" "}
            <span className="sm_skyblue"> Services We Offer</span>
          </h2>
        </div>
        <div className="graphic_offer_card pt-md-5 pt-3">
          <div className="graphic_offer graphic_offer_gray border_dash_top pt-5 pb-5">
            <div className="cus_container">
              <h2 className="b2b-heading font_400 sm_orange">1. Motion Ads</h2>
              <p className="b2b-text">
                Grab attention instantly with captivating motion ads. Our motion
                graphics designers ensure your ad stands out, boosting brand{" "}
                <br />
                visibility and engagement.
              </p>
            </div>
          </div>
          <div className="graphic_offer graphic_offer_black border_dash_top pt-5 pb-5">
            <div className="cus_container text-end">
              <h2 className="b2b-heading font_400 sm_orange">
                2. Custom Motion Graphics
              </h2>
              <p className="b2b-text">
                Get tailored motion graphics design services that align with
                your brand identity. We transform your vision into custom <br />{" "}
                animations that leave a lasting impact.
              </p>
            </div>
          </div>
          <div className="graphic_offer graphic_offer_gray border_dash_top pt-5 pb-5">
            <div className="cus_container">
              <h2 className="b2b-heading font_400 sm_orange">
                3. Animated Videos
              </h2>
              <p className="b2b-text">
                Our motion graphics animation services deliver professional,
                high-quality animated videos. Engage your audience with
                <br /> compelling storytelling and stunning visuals.
              </p>
            </div>
          </div>
          <div className="graphic_offer graphic_offer_black border_dash_top  pt-5 pb-5">
            <div className="cus_container text-end">
              <h2 className="b2b-heading font_400 sm_orange">
                4. Product Animation
              </h2>
              <p className="b2b-text">
                Showcase your products like never before. Our motion graphics
                designers create detailed product animations that highlight
                <br /> features and drive conversions.
              </p>
            </div>
          </div>
          <div className="graphic_offer graphic_offer_gray border_dash_top  pt-5 pb-5">
            <div className="cus_container text-start">
              <h2 className="b2b-heading font_400 sm_orange">
                5. UI/UX Animation
              </h2>
              <p className="b2b-text">
                Enhance user experience with seamless UI/UX motion graphic
                design. We specialize in intuitive animations <br /> that bring
                interfaces to life.
              </p>
            </div>
          </div>
          <div className="graphic_offer graphic_offer_black border_dash_top border_dash_bottom pt-5 pb-5">
            <div className="cus_container text-end">
              <h2 className="b2b-heading font_400 sm_orange">
                6. Animated Presentation
              </h2>
              <p className="b2b-text">
                Transform ordinary presentations into extraordinary ones. With
                our motion graphics services, we create visually engaging slides
                that captivate audiences <br /> and deliver your message
                effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
