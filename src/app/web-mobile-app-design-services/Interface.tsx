"use client";
import Image from "next/image";
import React from "react";

export default function Interface() {
  return (
    <div>
      <div className="interface_container position-relative">
        <div className="cus_container">
          <div className="row">
            <div className="col-12 col-lg-6 d-flex">
              <div className="m-auto">
                <div className="interface_child1 mt-xxl-4">
                  <h2 className="sm_skyblue">Design From Scratch</h2>
                  <p className="m-0 b2b-text mt-3 text_sm_gray">
                    Starting a new business or project? Our website design
                    services can help you create a custom-built, responsive
                    platform from the ground up. We focus on designing a site or
                    app that is as unique as your business.
                  </p>
                  <div className="mt-4 para_bar_white" />
                </div>
                <div className="interface_child1 mt-xxl-4">
                  <h2 className="sm_skyblue">Product Redesign</h2>
                  <p className="m-0 b2b-text mt-3 text_sm_gray">
                    If your current platform isn’t meeting your expectations or
                    engaging users effectively, our app design services and web
                    design services offer the perfect solution. We specialize in
                    revamping websites and mobile apps to make them more
                    visually appealing, user-friendly, and conversion-optimized.
                  </p>
                  <div className="mt-4 para_bar_white" />
                </div>
                <div className="interface_child1 mt-xxl-4">
                  <h2 className="sm_skyblue">Team Extension</h2>
                  <p className="m-0 b2b-text mt-3 text_sm_gray">
                    Got a project in progress and need extra resources? Our
                    mobile application design services are perfect for teams
                    that need additional design expertise. We integrate
                    seamlessly with your team to meet deadlines and deliver
                    top-notch designs.
                  </p>
                  <div className="mt-4 para_bar_white" />
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div>
                <Image
                  src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480919_2_g6usmp.webp"
                  alt="*"
                  width={10000}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className="black_sm_gradient_blue"
          style={{ height: "180px", bottom: "0px" }}
        />
      </div>
    </div>
  );
}
