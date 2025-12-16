"use client";

import Image from "next/image";
import React from "react";

export default function Uiuxgrow() {
  return (
    <div className="bg_blue_right">
      <div className="cus_container_con pt-5 pb-5">
        <h2 className="cool_subheading_text2 text-white text-center">
          UI/UX That Grows Your Brand <br />
          <span className="ui_skyblue"> —Here’s Why We’re the One.</span>
        </h2>
        <div className="row">
          <div className="col-12 col-lg-6 d-flex mt-4 mt-lg-0">
            <div
              className="accordion accordion-flush w_grow_faqs_con"
              style={{ margin: "auto 0" }}
              id="accordionFlushExample"
            >
              <div className="accordion-item border-0 mt-3 grow_faqs bg-white">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button
                    className="accordion-button pb_ui_faqupper"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="true"
                    aria-controls="flush-collapseOne"
                  >
                    <h5 className="ui_blue_text grow_faq_title">
                      1. User-Centered Approach
                    </h5>
                  </button>
                </h2>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body pt_ui_faqupper">
                    <span className="b2b-text text-black">
                      We prioritize your users by designing interfaces that are
                      intuitive, functional, and focused on delivering a
                      seamless and enjoyable digital experience.
                    </span>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 mt-3 grow_faqs">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button
                    className="accordion-button collapsed pb_ui_faqupper"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    <h5 className="ui_blue_text grow_faq_title">
                      2. Cross-Device Compatibility
                    </h5>
                  </button>
                </h2>
                <div
                  id="flush-collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body pt_ui_faqupper">
                    <span className="b2b-text text-black">
                      We ensure your design looks and functions flawlessly
                      across all devices—mobiles, tablets, and
                      desktops—enhancing user satisfaction and performance
                      everywhere.
                    </span>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 mt-3 grow_faqs">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button
                    className="accordion-button collapsed pb_ui_faqupper"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    <h5 className="ui_blue_text grow_faq_title">
                      3. Industry-Leading Tools and Techniques
                    </h5>
                  </button>
                </h2>
                <div
                  id="flush-collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body pt_ui_faqupper">
                    <span className="b2b-text text-black">
                      Using tools like Figma, Adobe XD, and Photoshop, we create
                      high-quality, responsive designs with smooth interactions
                      and consistent branding throughout.
                    </span>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 mt-3 grow_faqs">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button
                    className="accordion-button collapsed pb_ui_faqupper"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    <h5 className="ui_blue_text grow_faq_title">
                      4. Creative and Modern Aesthetics
                    </h5>
                  </button>
                </h2>
                <div
                  id="flush-collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body pt_ui_faqupper">
                    <span className="b2b-text text-black">
                      Our designs are visually appealing, on-trend, and tailored
                      to reflect your brand identity while engaging users across
                      all digital platforms effectively.
                    </span>
                  </div>
                </div>
              </div>
              <div className="accordion-item border-0 mt-3 grow_faqs">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button
                    className="accordion-button collapsed pb_ui_faqupper"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFive"
                    aria-expanded="false"
                    aria-controls="flush-collapseFive"
                  >
                    <h5 className="ui_blue_text grow_faq_title">
                      5. Collaborative and Transparent Process
                    </h5>
                  </button>
                </h2>
                <div
                  id="flush-collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body pt_ui_faqupper">
                    <span className="b2b-text text-black">
                      From discovery to delivery, we maintain open
                      communication, incorporating your feedback at every stage
                      to achieve designs that truly represent your vision.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 d-flex mt-4 mt-lg-0">
            <Image
              src="https://cdn.shopify.com/s/files/1/0835/6334/8002/files/Group_1707480836_ahqts2.png"
              alt=""
              width={1000}
              height={500}
              className="w-100 w-xl-auto m-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
