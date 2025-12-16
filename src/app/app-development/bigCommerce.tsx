"use client";
import React, { useState } from "react";
import benefits from "../../../public/app/benefita-of-mobile-app.png";
import Big2 from "../../../public/app/social-media-marketing.png";
import Request from "../request-form";
import "./app.css";

export default function Big_Commerce() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="p-5 bg_light_green benefitOuterWrap" data-aos="fade-up">
        <div className="container">
          <div className="row text-white justify-content-center">
            <div className="col-md-12 mx-auto text-center">
              <div className="text-center">
                <h2
                  className="b2b-heading"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  Benefits of a Mobile App For Your Business{" "}
                </h2>
              
              </div>{" "}
            </div>
            <div className="col-md-4 mt-md-5 mt-0 order-md-1 order-2">
              <div className="benefit-wrap">
                <div
                  className="px-3 mt-md-0 mt-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h4 className="b2b-text-lg">1. Customer Engagement </h4>
                  <p className="b2b-text-sm letterSpacing-1 mb-0">
                    Mobile apps enable personalized notifications, promotions,
                    and feedback, fostering deeper engagement and understanding
                    of preferences, vital for refining products.
                  </p>
                </div>
                <div
                  className="px-3 mt-md-0 mt-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h4 className="b2b-text-lg">2. Brand Visibility</h4>
                  <p className="b2b-text-sm letterSpacing-1 mb-0">
                    Brand Visibility: Well-designed apps strengthen brand
                    recognition and recall, ensuring continuous visibility on
                    customers' screens, essential for staying competitive.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-md-5 mt-4 order-md-2 order-1">
              <img
                className="w-100"
                src={benefits.src}
                alt=""
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>

            <div className="col-md-4 mt-md-5 mt-0 order-md-3 order-3">
              <div className="benefit-wrap">
                <div
                  className="px-3 mt-md-0 mt-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h4 className="b2b-text-lg">3. Marketing Efforts</h4>
                  <p className="b2b-text-sm letterSpacing-1 text-md-start text-start mb-0">
                    Apps facilitate targeted campaigns through user data
                    analysis, tailoring promotions and offers to maximize
                    conversion rates and optimize ROI.
                  </p>
                </div>
                <div
                  className="px-3 mt-md-0 mt-4"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h4 className="b2b-text-lg">4. Customer Service</h4>
                  <p className="b2b-text-sm letterSpacing-1 text-md-start text-start mb-0">
                    Convenient platforms for support, offering features like
                    live chat and FAQs, enhance user experience, resolve issues
                    promptly, and foster long-term loyalty.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 mt-md-5 mt-0 order-md-4 order-4">
              <div
                className="p-3 pb-3 mt-md-0 mt-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h4 className="b2b-text-lg">5. Increased Sales</h4>
                <p className="b2b-text-sm letterSpacing-1">
                  Seamless purchasing experiences on mobile apps significantly
                  boost sales, providing convenient access to products or
                  services anytime, anywhere, driving revenue growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-lg-5 py-3 bg_light_green" data-aos="fade-up">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5 mb-md-0 mb-4">
              <img
                className="w-100"
                src={Big2.src}
                alt=""
                data-aos="fade-up"
                data-aos-delay="300"
              />
            </div>
            <div className="col-md-7 text-white">
              <h1
                className="b2b-heading mb-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Mobile App Development <br />
                Services We Offer
              </h1>
              <p
                className="b2b-text-sm letterSpacing-1"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Our mobile app development services cover iOS, Android, React
                Native, and Flutter platforms, offering versatile solutions. For
                iOS, we create sleek, user-friendly experiences optimized for
                Apple devices, incorporating the latest features. Similarly, our
                Android expertise ensures seamless performance across a wide
                range of devices. Additionally, we excel in React Native and
                Flutter for efficient cross-platform development and visually
                stunning apps
              </p>
            </div>
          </div>
        </div>
      </div>

      {showModal && <Request onCloseModal={toggleModal} />}
    </>
  );
}
